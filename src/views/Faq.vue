<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">

    <!-- Hero Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-12 sm:mt-16 animate-fade-in-down">Centre d'aide</h1>
        <p class="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16 animate-fade-in-up">
          Trouvez rapidement des réponses à vos questions sur Secure Check
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mt-4 sm:mt-6 animate-fade-in-up" style="animation-delay: 0.2s;">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Poser votre question..."
              class="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#438fab] bg-white transform transition-transform hover:scale-105 duration-300 text-sm sm:text-base"
              @focus="scaleInput"
              @blur="resetInput"
            >
            <i class="bx bx-search absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg sm:text-xl"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Navigation -->
    <section class="py-8 sm:py-12 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base',
              activeCategory === category.id
                ? 'bg-[#438fab] text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Category Title -->
        <div class="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {{ getCategoryTitle(activeCategory) }}
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            {{ getCategoryDescription(activeCategory) }}
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-4 sm:space-y-6">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="index"
            class="faq-item bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-105"
            :style="`transition-delay: ${index * 0.1}s`"
          >
            <button
              @click="toggleFaq(faq.id)"
              class="flex justify-between items-center w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-300"
            >
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4">{{ faq.question }}</h3>
              <i
                :class="[
                  'bx text-xl sm:text-2xl transition-all duration-300 flex-shrink-0 transform',
                  faq.open ? 'bx-chevron-up text-[#438fab] rotate-180' : 'bx-chevron-down text-gray-400'
                ]"
              ></i>
            </button>
            <div v-show="faq.open" class="px-4 sm:px-6 pb-4 sm:pb-6 transition-all duration-500 animate-fade-in">
              <div class="text-gray-600 leading-relaxed prose prose-sm max-w-none">
                <p class="text-sm sm:text-base">{{ faq.answer }}</p>
                <div v-if="faq.steps" class="mt-3 sm:mt-4 space-y-2">
                  <div v-for="(step, stepIndex) in faq.steps" :key="stepIndex" class="flex items-start transform transition-transform hover:translate-x-2 duration-300">
                    <span class="bg-[#438fab] text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">
                      {{ stepIndex + 1 }}
                    </span>
                    <span class="text-sm sm:text-base">{{ step }}</span>
                  </div>
                </div>
                <div v-if="faq.note" class="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200 transform transition-transform hover:scale-105 duration-300">
                  <p class="text-blue-800 text-xs sm:text-sm"><strong>Note :</strong> {{ faq.note }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredFaqs.length === 0" class="text-center py-8 sm:py-12 animate-fade-in-up">
          <i class="bx bx-search text-4xl sm:text-5xl lg:text-6xl text-gray-300 mb-3 sm:mb-4"></i>
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Aucun résultat trouvé</h3>
          <p class="text-gray-600 text-sm sm:text-base">Essayez d'autres mots-clés ou parcourez les différentes catégories</p>
        </div>
      </div>
    </section>

    <!-- Contact Support -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-200 transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
          <i class="bx bx-support text-4xl sm:text-5xl lg:text-6xl text-[#438fab] mb-4 sm:mb-6 "></i>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Vous ne trouvez pas votre réponse ?</h2>
          <p class="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Notre équipe de support est là pour vous aider rapidement et efficacement
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="mailto:support@securecheck.com" class="bg-[#438fab] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#3190a5] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base">
              <i class="bx bx-envelope mr-2"></i>
              Envoyer un email
            </a>
            <a href="tel:+33123456789" class="border-2 border-[#438fab] text-[#438fab] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#438fab] hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base">
              <i class="bx bx-phone mr-2"></i>
              Nous appeler
            </a>
          </div>
          <div class="mt-6 sm:mt-8 text-gray-500 text-sm sm:text-base">
            <p>📧 support@securecheck.com • 📞 +33 1 23 45 67 89</p>
            <p class="text-xs sm:text-sm mt-2">Temps de réponse moyen : moins de 2 heures</p>
          </div>
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

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <!-- Section principale du footer -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <!-- Colonne 1 - Logo et description -->
          <div class="lg:col-span-1 animate-fade-in-up">
            <div class="flex items-center space-x-3 mb-4 sm:mb-6 transform transition-transform hover:scale-105 duration-300">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                <img :src="logo" alt="Secure Check" class="w-8 h-8 sm:w-10 sm:h-10 object-contain">
              </div>
              <div>
                <h2 class="text-xl sm:text-2xl font-bold">Secure Check</h2>
                <p class="text-[#438fab] text-xs sm:text-sm font-semibold">Solution Professionnelle</p>
              </div>
            </div>
            <p class="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              La plateforme de référence pour la gestion intelligente de vos rendez-vous et événements professionnels.
            </p>
            <div class="flex space-x-3 sm:space-x-4">
              <RouterLink to="/facebook" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110">
                <i class="bx bxl-facebook text-sm sm:text-lg"></i>
              </RouterLink>
              <RouterLink to="/twitter" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110">
                <i class="bx bxl-twitter text-sm sm:text-lg"></i>
              </RouterLink>
              <RouterLink to="/linkedin" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110">
                <i class="bx bxl-linkedin text-sm sm:text-lg"></i>
              </RouterLink>
              <RouterLink to="/instagram" class="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110">
                <i class="bx bxl-instagram text-sm sm:text-lg"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Colonne 2 - Produit -->
          <div class="animate-fade-in-up" style="animation-delay: 0.1s;">
            <h3 class="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Produit</h3>
            <ul class="space-y-2 sm:space-y-3">
              <li v-for="link in productLinks" :key="link.to">
                <RouterLink :to="link.to" class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-sm sm:text-base">
                  <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 3 - Entreprise -->
          <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
            <h3 class="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Entreprise</h3>
            <ul class="space-y-2 sm:space-y-3">
              <li v-for="link in companyLinks" :key="link.to">
                <RouterLink :to="link.to" class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-sm sm:text-base">
                  <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 4 - Support -->
          <div class="animate-fade-in-up" style="animation-delay: 0.3s;">
            <h3 class="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Support</h3>
            <ul class="space-y-2 sm:space-y-3">
              <li v-for="link in supportLinks" :key="link.to">
                <RouterLink :to="link.to" class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-sm sm:text-base">
                  <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="bg-gradient-to-r from-[#438fab] to-[#3190a5] rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-2xl transform transition-all duration-500 hover:scale-105 animate-fade-in-up">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="mb-4 sm:mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Restez informé</h3>
              <p class="text-white/90 text-sm sm:text-base">Recevez nos dernières actualités et conseils</p>
            </div>
            <div class="flex-1 max-w-md w-full">
              <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transform transition-transform hover:scale-105 duration-300 text-sm sm:text-base"
                >
                <RouterLink to="/newsletter-subscribe" class="w-full sm:w-auto">
                  <button class="w-full sm:w-auto bg-white text-[#438fab] px-4 sm:px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base">
                    S'abonner
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-gray-700 pt-6 sm:pt-8 animate-fade-in-up">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
              <p>&copy; 2024 Secure Check. Tous droits réservés.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
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
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-[#438fab] text-white rounded-full shadow-lg hover:bg-[#3190a5] transition-all duration-300 flex items-center justify-center z-50 group animate-fade-in-up"
      aria-label="Retour en haut"
    >
      <i class="bx bx-chevron-up text-xl sm:text-2xl group-hover:-translate-y-1 transition-transform"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// Search and category state
const searchQuery = ref('')
const activeCategory = ref('general')
const showScrollTop = ref(false)

// ===== IMPORTS DES IMAGES =====
import logo from "@/assets/images/logo.png";

// Navigation links
const productLinks = [
  { to: '/features', text: 'Fonctionnalités' },
  { to: '/solutions', text: 'Solutions' },
  { to: '/tarifs', text: 'Tarifs' },
  { to: '/avis', text: 'Avis Clients' }
]

const companyLinks = [
  { to: '/about', text: 'À propos' },
  { to: '/careers', text: 'Carrières' },
  { to: '/blog', text: 'Blog' },
  { to: '/press', text: 'Presse' }
]

const supportLinks = [
  { to: '/faq', text: 'Centre d\'aide' },
  { to: '/contact', text: 'Contact' },
  { to: '/status', text: 'Status' },
  { to: '/documentation', text: 'Documentation' }
]

const legalLinks = [
  { to: '/privacy', text: 'Confidentialité' },
  { to: '/terms', text: 'Conditions' },
  { to: '/cookies', text: 'Cookies' },
  { to: '/legal', text: 'Mentions légales' }
]

// Gestion du scroll
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Animation pour la search bar
const scaleInput = (event: Event) => {
  const input = event.target as HTMLElement
  input.style.transform = 'scale(1.05)'
}

const resetInput = (event: Event) => {
  const input = event.target as HTMLElement
  input.style.transform = 'scale(1)'
}

// Setup scroll animations
const setupScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  }, { threshold: 0.1 })

  // Observer les éléments FAQ
  document.querySelectorAll('.faq-item').forEach(item => {
    observer.observe(item)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(setupScrollAnimations, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// FAQ categories
const categories = [
  { id: 'general', name: 'Général' },
  { id: 'compte', name: 'Compte & Facturation' },
  { id: 'fonctionnalites', name: 'Fonctionnalités' },
  { id: 'technique', name: 'Support Technique' },
  { id: 'securite', name: 'Sécurité & Données' }
]

// FAQ data
const faqs = ref([
  // General
  {
    id: 1,
    category: 'general',
    question: 'Qu\'est-ce que Secure Check ?',
    answer: 'Secure Check est une plateforme SaaS complète de gestion de rendez-vous et d\'événements professionnels. Elle permet aux entreprises de planifier, organiser et suivre leurs rendez-vous avec des outils avancés de notification, de reporting et d\'intégration.',
    open: false
  },
  {
    id: 2,
    category: 'general',
    question: 'Secure Check est-il adapté à mon entreprise ?',
    answer: 'Oui, Secure Check est conçu pour s\'adapter à tous types d\'entreprises, des petites structures aux grandes organisations. Nous proposons des solutions spécifiques pour différents secteurs : santé, services professionnels, commerce, formation, etc.',
    open: false
  },
  {
    id: 3,
    category: 'general',
    question: 'Comment démarrer avec Secure Check ?',
    answer: 'Le démarrage est simple et rapide : créez votre compte, configurez vos préférences, importez vos contacts et commencez à planifier vos rendez-vous. Notre équipe d\'onboarding vous accompagne si nécessaire.',
    steps: [
      'Créez votre compte gratuitement',
      'Configurez vos préférences et horaires',
      'Importez vos contacts existants',
      'Commencez à planifier vos rendez-vous'
    ],
    open: false
  },

  // Compte & Facturation
  {
    id: 4,
    category: 'compte',
    question: 'Puis-je changer de plan à tout moment ?',
    answer: 'Oui, vous pouvez passer à un plan supérieur à tout moment. Le changement est immédiat et vous serez facturé au prorata. Pour passer à un plan inférieur, le changement prendra effet à la fin de votre période de facturation en cours.',
    open: false
  },
  {
    id: 5,
    category: 'compte',
    question: 'Y a-t-il des frais de mise en place ?',
    answer: 'Non, il n\'y a aucun frais de mise en place ou d\'installation. Vous payez uniquement votre abonnement mensuel ou annuel selon la formule choisie.',
    open: false
  },
  {
    id: 6,
    category: 'compte',
    question: 'Proposez-vous une période d\'essai gratuite ?',
    answer: 'Oui, nous offrons un essai gratuit de 30 jours pour tous nos plans. Aucune carte de crédit n\'est requise pour commencer. Vous pouvez tester toutes les fonctionnalités pendant cette période.',
    open: false
  },

  // Fonctionnalités
  {
    id: 7,
    category: 'fonctionnalites',
    question: 'Comment fonctionnent les notifications automatiques ?',
    answer: 'Secure Check envoie automatiquement des rappels par email et SMS à vos clients avant leurs rendez-vous. Vous pouvez personnaliser le délai d\'envoi (24h, 48h, 1 semaine avant) et le contenu des messages.',
    open: false
  },
  {
    id: 8,
    category: 'fonctionnalites',
    question: 'Puis-je intégrer Secure Check avec mon agenda existant ?',
    answer: 'Absolument ! Secure Check s\'intègre avec Google Calendar, Office 365, Apple Calendar et la plupart des systèmes d\'agenda populaires. La synchronisation est bidirectionnelle et en temps réel.',
    open: false
  },
  {
    id: 9,
    category: 'fonctionnalites',
    question: 'Comment gérer les annulations et reports de rendez-vous ?',
    answer: 'Vos clients peuvent annuler ou reporter leurs rendez-vous directement depuis le lien de confirmation. Vous recevez une notification et le créneau se libère automatiquement dans votre planning.',
    open: false
  },

  // Support Technique
  {
    id: 10,
    category: 'technique',
    question: 'Quelle est la disponibilité du service ?',
    answer: 'Secure Check garantit une disponibilité de 99,9%. Notre infrastructure est hébergée sur des serveurs redondants avec sauvegardes automatiques quotidiennes.',
    open: false
  },
  {
    id: 11,
    category: 'technique',
    question: 'Comment contacter le support technique ?',
    answer: 'Notre support est disponible par email à support@securecheck.com, par téléphone au +33 1 23 45 67 89, ou via le chat en direct dans votre espace client. Temps de réponse moyen : moins de 2 heures.',
    open: false
  },

  // Sécurité & Données
  {
    id: 12,
    category: 'securite',
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Oui, la sécurité de vos données est notre priorité. Toutes les données sont chiffrées de bout en bout (AES-256), nos serveurs sont certifiés ISO 27001 et nous respectons strictement le RGPD.',
    open: false
  },
  {
    id: 13,
    category: 'securite',
    question: 'Secure Check est-il conforme au RGPD ?',
    answer: 'Oui, Secure Check est entièrement conforme au Règlement Général sur la Protection des Données (RGPD). Nous avons nommé un DPO et mettons à votre disposition tous les outils nécessaires pour respecter vos obligations.',
    note: 'Vous pouvez télécharger notre addendum de traitement des données depuis votre espace client.',
    open: false
  }
])

// Computed properties
const filteredFaqs = computed(() => {
  let filtered = faqs.value.filter(faq => faq.category === activeCategory.value)

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Methods
const toggleFaq = (id: number) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.open = !faq.open
  }
}

const getCategoryTitle = (categoryId: string) => {
  const category = categories.find(c => c.id === categoryId)
  return category ? `Questions ${category.name}` : 'FAQ'
}

const getCategoryDescription = (categoryId: string) => {
  const descriptions: { [key: string]: string } = {
    general: 'Questions générales sur Secure Check et son fonctionnement',
    compte: 'Gestion de compte, facturation et abonnements',
    fonctionnalites: 'Utilisation des fonctionnalités et intégrations',
    technique: 'Support, dépannage et aspects techniques',
    securite: 'Sécurité des données et conformité'
  }
  return descriptions[categoryId] || 'Trouvez des réponses à vos questions'
}
</script>

<style scoped>
.prose {
  max-width: none;
}

/* Animations personnalisées */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Transition pour les éléments FAQ */
.faq-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.faq-item.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive adjustments for very small screens */
@media (max-width: 320px) {
  .px-4 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

/* Large screen adjustments */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1280px;
  }

  .max-w-4xl {
    max-width: 1024px;
  }
}
</style>
