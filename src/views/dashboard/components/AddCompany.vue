<template>
  <div class="w-full rounded-lg shadow-lg bg-white p-2">
    <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-4">
      <div>
        <label class="block mb-2 text-gray-700">Prénom <span class="text-red-600">*</span></label>
        <input v-model="company.firstname" type="text" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Nom <span class="text-red-600">*</span></label>
        <input v-model="company.lastname" type="text" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Email <span class="text-red-600">*</span></label>
        <input v-model="company.email" type="email" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Titre <span class="text-red-600">*</span></label>
        <input v-model="company.title" type="text" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Rôle <span class="text-red-600">*</span></label>
        <input v-model="company.role" type="text" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Mot de passe <span class="text-red-600">*</span></label>
        <input v-model="company.password" type="password" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Téléphone <span class="text-red-600">*</span></label>
        <input v-model="company.phone" type="text" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Entreprise <span class="text-red-600">*</span></label>
        <input v-model="company.nom" type="text" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div class="col-span-2 flex justify-center mt-4">
        <button type="submit" class="bg-[#02739A] text-white px-6 py-2 rounded-lg hover:bg-[#025d7a]">
          Créer l'Entreprise
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Interface pour les données du formulaire
interface CompanyFormData {
  firstname: string;
  lastname: string;
  email: string;
  title: string;
  role: string;
  password: string;
  phone: string;
  nom: string;
}

// Type pour l'entreprise à créer (correspond à CompanyInput dans le parent)
interface CompanyInput {
  nom: string;
  logo?: string;
  qrCode?: string;
  lien?: string;
  phone?: string;
  email?: string;
  members?: string[];
}

const company = ref<CompanyFormData>({
  firstname: '',
  lastname: '',
  email: '',
  title: '',
  role: '',
  password: '',
  phone: '',
  nom: ''
})

// Émits avec le type correct
const emit = defineEmits<{
  (e: 'add-company', company: CompanyInput): void
}>()

function submitForm(): void {
  // Construire l'objet entreprise avec les données du formulaire
  const companyData: CompanyInput = {
    nom: company.value.nom,
    email: company.value.email,
    phone: company.value.phone,
    logo: `https://via.placeholder.com/80?text=${company.value.nom}`,
    qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${company.value.nom}`,
    lien: '#',
    members: [`${company.value.firstname} ${company.value.lastname}`]
  }

  // Émettre l'événement avec les données
  emit('add-company', companyData)

  // Réinitialiser le formulaire
  Object.keys(company.value).forEach(key => {
    company.value[key as keyof CompanyFormData] = ''
  })
}
</script>
