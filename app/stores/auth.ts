import { createAuthClient } from "better-auth/client";
import { defineStore } from "pinia";

const authClient = createAuthClient();
const loading = ref(false);

export const useAuthStore = defineStore("useAuthStore", () => {
  async function signIn() {
    loading.value = true;
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/Dashboard",
      errorCallbackURL: "/error",
    });
    loading.value = false;
  }
  return {
    loading,
    signIn,
  };
});
