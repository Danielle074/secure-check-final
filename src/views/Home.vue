<template>
  <div class="font-medium text-gray-800">
    <!-- Hero - Ajusté pour écran large et court -->
    <section class="relative text-center py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-16 mt-16 overflow-hidden">
      <div class="absolute inset-0">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform-gpu"
          :class="[currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105']"
          :style="{ backgroundImage: `url('${image}')`, filter: 'brightness(0.6) contrast(1.2)' }"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        </div>
      </div>

      <div class="relative z-10 max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl font-bold mb-4 sm:mb-6 text-white animate-fade-in-down">
          La <span class="text-[#438fab] font-extrabold drop-shadow-lg">solution</span> digitale de
          référence pour la gestion des rendez-vous et des événements en entreprise
        </h2>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-xl text-white mb-6 sm:mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
          Secure Check simplifie l'organisation interne en automatisant les prises de rendez-vous,
          l'accueil des visiteurs et la gestion des événements professionnels.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center animate-fade-in-up animation-delay-400">
          <RouterLink to="/solutions" class="w-full sm:w-auto">
            <button
              class="w-full sm:w-auto bg-[#438fab] text-white px-6 sm:px-8 py-3 sm:py-4 2xl:py-3 rounded-xl font-bold hover:bg-[#3190a5] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base 2xl:text-sm"
            >
              Commencer
            </button>
          </RouterLink>
          <RouterLink to="/features" class="w-full sm:w-auto">
            <button
              class="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 2xl:py-3 rounded-xl font-bold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base 2xl:text-sm"
            >
              Comment ça marche ?
            </button>
          </RouterLink>
        </div>
      </div>

      <!-- Indicateurs de slide -->
      <div class="absolute bottom-4 sm:bottom-6 2xl:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300"
          :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'"
          @click="currentIndex = index"
        ></span>
      </div>
    </section>

    <!-- Section Plusieurs fonctions - Ajustée pour écran court -->
    <section class="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-12 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto text-center mb-6 sm:mb-8 lg:mb-12 2xl:mb-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl font-bold text-black mb-3 sm:mb-4 animate-fade-in-up">
          Plusieurs fonctions, <span class="text-[#438fab]">une seule plateforme</span>
        </h2>
        <p class="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-lg max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Passez à l'action dès maintenant avec Secure Check et optimisez votre gestion
        </p>
      </div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 2xl:gap-4 mb-6 sm:mb-8 lg:mb-12 2xl:mb-8">
        <!-- Card 1: Fond coloré -->
        <div
          class="feature-card bg-gradient-to-br from-[#438fab] to-[#3190a5] text-white p-4 sm:p-5 lg:p-6 2xl:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl flex flex-col items-start transform transition-all duration-500 group"
        >
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 2xl:w-10 2xl:h-10 border border-white/50 bg-white/10 flex items-center justify-center mb-3 sm:mb-4 2xl:mb-3 rounded-lg sm:rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300"
          >
            <i class="bx bx-bulb text-white text-xl sm:text-2xl 2xl:text-xl"></i>
          </div>
          <h3 class="font-bold text-lg sm:text-xl 2xl:text-lg mb-2 sm:mb-3">Idées innovantes</h3>
          <p class="text-white/90 text-xs sm:text-sm 2xl:text-xs leading-relaxed">
            Automatisez vos rendez-vous et simplifiez l'organisation de votre entreprise.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="feature-card bg-white border border-gray-200 p-4 sm:p-5 lg:p-6 2xl:p-4 rounded-xl sm:rounded-2xl shadow-lg flex flex-col items-start transform transition-all duration-500 group"
        >
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 2xl:w-10 2xl:h-10 border border-gray-300 bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 2xl:mb-3 rounded-lg sm:rounded-xl group-hover:bg-[#438fab] group-hover:border-[#438fab] group-hover:scale-110 transition-all duration-300"
          >
            <i class="bx bx-cog text-gray-700 text-xl sm:text-2xl 2xl:text-xl group-hover:text-white"></i>
          </div>
          <h3 class="font-bold text-lg sm:text-xl 2xl:text-lg mb-2 sm:mb-3 text-black">Paramètres avancés</h3>
          <p class="text-gray-600 text-xs sm:text-sm 2xl:text-xs leading-relaxed">
            Configurez votre plateforme selon vos besoins et votre organisation.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="feature-card bg-white border border-gray-200 p-4 sm:p-5 lg:p-6 2xl:p-4 rounded-xl sm:rounded-2xl shadow-lg flex flex-col items-start transform transition-all duration-500 group"
        >
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 2xl:w-10 2xl:h-10 border border-gray-300 bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 2xl:mb-3 rounded-lg sm:rounded-xl group-hover:bg-[#438fab] group-hover:border-[#438fab] group-hover:scale-110 transition-all duration-300"
          >
            <i class="bx bx-rocket text-gray-700 text-xl sm:text-2xl 2xl:text-xl group-hover:text-white"></i>
          </div>
          <h3 class="font-bold text-lg sm:text-xl 2xl:text-lg mb-2 sm:mb-3 text-black">Performance rapide</h3>
          <p class="text-gray-600 text-xs sm:text-sm 2xl:text-xs leading-relaxed">
            Optimisez le traitement des rendez-vous et améliorez l'expérience utilisateur.
          </p>
        </div>

        <!-- Card 4 -->
        <div
          class="feature-card bg-white border border-gray-200 p-4 sm:p-5 lg:p-6 2xl:p-4 rounded-xl sm:rounded-2xl shadow-lg flex flex-col items-start transform transition-all duration-500 group"
        >
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 2xl:w-10 2xl:h-10 border border-gray-300 bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 2xl:mb-3 rounded-lg sm:rounded-xl group-hover:bg-[#438fab] group-hover:border-[#438fab] group-hover:scale-110 transition-all duration-300"
          >
            <i class="bx bx-globe text-gray-700 text-xl sm:text-2xl 2xl:text-xl group-hover:text-white"></i>
          </div>
          <h3 class="font-bold text-lg sm:text-xl 2xl:text-lg mb-2 sm:mb-3 text-black">Connectivité mondiale</h3>
          <p class="text-gray-600 text-xs sm:text-sm 2xl:text-xs leading-relaxed">
            Accédez à vos données et rendez-vous de n'importe où dans le monde.
          </p>
        </div>
      </div>

      <!-- Bouton centré en bas -->
      <div class="text-center mt-4 sm:mt-6 2xl:mt-4 animate-fade-in-up">
        <button
          class="bg-[#438fab] text-white font-bold px-6 sm:px-8 md:px-10 2xl:px-6 py-2 sm:py-3 2xl:py-2 rounded-xl shadow-lg hover:bg-[#3190a5] transform hover:scale-105 transition-all duration-300 text-sm sm:text-base 2xl:text-sm"
        >
          Plus de solutions
        </button>
      </div>
    </section>

    <!-- Section fonctionnalités - Ajustée pour écran court -->
    <section class="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-12 bg-gradient-to-b from-white to-gray-50 text-center px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl font-bold mb-4 sm:mb-6 2xl:mb-4 text-[#438fab] animate-fade-in-up">
          L'outil le plus complet du marché
        </h2>
        <p class="text-black mb-3 sm:mb-4 2xl:mb-3 text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-lg leading-relaxed animate-fade-in-up animation-delay-200">
          Depuis 06 ans, notre équipe de développeurs ajoute de nouvelles fonctionnalités afin de
          répondre aux besoins de nos clients.
        </p>
        <p class="text-black text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-lg leading-relaxed animate-fade-in-up animation-delay-400">
          Notre solution répond ainsi par défaut à 100% des besoins exprimés sans nécessiter de
          développements spécifiques additionnels.
        </p>
      </div>
    </section>

    <!-- Services - Ajusté pour écran court -->
    <section class="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <!-- Titre de la section -->
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl font-bold text-[#438fab] text-center mb-8 sm:mb-12 lg:mb-16 2xl:mb-8 animate-fade-in-up"
        >
          Nos Services
        </h2>

        <!-- Cartes des services -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 2xl:gap-4">
          <div
            class="service-card relative bg-white p-4 sm:p-6 lg:p-8 2xl:p-4 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg transform transition-all duration-500 group"
          >
            <img
              :src="Tache"
              alt="Tache"
              class="absolute -top-6 -left-6 2xl:-top-4 2xl:-left-4 w-24 h-24 sm:w-32 sm:h-32 2xl:w-24 2xl:h-24 opacity-30 group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="relative z-10 bg-gradient-to-br from-[#438fab]/80 to-[#3190a5]/80 p-2 sm:p-3 2xl:p-2 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 2xl:mb-3 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            >
              <img
                :src="PlugPlayIcon"
                alt="Plug & Play"
                class="h-10 w-10 sm:h-12 sm:w-12 2xl:h-10 2xl:w-10 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 class="text-lg sm:text-xl 2xl:text-lg font-bold mb-2 sm:mb-3 2xl:mb-2 relative z-10 text-[#438fab]">Plug & Play</h3>
            <p class="text-black text-center relative z-10 leading-relaxed text-xs sm:text-sm 2xl:text-xs">
              Une plateforme ultra performante qui répond nativement à 99% des fonctionnalités
              envisagées dans le cahier des charges de votre projet de prise de rendez-vous (<strong
                >Paiement en ligne</strong
              >, <strong>RDV visio</strong>, etc…)
            </p>
          </div>

          <div
            class="service-card relative bg-white p-4 sm:p-6 lg:p-8 2xl:p-4 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg transform transition-all duration-500 group"
          >
            <img
              :src="Tache"
              alt="Tache"
              class="absolute -top-6 -right-6 2xl:-top-4 2xl:-right-4 w-24 h-24 sm:w-32 sm:h-32 2xl:w-24 2xl:h-24 opacity-30 group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="relative z-10 bg-gradient-to-br from-[#438fab]/80 to-[#3190a5]/80 p-2 sm:p-3 2xl:p-2 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 2xl:mb-3 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            >
              <img
                :src="CheckIcon"
                alt="Sur-mesure"
                class="h-10 w-10 sm:h-12 sm:w-12 2xl:h-10 2xl:w-10 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 class="text-lg sm:text-xl 2xl:text-lg font-bold mb-2 sm:mb-3 2xl:mb-2 relative z-10 text-[#438fab]">Sur-mesure</h3>
            <p class="text-black text-center relative z-10 leading-relaxed text-xs sm:text-sm 2xl:text-xs">
              Une équipe dédiée vous accompagne sur la définition précise de vos besoins et la
              configuration personnalisée.
            </p>
          </div>

          <div
            class="service-card relative bg-white p-4 sm:p-6 lg:p-8 2xl:p-4 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-lg transform transition-all duration-500 group"
          >
            <img
              :src="Tache"
              alt="Tache"
              class="absolute -top-6 -right-6 2xl:-top-4 2xl:-right-4 w-24 h-24 sm:w-32 sm:h-32 2xl:w-24 2xl:h-24 opacity-30 group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="relative z-10 bg-gradient-to-br from-[#438fab]/80 to-[#3190a5]/80 p-2 sm:p-3 2xl:p-2 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 2xl:mb-3 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            >
              <img
                :src="ShieldIcon"
                alt="Sécurisé"
                class="h-10 w-10 sm:h-12 sm:w-12 2xl:h-10 2xl:w-10 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 class="text-lg sm:text-xl 2xl:text-lg font-bold mb-2 sm:mb-3 2xl:mb-2 relative z-10 text-[#438fab]">Sécurisé</h3>
            <p class="text-black text-center relative z-10 leading-relaxed text-xs sm:text-sm 2xl:text-xs">
              Niveau élevé de sécurité de l'application et de son hébergement adapté aux exigences
              RGPD.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Comment ça marche - Ajustée pour écran court -->
    <section
      class="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] 2xl:min-h-[500px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center 30%' }"
    >
      <!-- Titre central - Abaissé -->
      <div
        class="absolute top-12 sm:top-16 md:top-20 lg:top-24 2xl:top-16 left-1/2 transform -translate-x-1/2 text-center z-20 animate-fade-in-down w-full px-4"
      >
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-3xl font-bold text-black mb-3 sm:mb-4">Comment ça marche</h2>
        <p class="text-black text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-lg max-w-2xl mx-auto">
          Passez à l'action dès maintenant et découvrez notre solution
        </p>
      </div>

      <!-- Contenu central - Repositionné plus bas -->
      <div class="relative z-10 max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 2xl:pt-24">
        <!-- Vidéo à gauche -->
        <div class="w-full lg:w-1/2 lg:pr-8 xl:pr-16 flex justify-center lg:justify-end items-start mb-6 lg:mb-0">
          <div class="relative group mt-6 lg:mt-24 2xl:mt-16 animate-fade-in-left w-full max-w-md">
            <video
              :src="videoSrc"
              class="w-full rounded-xl sm:rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              controls
            ></video>
            <div
              class="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>

        <!-- Images à droite avec texte à côté - Repositionnées -->
        <div class="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start space-y-4 sm:space-y-6 lg:space-y-8 2xl:space-y-4 mt-0 lg:mt-24 2xl:mt-16">
          <!-- Ligne 1 -->
          <div
            class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 2xl:space-x-4 lg:pl-8 xl:pl-20 2xl:pl-12 group transform transition-all duration-300 animate-fade-in-right w-full max-w-lg"
          >
            <div class="relative w-full sm:w-40 lg:w-48 xl:w-56 2xl:w-40 h-32 sm:h-36 2xl:h-32 rounded-xl overflow-hidden shadow-lg">
              <img
                :src="photo1"
                alt="Photo 1"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <!-- Filtre noir léger -->
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"
              ></div>
            </div>
            <div class="max-w-xs text-center sm:text-left">
              <h3 class="text-black font-bold text-base sm:text-lg 2xl:text-base mb-2">Titre 1</h3>
              <p class="text-black text-sm 2xl:text-xs leading-relaxed">
                Description courte à côté de l'image 1.
              </p>
            </div>
          </div>

          <!-- Ligne 2 -->
          <div
            class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 2xl:space-x-4 lg:pl-8 xl:pl-20 2xl:pl-12 group transform transition-all duration-300 animate-fade-in-right animation-delay-200 w-full max-w-lg"
          >
            <div class="relative w-full sm:w-40 lg:w-48 xl:w-56 2xl:w-40 h-32 sm:h-36 2xl:h-32 rounded-xl overflow-hidden shadow-lg">
              <img
                :src="photo2"
                alt="Photo 2"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <!-- Filtre noir léger -->
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"
              ></div>
            </div>
            <div class="max-w-xs text-center sm:text-left">
              <h3 class="text-black font-bold text-base sm:text-lg 2xl:text-base mb-2">Titre 2</h3>
              <p class="text-black text-sm 2xl:text-xs leading-relaxed">
                Description courte à côté de l'image 2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chat / Notifications - Ajusté pour écran court -->
    <section class="relative bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-12 px-4 sm:px-6 overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative">
        <div class="w-full lg:w-1/2 text-center lg:text-left relative z-10 mb-6 lg:mb-0">
          <div class="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6 2xl:mb-4 justify-center lg:justify-start relative lg:left-12 xl:left-48 2xl:left-12 z-20">
            <span
              v-for="(item, index) in overlayItems"
              :key="index"
              @click="activeIndex = index"
              :class="[
                'w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-125',
                activeIndex === index ? 'bg-[#438fab] scale-125 shadow-lg' : 'bg-gray-300',
              ]"
            ></span>
          </div>
          <transition name="fade-slide" mode="out-in">
            <div :key="activeIndex" class="animate-fade-in-left">
              <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-3xl font-bold mb-3 sm:mb-4 2xl:mb-3 text-[#438fab] lg:ml-6 xl:ml-24 2xl:ml-6">
                {{ overlayItems[activeIndex].title }}
              </h2>
              <p class="text-gray-700 text-base sm:text-lg md:text-xl 2xl:text-base leading-relaxed lg:ml-6 xl:ml-24 2xl:ml-6 max-w-lg mx-auto lg:mx-0">
                {{ overlayItems[activeIndex].description }}
              </p>
            </div>
          </transition>
        </div>

        <div class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 relative z-20">
          <transition name="icon-wobble" mode="out-in">
            <div
              :key="activeIndex"
              class="relative transform transition-all duration-500 animate-fade-in-right"
            >
              <img
                v-if="activeIndex === 0"
                :src="overlayItems[0].image"
                alt="Notification"
                class="h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 2xl:h-64 2xl:w-64 object-contain rounded-xl sm:rounded-2xl shadow-2xl group-hover:scale-105"
              />
              <img
                v-else
                :src="overlayItems[activeIndex].image"
                alt="Notification"
                class="h-40 w-40 sm:h-56 sm:w-56 lg:h-64 lg:w-64 2xl:h-56 2xl:w-56 object-contain rounded-xl sm:rounded-2xl shadow-2xl group-hover:scale-105"
              />
              <div
                v-if="activeIndex === 0"
                class="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 2xl:top-6 2xl:left-6 w-24 sm:w-32 2xl:w-24 flex flex-col space-y-1 sm:space-y-2 animate-fade-in"
              >
                <div
                  class="bg-white p-1 sm:p-2 2xl:p-1 rounded-lg text-xs text-gray-800 self-start break-words shadow-md transform transition-transform hover:scale-105"
                >
                  bonjour, votre rdv est confirmé ✅
                </div>
                <div
                  class="bg-[#438fab] text-white p-1 sm:p-2 2xl:p-1 rounded-lg text-xs self-end break-words shadow-md transform transition-transform hover:scale-105"
                >
                  merci ! à quelle heure exactement ?
                </div>
                <div
                  class="bg-white p-1 sm:p-2 2xl:p-1 rounded-lg text-xs text-gray-800 self-start break-words shadow-md transform transition-transform hover:scale-105"
                >
                  à 14h00 dans nos bureaux.
                </div>
                <div
                  class="bg-[#438fab] text-white p-1 sm:p-2 2xl:p-1 rounded-lg text-xs self-end break-words shadow-md transform transition-transform hover:scale-105"
                >
                  parfait, merci !
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Section Avis - Ajustée pour écran court -->
    <section class="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-12 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 2xl:gap-6">
        <!-- Titre + bouton -->
        <div class="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 2xl:space-y-4 lg:pl-8 xl:pl-32 2xl:pl-8 animate-fade-in-left">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-3xl font-bold text-black leading-tight text-center lg:text-left">
            Les avis de nos utilisateurs
          </h2>
          <button
            class="bg-[#438fab] text-white px-6 sm:px-8 2xl:px-6 py-2 sm:py-3 2xl:py-2 rounded-xl font-bold hover:bg-[#3190a5] transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base 2xl:text-sm"
          >
            Tous les avis
          </button>
        </div>

        <!-- Slider des avis - Vitesse modérée -->
        <div class="w-full lg:w-2/3 relative overflow-hidden h-[250px] sm:h-[300px] lg:h-[350px] 2xl:h-[250px] flex justify-center lg:justify-end">
          <div
            class="flex flex-col sm:flex-row gap-3 sm:gap-4 2xl:gap-3 absolute transition-transform duration-1000 ease-in-out"
            :style="{ transform: `translateY(-${currentReviewIndex * 140}px)` }"
            @mouseleave="resumeAutoScroll"
          >
            <!-- Colonne de gauche -->
            <div class="flex flex-col gap-3 sm:gap-4 2xl:gap-3">
              <div
                v-for="(review, index) in leftColumnReviews"
                :key="'left-' + index"
                class="review-card border border-gray-200 bg-white rounded-xl p-3 sm:p-4 2xl:p-3 cursor-pointer transform transition-all duration-400 w-full sm:w-80 backdrop-blur-sm bg-white/95 shadow-md"
              >
                <p class="text-gray-700 italic mb-2 sm:mb-3 2xl:mb-2 text-sm 2xl:text-xs leading-relaxed">
                  "{{ review.text }}"
                </p>
                <div class="flex items-center mt-2 sm:mt-3 2xl:mt-2">
                  <img
                    :src="review.photo"
                    alt="photo"
                    class="w-8 h-8 sm:w-10 sm:h-10 2xl:w-8 2xl:h-8 rounded-full mr-2 sm:mr-3 2xl:mr-2 object-cover border-2 border-[#438fab] transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <p class="font-bold text-gray-900 text-sm sm:text-base 2xl:text-sm">{{ review.name }}</p>
                    <p class="text-gray-500 text-xs 2xl:text-xs">{{ review.job }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Colonne de droite -->
            <div class="flex flex-col gap-3 sm:gap-4 2xl:gap-3">
              <div
                v-for="(review, index) in rightColumnReviews"
                :key="'right-' + index"
                class="review-card border border-gray-200 bg-white rounded-xl p-3 sm:p-4 2xl:p-3 cursor-pointer transform transition-all duration-400 w-full sm:w-80 backdrop-blur-sm bg-white/95 shadow-md"
              >
                <p class="text-gray-700 italic mb-2 sm:mb-3 2xl:mb-2 text-sm 2xl:text-xs leading-relaxed">
                  "{{ review.text }}"
                </p>
                <div class="flex items-center mt-2 sm:mt-3 2xl:mt-2">
                  <img
                    :src="review.photo"
                    alt="photo"
                    class="w-8 h-8 sm:w-10 sm:h-10 2xl:w-8 2xl:h-8 rounded-full mr-2 sm:mr-3 2xl:mr-2 object-cover border-2 border-[#438fab] transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <p class="font-bold text-gray-900 text-sm sm:text-base 2xl:text-sm">{{ review.name }}</p>
                    <p class="text-gray-500 text-xs 2xl:text-xs">{{ review.job }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Statistiques - Ajustée pour écran court -->
    <section class="py-8 sm:py-12 2xl:py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="relative rounded-xl sm:rounded-2xl 2xl:rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
          <!-- Fond image intégré -->
          <div class="absolute inset-0">
            <img :src="FondPhoto" alt="Fond" class="w-full h-full object-cover opacity-20" />
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#438fab] to-[#3190a5] opacity-90"
            ></div>
          </div>

          <!-- Contenu -->
          <div class="relative bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 2xl:p-4 border border-white/20">
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3 2xl:gap-4">
              <!-- Stat 1 -->
              <div
                class="flex items-center gap-2 sm:gap-3 2xl:gap-2 group transform transition-all duration-300 flex-1"
              >
                <div class="flex flex-col items-center text-center">
                  <h3
                    class="text-2xl sm:text-3xl md:text-4xl 2xl:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    500+
                  </h3>
                  <p class="text-white text-xs sm:text-sm 2xl:text-xs mt-1">Clients satisfaits</p>
                </div>
                <div class="hidden sm:block w-1 h-8 sm:h-10 2xl:h-8 bg-white/30 rounded-full ml-1 sm:ml-2 2xl:ml-1"></div>
              </div>

              <!-- Stat 2 -->
              <div
                class="flex items-center gap-2 sm:gap-3 2xl:gap-2 group transform transition-all duration-300 flex-1"
              >
                <div class="flex flex-col items-center text-center">
                  <h3
                    class="text-2xl sm:text-3xl md:text-4xl 2xl:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    10X
                  </h3>
                  <p class="text-white text-xs sm:text-sm 2xl:text-xs mt-1">+ de productivité</p>
                </div>
                <div class="hidden sm:block w-1 h-8 sm:h-10 2xl:h-8 bg-white/30 rounded-full ml-1 sm:ml-2 2xl:ml-1"></div>
              </div>

              <!-- Stat 3 -->
              <div
                class="flex items-center gap-2 sm:gap-3 2xl:gap-2 group transform transition-all duration-300 flex-1"
              >
                <div class="flex flex-col items-center text-center">
                  <h3
                    class="text-2xl sm:text-3xl md:text-4xl 2xl:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300"
                  >
                    98%
                  </h3>
                  <p class="text-white text-xs sm:text-sm 2xl:text-xs mt-1">Satisfaction globale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🟩 Section Partenaires - Ajustée pour écran court -->
    <section class="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-8 sm:py-12 lg:py-16 2xl:py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <!-- Titre -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl 2xl:text-2xl font-extrabold text-[#438fab] text-center mb-8 sm:mb-12 lg:mb-16 2xl:mb-8">
        Nos partenaires
      </h2>

      <!-- Logos -->
      <div
        class="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:gap-x-12 lg:gap-y-16 2xl:gap-x-6 2xl:gap-y-8 justify-items-center items-center"
      >
        <div
          v-for="(cert, i) in certifications"
          :key="i"
          class="flex items-center justify-center transform transition-transform duration-500 hover:scale-110"
        >
          <img
            :src="cert.image"
            alt="Partenaire"
            class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 2xl:h-8 2xl:w-8 w-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:rotate-3"
          />
        </div>
      </div>
    </section>

    <!-- Footer - Ajusté pour écran court -->
    <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <!-- Effet de particules -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div class="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div class="absolute bottom-20 left-1/4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div class="absolute bottom-10 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 2xl:py-8">
        <!-- Section principale du footer -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 2xl:gap-6 mb-6 sm:mb-8 2xl:mb-6">
          <!-- Colonne 1 - Logo et description -->
          <div class="lg:col-span-1 animate-fade-in-up">
            <div
              class="flex items-center space-x-3 mb-3 sm:mb-4 2xl:mb-3 transform transition-transform hover:scale-105 duration-300"
            >
              <div
                class="w-8 h-8 sm:w-10 sm:h-10 2xl:w-8 2xl:h-8 bg-white rounded-lg sm:rounded-xl 2xl:rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
              >
                <img :src="logo" alt="Secure Check" class="w-6 h-6 sm:w-8 sm:h-8 2xl:w-6 2xl:h-6 object-contain" />
              </div>
              <div>
                <h2 class="text-lg sm:text-xl 2xl:text-lg font-bold">Secure Check</h2>
                <p class="text-[#438fab] text-xs 2xl:text-xs font-semibold">Solution Professionnelle</p>
              </div>
            </div>
            <p class="text-gray-300 mb-3 sm:mb-4 2xl:mb-3 leading-relaxed text-xs sm:text-sm 2xl:text-xs">
              La plateforme de référence pour la gestion intelligente de vos rendez-vous et
              événements professionnels.
            </p>
            <div class="flex space-x-2 sm:space-x-3 2xl:space-x-2">
              <RouterLink
                to="/facebook"
                class="w-6 h-6 sm:w-8 sm:h-8 2xl:w-6 2xl:h-6 bg-gray-700 rounded-md sm:rounded-lg 2xl:rounded-md flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-facebook text-xs sm:text-sm 2xl:text-xs"></i>
              </RouterLink>
              <RouterLink
                to="/twitter"
                class="w-6 h-6 sm:w-8 sm:h-8 2xl:w-6 2xl:h-6 bg-gray-700 rounded-md sm:rounded-lg 2xl:rounded-md flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-twitter text-xs sm:text-sm 2xl:text-xs"></i>
              </RouterLink>
              <RouterLink
                to="/linkedin"
                class="w-6 h-6 sm:w-8 sm:h-8 2xl:w-6 2xl:h-6 bg-gray-700 rounded-md sm:rounded-lg 2xl:rounded-md flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-linkedin text-xs sm:text-sm 2xl:text-xs"></i>
              </RouterLink>
              <RouterLink
                to="/instagram"
                class="w-6 h-6 sm:w-8 sm:h-8 2xl:w-6 2xl:h-6 bg-gray-700 rounded-md sm:rounded-lg 2xl:rounded-md flex items-center justify-center hover:bg-[#438fab] transition-all duration-300 transform hover:scale-110"
              >
                <i class="bx bxl-instagram text-xs sm:text-sm 2xl:text-xs"></i>
              </RouterLink>
            </div>
          </div>

          <!-- Colonne 2 - Produit -->
          <div class="animate-fade-in-up" style="animation-delay: 0.1s">
            <h3 class="font-bold text-sm sm:text-base 2xl:text-sm mb-3 sm:mb-4 2xl:mb-3 text-white">Produit</h3>
            <ul class="space-y-1 sm:space-y-2 2xl:space-y-1">
              <li v-for="link in productLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-xs sm:text-sm 2xl:text-xs"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  ></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 3 - Entreprise -->
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <h3 class="font-bold text-sm sm:text-base 2xl:text-sm mb-3 sm:mb-4 2xl:mb-3 text-white">Entreprise</h3>
            <ul class="space-y-1 sm:space-y-2 2xl:space-y-1">
              <li v-for="link in companyLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-xs sm:text-sm 2xl:text-xs"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  ></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Colonne 4 - Support -->
          <div class="animate-fade-in-up" style="animation-delay: 0.3s">
            <h3 class="font-bold text-sm sm:text-base 2xl:text-sm mb-3 sm:mb-4 2xl:mb-3 text-white">Support</h3>
            <ul class="space-y-1 sm:space-y-2 2xl:space-y-1">
              <li v-for="link in supportLinks" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-gray-300 hover:text-white transition-all duration-300 flex items-center group transform hover:translate-x-2 text-xs sm:text-sm 2xl:text-xs"
                >
                  <i
                    class="bx bx-chevron-right text-[#438fab] mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  ></i>
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div
          class="bg-gradient-to-r from-[#438fab] to-[#3190a5] rounded-lg sm:rounded-xl 2xl:rounded-lg p-4 sm:p-6 2xl:p-4 mb-6 sm:mb-8 2xl:mb-6 shadow-2xl transform transition-all duration-500 hover:scale-105 animate-fade-in-up"
        >
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <div class="mb-3 lg:mb-0 lg:mr-6 text-center lg:text-left">
              <h3 class="text-lg sm:text-xl 2xl:text-lg font-bold text-white mb-1 sm:mb-2">Restez informé</h3>
              <p class="text-white/90 text-xs sm:text-sm 2xl:text-xs">Recevez nos dernières actualités et conseils</p>
            </div>
            <div class="flex-1 max-w-md w-full">
              <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 2xl:space-x-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  class="flex-1 px-3 sm:px-4 2xl:px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transform transition-transform hover:scale-105 duration-300 text-xs sm:text-sm 2xl:text-xs"
                />
                <RouterLink to="/newsletter-subscribe" class="w-full sm:w-auto">
                  <button
                    class="w-full sm:w-auto bg-white text-[#438fab] px-3 sm:px-4 2xl:px-3 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-xs sm:text-sm 2xl:text-xs"
                  >
                    S'abonner
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-gray-700 pt-4 sm:pt-6 2xl:pt-4 animate-fade-in-up">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-xs 2xl:text-xs mb-2 md:mb-0 text-center md:text-left">
              <p>&copy; 2024 Secure Check. Tous droits réservés.</p>
            </div>
            <div class="flex space-y-1 sm:space-y-0 flex-col sm:flex-row sm:space-x-3 lg:space-x-4 2xl:space-x-3 text-xs 2xl:text-xs">
              <RouterLink
                v-for="link in legalLinks"
                :key="link.to"
                :to="link.to"
                class="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 text-center"
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
      class="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 2xl:bottom-4 2xl:right-4 w-8 h-8 sm:w-10 sm:h-10 2xl:w-8 2xl:h-8 bg-[#438fab] text-white rounded-full shadow-lg hover:bg-[#3190a5] transition-all duration-300 flex items-center justify-center z-50 group animate-fade-in-up"
      aria-label="Retour en haut"
    >
      <i class="bx bx-chevron-up text-lg sm:text-xl 2xl:text-lg group-hover:-translate-y-1 transition-transform"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

// ===== IMPORTS DES IMAGES =====

// Images pour le slider hero
import header1 from "@/assets/images/Header 1.jpg";
import header2 from "@/assets/images/Header 2.jpg";
import header3 from "@/assets/images/Header 3.jpg";

// Images pour la section Services
import Tache from "@/assets/images/Tache.png";
import PlugPlayIcon from "@/assets/images/plug-play.png";
import CheckIcon from "@/assets/images/check.png";
import ShieldIcon from "@/assets/images/shield.png";

// Images pour les certifications
import cert1 from "@/assets/images/Express 54.png";
import cert2 from "@/assets/images/scb systems.png";
import cert3 from "@/assets/images/Aigf.png";
import cert4 from "@/assets/images/arti.png";
import cert5 from "@/assets/images/Sehr.png";

// Images pour la section overlay/chat
import notif1 from "@/assets/images/modele.png";
import notif2 from "@/assets/images/calendrier 3.png";
import notif3 from "@/assets/images/calendrier 2.png";

// Vidéo et images pour la section "Comment ça marche"
import videoSrc from "@/assets/268230_tiny.mp4";
import bgImage from "@/assets/images/secureC.png";
import photo1 from "@/assets/images/marche 1.jpg";
import photo2 from "@/assets/images/Marche 2.jpg";

// Image de fond pour les statistiques
import FondPhoto from "@/assets/images/Tache.png";
// Import du logo
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

// Données des avis utilisateurs
const reviews = [
  {
    text: "Super outil, très pratique ! Je gagne un temps considérable dans la gestion de mes rendez-vous.",
    photo: "/assets/users/user1.jpg",
    name: "Alice Martin",
    job: "Responsable Marketing",
  },
  {
    text: "J'adore la facilité d'utilisation. L'interface est intuitive et le support réactif.",
    photo: "/assets/users/user2.jpg",
    name: "Bob Dupont",
    job: "Développeur Full-Stack",
  },
  {
    text: "Gère mes rendez-vous en un clin d'œil. La productivité de mon équipe a augmenté de 30%.",
    photo: "/assets/users/user3.jpg",
    name: "Clara Leroy",
    job: "Directrice des RH",
  },
  {
    text: "Support très réactif et efficace. La plateforme répond parfaitement à nos besoins complexes.",
    photo: "/assets/users/user4.jpg",
    name: "David Moreau",
    job: "Manager Opérationnel",
  },
];

// Données pour le slider overlay (notifications)
const overlayItems = [
  {
    title: "Notifications Instantanées",
    description:
      "Recevez des alertes SMS et email pour chaque rendez-vous confirmé, rappel automatique et modifications de planning.",
    image: notif1,
  },
  {
    title: "Sécurité Renforcée",
    description:
      "Toutes les données sont stockées de manière sécurisée avec chiffrement de bout en bout. Contrôlez les accès et assurez la confidentialité.",
    image: notif2,
  },
  {
    title: "Organisation Simplifiée",
    description:
      "Un tableau de bord complet pour visualiser vos rendez-vous, événements et visiteurs. Générez des rapports détaillés et optimisez la gestion.",
    image: notif3,
  },
];

// Données des certifications avec noms
const certifications = [
  { image: cert1, name: "ISO 27001" },
  { image: cert2, name: "RGPD" },
  { image: cert3, name: "HIPAA" },
  { image: cert4, name: "SOC 2" },
  { image: cert5, name: "Sehr" },
];

// ===== RÉFÉRENCES RÉACTIVES =====

// Images pour le slider hero
const images = [header1, header2, header3];

// Index courant pour le slider hero
const currentIndex = ref(0);

// Index courant pour le slider des avis
const currentReviewIndex = ref(0);

// Index courant pour le slider overlay
const activeIndex = ref(0);

// ===== VARIABLES D'INTERVALLE =====

let sliderInterval: number;
let overlayInterval: number;
let reviewInterval: number;

// ===== COMPUTED PROPERTIES =====

// Séparation des avis en deux colonnes pour l'affichage côte à côte
const leftColumnReviews = computed(() => {
  return reviews.filter((_, index) => index % 2 === 0);
});

const rightColumnReviews = computed(() => {
  return reviews.filter((_, index) => index % 2 === 1);
});

// ===== FONCTIONS =====

/**
 * Gestion du scroll pour le bouton retour en haut
 */
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;

  // Animation des éléments au scroll
  const elements = document.querySelectorAll(".feature-card, .service-card, .review-card");
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      element.classList.add("animate-fade-in-up");
    }
  });
};

/**
 * Scroll vers le haut de la page
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Reprend le défilement automatique des avis
 */
const resumeAutoScroll = () => {
  reviewInterval = setInterval(() => {
    currentReviewIndex.value = (currentReviewIndex.value + 1) % reviews.length;
  }, 8000); // 8 secondes entre chaque changement - TRÈS LENT
};

/**
 * Setup des animations au scroll
 */
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
  document.querySelectorAll(".feature-card, .service-card, .review-card").forEach((item) => {
    observer.observe(item);
  });
};

// ===== LIFECYCLE HOOKS =====

// Initialisation des sliders automatiques au montage du composant
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  setTimeout(setupScrollAnimations, 100);

  // Slider hero : change d'image toutes les 5 secondes
  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 5000);

  // Slider overlay : change d'élément toutes les 5 secondes
  overlayInterval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % overlayItems.length;
  }, 5000);

  // Slider des avis : change d'avis toutes les 8 secondes - TRÈS LENT
  reviewInterval = setInterval(() => {
    currentReviewIndex.value = (currentReviewIndex.value + 1) % reviews.length;
  }, 8000);
});

// Nettoyage des intervalles à la destruction du composant
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  clearInterval(sliderInterval);
  clearInterval(overlayInterval);
  clearInterval(reviewInterval);
});
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

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Transition pour les éléments au scroll */
.feature-card,
.service-card,
.review-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.feature-card:hover,
.service-card:hover,
.review-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card.animate-fade-in-up,
.service-card.animate-fade-in-up,
.review-card.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

/* Animations de transition pour le slider overlay */
.fade-slide-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.icon-wobble-enter-active {
  transition: all 0.6s ease;
  animation: wobble 0.6s ease;
}
.icon-wobble-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.05) rotate(1deg);
  }
  50% {
    transform: scale(1.03) rotate(-1deg);
  }
  75% {
    transform: scale(1.05) rotate(1deg);
  }
}

/* Votre CSS existant reste inchangé */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Responsive adjustments for very small screens */
@media (max-width: 360px) {
  .text-2xl {
    font-size: 1.5rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
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

  .max-w-3xl {
    max-width: 768px;
  }
}

/* Special adjustments for 2560x875 screens */
@media (min-width: 2560px) and (max-height: 900px) {
  .py-12 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .py-16 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .py-20 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .py-24 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .min-h-\[500px\] {
    min-height: 400px;
  }

  .min-h-\[600px\] {
    min-height: 450px;
  }

  .min-h-\[700px\] {
    min-height: 500px;
  }

  .min-h-\[800px\] {
    min-height: 550px;
  }

  .h-\[300px\] {
    height: 250px;
  }

  .h-\[350px\] {
    height: 280px;
  }

  .h-\[380px\] {
    height: 300px;
  }
}

/* Ultra-wide screen adjustments */
@media (min-width: 3000px) {
  .max-w-7xl {
    max-width: 1400px;
  }

  .max-w-4xl {
    max-width: 1100px;
  }

  .max-w-3xl {
    max-width: 900px;
  }
}
</style>
