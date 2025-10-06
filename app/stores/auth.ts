import { authClient } from "~~/lib/auth-client";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useAuthStore = defineStore("useAuthStore", () => {
  const { data: sessionData, pending, refresh } = useAsyncData("auth-session", () =>
    authClient.useSession(useFetch));

  const user = computed(() => sessionData.value?.data.value?.user);
  const loading = computed(() => pending.value);

  async function signIn() {
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/Dashboard",
        errorCallbackURL: "/error",
      });
    }
    catch (error) {
      console.error("Erreur de connexion:", error);
    }
  }

  async function signOut() {
    try {
      await authClient.signOut();
      // Rafraîchir manuellement l'état de la session
      await refresh();
      navigateTo("/");
    }
    catch (error) {
      console.error("Erreur de déconnexion:", error);
      // En cas d'échec, rediriger quand même
      navigateTo("/");
    }
  }

  return {
    loading,
    signIn,
    signOut,
    user,
  };
});
