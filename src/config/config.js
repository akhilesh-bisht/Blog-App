const Conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

  appwriteProjectID: String(import.meta.env.VITE__APPWRITE_PROJECT_ID),

  appwriteDatabaseID: String(import.meta.env.VITE__APPWRITE_DATABASE_ID),

  appwriteCollectionID: String(import.meta.env.VITE__APPWRITE_COLLECTION_ID),

  appwriteBucketID: String(import.meta.env.VITE__APPWRITE_BUCKET_ID),
};

export default Conf;
