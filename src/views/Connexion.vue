<template>
  <div class="min-h-screen flex flex-col md:flex-row relative">
    <!-- Bouton Retour -->
    <button
      @click="goToHome"
      class="fixed top-3 left-3 xs:top-4 xs:left-4 sm:top-5 sm:left-5 md:top-6 md:left-6 lg:top-7 lg:left-7 xl:top-8 xl:left-8 2xl:top-10 2xl:left-10 z-50 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[#0297B8] hover:bg-[#0287a8] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group animate-fade-in-up border-2 border-white"
    >
      <svg
        class="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 group-hover:scale-110 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </button>

    <!-- Formulaire -->
    <div
      class="flex w-full md:w-1/2 items-center justify-center bg-white order-2 md:order-1 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20"
    >
      <div
        class="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 2xl:p-12 w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
      >
        <!-- Logo -->
        <div
          class="flex flex-col items-center mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 2xl:mb-12"
        >
          <img
            :src="formLogo"
            alt="Logo Secure Check"
            class="w-20 xs:w-22 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-44 h-auto mb-2 xs:mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-6"
          />
          <h2
            class="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#0297B8] text-center"
          >
            Bienvenue
          </h2>
        </div>

        <!-- Formulaire -->
        <form
          class="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 2xl:space-y-10"
        >
          <div>
            <input
              type="email"
              placeholder="securecheck@scb.org"
              class="w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10 py-2 xs:py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border border-[#0297B8] rounded-lg focus:ring-2 focus:ring-[#0297B8] focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="* * * * * * * *"
              class="w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10 py-2 xs:py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border border-[#0297B8]/50 rounded-lg focus:ring-2 focus:ring-[#0297B8] focus:outline-none transition-all duration-300"
            />
          </div>

          <div
            class="flex items-center justify-between text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-7 2xl:space-x-8"
          >
            <label
              class="flex items-center space-x-1 xs:space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-4 2xl:space-x-5 cursor-pointer"
            >
              <input
                type="checkbox"
                class="rounded text-[#0297B8] focus:ring-[#0297B8] w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
              />
              <span class="whitespace-nowrap">Rester connecté</span>
            </label>
            <a
              href="#"
              class="text-[#0297B8] hover:underline whitespace-nowrap text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              >Mot de passe oublié ?</a
            >
          </div>

          <router-link
            to="/dashboard"
            class="w-full inline-block text-center bg-[#0297B8] hover:bg-[#0287a8] text-white py-2 xs:py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
          >
            Se connecter
          </router-link>
        </form>

        <p
          class="text-center text-gray-500 text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 2xl:mt-12 leading-tight"
        >
          L'application de gestion et de suivi des projets<br />
          de <span class="font-semibold text-[#0297B8]">Secure Check</span>
        </p>
      </div>
    </div>

    <!-- Image -->
    <div
      class="w-full md:w-1/2 relative overflow-hidden order-1 md:order-2 bg-[#0297B8] min-h-40 xs:min-h-48 sm:min-h-56 md:min-h-64 lg:min-h-72 xl:min-h-80 2xl:min-h-96 md:min-h-screen"
    >
      <img :src="loginImage" alt="Secure Check" class="w-full h-full object-cover opacity-90" />
      <div class="absolute inset-0 bg-black/20 z-10"></div>

      <!-- Texte mobile/tablette -->
      <div
        class="absolute inset-0 z-20 flex items-center justify-center md:hidden px-4 xs:px-5 sm:px-6"
      >
        <div class="text-center text-white">
          <img
            :src="formLogo"
            alt="Logo Secure Check"
            class="w-12 xs:w-14 sm:w-16 h-auto mx-auto mb-2 xs:mb-3 sm:mb-3 opacity-90"
          />
          <h2 class="text-base xs:text-lg sm:text-xl font-bold mb-1 xs:mb-2 sm:mb-2">
            Secure Check
          </h2>
          <p class="text-xs xs:text-sm sm:text-sm opacity-90">
            Gestion intelligente de vos rendez-vous
          </p>
        </div>
      </div>

      <!-- Texte grands écrans -->
      <div class="absolute inset-0 z-20 hidden 2xl:flex items-center justify-center">
        <div class="text-center text-white max-w-2xl 2xl:max-w-3xl">
          <h2 class="text-4xl 2xl:text-5xl font-bold mb-6 2xl:mb-8">Secure Check Pro</h2>
          <p class="text-xl 2xl:text-2xl opacity-90 mb-8 2xl:mb-10">
            La solution professionnelle de gestion de rendez-vous
          </p>
          <div class="space-y-3 2xl:space-y-4 text-left">
            <div class="flex items-center space-x-4 2xl:space-x-5">
              <div class="w-3 h-3 2xl:w-4 2xl:h-4 bg-white rounded-full flex-shrink-0"></div>
              <span class="text-lg 2xl:text-xl">Gestion avancée des rendez-vous</span>
            </div>
            <div class="flex items-center space-x-4 2xl:space-x-5">
              <div class="w-3 h-3 2xl:w-4 2xl:h-4 bg-white rounded-full flex-shrink-0"></div>
              <span class="text-lg 2xl:text-xl">Notifications automatiques</span>
            </div>
            <div class="flex items-center space-x-4 2xl:space-x-5">
              <div class="w-3 h-3 2xl:w-4 2xl:h-4 bg-white rounded-full flex-shrink-0"></div>
              <span class="text-lg 2xl:text-xl">Interface intuitive et moderne</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import formLogo from "@/assets/images/logo.png";
import loginImage from "@/assets/images/Photo de login.jpg";

const router = useRouter();

const goToHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Gardez uniquement les animations et styles généraux */
body {
  font-family: "Poppins", sans-serif;
}

input:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(2, 151, 184, 0.15);
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-gentle {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fixed.top-3.left-3 {
  animation: pulse-gentle 2s infinite;
}

/* Media queries standards pour les cas très spécifiques */
@media (max-width: 320px) {
  .max-w-xs {
    max-width: 280px;
  }
}

@media (max-height: 600px) and (orientation: landscape) {
  .py-6 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

/* Optimisations de performance */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up {
    animation: none;
  }

  .group-hover\:scale-110 {
    transform: none;
  }

  .hover\:scale-105 {
    transform: none;
  }

  input:focus {
    transform: none;
  }
}
</style>
