<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-4">
    <!-- Logo / icône -->
    <router-link to="/site">
  <img
    :src="logo"
    alt="Secure Check"
    class="w-50 h-40 mb-8 cursor-pointer"
  />
   </router-link>


    <!-- Slogan -->
    <h1 class="text-3xl md:text-4xl font-bold text-[#438fab] mb-12 text-center">
      La solution digitale pour vos rendez-vous
    </h1>

    <!-- Boutons -->
    <div class="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-2xl">
      <router-link to="/register" class="flex-1">
        <button
          class="w-full bg-[#438fab] text-white px-6 py-4 rounded-xl text-lg md:text-xl font-semibold hover:bg-[#3190a5] shadow-lg transition transform hover:scale-105"
        >
          Prenez un rendez-vous
        </button>
      </router-link>

      <router-link to="/connexion" class="flex-1">
        <button
          class="w-full border-2 border-[#438fab] text-[#438fab] px-6 py-4 rounded-xl text-lg md:text-xl font-semibold hover:bg-[#438fab] hover:text-white shadow-lg transition transform hover:scale-105"
        >
          Se connecter
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImg from '@/assets/images/logo.png';
const logo = logoImg;
</script>

<style scoped>
/* Animation douce sur tout le conteneur */
div {
  transition: all 0.3s ease;
}
</style>
