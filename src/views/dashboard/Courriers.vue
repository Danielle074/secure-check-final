<template>
<div class="relative min-h-screen bg-[#f5f9fa] px-6 pt-2 pb-6">

    <h2 class="text-2xl font-bold text-[#02739A]">{{ pageTitle }}</h2>

    <!-- Bouton Ajouter seulement sur la liste -->
    <div v-if="!isCreating" class="flex justify-end mb-6">
      <router-link
        to="/dashboard/courrier/ajouter"
        class="px-4 py-2 rounded-lg font-medium bg-[#02739A] text-white hover:bg-[#025c7a] transition"
      >
        Ajouter un courrier
      </router-link>
    </div>

    <!-- Composants affichés via router-view -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Déterminer si on est sur la page création
const isCreating = computed(() => route.path.includes('ajouter'))

// Titre dynamique
const pageTitle = computed(() => {
  return isCreating.value ? 'Créer un courrier' : 'Liste des courriers'
})
</script>
