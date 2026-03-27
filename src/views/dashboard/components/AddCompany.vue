<template>
  <div class="w-full  rounded-lg shadow-lg bg-white p-2">
   
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

const company = ref({
  firstname:'',
  lastname:'',
  email:'',
  title:'',
  role:'',
  password:'',
  phone:'',
  nom:''
})

const emit = defineEmits<{
  (e:'add-company', company:unknown):void
}>()

function submitForm(){
  emit('add-company', { ...company.value })
  Object.keys(company.value).forEach(k=>company.value[k as keyof typeof company.value]='')
}
</script>
