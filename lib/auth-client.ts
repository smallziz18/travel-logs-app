import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient({
  baseUrl: import.meta.server ? undefined : window.location.origin,
  basePath: "/api/auth",
});
