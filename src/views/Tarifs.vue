<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-4xl font-bold mt-20">Des tarifs adaptés à votre entreprise</h1>
        <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mt-12">
          Choisissez la formule qui correspond le mieux à vos besoins de gestion de rendez-vous
        </p>
      </div>
    </section>

    <!-- Tarifs Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Billing Toggle -->
        <div class="flex justify-center mb-16">
          <div class="bg-gray-100 rounded-2xl p-2 flex">
            <button
              @click="billingPeriod = 'monthly'"
              :class="[
                'px-8 py-3 rounded-xl font-semibold transition-all duration-300',
                billingPeriod === 'monthly'
                  ? 'bg-white text-[#438fab] shadow-lg'
                  : 'text-gray-600 hover:text-[#438fab]',
              ]"
            >
              Facturation mensuelle
            </button>
            <button
              @click="billingPeriod = 'yearly'"
              :class="[
                'px-8 py-3 rounded-xl font-semibold transition-all duration-300',
                billingPeriod === 'yearly'
                  ? 'bg-white text-[#438fab] shadow-lg'
                  : 'text-gray-600 hover:text-[#438fab]',
              ]"
            >
              Facturation annuelle
              <span class="text-sm text-green-600 ml-1">-20%</span>
            </button>
          </div>
        </div>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Plan Starter -->
          <div
            class="bg-white rounded-2xl shadow-xl border border-gray-200 transform hover:-translate-y-2 transition-all duration-500"
          >
            <div class="p-8 border-b border-gray-200 min-h-[280px] flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p class="text-gray-600 mb-6">Parfait pour les petites entreprises</p>
                <div class="flex items-baseline mb-6">
                  <span class="text-4xl font-bold text-gray-900">{{
                    billingPeriod === "monthly" ? "$29" : "$279"
                  }}</span>
                  <span class="text-gray-600 ml-2"
                    >/{{ billingPeriod === "monthly" ? "mois" : "an" }}</span
                  >
                </div>
              </div>
              <button
                class="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Commencer
              </button>
            </div>
            <div class="p-8">
              <h4 class="font-semibold text-gray-900 mb-4">Ce qui est inclus :</h4>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Jusqu'à 50 rendez-vous/mois</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Notifications email</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Support par email</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>4 utilisateurs</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Conformité RGPD</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Plan Professional -->
          <div
            class="bg-white rounded-2xl shadow-2xl border-2 border-[#438fab] transform hover:-translate-y-2 transition-all duration-500 relative"
          >
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span class="bg-[#438fab] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Le plus populaire
              </span>
            </div>
            <div class="p-8 border-b border-gray-200 min-h-[280px] flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p class="text-gray-600 mb-6">Idéal pour les PME, ONG,</p>
                <div class="flex items-baseline mb-6">
                  <span class="text-4xl font-bold text-gray-900">{{
                    billingPeriod === "monthly" ? "$79" : "$759"
                  }}</span>
                  <span class="text-gray-600 ml-2"
                    >/{{ billingPeriod === "monthly" ? "mois" : "an" }}</span
                  >
                </div>
              </div>
              <button
                class="w-full bg-[#438fab] text-white py-3 rounded-xl font-semibold hover:bg-[#3190a5] transition-colors"
              >
                Commencer
              </button>
            </div>
            <div class="p-8">
              <h4 class="font-semibold text-gray-900 mb-4">Tout dans Starter, plus :</h4>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Rendez-vous illimités</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Notifications SMS</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Support prioritaire</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Jusqu'à 20 utilisateurs</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Conformité RGPD</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Plan Enterprise -->
          <div
            class="bg-white rounded-2xl shadow-xl border border-gray-200 transform hover:-translate-y-2 transition-all duration-500"
          >
            <div class="p-8 border-b border-gray-200 min-h-[280px] flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p class="text-gray-600 mb-6">Pour les grandes organisations</p>
              </div>
              <button
                class="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Nous contacter
              </button>
            </div>
            <div class="p-8">
              <h4 class="font-semibold text-gray-900 mb-4">Tout dans Professional, plus :</h4>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Utilisateurs illimités</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Support dédié 24/7</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Personnalisation avancée</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Formation sur site</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Intégrations API</span>
                </li>
                <li class="flex items-center">
                  <i class="bx bx-check text-green-500 text-xl mr-3"></i>
                  <span>Conformité RGPD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          <p class="text-xl text-gray-600">Tout ce que vous devez savoir sur nos tarifs</p>
        </div>

        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-2xl p-6 shadow-lg">
            <button
              @click="toggleFaq(index)"
              class="flex justify-between items-center w-full text-left"
            >
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
              <i
                :class="[
                  'bx text-2xl transition-transform duration-300',
                  faq.open ? 'bx-chevron-up text-[#438fab]' : 'bx-chevron-down text-gray-400',
                ]"
              ></i>
            </button>
            <div v-show="faq.open" class="mt-4 text-gray-600 leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Prêt à simplifier votre gestion de rendez-vous ?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Rejoignez des milliers d'entreprises qui font confiance à Secure Check
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/essai-gratuit">
            <button
              class="bg-white text-[#438fab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Essai gratuit 90 jours
            </button>
          </RouterLink>
          <RouterLink to="/demo">
            <button
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Demander une démo
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer Wahooo ! -->
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
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors"
              >
                <i class="bx bxl-facebook text-lg"></i>
              </RouterLink>
              <RouterLink
                to="/twitter"
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors"
              >
                <i class="bx bxl-twitter text-lg"></i>
              </RouterLink>
              <RouterLink
                to="/linkedin"
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors"
              >
                <i class="bx bxl-linkedin text-lg"></i>
              </RouterLink>
              <RouterLink
                to="/instagram"
                class="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-[#438fab] transition-colors"
              >
                <i class="bx bxl-instagram text-lg"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Colonne 2 - Produit -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-white">Produit</h3>
            <ul class="space-y-3">
              <li>
                <RouterLink
                  to="/features"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Fonctionnalités
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/solutions"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Solutions
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/tarifs"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Tarifs
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/avis"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
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
                <RouterLink
                  to="/about"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  À propos
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Contact
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/blog"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Blog
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/carriere"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Carrières
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 4 - Support -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-white">Support</h3>
            <ul class="space-y-3">
              <li>
                <RouterLink
                  to="/faq"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  FAQ
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/assistance"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Assistance
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/privacy"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Politique de confidentialité
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/terms"
                  class="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-2 group-hover:translate-x-1 transition-transform"
                  ></i>
                  Conditions d'utilisation
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bas de footer -->
        <div class="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          © 2025 Secure Check. Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      billingPeriod: "monthly",
      faqs: [
        {
          question: "Comment puis-je m’inscrire ?",
          answer: "Vous pouvez vous inscrire en quelques clics via notre page d’inscription.",
          open: false,
        },
        {
          question: "Y a-t-il une période d’essai gratuite ?",
          answer: "Oui, nous offrons 30 jours d’essai gratuit sans carte bancaire.",
          open: false,
        },
        {
          question: "Puis-je changer de plan plus tard ?",
          answer: "Absolument, vous pouvez passer à un plan supérieur à tout moment.",
          open: false,
        },
      ],
      logo: "/images/logo-securecheck.png",
    };
  },
  methods: {
    toggleFaq(index: number) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>
