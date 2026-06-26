<template>
  <div class="min-h-screen flex flex-col lg:flex-row relative">
    <!-- Bouton Retour -->
    <button
      @click="goToHome"
      class="fixed top-4 left-4 z-50 w-10 h-10 sm:w-11 sm:h-11 bg-[#0297B8] hover:bg-[#0287a8] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group animate-fade-in-up border-2 border-white"
    >
      <svg
        class="w-5 h-5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
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
      class="flex w-full lg:w-1/2 items-center justify-center bg-white order-2 lg:order-1 p-6 sm:p-8 lg:p-12"
    >
      <div class="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <!-- Logo -->
        <div class="flex flex-col items-center mb-6 sm:mb-8 lg:mb-10">
          <img
            :src="formLogo"
            alt="Logo Secure Check"
            class="w-16 sm:w-20 lg:w-24 h-auto mb-3 sm:mb-4"
          />
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0297B8] text-center">
            Bienvenue
          </h2>
        </div>

        <!-- Formulaire -->
        <form class="space-y-4 sm:space-y-5">
          <div>
            <input
              type="email"
              placeholder="securecheck@scb.org"
              class="w-full px-4 sm:px-5 py-3 sm:py-3 text-sm sm:text-base border border-[#0297B8] rounded-lg focus:ring-2 focus:ring-[#0297B8] focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="* * * * * * * *"
              class="w-full px-4 sm:px-5 py-3 sm:py-3 text-sm sm:text-base border border-[#0297B8]/50 rounded-lg focus:ring-2 focus:ring-[#0297B8] focus:outline-none transition-all duration-300"
            />
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-600">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                class="rounded text-[#0297B8] focus:ring-[#0297B8] w-3.5 h-3.5 sm:w-4 sm:h-4"
              />
              <span class="whitespace-nowrap">Rester connecté</span>
            </label>
            <a
              href="#"
              class="text-[#0297B8] hover:underline whitespace-nowrap text-xs sm:text-sm"
              >Mot de passe oublié ?</a
            >
          </div>

          <router-link
            to="/dashboard"
            class="w-full inline-block text-center bg-[#0297B8] hover:bg-[#0287a8] text-white py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
          >
            Se connecter
          </router-link>
        </form>

        <p class="text-center text-gray-500 text-xs sm:text-sm lg:text-base mt-6 sm:mt-8 leading-relaxed">
          L'application de gestion et de suivi des projets<br class="hidden xs:block" />
          de <span class="font-semibold text-[#0297B8]">Secure Check</span>
        </p>
      </div>
    </div>

    <!-- Image -->
    <div
      class="w-full lg:w-1/2 relative overflow-hidden order-1 lg:order-2 bg-[#0297B8] min-h-[200px] sm:min-h-[300px] lg:min-h-screen"
    >
      <img :src="loginImage" alt="Secure Check" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/10 z-10"></div>
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
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fixed.top-4.left-4 {
  animation: pulse-gentle 2s infinite;
}

@media (max-width: 640px) {
  .max-w-sm {
    max-width: 100%;
  }
}

@media (max-height: 700px) and (orientation: landscape) {
  .min-h-[200px] {
    min-height: 150px;
  }
  .p-6 {
    padding: 1rem;
  }
  .space-y-4 {
    gap: 0.75rem;
  }
}

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
