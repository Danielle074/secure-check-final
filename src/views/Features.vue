<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-14 md:mb-4 lg:mb-6 animate-fade-in-down leading-tight">
          Des fonctionnalités puissantes pour votre entreprise
        </h1>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          Découvrez comment Secure Check révolutionne la gestion de vos rendez-vous et événements
          professionnels
        </p>
      </div>
    </section>

    <!-- Features Overview -->
    <section class="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 animate-fade-in-up">
            Tout ce dont vous avez besoin
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style="animation-delay: 0.1s"
          >
            Une plateforme complète qui s'adapte à tous vos besoins de gestion de rendez-vous
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-item bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
          >
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#438fab] to-[#3190a5] rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              <i :class="feature.icon" class="text-white text-lg sm:text-xl md:text-2xl"></i>
            </div>
            <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
              {{ feature.title }}
            </h3>
            <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Features Section -->
    <section class="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Personnalisation & QR Codes -->
        <div class="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center mb-10 md:mb-14 lg:mb-18">
          <div class="order-1 animate-fade-in-right">
            <div
              class="bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold inline-block mb-2 sm:mb-3 transform transition-transform hover:scale-105 duration-300"
            >
              Personnalisation & QR Codes
            </div>
            <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Une expérience sur mesure
            </h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Donnez une touche unique à votre système avec des QR Codes personnalisés permettant un
              accès rapide, une gestion simplifiée et une expérience utilisateur fluide.
            </p>
            <ul class="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li
                v-for="(item, index) in qrFeatures"
                :key="index"
                class="flex items-start sm:items-center transform transition-transform hover:translate-x-2 duration-300"
              >
                <i class="bx bx-check text-green-500 text-sm sm:text-base md:text-lg mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0"></i>
                <span class="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>

          <div class="order-2 animate-fade-in-left">
            <div
              class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200 transform transition-all duration-500 hover:scale-105"
            >
              <img
                :src="header4"
                alt="QR Code personnalisé"
                class="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
              />
              <div class="text-center">
                <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 leading-tight">
                  QR Code Dynamique
                </h3>
                <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Un moyen moderne et sécurisé d'interagir avec vos clients
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestion des Rendez-vous -->
        <div class="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center mb-10 md:mb-14 lg:mb-18">
          <div class="order-2 lg:order-1 animate-fade-in-left">
            <div
              class="bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold inline-block mb-2 sm:mb-3 transform transition-transform hover:scale-105 duration-300"
            >
              Gestion des Rendez-vous
            </div>
            <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Optimisez votre planning
            </h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Une gestion complète de vos rendez-vous avec des outils intuitifs pour planifier,
              modifier et suivre toutes vos rencontres professionnelles.
            </p>
            <ul class="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li
                v-for="(item, index) in appointmentFeatures"
                :key="index"
                class="flex items-start sm:items-center transform transition-transform hover:translate-x-2 duration-300"
              >
                <i class="bx bx-check text-green-500 text-sm sm:text-base md:text-lg mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0"></i>
                <span class="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
          <div class="order-1 lg:order-2 animate-fade-in-right">
            <div
              class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200 transform transition-all duration-500 hover:scale-105"
            >
              <img
                :src="header1"
                alt="Gestion des rendez-vous"
                class="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
              />
              <div class="text-center">
                <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 leading-tight">
                  Interface intuitive
                </h3>
                <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Visualisez et gérez votre planning en temps réel
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifications Automatiques -->
        <div class="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center mb-10 md:mb-14 lg:mb-18">
          <div class="order-1 animate-fade-in-right">
            <div
              class="bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold inline-block mb-2 sm:mb-3 transform transition-transform hover:scale-105 duration-300"
            >
              Notifications Intelligentes
            </div>
            <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Restez informé en temps réel
            </h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Des notifications personnalisables pour ne jamais manquer un rendez-vous important et
              garder vos clients informés.
            </p>
            <ul class="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li
                v-for="(item, index) in notificationFeatures"
                :key="index"
                class="flex items-start sm:items-center transform transition-transform hover:translate-x-2 duration-300"
              >
                <i class="bx bx-check text-green-500 text-sm sm:text-base md:text-lg mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0"></i>
                <span class="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
          <div class="order-2 animate-fade-in-left">
            <div
              class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200 transform transition-all duration-500 hover:scale-105"
            >
              <img
                :src="header2"
                alt="Notifications"
                class="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
              />
              <div class="text-center">
                <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 leading-tight">
                  Multi-canaux
                </h3>
                <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Recevez des alertes sur tous vos appareils
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sécurité et Confidentialité -->
        <div class="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          <div class="order-2 lg:order-1 animate-fade-in-left">
            <div
              class="bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold inline-block mb-2 sm:mb-3 transform transition-transform hover:scale-105 duration-300"
            >
              Sécurité Avancée
            </div>
            <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Vos données en sécurité
            </h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Une protection maximale de vos données avec des standards de sécurité enterprise et
              une conformité RGPD totale.
            </p>
            <ul class="space-y-1.5 sm:space-y-2 md:space-y-3">
              <li
                v-for="(item, index) in securityFeatures"
                :key="index"
                class="flex items-start sm:items-center transform transition-transform hover:translate-x-2 duration-300"
              >
                <i class="bx bx-check text-green-500 text-sm sm:text-base md:text-lg mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0"></i>
                <span class="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
          <div class="order-1 lg:order-2 animate-fade-in-right">
            <div
              class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200 transform transition-all duration-500 hover:scale-105"
            >
              <img
                :src="header3"
                alt="Sécurité"
                class="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
              />
              <div class="text-center">
                <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 leading-tight">
                  Protection maximale
                </h3>
                <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Vos données sont entre de bonnes mains
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integrations Section -->
    <section class="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 animate-fade-in-up">
            Intégrations puissantes
          </h2>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style="animation-delay: 0.1s"
          >
            Connectez Secure Check à vos outils préférés pour un workflow optimisé
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-center items-stretch">
          <div
            v-for="(integration, index) in integrations"
            :key="index"
            class="integration-item bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110"
            >
              <i :class="integration.icon" class="text-2xl sm:text-3xl md:text-4xl text-gray-600"></i>
            </div>
            <h3 class="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
              {{ integration.name }}
            </h3>
            <p class="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {{ integration.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-8 md:py-12 lg:py-16 bg-gradient-to-r from-[#438fab] to-[#3190a5] text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 animate-fade-in-up leading-tight">
          Prêt à découvrir toutes nos fonctionnalités ?
        </h2>
        <p class="text-sm sm:text-base md:text-lg mb-3 md:mb-4 lg:mb-6 opacity-90 animate-fade-in-up leading-relaxed" style="animation-delay: 0.1s">
          Rejoignez les entreprises qui optimisent leur gestion de rendez-vous avec Secure Check
        </p>
        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up"
          style="animation-delay: 0.2s"
        >
          <RouterLink to="/essai-gratuit" class="w-full sm:w-auto">
            <button
              class="bg-white text-[#438fab] px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              Essai gratuit 90 jours
            </button>
          </RouterLink>
          <RouterLink to="/demo" class="w-full sm:w-auto">
            <button
              class="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              Voir une démo
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-14">
        <!-- Section principale du footer -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-10 lg:mb-14">
          <!-- Colonne 1 - Logo et description -->
          <div class="lg:col-span-1 animate-fade-in-up">
            <div class="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 md:mb-4 transform transition-transform hover:scale-105 duration-300">
              <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img :src="logo" alt="Secure Check" class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain" />
              </div>
              <div>
                <h2 class="text-base sm:text-lg md:text-xl font-bold">Secure Check</h2>
                <p class="text-[#438fab] text-xs sm:text-sm font-semibold">Solution Professionnelle</p>
              </div>
            </div>
            <p class="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
              La plateforme de référence pour la gestion intelligente de vos rendez-vous et
              événements professionnels.
            </p>
            <div class="flex space-x-2 sm:space-x-3">
              <RouterLink
                v-for="(social, index) in socialLinks"
                :key="index"
                :to="social.to"
                class="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i :class="social.icon" class="text-xs sm:text-sm"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Colonne 2 - Produit -->
          <div class="animate-fade-in-up" style="animation-delay: 0.1s">
            <h3 class="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 text-white">Produit</h3>
            <ul class="space-y-1 sm:space-y-1.5 md:space-y-2">
              <li v-for="link in productLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-xs sm:text-sm"
                >
                  <i class="bx bx-chevron-right text-[#438fab] mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 3 - Entreprise -->
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <h3 class="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 text-white">Entreprise</h3>
            <ul class="space-y-1 sm:space-y-1.5 md:space-y-2">
              <li v-for="link in companyLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-xs sm:text-sm"
                >
                  <i class="bx bx-chevron-right text-[#438fab] mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 4 - Support -->
          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <h3 class="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 text-white">Support</h3>
            <ul class="space-y-1 sm:space-y-1.5 md:space-y-2">
              <li v-for="link in supportLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-xs sm:text-sm"
                >
                  <i class="bx bx-chevron-right text-[#438fab] mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="bg-gradient-to-r from-[#438fab] to-[#3190a5] rounded-xl p-4 sm:p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 shadow-2xl transform transition-all duration-500 hover:scale-105 animate-fade-in-up">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <div class="mb-3 lg:mb-0 lg:mr-8 text-center lg:text-left">
              <h3 class="text-base sm:text-lg md:text-xl font-bold text-white mb-1">Restez informé</h3>
              <p class="text-white/90 text-xs sm:text-sm">Recevez nos dernières actualités et conseils</p>
            </div>
            <div class="flex-1 max-w-md w-full">
              <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  class="flex-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transform transition-transform hover:scale-105 duration-300 text-xs sm:text-sm"
                />
                <RouterLink to="/newsletter-subscribe" class="sm:w-auto">
                  <button class="bg-white text-[#438fab] px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap w-full sm:w-auto text-xs sm:text-sm">
                    S'abonner
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-gray-700 pt-3 sm:pt-4 md:pt-6 animate-fade-in-up">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-xs mb-2 md:mb-0">
              <p>&copy; 2024 Secure Check. Tous droits réservés.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs">
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
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-[#438fab] text-white rounded-full shadow-lg hover:bg-[#3190a5] transition-all duration-300 flex items-center justify-center z-50 group animate-fade-in-up"
      aria-label="Retour en haut"
    >
      <i class="bx bx-chevron-up text-base sm:text-lg md:text-xl group-hover:-translate-y-1 transition-transform"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

// Import des images depuis assets
import header1 from "@/assets/images/Header 1.jpg";
import header2 from "@/assets/images/Header 2.jpg";
import header3 from "@/assets/images/Header 3.jpg";
import header4 from "@/assets/images/Header 4.jpg";
import logo from "@/assets/images/logo.png";

// State pour le bouton de retour en haut
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

const socialLinks = [
  { to: "/facebook", icon: "bx bxl-facebook" },
  { to: "/twitter", icon: "bx bxl-twitter" },
  { to: "/linkedin", icon: "bx bxl-linkedin" },
  { to: "/instagram", icon: "bx bxl-instagram" },
];

// Features lists
const qrFeatures = [
  "Génération automatique de QR Codes pour chaque rendez-vous",
  "Personnalisation du design et des couleurs de vos QR Codes",
  "Scan rapide pour confirmer la présence ou valider un accès",
  "Suivi en temps réel des scans et des validations"
];

const appointmentFeatures = [
  "Création de rendez-vous en quelques clics",
  "Gestion des conflits de planning automatique",
  "Annulation et report simplifiés",
  "Historique complet des rendez-vous"
];

const notificationFeatures = [
  "Rappels par email et SMS",
  "Alertes de modifications instantanées",
  "Personnalisation des modèles de messages",
  "Notifications push sur mobile"
];

const securityFeatures = [
  "Chiffrement de bout en bout",
  "Sauvegardes automatiques quotidiennes",
  "Contrôle d'accès granulaire",
  "Audit de sécurité régulier"
];

// Gestion du scroll
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;

  // Animation des éléments au scroll
  const elements = document.querySelectorAll(".feature-item, .integration-item");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      element.classList.add("animate-fade-in-up");
    }
  });
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Setup scroll animations
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

  // Observer les éléments
  document.querySelectorAll(".feature-item, .integration-item").forEach((item) => {
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

// Features data
const features = [
  {
    icon: "bx bx-calendar-check",
    title: "Planning Intelligent",
    description:
      "Gérez vos rendez-vous avec une interface intuitive et des outils de planification avancés.",
  },
  {
    icon: "bx bx-bell",
    title: "Notifications Automatiques",
    description:
      "Envoyez des rappels automatiques par email et SMS à vos clients et collaborateurs.",
  },
  {
    icon: "bx bx-shield",
    title: "Sécurité Renforcée",
    description: "Protégez vos données avec un chiffrement de bout en bout et une conformité RGPD.",
  },
  {
    icon: "bx bx-line-chart",
    title: "Analytics Avancés",
    description: "Suivez vos performances avec des rapports détaillés et des indicateurs clés.",
  },
  {
    icon: "bx bx-group",
    title: "Gestion d'Équipe",
    description:
      "Collaborez efficacement avec votre équipe et gérez les droits d'accès simplement.",
  },
  {
    icon: "bx bx-cog",
    title: "Personnalisation",
    description: "Adaptez l'interface et les workflows à vos processus métiers spécifiques.",
  },
];

// Integrations data
const integrations = [
  {
    icon: "bx bxl-google",
    name: "Google Calendar",
    description: "Synchronisation bidirectionnelle avec votre agenda Google",
  },
  {
    icon: "bx bxl-microsoft",
    name: "Office 365",
    description: "Intégration complète avec la suite Microsoft",
  },
  {
    icon: "bx bx-chat",
    name: "Slack",
    description: "Notifications et création de rendez-vous depuis Slack",
  },
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
.feature-item,
.integration-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.feature-item.animate-fade-in-up,
.integration-item.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

/* Assurer que les images sont responsives */
img {
  max-width: 100%;
  height: auto;
}
</style>
