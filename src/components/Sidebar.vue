<template>
  <div class="flex h-screen">
    <!-- Sidebar fixe -->
    <aside class="w-64 flex-shrink-0 bg-white flex flex-col h-screen">
      <!-- Haut: Logo et liens -->
      <div class="flex flex-col flex-1 overflow-auto scrollbar-hide">
        <!-- Logo en haut cliquable -->
        <div
          class="flex justify-center items-center pt-6 pb-2 cursor-pointer"
          @click="$router.push('/app/profile')"
        >
          <img :src="logo" alt="Secure Check" class="h-28 w-auto" />
        </div>

        <!-- Trait fin bleu -->
        <div class="border-t border-[#02739A] mb-4"></div>

        <!-- Liens de navigation -->
        <nav class="flex flex-col mt-4 px-4 space-y-3">
          <router-link
            to="/app/utilisateur/list"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/utilisateur/list' }"
          >
            <i class="bx bx-user text-[#02739A] text-xl"></i>
            <span>Utilisateurs</span>
          </router-link>

          <router-link
            to="/app/scanner"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/scanner' }"
          >
            <i class="bx bx-qr-scan text-[#02739A] text-xl"></i>
            <span>Scanners QR Code</span>
          </router-link>

          <router-link
            to="/app/evenement"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/evenement' }"
          >
            <i class="bx bx-calendar-event text-[#02739A] text-xl"></i>
            <span>Evènements</span>
          </router-link>

          <router-link
            to="/app/entreprises/list"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/entreprises/list' }"
          >
            <i class="bx bx-building text-[#02739A] text-xl"></i>
            <span>Entreprises</span>
          </router-link>

          <router-link
            to="/app/visiteur"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/visiteur' }"
          >
            <i class="bx bx-list-ul text-[#02739A] text-xl"></i>
            <span>Liste des visiteurs</span>
          </router-link>

          <router-link
            to="/app/demande"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/demande' }"
          >
            <i class="bx bx-envelope text-[#02739A] text-xl"></i>
            <span>Demande</span>
          </router-link>

          <router-link
            to="/app/presence"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/presence' }"
          >
            <i class="bx bx-check-square text-[#02739A] text-xl"></i>
            <span>Liste de présence</span>
          </router-link>

          <router-link
            to="/app/carte"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/carte' }"
          >
            <i class="bx bx-id-card text-[#02739A] text-xl"></i>
            <span>Carte de membre</span>
          </router-link>

          <router-link
            to="/app/courriers"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/courriers/liste' }"
          >
            <i class="bx bx-mail-send text-[#02739A] text-xl"></i>
            <span>Liste de courriers</span>
          </router-link>

          <router-link
            to="/app/taches"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/taches' }"
          >
            <i class="bx bx-task text-[#02739A] text-xl"></i>
            <span>Tâches</span>
          </router-link>

          <router-link
            to="/app/projet"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/projet' }"
          >
            <i class="bx bx-folder text-[#02739A] text-xl"></i>
            <span>Projets</span>
          </router-link>

          <router-link
            to="/app/documents"
            class="flex items-center gap-3 px-3 py-3 rounded-lg transition text-black hover:text-[#02739A] hover:bg-gray-100"
            :class="{ 'bg-[#02739A]/10 text-[#02739A] font-semibold': $route.path === '/app/documents' }"
          >
            <i class="bx bx-file text-[#02739A] text-xl"></i>
            <span>Documents</span>
          </router-link>

          <router-link
            to="/site"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#438fab]/10 transition"
          >
            <i class="bx bx-globe text-xl text-[#438fab]"></i>
            <span>Site Internet</span>
          </router-link>
        </nav>
      </div>

      <!-- Bas: profil + logout -->
      <div class="px-4 mb-6 flex-shrink-0">
        <div class="border-t border-[#02739A] my-4"></div>

        <div class="flex items-center gap-3 mt-2">
          <img :src="adminPhoto" alt="Admin" class="h-12 w-12 rounded-full" />
          <div>
            <p class="font-semibold text-black">Admin Name</p>
            <p class="text-gray-500 text-sm">Admin</p>
          </div>
        </div>

        <router-link to="/login">
          <button
            class="flex items-center gap-2 border-2 border-[#02739A] text-[#02739A] px-4 py-2 rounded-lg w-full hover:bg-[#438fab] hover:text-white transition mt-10"
          >
            <i class="bx bx-log-out text-lg"></i>
            Déconnexion
          </button>
        </router-link>
      </div>
    </aside>

    <!-- Contenu principal scrollable -->
    <main class="flex-1 overflow-auto scrollbar-hide bg-gray-100">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import logoImg from "@/assets/images/logo.png";
import adminPhotoImg from "@/assets/images/Photo de login.jpg";

const logo = logoImg;
const adminPhoto = adminPhotoImg;
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
}

/* Cacher scrollbars pour sidebar et contenu */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
