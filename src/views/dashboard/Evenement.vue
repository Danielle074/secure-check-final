<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- 🔹 Titre dynamique -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">
        {{ pageTitle }}
      </h2>

      <!-- Bouton Créer un Événement -->
      <div v-if="!isCreatePage" class="space-x-4">
        <router-link
          to="/app/evenement/creer"
          class="px-4 py-2 rounded-lg font-semibold bg-[#0297B8] text-white hover:bg-[#02739A]"
        >
          Créer un Événement
        </router-link>
      </div>
    </div>

    <!-- Contenu de la sous-route -->
    <router-view
      :events="events"
      :perPage="perPage"
      :currentPage="currentPage"
      @add-event="handleAddEvent"
      @edit-event="modifierEvent"
      @delete-event="supprimerEvent"
      @view-participants="voirParticipants"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// Définition des types
interface Visitor {
  id: string;
  email: string;
  image: string;
  address: string;
  createdAt: string;
}

interface Event {
  id?: string;
  nom: string;
  description?: string;
  date?: string;
  lieu?: string;
  image?: string;
  visitors?: Visitor[];
}

// Type pour les données des visiteurs par événement
type VisitorsData = Record<string, Visitor[]>;

const route = useRoute();
const router = useRouter();

const perPage = ref<number>(5);
const currentPage = ref<number>(1);
const events = ref<Event[]>([
  { id: '1', nom: "Forum Digital" },
  { id: '2', nom: "Conférence Élite" }
]);

const selectedEvent = ref<Event | null>(null);
const showParticipants = ref<boolean>(false);

// Données des visiteurs par événement
const visitorsData: VisitorsData = {
  'Forum Digital': [
    {
      id: '1',
      email: 'john@email.com',
      image: 'https://via.placeholder.com/150',
      address: 'Paris, France',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      email: 'jane@email.com',
      image: 'https://via.placeholder.com/150',
      address: 'Lyon, France',
      createdAt: '2024-01-16'
    }
  ],
  'Conférence Élite': [
    {
      id: '3',
      email: 'bob@email.com',
      image: 'https://via.placeholder.com/150',
      address: 'Marseille, France',
      createdAt: '2024-01-17'
    }
  ]
};

// 🔹 Détection de la page actuelle pour changer le titre
const pageTitle = computed<string>(() => {
  if (route.path.includes("creer")) return "Créer un Événement";
  if (route.path.includes("participants")) return "Participants de l'Événement";
  return "Liste des Événements";
});

// 🔹 Vérifie si on est sur la page de création (pour cacher le bouton)
const isCreatePage = computed<boolean>(() => route.path.includes("creer"));

function handleAddEvent(event: Event): void {
  const newEvent = {
    ...event,
    id: Date.now().toString()
  };
  events.value.push(newEvent);
  router.push("/app/evenement/liste");
}

function modifierEvent(event: Event): void {
  alert(`Modifier ${event.nom}`);
}

function supprimerEvent(index: number): void {
  if (confirm("Supprimer cet événement ?")) {
    events.value.splice(index, 1);
  }
}

function voirParticipants(event: Event): void {
  // Récupérer les visiteurs pour cet événement
  const eventName = event.nom;
  const visitors = visitorsData[eventName] || [];

  // Créer l'événement avec ses visiteurs
  const eventWithVisitors: Event = {
    ...event,
    visitors: visitors
  };

  selectedEvent.value = eventWithVisitors;

  // Solution 1: Utiliser query params au lieu de state (recommandé)
  router.push({
    path: `/app/evenement/participants/${encodeURIComponent(event.nom)}`,
    query: {
      eventData: JSON.stringify(eventWithVisitors)
    }
  });

  // OU Solution 2: Stocker dans le store global
  // store.commit('setSelectedEvent', eventWithVisitors);

  // OU Solution 3: Utiliser le state de Vue Router (fonctionne mais avec un cast)
  // router.push({
  //   path: `/app/evenement/participants/${encodeURIComponent(event.nom)}`,
  //   state: { event: eventWithVisitors as any }
  // });
}

// Fonction pour obtenir les visiteurs d'un événement
function getEventVisitors(eventName: string): Visitor[] {
  return visitorsData[eventName] || [];
}

// Fonction pour récupérer l'événement depuis les query params (à utiliser dans le composant enfant)
function getEventFromQuery(): Event | null {
  const eventData = route.query.eventData as string;
  if (eventData) {
    try {
      return JSON.parse(eventData) as Event;
    } catch {
      return null;
    }
  }
  return null;
}

// Exposer les données et fonctions nécessaires
defineExpose({
  getEventVisitors,
  getEventFromQuery,
  events,
  selectedEvent,
  showParticipants
});
</script>
