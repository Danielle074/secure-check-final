import { createRouter, createWebHistory } from "vue-router";

// 🏠 Pages publiques
import Layout from "@/components/Layout.vue";
import Home from "@/views/Home.vue";
import Tarifs from "@/views/Tarifs.vue";
import Features from "@/views/Features.vue";
import Solutions from "@/views/Solutions.vue";
import Testimonials from "@/views/Testimonials.vue";
import Faq from "@/views/Faq.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Connexion from "@/views/Connexion.vue";
import HomeDashboard from "@/views/HomeDashboard.vue";
import RendezVous from "@/views/RendezVous.vue";

// 🔒 Pages du dashboard (privées)
import Sidebar from "@/components/Sidebar.vue";
import Utilisateur from "@/views/dashboard/Utilisateur.vue";
import Scanner from "@/views/dashboard/Scanner.vue";
import Evenement from "@/views/dashboard/Evenement.vue";
import Entreprises from "@/views/dashboard/Entreprises.vue";
import Visiteur from "@/views/dashboard/Visiteur.vue";
import Demande from "@/views/dashboard/Demande.vue";
import Presence from "@/views/dashboard/Presence.vue";
import Carte from "@/views/dashboard/Carte.vue";
import Courriers from "@/views/dashboard/Courriers.vue";
import Documents from "@/views/dashboard/Document.vue";

// 🆕 COMPOSANTS PROJETS
import Projets from "@/views/dashboard/Projet.vue";
import ProjectList from "@/views/dashboard/components/ProjectList.vue";
import DocumentPreview from "@/views/dashboard/components/DocumentProjet.vue";
import EditProject from "@/views/dashboard/components/EditProject.vue";

// 🧩 Sous-pages du dashboard
import MonProfil from "@/views/dashboard/MonProfil.vue";
import ChangePassword from "@/views/dashboard/ChangePassword.vue";
import Deconnexion from "@/views/dashboard/Deconnexion.vue";

// 👤 Utilisateurs
import AddUser from "@/views/dashboard/components/AddUser.vue";
import UserList from "@/views/dashboard/components/UserList.vue";

// 📷 Scanner
import ScannerQRCode from "@/views/dashboard/components/ScannerQRCode.vue";
import QRManuel from "@/views/dashboard/components/QRManuel.vue";
import ListeQRCode from "@/views/dashboard/components/ListeQRCode.vue";
import CreerQRCode from "@/views/dashboard/components/CreerQRCode.vue";

// 🏢 Entreprises
import AddCompany from "@/views/dashboard/components/AddCompany.vue";
import CompanyList from "@/views/dashboard/components/CompanyList.vue";

// 🎉 Événements
import AjouterEvenement from "@/views/dashboard/components/AjouterEvenement.vue";
import ListeEvenement from "@/views/dashboard/components/ListeEvenement.vue";

// 📬 Courriers
import AjouterCourrier from "@/views/dashboard/components/AjouterCourrier.vue";
import ListeCourrier from "@/views/dashboard/components/ListeCourrier.vue";
import Profile from "@/views/dashboard/Profile.vue";

// 🧾 Tâches
import Taches from "@/views/dashboard/Taches.vue";
import TaskList from "@/views/dashboard/components/TaskList.vue";
import EditTask from "@/views/dashboard/components/EditTask.vue";
import AddTimeEntry from "@/views/dashboard/components/AddTimeEntry.vue";
import TimeEntries from "@/views/dashboard/components/TimeEntries.vue";
import TaskComments from "@/views/dashboard/components/TaskComments.vue";
import AddComment from "@/views/dashboard/components/AddComment.vue";

const routes = [
  // 🌍 Site public
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", name: "Home", component: Home },
      { path: "tarifs", name: "Tarifs", component: Tarifs },
      { path: "features", name: "Features", component: Features },
      { path: "solutions", name: "Solutions", component: Solutions },
      { path: "testimonials", name: "Testimonials", component: Testimonials },
      { path: "faq", name: "Faq", component: Faq },
    ],
  },

  // 🔒 Dashboard privé
  {
    path: "/app",
    component: Sidebar,
    meta: { requiresAuth: true },
    children: [
      // Profils
      { path: "mon-profil", name: "MonProfil", component: MonProfil },
      { path: "change-password", name: "ChangePassword", component: ChangePassword },
      { path: "deconnexion", name: "Deconnexion", component: Deconnexion },

      // 🧩 Projets
      {
        path: "projet",
        component: Projets,
        children: [
          { path: "", redirect: { name: "ProjectList" } },
          { path: "liste", name: "ProjectList", component: ProjectList },
          { path: "document/:id", name: "DocumentPreview", component: DocumentPreview },
          { path: "editer/:id", name: "EditProject", component: EditProject },
        ],
      },

      // 👤 Utilisateur
      {
        path: "utilisateur",
        component: Utilisateur,
        children: [
          { path: "add", name: "AddUser", component: AddUser },
          { path: "list", name: "UserList", component: UserList },
        ],
      },

      // 🎉 Événements
      {
        path: "evenement",
        component: Evenement,
        redirect: { name: "ListeEvenement" },
        children: [
          { path: "liste", name: "ListeEvenement", component: ListeEvenement },
          { path: "creer", name: "AjouterEvenement", component: AjouterEvenement },
        ],
      },

      // 📷 Scanner
      {
        path: "scanner",
        component: Scanner,
        redirect: { name: "ListeQRCode" },
        children: [
          { path: "liste", name: "ListeQRCode", component: ListeQRCode },
          { path: "scan", name: "ScannerQRCode", component: ScannerQRCode },
          { path: "manuel", name: "QRManuel", component: QRManuel },
          { path: "creer", name: "CreerQRCode", component: CreerQRCode },
        ],
      },

      // 🏢 Entreprises
      {
        path: "entreprises",
        component: Entreprises,
        children: [
          { path: "list", name: "CompanyList", component: CompanyList },
          { path: "create", name: "CreateCompany", component: AddCompany },
        ],
      },

      {
  path: "courriers",
  component: Courriers,
  redirect: { name: "ListeCourrier" },
  children: [
    { path: "ajouter", name: "AjouterCourrier", component: AjouterCourrier },
    { path: "liste", name: "ListeCourrier", component: ListeCourrier },
  ],
},


      // 🧾 Tâches
      {
        path: "taches",
        component: Taches,
        redirect: { name: "TaskList" },
        children: [
          { path: "liste", name: "TaskList", component: TaskList },
          { path: "ajouter", name: "AddTask", component: EditTask },
          { path: "editer/:id", name: "EditTask", component: EditTask },
          { path: "times/:id", name: "TimeEntries", component: TimeEntries },
          { path: "times/ajouter/:id", name: "AddTimeEntry", component: AddTimeEntry },
          { path: "commentaires/:id", name: "TaskComments", component: TaskComments },
          { path: "commentaires/ajouter/:id", name: "AddComment", component: AddComment },
          { path: "commentaires/editer/:id/:commentId", name: "EditComment", component: AddComment },
        ],
      },

      // Carte
      {
        path: "carte",
        component: Carte,
        redirect: { name: "CardList" },
        children: [
          { path: "liste", name: "CardList", component: () => import("@/views/dashboard/components/CardList.vue") },
          { path: "creer", name: "CreateCard", component: () => import("@/views/dashboard/components/CreateCard.vue") },
        ],
      },

      // Autres
      { path: "documents", name: "Documents", component: Documents },
      { path: "profile", name: "Profile", component: Profile },
      { path: "visiteur", name: "Visiteur", component: Visiteur },
      { path: "demande", name: "Demande", component: Demande },
      { path: "presence", name: "Presence", component: Presence },
    ],
  },

  // 🔓 Pages publiques supplémentaires
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/connexion", name: "Connexion", component: Connexion },
  { path: "/dashboard", name: "HomeDashboard", component: HomeDashboard },
  { path: "/rendez-vous", name: "RendezVous", component: RendezVous },
  { path: "/site", name: "SiteInternet", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
