<template>
  <div class="p-6">
    <!-- Bouton retour (tout en haut quand on crée une entreprise) -->
    <div v-if="activeTab === 'create'" class="mb-4">
      <button
        @click="goToList"
        class="flex items-center text-[#02739A] hover:text-[#015f7d] font-medium"
      >
        <i class="bx bx-arrow-back text-xl"></i>
        <span class="ml-1">Retour</span>
      </button>
    </div>

    <!-- En-tête -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">
        {{ activeTab === 'create' ? 'Créer une Entreprise' : 'Gestion des Entreprises' }}
      </h2>

      <!-- Bouton créer -->
      <button
        v-if="activeTab === 'list'"
        @click="goToCreate"
        class="px-4 py-2 rounded-lg font-semibold bg-[#02739A] text-white hover:bg-[#015f7d]"
      >
        Créer une Entreprise
      </button>
    </div>

    <!-- Section Création -->
    <AddCompany v-if="activeTab === 'create'" @add-company="handleAddCompany" />

    <!-- Section Liste -->
    <CompanyList
      v-else
      :companies="companies"
      @open-badge="handleOpenBadge"
      @open-members="handleOpenMembers"
      @open-edit="handleOpenEdit"
      @delete-company="handleDeleteCompany"
      @copy-link="handleCopyLink"
    />

    <!-- Modals -->
    <BadgeModal v-if="showBadge" :company="selectedCompany" @close="showBadge = false" />
    <MembersModal v-if="showMembersModal" :company="selectedCompany" @close="showMembersModal = false" />
    <EditCompanyForm
      v-if="showEditForm"
      :company="selectedCompany"
      @close="showEditForm = false"
      @submit="handleUpdateCompany"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddCompany from "./components/AddCompany.vue";
import CompanyList from "./components/CompanyList.vue";
import BadgeModal from "./BadgeModal.vue";
import MembersModal from "./MembersModal.vue";
import EditCompanyForm from "./EditCompanyForm.vue";

const route = useRoute();
const router = useRouter();

// Définition de l'interface Company
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

// Type pour la création d'une entreprise (sans l'id)
interface CompanyInput {
  nom: string;
  logo?: string;
  qrCode?: string;
  lien?: string;
  phone?: string;
  email?: string;
  members?: string[];
}

const showBadge = ref<boolean>(false);
const showMembersModal = ref<boolean>(false);
const showEditForm = ref<boolean>(false);
const selectedCompany = ref<Company | null>(null);

// Initialisation des entreprises
const companies = ref<Company[]>([
  {
    id: 1,
    nom: "Entreprise 1",
    logo: "https://via.placeholder.com/80?text=Logo+1",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Entreprise+1",
    lien: "#",
    phone: "0123456789",
    email: "entreprise1@mail.com",
    members: ["Membre 1-A", "Membre 1-B"],
  },
  {
    id: 2,
    nom: "Entreprise 2",
    logo: "https://via.placeholder.com/80?text=Logo+2",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Entreprise+2",
    lien: "#",
    phone: "0123456789",
    email: "entreprise2@mail.com",
    members: ["Membre 2-A", "Membre 2-B"],
  },
  {
    id: 3,
    nom: "Entreprise 3",
    logo: "https://via.placeholder.com/80?text=Logo+3",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Entreprise+3",
    lien: "#",
    phone: "0123456789",
    email: "entreprise3@mail.com",
    members: ["Membre 3-A", "Membre 3-B"],
  },
  {
    id: 4,
    nom: "Entreprise 4",
    logo: "https://via.placeholder.com/80?text=Logo+4",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Entreprise+4",
    lien: "#",
    phone: "0123456789",
    email: "entreprise4@mail.com",
    members: ["Membre 4-A", "Membre 4-B"],
  },
  {
    id: 5,
    nom: "Entreprise 5",
    logo: "https://via.placeholder.com/80?text=Logo+5",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Entreprise+5",
    lien: "#",
    phone: "0123456789",
    email: "entreprise5@mail.com",
    members: ["Membre 5-A", "Membre 5-B"],
  },
]);

// 🔹 Détecter le "tab" via la route
const activeTab = computed<string>(() => {
  return route.path.includes("create") ? "create" : "list";
});

// 🔹 Navigation
function goToCreate(): void {
  router.push({ name: "CreateCompany" });
}

function goToList(): void {
  router.push({ name: "CompanyList" });
}

// Handlers pour les événements du composant CompanyList
function handleOpenBadge(company: Company): void {
  selectedCompany.value = company;
  showBadge.value = true;
}

function handleOpenMembers(company: Company): void {
  selectedCompany.value = company;
  showMembersModal.value = true;
}

function handleOpenEdit(company: Company): void {
  selectedCompany.value = { ...company };
  showEditForm.value = true;
}

function handleDeleteCompany(index: number): void {
  if (confirm("Voulez-vous supprimer cette entreprise ?")) {
    companies.value.splice(index, 1);
  }
}

function handleCopyLink(text: string): void {
  navigator.clipboard.writeText(text);
  alert("Lien copié !");
}

// Handler pour l'ajout d'une entreprise
function handleAddCompany(companyData: CompanyInput): void {
  const nextId = companies.value.length + 1;
  const newCompany: Company = {
    id: nextId,
    nom: companyData.nom,
    logo: companyData.logo || `https://via.placeholder.com/80?text=${companyData.nom}`,
    qrCode: companyData.qrCode || `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${companyData.nom}`,
    lien: companyData.lien || "#",
    phone: companyData.phone || "0123456789",
    email: companyData.email || "default@mail.com",
    members: companyData.members || [],
  };
  companies.value.push(newCompany);
  goToList();
}

// Handler pour la mise à jour d'une entreprise
function handleUpdateCompany(updatedCompany: Company): void {
  const idx = companies.value.findIndex((c) => c.id === updatedCompany.id);
  if (idx !== -1) {
    companies.value[idx] = updatedCompany;
  }
  showEditForm.value = false;
}

// Exposer les fonctions si nécessaire
defineExpose({
  companies,
  activeTab,
  goToCreate,
  goToList
});
</script>
