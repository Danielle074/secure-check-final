<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">


    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-4xl font-bold  mt-20">Ils nous font confiance</h1>
        <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto  mt-12">
          Découvrez les retours d'expérience de nos clients satisfaits
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div class="flex items-center">
            <div class="flex text-yellow-400 mr-2">
              <i class="bx bxs-star" v-for="n in 5" :key="n"></i>
            </div>
            <span class="text-white/90">4.9/5 sur 500+ avis</span>
          </div>
          <div class="flex items-center">
            <i class="bx bx-check-circle text-2xl mr-2"></i>
            <span class="text-white/90">98% de clients satisfaits</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-[#438fab] mb-2">4.9/5</div>
            <p class="text-gray-600">Note moyenne</p>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-[#438fab] mb-2">500+</div>
            <p class="text-gray-600">Avis vérifiés</p>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-[#438fab] mb-2">98%</div>
            <p class="text-gray-600">Clients satisfaits</p>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-[#438fab] mb-2">24h</div>
            <p class="text-gray-600">Support moyen</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Témoignages clients</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment Secure Check a transformé la gestion de rendez-vous de nos clients
          </p>
        </div>

        <!-- Reviews Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-all duration-500"
          >
            <!-- Rating -->
            <div class="flex text-yellow-400 mb-4">
              <i class="bx bxs-star" v-for="n in review.rating" :key="n"></i>
              <i class="bx bx-star" v-for="n in (5 - review.rating)" :key="'empty-' + n"></i>
            </div>

            <!-- Review Text -->
            <p class="text-gray-700 italic mb-6 leading-relaxed">"{{ review.text }}"</p>

            <!-- Author -->
            <div class="flex items-center">
              <img :src="review.photo" :alt="review.name" class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#438fab]">
              <div>
                <p class="font-bold text-gray-900">{{ review.name }}</p>
                <p class="text-gray-600 text-sm">{{ review.position }} • {{ review.company }}</p>
                <p class="text-gray-500 text-xs mt-1">{{ review.industry }}</p>
              </div>
            </div>

            <!-- Verified Badge -->
            <div class="flex items-center mt-4 text-green-600 text-sm">
              <i class="bx bx-check-circle mr-1"></i>
              <span>Avis vérifié</span>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button
            @click="loadMoreReviews"
            class="bg-[#438fab] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#3190a5] transition-colors"
          >
            Charger plus d'avis
          </button>
        </div>
      </div>
    </section>

    <!-- Video Testimonials -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Témoignages vidéo</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Écoutez directement nos clients partager leur expérience
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(video, index) in videoTestimonials"
            :key="index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
          >
            <!-- Video Thumbnail -->
            <div class="relative h-48 bg-gray-200">
              <img :src="video.thumbnail" :alt="video.name" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button class="w-16 h-16 bg-[#438fab] rounded-full flex items-center justify-center text-white hover:bg-[#3190a5] transition-colors">
                  <i class="bx bx-play text-2xl"></i>
                </button>
              </div>
            </div>

            <!-- Video Info -->
            <div class="p-6">
              <h3 class="font-bold text-gray-900 mb-2">{{ video.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ video.position }}, {{ video.company }}</p>
              <p class="text-gray-700 text-sm line-clamp-3">{{ video.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Rejoignez nos clients satisfaits</h2>
        <p class="text-xl mb-8 opacity-90">Découvrez pourquoi Secure Check est la solution de gestion de rendez-vous la mieux notée</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/essai-gratuit">
            <button class="bg-white text-[#438fab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Essai gratuit 90 jours
            </button>
          </RouterLink>
          <RouterLink to="/demo">
            <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
              Voir une démo
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

<!-- Footer  -->
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
      <div class="lg:col-span-1">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
            <img :src="logo" alt="Secure Check" class="w-10 h-10 object-contain">
          </div>
          <div>
            <h2 class="text-2xl font-bold">Secure Check</h2>
            <p class="text-[#438fab] text-sm font-semibold">Solution Professionnelle</p>
          </div>
        </div>
        <p class="text-gray-300 mb-6 leading-relaxed">
          La plateforme de référence pour la gestion intelligente de vos rendez-vous et événements professionnels.
        </p>
        <div class="flex space-x-4">
          <RouterLink to="/facebook" class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors">
            <i class="bx bxl-facebook text-lg"></i>
          </RouterLink>
          <RouterLink to="/twitter" class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors">
            <i class="bx bxl-twitter text-lg"></i>
          </RouterLink>
          <RouterLink to="/linkedin" class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors">
            <i class="bx bxl-linkedin text-lg"></i>
          </RouterLink>
          <RouterLink to="/instagram" class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors">
            <i class="bx bxl-instagram text-lg"></i>
          </RouterLink>
        </div>
      </div>

      <!-- Colonne 2 - Produit -->
      <div>
        <h3 class="font-bold text-lg mb-6 text-white">Produit</h3>
        <ul class="space-y-3">
          <li>
            <RouterLink to="/features" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Fonctionnalités
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/solutions" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Solutions
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/tarifs" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Tarifs
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/avis" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Avis Clients
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Colonne 3 - Entreprise -->
      <div>
        <h3 class="font-bold text-lg mb-6 text-white">Entreprise</h3>
        <ul class="space-y-3">
          <li>
            <RouterLink to="/about" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              À propos
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/careers" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Carrières
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Blog
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/press" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Presse
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Colonne 4 - Support -->
      <div>
        <h3 class="font-bold text-lg mb-6 text-white">Support</h3>
        <ul class="space-y-3">
          <li>
            <RouterLink to="/faq" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Centre d'aide
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Contact
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/status" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Status
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/documentation" class="text-gray-300 hover:text-white transition-colors flex items-center group">
              <i class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"></i>
              Documentation
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="bg-gradient-to-r from-[#438fab] to-[#3190a5] rounded-2xl p-8 mb-12 shadow-2xl">
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
              class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
            <RouterLink to="/newsletter-subscribe">
              <button class="bg-white text-[#438fab] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                S'abonner
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-700 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 text-sm mb-4 md:mb-0">
          <p>&copy; 2024 Secure Check. Tous droits réservés.</p>
        </div>
        <div class="flex space-x-6 text-sm">
          <RouterLink to="/privacy" class="text-gray-400 hover:text-white transition-colors">Confidentialité</RouterLink>
          <RouterLink to="/terms" class="text-gray-400 hover:text-white transition-colors">Conditions</RouterLink>
          <RouterLink to="/cookies" class="text-gray-400 hover:text-white transition-colors">Cookies</RouterLink>
          <RouterLink to="/legal" class="text-gray-400 hover:text-white transition-colors">Mentions légales</RouterLink>
        </div>
      </div>
    </div>
  </div>
</footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Import des images
import header1 from '@/assets/images/Header 1.jpg'
import header2 from '@/assets/images/Header 2.jpg'
import header3 from '@/assets/images/Header 3.jpg'
// ===== IMPORTS DES IMAGES =====

// Import du logo
import logo from "@/assets/images/logo.png";
// Reviews data
const reviews = ref([
  {
    name: 'Marie Dubois',
    position: 'Directrice',
    company: 'Clinique Saint-Louis',
    industry: 'Santé',
    photo: header1,
    rating: 5,
    text: 'Secure Check a révolutionné notre gestion des rendez-vous. Les temps d\'attente ont été réduits de 40% et la satisfaction de nos patients a considérablement augmenté. L\'interface est intuitive et le support réactif.'
  },
  {
    name: 'Thomas Martin',
    position: 'Avocat Associé',
    company: 'Cabinet Martin & Associés',
    industry: 'Droit',
    photo: header2,
    rating: 5,
    text: 'Exceptionnel ! La gestion des conflits d\'agenda est parfaite pour notre cabinet. Nous avons gagné un temps précieux dans l\'organisation des rendez-vous clients et des audiences.'
  },
  {
    name: 'Sophie Lambert',
    position: 'Gérante',
    company: 'Salon Belle Époque',
    industry: 'Beauté',
    photo: header3,
    rating: 5,
    text: 'Les réservations en ligne ont boosté notre activité de 25%. Nos clients adorent la simplicité du système et nous apprécions la gestion automatique des rappels.'
  },
  {
    name: 'Pierre Moreau',
    position: 'Directeur Technique',
    company: 'TechSolutions SARL',
    industry: 'Services techniques',
    photo: header1,
    rating: 4,
    text: 'Solution très complète pour la gestion de nos interventions. L\'optimisation des trajets nous fait économiser du temps et du carburant. Le support est toujours disponible pour nous aider.'
  },
  {
    name: 'Nathalie Petit',
    position: 'Responsable Formation',
    company: 'Académie ProForm',
    industry: 'Formation',
    photo: header2,
    rating: 5,
    text: 'Parfait pour organiser nos sessions de formation. La gestion des groupes et le suivi des inscriptions sont impeccables. Nos formateurs et apprenants sont ravis.'
  },
  {
    name: 'David Leroy',
    position: 'Agent Immobilier',
    company: 'ImmoPremium',
    industry: 'Immobilier',
    photo: header3,
    rating: 5,
    text: 'La coordination des visites est devenue un jeu d\'enfant. L\'application mobile permet à nos agents de mettre à jour leur planning en temps réel, où qu\'ils soient.'
  }
])

// Video testimonials
const videoTestimonials = ref([
  {
    name: 'Dr. Claire Bernard',
    position: 'Médecin Directrice',
    company: 'Polyclinique Central',
    thumbnail: header1,
    excerpt: 'Découvrez comment Secure Check a transformé la gestion de notre clinique et amélioré l\'expérience patient.'
  },
  {
    name: 'Marc Dupont',
    position: 'CEO',
    company: 'Consulting Pro',
    thumbnail: header2,
    excerpt: 'Témoignage sur l\'impact de Secure Check sur notre productivité et notre organisation interne.'
  },
  {
    name: 'Laura Sanchez',
    position: 'Responsable Customer Success',
    company: 'Secure Check',
    thumbnail: header3,
    excerpt: 'Retour d\'expérience sur l\'accompagnement de nos clients vers la digitalisation de leur gestion.'
  }
])

// Load more reviews function
const loadMoreReviews = () => {
  // In a real app, this would fetch more reviews from an API
  reviews.value.push(...reviews.value.slice(0, 3))
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
