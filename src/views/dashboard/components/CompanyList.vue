<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="bg-white shadow-md rounded-lg p-4 overflow-x-auto relative">
    <table class="min-w-full border border-gray-200 rounded-lg">
      <thead class="bg-[#02739A] text-white">
        <tr>
          <th class="p-3">ID</th>
          <th class="p-3">Photo</th>
          <th class="p-3">Nom</th>
          <th class="p-3">Contact</th>
          <th class="p-3">Email</th>
          <th class="p-3">QR Code</th>
          <th class="p-3">Lien</th>
          <th class="p-3">Employés</th>
          <th class="p-3">Membres</th>
          <th class="p-3">Edit</th>
          <th class="p-3">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(company, index) in companies" :key="company.id" class="border-b hover:bg-gray-100 relative">
          <td class="p-3">{{ company.id }}</td>
          <td class="p-3">
            <img :src="company.logo" class="h-10 w-10 rounded-full" :alt="company.nom" />
          </td>
          <td class="p-3">{{ company.nom }}</td>
          <td class="p-3">{{ company.phone }}</td>
          <td class="p-3">{{ company.email }}</td>
          <td class="p-3">
            <img
              :src="company.qrCode"
              class="h-10 w-10 cursor-pointer"
              :alt="`QR Code ${company.nom}`"
              @click="openBadge(company)"
            />
          </td>
          <td class="p-3 flex items-center gap-2">
            <a :href="company.lien" class="text-blue-600 hover:underline">{{ company.lien }}</a>
            <button @click="copyLink(company.lien)">
              <i class='bx bx-copy'></i>
            </button>
          </td>
          <td class="p-3 text-center">
            <button class="text-gray-700 hover:text-gray-900">
              <i class='bx bx-user'></i>
            </button>
          </td>
          <td class="p-3 text-center">
            <button @click="openMembers(company)" class="text-gray-700 hover:text-gray-900">
              <i class='bx bx-group'></i>
            </button>
          </td>
          <td class="p-3 text-center">
            <button @click="openEdit(company)" class="text-gray-700 hover:text-gray-900">
              <i class='bx bx-edit'></i>
            </button>
          </td>
          <td class="p-3 text-center">
            <button @click="deleteCompany(index)" class="text-red-600 hover:text-red-800">
              <i class='bx bx-trash'></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// Définition complète de l'interface Company
interface Company {
  id: number;
  nom: string;
  logo: string;
  qrCode: string;
  lien: string;
  phone: string;
  email: string;
  members: string[];
}

// Props correctement typées
defineProps<{
  companies: Company[]
}>();

// Émits avec des types corrects
const emit = defineEmits<{
  (e: 'open-badge', company: Company): void;
  (e: 'open-members', company: Company): void;
  (e: 'open-edit', company: Company): void;
  (e: 'delete-company', index: number): void;
  (e: 'copy-link', text: string): void;
}>();

// Fonctions pour émettre les événements
function openBadge(company: Company): void {
  emit('open-badge', company);
}

function openMembers(company: Company): void {
  emit('open-members', company);
}

function openEdit(company: Company): void {
  emit('open-edit', company);
}

function deleteCompany(index: number): void {
  emit('delete-company', index);
}

function copyLink(text: string): void {
  emit('copy-link', text);
}
</script>
