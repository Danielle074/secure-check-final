<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center">
    <!-- Navbar -->
    <nav class="flex items-center justify-between w-full relative pt-2 pb-2">
      <!-- padding top et bottom réduit -->
      <!-- Logo -->
      <div class="flex items-center ml-6">
        <img :src="logo" alt="Secure Check" class="h-24 mr-3" />
      </div>

      <!-- Déconnexion -->
      <router-link to="/login" class="mr-6">
        <button
          class="flex items-center gap-2 border border-[#0297B8] text-[#0297B8] px-3 py-2 rounded-md hover:bg-[#0297B8] hover:text-white transition text-sm font-medium"
        >
          <i class="bx bx-log-out text-base"></i>
          Déconnexion
        </button>
      </router-link>

      <!-- Trait bleu fin et brillant -->
      <div
        class="absolute bottom-0 left-0 w-screen h-[2px] bg-gradient-to-r from-[#0297B8] via-blue-400 to-[#0297B8] animate-gradient-glitter"
      ></div>
    </nav>

    <!-- Cards -->
    <div class="flex flex-col md:flex-row gap-8 w-full max-w-3xl mt-24">
      <!-- Card 1 -->
      <div
        class="flex-1 bg-[#0297B8] rounded-xl shadow-md p-5 flex flex-col items-center text-center transform hover:scale-[1.02] transition"
      >
        <div class="bg-white p-4 rounded-full mb-3">
          <i class="bx bx-calendar-check text-[#0297B8] text-4xl"></i>
        </div>
        <h3 class="text-lg font-semibold mb-3 text-white">Demande de rendez-vous</h3>
        <router-link to="/rendez-vous" class="w-full">
          <button
            class=" bg-white text-[#0297B8] px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#0297B8] hover:text-white transition"
          >
            Demander un rendez-vous
          </button>
        </router-link>
      </div>

      <!-- Card 2 -->
      <div
        class="flex-1 bg-[#0297B8] rounded-xl shadow-md p-5 flex flex-col items-center text-center transform hover:scale-[1.02] transition"
      >
        <div class="bg-white p-4 rounded-full mb-3">
          <i class="bx bx-navigation text-[#0297B8] text-4xl"></i>
        </div>
        <h3 class="text-lg font-semibold mb-3 text-white">Menu de navigation</h3>
        <router-link to="/app/profile" class="w-full">
          <button
            class=" bg-white text-[#0297B8] px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#0297B8] hover:text-white transition"
          >
            Accéder au menu
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImg from '@/assets/images/logo.png'
const logo = logoImg
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}
</style>
