<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-4xl font-bold mt-20 animate-fade-in-down">
          Des solutions adaptées à chaque métier
        </h1>
        <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mt-12 animate-fade-in-up">
          Découvrez comment Secure Check s'adapte à vos besoins spécifiques pour transformer votre
          gestion de rendez-vous
        </p>
      </div>
    </section>

    <!-- Solutions by Industry -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Solutions par secteur d'activité
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Des fonctionnalités spécifiques conçues pour répondre aux défis uniques de votre secteur
          </p>
        </div>

        <!-- Solutions Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(solution, index) in solutions"
            :key="index"
            class="solution-card bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transform transition-all duration-500 group cursor-pointer"
            @click="selectedSolution = solution"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-[#438fab] to-[#3190a5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i :class="solution.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ solution.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-4">{{ solution.description }}</p>
            <div
              class="flex items-center text-[#438fab] font-semibold transform transition-transform group-hover:translate-x-2 duration-300"
            >
              <span>En savoir plus</span>
              <i class="bx bx-chevron-right ml-2"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Solution Modal -->
    <transition name="modal-fade">
      <div
        v-if="selectedSolution"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <div
          class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 modal-content"
        >
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-[#438fab] to-[#3190a5] rounded-2xl flex items-center justify-center transform transition-transform hover:scale-110 duration-300"
                >
                  <i :class="selectedSolution.icon" class="text-white text-xl"></i>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-gray-900">{{ selectedSolution.title }}</h2>
                  <p class="text-gray-600">{{ selectedSolution.subtitle }}</p>
                </div>
              </div>
              <button
                @click="selectedSolution = null"
                class="text-gray-400 hover:text-gray-600 transform transition-transform hover:scale-110 duration-300"
              >
                <i class="bx bx-x text-2xl"></i>
              </button>
            </div>

            <!-- Contenu modal -->
            <div class="grid lg:grid-cols-2 gap-8 items-start">
              <!-- Colonne gauche -->
              <div>
                <img
                  :src="selectedSolution.image"
                  :alt="selectedSolution.title"
                  class="w-full max-h-[400px] object-cover rounded-xl transform transition-transform hover:scale-105 duration-300"
                />
                <h3 class="text-lg font-semibold text-gray-900 mb-4 mt-4">Avantages clés</h3>
                <ul class="space-y-3">
                  <li
                    v-for="(benefit, index) in selectedSolution.benefits"
                    :key="index"
                    class="flex items-center transform transition-transform hover:translate-x-2 duration-200"
                  >
                    <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                    <span class="text-gray-700">{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- Colonne droite -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                  Fonctionnalités spécifiques
                </h3>
                <div class="space-y-4">
                  <!-- Fonctions codées en dur, plus de dynamique -->
                  <div
                    class="feature-card bg-gray-50 rounded-xl p-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    <div class="flex items-center mb-2">
                      <i class="bx bx-star text-[#438fab] text-lg mr-3"></i>
                      <h4 class="font-semibold text-gray-900">Fonctionnalité 1</h4>
                    </div>
                    <p class="text-gray-600 text-sm">Description de la fonctionnalité 1.</p>
                  </div>
                  <div
                    class="feature-card bg-gray-50 rounded-xl p-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    <div class="flex items-center mb-2">
                      <i class="bx bx-star text-[#438fab] text-lg mr-3"></i>
                      <h4 class="font-semibold text-gray-900">Fonctionnalité 2</h4>
                    </div>
                    <p class="text-gray-600 text-sm">Description de la fonctionnalité 2.</p>
                  </div>
                  <div
                    class="feature-card bg-gray-50 rounded-xl p-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    <div class="flex items-center mb-2">
                      <i class="bx bx-star text-[#438fab] text-lg mr-3"></i>
                      <h4 class="font-semibold text-gray-900">Fonctionnalité 3</h4>
                    </div>
                    <p class="text-gray-600 text-sm">Description de la fonctionnalité 3.</p>
                  </div>
                </div>

                <div
                  class="mt-8 p-6 bg-gradient-to-r from-[#438fab] to-[#3190a5] rounded-xl text-white transform transition-all duration-200 hover:scale-105"
                >
                  <h4 class="font-bold text-lg mb-2">Prêt à démarrer ?</h4>
                  <p class="text-white/90 mb-4">{{ selectedSolution.ctaText }}</p>
                  <RouterLink to="/essai-gratuit">
                    <button
                      class="bg-white text-[#438fab] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 w-full"
                    >
                      Essai gratuit 90 jours
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Use Cases Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Cas d'utilisation
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Découvrez comment nos clients utilisent Secure Check au quotidien
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(usecase, index) in useCases"
            :key="index"
            class="usecase-card bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="flex items-center mb-4">
              <img
                :src="usecase.logo"
                :alt="usecase.company"
                class="w-12 h-12 rounded-lg object-cover mr-4 transform transition-transform hover:scale-110 duration-300"
              />
              <div>
                <h3 class="font-bold text-gray-900">{{ usecase.company }}</h3>
                <p class="text-gray-600 text-sm">{{ usecase.industry }}</p>
              </div>
            </div>
            <p class="text-gray-700 italic mb-4">"{{ usecase.quote }}"</p>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">{{ usecase.result }}</span>
              <div class="flex text-yellow-400">
                <i
                  class="bx bxs-star transform transition-transform hover:scale-125 duration-300"
                  v-for="n in 5"
                  :key="n"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in-left">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Intégration transparente
            </h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Secure Check s'intègre parfaitement à votre écosystème existant. Connectez-vous avec
              vos outils préférés et travaillez plus efficacement.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(integration, index) in integrations"
                :key="index"
                class="flex items-center space-x-3 transform transition-all duration-300 hover:scale-105"
              >
                <div
                  class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#438fab] transition-colors duration-300"
                >
                  <i
                    :class="integration.icon"
                    class="text-gray-600 text-lg group-hover:text-white transition-colors duration-300"
                  ></i>
                </div>
                <span class="text-gray-700 font-medium">{{ integration.name }}</span>
              </div>
            </div>
          </div>
          <div class="animate-fade-in-right">
            <div
              class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 transform transition-all duration-500 hover:scale-105"
            >
              <img
                :src="header1"
                alt="Intégrations"
                class="w-full h-64 object-cover rounded-xl transform transition-transform hover:scale-105 duration-500"
              />
              <div class="text-center mt-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Connectivité universelle</h3>
                <p class="text-gray-600">Plus de 50 intégrations disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
          Trouvez la solution parfaite pour votre entreprise
        </h2>
        <p class="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
          Notre équipe d'experts est là pour vous accompagner dans votre transformation digitale
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400"
        >
          <RouterLink to="/essai-gratuit">
            <button
              class="bg-white text-[#438fab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Essai gratuit 90 jours
            </button>
          </RouterLink>
          <RouterLink to="/demo">
            <button
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Demander une démo personnalisée
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <!-- Effet de particules -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div class="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div class="absolute bottom-20 left-1/4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div class="absolute bottom-10 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 py-16">
        <!-- Section principale du footer -->
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          <!-- Colonne 1 - Logo et description -->
          <div class="lg:col-span-1 animate-fade-in-up">
            <div
              class="flex items-center space-x-3 mb-6 transform transition-transform hover:scale-105 duration-300"
            >
              <div
                class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
              >
                <img :src="logo" alt="Secure Check" class="w-10 h-10 object-contain" />
              </div>
              <div>
                <h2 class="text-2xl font-bold">Secure Check</h2>
                <p class="text-[#438fab] text-sm font-semibold">Solution Professionnelle</p>
              </div>
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed">
              La plateforme de référence pour la gestion intelligente de vos rendez-vous et
              événements professionnels.
            </p>
            <div class="flex space-x-4">
              <RouterLink
                to="/facebook"
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-facebook text-lg"></i>
              </RouterLink>
              <RouterLink
                to="/twitter"
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-twitter text-lg"></i>
              </RouterLink>
              <RouterLink
                to="/linkedin"
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-linkedin text-lg"></i>
              </RouterLink>
              <RouterLink
                to="/instagram"
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-instagram text-lg"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Colonne 2 - Produit -->
          <div class="animate-fade-in-up" style="animation-delay: 0.1s">
            <h3 class="font-bold text-lg mb-6 text-white">Produit</h3>
            <ul class="space-y-3">
              <li v-for="link in productLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  ></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 3 - Entreprise -->
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <h3 class="font-bold text-lg mb-6 text-white">Entreprise</h3>
            <ul class="space-y-3">
              <li v-for="link in companyLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  ></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 4 - Support -->
          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <h3 class="font-bold text-lg mb-6 text-white">Support</h3>
            <ul class="space-y-3">
              <li v-for="link in supportLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  ></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div
          class="bg-gradient-to-r from-[#438fab] to-[#3190a5] rounded-2xl p-8 mb-12 shadow-2xl transform transition-all duration-500 hover:scale-105 animate-fade-in-up"
        >
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="mb-6 md:mb-0 md:mr-8">
              <h3 class="text-2xl font-bold text-white mb-2">Restez informé</h3>
              <p class="text-white/90">Recevez nos dernières actualités et conseils</p>
            </div>
            <div class="flex-1 max-w-md">
              <div class="flex space-x-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transform transition-transform hover:scale-105 duration-300"
                />
                <RouterLink to="/newsletter-subscribe">
                  <button
                    class="bg-white text-[#438fab] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  >
                    S'abonner
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-gray-700 pt-8 animate-fade-in-up">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Secure Check. Tous droits réservés.</p>
            </div>
            <div class="flex space-x-6 text-sm">
              <RouterLink
                v-for="link in legalLinks"
                :key="link.to"
                :to="link.to"
                class="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {{ link.text }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Bouton Retour en Haut -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-[#438fab] text-white rounded-full shadow-lg hover:bg-[#3190a5] transition-all duration-300 flex items-center justify-center z-50 group animate-fade-in-up"
      aria-label="Retour en haut"
    >
      <i class="bx bx-chevron-up text-2xl group-hover:-translate-y-1 transition-transform"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

// Import des images
import header1 from "@/assets/images/Header 1.jpg";
import header2 from "@/assets/images/Header 2.jpg";
import header3 from "@/assets/images/Header 3.jpg";
import logo from "@/assets/images/logo.png";

// 🔹 Type pour une solution
interface Solution {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  features: { title: string; description: string }[];
  ctaText: string;
}

// 🔹 Réf Vue avec type
const selectedSolution = ref<Solution | null>(null);

const showScrollTop = ref(false);

// Navigation links
const productLinks = [
  { to: "/features", text: "Fonctionnalités" },
  { to: "/solutions", text: "Solutions" },
  { to: "/tarifs", text: "Tarifs" },
  { to: "/avis", text: "Avis Clients" },
];

const companyLinks = [
  { to: "/about", text: "À propos" },
  { to: "/careers", text: "Carrières" },
  { to: "/blog", text: "Blog" },
  { to: "/press", text: "Presse" },
];

const supportLinks = [
  { to: "/faq", text: "Centre d'aide" },
  { to: "/contact", text: "Contact" },
  { to: "/status", text: "Status" },
  { to: "/documentation", text: "Documentation" },
];

const legalLinks = [
  { to: "/privacy", text: "Confidentialité" },
  { to: "/terms", text: "Conditions" },
  { to: "/cookies", text: "Cookies" },
  { to: "/legal", text: "Mentions légales" },
];

// Gestion du scroll
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;

  const elements = document.querySelectorAll(".solution-card, .usecase-card, .feature-card");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      element.classList.add("animate-fade-in-up");
    }
  });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".solution-card, .usecase-card, .feature-card").forEach((item) => {
    observer.observe(item);
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  setTimeout(setupScrollAnimations, 100);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const solutions: Solution[] = [
  {
    icon: "bx bx-briefcase",
    title: "Services professionnels",
    subtitle: "Pour les cabinets d'avocats, consultants et experts-comptables",
    description:
      "Gérez efficacement vos rendez-vous clients avec des outils dédiés aux professions réglementées.",
    image: header2,
    benefits: [
      "Gestion des conflits d'agenda",
      "Facturation intégrée",
      "Confidentialité renforcée",
      "Rapports d'activité automatiques",
    ],
    features: [
      { title: "Agenda partagé", description: "Collaboration entre associés et collaborateurs" },
      { title: "Gestion des dossiers", description: "Liaison avec vos systèmes de gestion de dossiers" },
      { title: "Facturation", description: "Intégration avec vos logiciels de comptabilité" },
    ],
    ctaText: "Optimisez votre productivité avec notre solution dédiée",
  },
  {
    icon: "bx bx-building",
    title: "Immobilier",
    subtitle: "Pour agences et promoteurs",
    description: "Simplifiez la gestion des visites et rendez-vous clients.",
    image: header3,
    benefits: [
      "Calendrier centralisé",
      "Rappels automatiques",
      "Reporting détaillé",
    ],
    features: [
      { title: "Planification intelligente", description: "Évitez les doubles réservations" },
      { title: "Notifications clients", description: "Alertes et rappels automatiques" },
      { title: "Statistiques", description: "Suivi des performances commerciales" },
    ],
    ctaText: "Boostez vos ventes avec notre solution dédiée",
  },
  {
    icon: "bx bx-heart",
    title: "Santé",
    subtitle: "Pour cliniques et cabinets médicaux",
    description: "Améliorez la prise en charge des patients et la gestion des rendez-vous médicaux.",
    image: header1,
    benefits: [
      "Réduction des temps d'attente",
      "Rappels automatiques pour les patients",
      "Gestion des dossiers médicaux simplifiée",
      "Rapports statistiques clairs",
    ],
    features: [
      { title: "Agenda patient", description: "Planification facile et intuitive" },
      { title: "Notifications SMS", description: "Rappels et confirmations automatiques" },
      { title: "Historique complet", description: "Suivi de chaque patient sur la plateforme" },
    ],
    ctaText: "Améliorez l'expérience patient avec Secure Check",
  },
  {
    icon: "bx bx-store",
    title: "Commerce & Retail",
    subtitle: "Pour boutiques et e-commerce",
    description: "Gérez vos réservations, rendez-vous clients et événements en boutique.",
    image: header2,
    benefits: [
      "Augmentation de la fréquentation",
      "Gestion des événements simplifiée",
      "Meilleure organisation du personnel",
    ],
    features: [
      { title: "Calendrier interactif", description: "Visualisez tous vos rendez-vous en un clin d'œil" },
      { title: "Notifications clients", description: "Rappels automatiques pour chaque réservation" },
      { title: "Suivi des ventes", description: "Analyse de la fréquentation et performance commerciale" },
    ],
    ctaText: "Transformez votre expérience client en boutique",
  },
  {
    icon: "bx bx-movie",
    title: "Événementiel",
    subtitle: "Pour organisateurs d'événements et salles de spectacle",
    description: "Planifiez, gérez et suivez tous vos événements en un seul endroit.",
    image: header3,
    benefits: [
      "Planification simplifiée",
      "Gestion des participants",
      "Rappels automatiques",
      "Analyse post-événement",
    ],
    features: [
      { title: "Calendrier multi-événements", description: "Organisez tous vos événements facilement" },
      { title: "Gestion des participants", description: "Invitations et confirmations automatiques" },
      { title: "Rapports détaillés", description: "Analyse complète après chaque événement" },
    ],
    ctaText: "Gérez vos événements comme un pro avec Secure Check",
  },
];

// Use cases et integrations restent identiques
const useCases = [
  {
    company: "Clinique Saint-Louis",
    industry: "Santé",
    logo: header1,
    quote: "Secure Check a réduit nos temps d'attente de 40% et amélioré la satisfaction patient.",
    result: "+40% de productivité",
  },
  {
    company: "Cabinet Juridique Martin",
    industry: "Droit",
    logo: header2,
    quote:
      "La gestion des rendez-vous clients est devenue un véritable atout pour notre productivité.",
    result: "30% de temps gagné",
  },
  {
    company: "Salon Belle Époque",
    industry: "Beauté",
    logo: header3,
    quote: "Les réservations en ligne ont augmenté notre chiffre d'affaires de 25% en 3 mois.",
    result: "+25% de CA",
  },
];

const integrations = [
  { icon: "bx bxl-google", name: "Google Calendar" },
  { icon: "bx bxl-microsoft", name: "Office 365" },
  { icon: "bx bx-credit-card", name: "Stripe" },
  { icon: "bx bx-qr-scan", name: "QR Code" },
];
</script>

<style scoped>
/* Animations personnalisées */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Transition pour les éléments au scroll */
.solution-card,
.usecase-card,
.feature-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.solution-card:hover,
.usecase-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.solution-card.animate-fade-in-up,
.usecase-card.animate-fade-in-up,
.feature-card.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

/* Animations pour la modal */
.modal-fade-enter-active {
  transition: all 0.3s ease;
}
.modal-fade-leave-active {
  transition: all 0.2s ease;
}
.modal-fade-enter-from {
  opacity: 0;
}
.modal-fade-leave-to {
  opacity: 0;
}

.modal-content {
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Custom animations */
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
</style>
