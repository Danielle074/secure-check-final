<template>
  <div class="min-h-screen bg-gray-50 p-6 overflow-hidden">
    <!-- overflow-hidden ici -->
    <div class="max-w-4xl mx-auto">
      <!-- En-tête -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-1">Liste des Demandes</h1>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <!-- Barre de recherche -->
          <div class="relative w-full md:w-1/3 mt-5">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search"
              class="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#02739A]"
            />
            <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-lg"></i>
          </div>
        </div>
      </div>

      <!-- Tableau des demandes -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="overflow-x-auto">
          <!-- Scrollbar horizontale uniquement ici -->
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-[#0297B8] text-white">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Visitor Email
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Contact
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Image
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Host
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Reason
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Status
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Date de création
                </th>
                <th
                  class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Actions
                </th>
                <th
                  class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  Supprimer
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="(request, index) in filteredRequests"
                :key="request.id"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                class="hover:bg-gray-100"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ request.email }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ request.contact }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <img :src="request.image" class="h-10 w-10 rounded-full object-cover" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ request.host }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ request.reason }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="{
                      'text-green-600 font-semibold': request.status === 'Approved',
                      'text-yellow-600 font-semibold': request.status === 'Pending',
                      'text-red-600 font-semibold': request.status === 'Rejected',
                    }"
                  >
                    {{ request.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ request.createdAt }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div class="flex justify-center">
                    <button
                      @click="openConfirmation(request)"
                      class="text-[#02739A] hover:text-[#025d7a] transition-colors p-1 rounded"
                      title="Voir détails"
                    >
                      <i class="bx bx-show text-xl"></i>
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div class="flex justify-center">
                    <button
                      @click="removeRequest(request.id)"
                      class="text-red-600 hover:text-red-800 transition-colors p-1 rounded"
                      title="Supprimer"
                    >
                      <i class="bx bx-trash text-lg"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Page d'attente -->
    <div
      v-if="isConfirming"
      class="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 text-center z-50"
    >
      <h2 class="text-2xl font-semibold text-[#02739A] mb-6">
        En attente de confirmation<span class="animate-pulse">...</span>
      </h2>
      <div class="flex space-x-6">
        <button
          @click="generateQrCard(selectedRequest)"
          class="bg-[#02739A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#025d7a] transition-colors"
        >
          Valider
        </button>
        <button
          @click="cancelConfirmation"
          class="bg-gray-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-500 transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>

    <!-- Affichage de la carte stylée -->
    <div
      v-if="showQrCard"
      class="fixed inset-0 flex flex-col items-center min-h-screen bg-white z-50 overflow-y-auto pt-1"
    >
      <!-- Bouton Retour en haut -->
      <div class="self-start ml-6 mb-4">
        <button
          @click="showQrCard = false"
          class="flex items-center text-[#02739A] font-semibold hover:text-[#025d7a] transition-colors"
        >
          <i class="bx bx-arrow-back text-xl mr-2"></i> Retour
        </button>
      </div>

      <!-- Carte principale -->
      <div class="relative bg-[#0297B8] text-white w-96 rounded-3xl shadow-lg overflow-hidden pt-2">
        <!-- Logo -->
        <div class="flex justify-center">
          <div
            class="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-[#0297B8] -mt-14"
          >
            <img :src="logo" alt="Logo" class="w-20 h-20 object-contain mt-6" />
          </div>
        </div>

        <!-- Corps -->
        <div class="relative mt-1 px-6">
          <!-- Découpes -->
          <div
            class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-r-full w-6 h-6"
          ></div>
          <div
            class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-l-full w-6 h-6"
          ></div>

          <!-- QR Code -->
          <div class="flex justify-center mb-4">
            <div class="bg-white p-4 rounded-xl">
              <img :src="qrCodeUrl" alt="QR Code" class="w-40 h-40" />
            </div>
          </div>

          <!-- Ticket entre QR et ligne pointillée -->
          <div class="flex justify-center mb-1">
            <div class="text-white font-medium">Ticket #{{ selectedRequest.id }}</div>
          </div>

          <!-- Ligne pointillée -->
          <div class="border-t-2 border-dashed border-white w-3/4 mx-auto mb-3"></div>

          <!-- Informations -->
          <div class="grid grid-cols-2 gap-3 mb-6 text-sm">
            <div class="flex items-start space-x-2">
              <i class="bx bx-calendar text-xl"></i>
              <div>
                <h3 class="font-bold">Event</h3>
                <p>{{ selectedRequest.reason }}</p>
                <p class="text-xs">By {{ selectedRequest.host }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-2">
              <i class="bx bx-envelope text-xl"></i>
              <div>
                <h3 class="font-bold">Email</h3>
                <p class="text-xs">{{ selectedRequest.email }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-2">
              <i class="bx bx-phone text-xl"></i>
              <div>
                <h3 class="font-bold">Contact</h3>
                <p class="text-xs">{{ selectedRequest.contact }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-2">
              <i class="bx bx-time text-xl"></i>
              <div>
                <h3 class="font-bold">Date</h3>
                <p>11 Octobre 2025</p>
                <p class="text-xs">13h00 - 14h00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Boutons bas -->
      <div class="flex justify-center gap-4 mt-2 mb-8">
        <button
          class="bg-[#0297B8] text-black px-6 py-3 rounded-lg flex items-center gap-2 shadow hover:bg-white transition-colors"
        >
          <i class="bx bx-share-alt"></i> Partager
        </button>
        <button
          class="bg-[#0297B8] text-black px-6 py-3 rounded-lg flex items-center gap-2 shadow hover:bg-white transition-colors"
        >
          <i class="bx bx-download"></i> Capturer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import logo from "@/assets/images/logo.png";

const searchQuery = ref("");

const requests = ref(
  Array.from({ length: 15 }, (_, i) => ({
    id: `R00${i + 1}`,
    email: `user${i + 1}@example.com`,
    contact: `+225 07000000${i + 1}`,
    image: `https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${i + 1}.jpg`,
    host: ["Mozar Group", "Tech CI", "Masek Holding"][i % 3],
    reason: ["Visite", "Réunion", "Inspection"][i % 3],
    status: ["Pending", "Approved", "Rejected"][i % 3],
    createdAt: `2025-10-${10 + i}`,
  }))
);

const filteredRequests = computed(() => {
  if (!searchQuery.value) return requests.value;

  return requests.value.filter(
    (request) =>
      request.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      request.contact.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      request.host.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      request.reason.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectedRequest = ref<any>(null);
const isConfirming = ref(false);
const showQrCard = ref(false);
const qrCodeUrl = ref("");

// Ouvrir confirmation
function openConfirmation(request: any) {
  selectedRequest.value = request;
  isConfirming.value = true;
}

// Annuler confirmation
function cancelConfirmation() {
  selectedRequest.value = null;
  isConfirming.value = false;
}

// Supprimer une demande
function removeRequest(id: string) {
  // Met à jour le ref en filtrant l'élément par id
  requests.value = requests.value.filter((r: any) => r.id !== id);

  // Si la demande supprimée était sélectionnée, réinitialiser les états liés
  if (selectedRequest.value && selectedRequest.value.id === id) {
    selectedRequest.value = null;
    isConfirming.value = false;
    showQrCard.value = false;
  }
}

// Générer carte QR stylée
function generateQrCard(request: any) {
  qrCodeUrl.value = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    `Accès validé pour ${request.email}`
  )}`;
  isConfirming.value = false;
  showQrCard.value = true;
}
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

/* Style personnalisé pour la scrollbar horizontale */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Empêcher le scroll global */
.min-h-screen {
  overflow: hidden;
}
</style>
