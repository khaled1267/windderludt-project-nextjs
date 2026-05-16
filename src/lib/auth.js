
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import { betterAuth } from "better-auth";

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function getDb() {
  if (!db) {
    await client.connect();
    db = client.db("wanderlust");
  }
  return db;
}

export const auth = betterAuth({
  database: mongodbAdapter(await getDb(), {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: 'jwt', 
      maxAge: 60 * 60 * 24 * 30
    },
  },
    plugins: [
        jwt(), 
    ]
});