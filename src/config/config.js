const Conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

  appwriteProjectID: String(import.meta.env.VITE__PROJECT_ID),

  appwriteDatabaseID: String(import.meta.env.VITE__DATABASE_ID),

  appwriteCollectionID: String(import.meta.env.VITE__COLLECTION_ID),

  appwriteBucketID: String(import.meta.env.VITE__BUCKET_ID),
};

export default Conf;
