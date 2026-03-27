<template>
  <div class="font-sans text-gray-800">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-100"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3 group">
          <img :src="logo" alt="SecureCheck Logo" class="h-25 w-25" />
        </RouterLink>

        <!-- Menu desktop -->
        <ul class="hidden md:flex space-x-8 font-semibold ">
          <li><RouterLink to="/features" class="nav-link text-lg md:text-xl">Fonctionnalités</RouterLink></li>
          <li><RouterLink to="/solutions" class="nav-link text-lg md:text-xl">Solutions</RouterLink></li>
          <li><RouterLink to="/tarifs" class="nav-link text-lg md:text-xl">Tarifs</RouterLink></li>
          <li><RouterLink to="/testimonials" class="nav-link text-lg md:text-xl">Avis</RouterLink></li>
          <li><RouterLink to="/faq" class="nav-link text-lg md:text-xl">FAQ</RouterLink></li>
        </ul>

        <div class="hidden md:flex items-center space-x-4">
          <!-- Sélecteur de langue -->
          <div class="relative">
            <button
              @click="showLang = !showLang"
              class="flex items-center space-x-2 border border-gray-300 px-3 py-2 rounded-xl hover:border-[#438fab] transition"
            >
              <span class="font-semibold">{{ selectedLang }}</span>
              <i class="bx bx-chevron-down text-gray-500 text-lg"></i>
            </button>

            <div
              v-if="showLang"
              class="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden w-28 z-50"
            >
              <button
                v-for="lang in ['FR', 'EN']"
                :key="lang"
                @click="selectLang(lang)"
                class="block w-full text-left px-4 py-2 hover:bg-[#f0f8fa] text-gray-700 font-medium transition"
              >
                {{ lang }}
              </button>
            </div>
          </div>

          <!-- Bouton CTA -->
          <RouterLink to="/login">
            <button
              class="bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white px-4 py-2 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#438fab] focus:ring-offset-2"
            >
              <span>Login</span>
              <i class="bx bx-chevron-right text-lg"></i>
            </button>
          </RouterLink>
        </div>

        <!-- Menu mobile -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#438fab] focus:ring-offset-2"
        >
          <i v-if="!isOpen" class="bx bx-menu text-2xl text-gray-700"></i>
          <i v-else class="bx bx-x text-2xl text-gray-700"></i>
        </button>
      </div>

      <!-- Menu mobile déroulant -->
      <div
        v-if="isOpen"
        class="md:hidden bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-100 px-6 py-4"
      >
        <ul class="space-y-4 font-semibold">
          <li><RouterLink to="/features" class="mobile-link">Fonctionnalités</RouterLink></li>
          <li><RouterLink to="/solutions" class="mobile-link">Solutions</RouterLink></li>
          <li><RouterLink to="/tarifs" class="mobile-link">Tarifs</RouterLink></li>
          <li><RouterLink to="/testimonials" class="mobile-link">Avis</RouterLink></li>
          <li><RouterLink to="/faq" class="mobile-link">FAQ</RouterLink></li>

          <!-- Sélecteur langue mobile -->
          <li class="pt-3 border-t border-gray-200 flex space-x-3 items-center">
            <span class="text-gray-700 font-medium">Langue :</span>
            <button
              v-for="lang in ['FR', 'EN']"
              :key="lang"
              @click="selectLang(lang)"
              class="px-3 py-1 border rounded-lg font-semibold"
              :class="selectedLang === lang ? 'bg-[#438fab] text-white' : 'bg-gray-100 text-gray-700'"
            >
              {{ lang }}
            </button>
          </li>

          <li class="pt-3">
            <RouterLink to="/login" @click="isOpen = false">
              <button
                class="w-full bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white text-base font-bold px-4 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
              >
                <i class="bx bx-rocket text-lg"></i>
                <span>Commencer Maintenant</span>
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Espace pour la navbar -->
    <div class=""></div>

    <main class="min-h-screen">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import logo from "../assets/images/logo.png";

const isOpen = ref(false);
const showLang = ref(false);
const selectedLang = ref("FR");

const selectLang = (lang: string) => {
  selectedLang.value = lang;
  showLang.value = false;
  console.log(`Langue changée en : ${lang}`);
};
</script>

<style scoped>
.nav-link {
  text-base: text-gray-700;
  transition: all 0.3s;
}
.nav-link:hover {
  color: #438fab;
  transform: scale(1.05);
}

.mobile-link {
  display: block;
  text-align: left;
  text-lg: text-gray-700;
  transition: 0.3s;
  padding: 0.5rem 0;
}
.mobile-link:hover {
  color: #438fab;
}
</style>
