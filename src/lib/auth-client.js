import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL: "https://wanderlush-project-server.vercel.app",
  plugins: [jwtClient()],
});

// IMPORTANT: একটাই client use করবে সব জায়গায়
export const { signIn, signUp, signOut, useSession } = authClient;
