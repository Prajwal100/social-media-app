export default {
  app: {
    apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000",
    dev: process.env.NODE_ENV,
  },
};
