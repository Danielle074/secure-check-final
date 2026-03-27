<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">

      <!-- Barre action onglets -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-semibold text-[#0297B8]">
          {{ activeTab === 'createCard' ? 'Créer une Carte' : 'Liste des Cartes' }}
        </h2>
        <button
          @click="toggleTab"
          class="bg-[#0297B8] text-white px-4 py-2 rounded-lg hover:bg-[#02739A]"
        >
          {{ activeTab === 'createCard' ? 'Voir la liste' : 'Créer une Carte' }}
        </button>
      </div>

      <!-- Onglets -->
      <CreateCard v-if="activeTab === 'createCard'" />
      <CardList v-else />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CreateCard from './CreateCard.vue'
import CardList from './CardList.vue'

const activeTab = ref('createCard')

function toggleTab() {
  activeTab.value = activeTab.value === 'createCard' ? 'cardList' : 'createCard'
}
</script>
