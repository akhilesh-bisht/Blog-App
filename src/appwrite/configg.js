import Conf from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(Conf.appwriteUrl)
      .setProject(Conf.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("eror cratepost ::", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("deletedatabse error::", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        Conf.appwriteDatabaseID,
        Conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  // file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        Conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(Conf.appwriteBucketID, fileId);
      return true;
    } catch (error) {
      console.log("file delete error::".error);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(Conf.appwriteBucketID, fileId);
  }
}

const service = new Service();

export default service;
