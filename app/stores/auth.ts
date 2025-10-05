import { createAuthClient } from "better-auth/vue";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useAuthStore = defineStore("useAuthStore", () => {
  const authClient = createAuthClient();
  const session = authClient.useSession(); // ou adapte selon ce que tu trouves dans le log
  const user = computed(() => session?.value?.data?.user);
  const loading = computed(() => session?.value?.isPending);
  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/Dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }
  return {
    loading,
    signIn,
    signOut,
    user,
  };
});
