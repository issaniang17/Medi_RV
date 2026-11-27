import {
  Baby,
  Calendar,
  CalendarDays,
  CircleCheckBig,
  Clock,
  FaceSlightlySmiling,
  Heart,
  HeartPulse,
  House,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  ShieldPlus,
  Stethoscope,
  User,
  UserCog,
  UserGroup,
  UserRoundPlus,
  Venus,
  type LucideIcon,
} from "lucide-react";
import doctor from "./assets/doctor.jpg";
import type { navbarItems } from "./types/navbar";
import type { specialityItems } from "./types/speciality";
import type { stepProps } from "./types/comment_marche";
import type { doctorProps } from "./components/doctorCard";
import type { socialCardProps } from "./components/socialMediaCard";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import type { navPatient } from "./types/patientNav";
import type { rvDetail } from "./types/rvDetail";
import type { doctorCreneau } from "./types/crenauxDoctor";
import type { cardAdminProps } from "./types/cardAdmin"; 

export const navbar: navbarItems[] = [
  {
    icon: Heart,
    nom: "MediRV",
    url: "/",
  },
  {
    nom: "Médecins",
    url: "/#medecins",
  },
  {
    nom: "Comment ça marche",
    url: "/#comment-marche",
  },
  {
    nom: "Contact",
    url: "/#contact",
  },
  {
    nom: "Connexion",
    url: "/auth/login",
  },
  {
    nom: "Inscription",
    url: "/auth/register",
  },
];

export const specialities: specialityItems[] = [
  {
    icon: Stethoscope,
    speciality: "Médecine générale",
    iconStyle:
      "bg-[#E0F2F4] hover:bg-[#0B6B78] text-[#0B6B78] hover:text-white",
  },
  {
    icon: ShieldPlus,
    speciality: "Dermatologie",
    iconStyle:
      "bg-[#F5F3FF] hover:bg-[#7F22FE] text-[#7F22FE] hover:text-white",
  },
  {
    icon: FaceSlightlySmiling,
    speciality: "Dentiste",
    iconStyle:
      "bg-[#EFF6FF] hover:bg-[#155DFC] text-[#155DFC] hover:text-white",
  },
  {
    icon: Venus,
    speciality: "Gynécologie",
    iconStyle:
      "bg-[#FDF2F8] hover:bg-[#E60076] text-[#E60076] hover:text-white",
  },
  {
    icon: Baby,
    speciality: "Pédiatrie",
    iconStyle:
      "bg-[#FFFBEB] hover:bg-[#E17100] text-[#E17100] hover:text-white",
  },
  {
    icon: HeartPulse,
    speciality: "Cardiologies",
    iconStyle:
      "bg-[#FEF2F2] hover:bg-[#E7000B] text-[#E7000B] hover:text-white",
  },
];

export const step: stepProps[] = [
  {
    icon: Search,
    step: "1",
    title: "Recherchez un médecin",
    text: "Trouvez le spécialiste qu'il vous faut par spécialité, nom ou localisation à Dakar.",
  },
  {
    icon: Calendar,
    step: "2",
    title: "Choisissez un créneau",
    text: "Consultez les disponibilités en temps réel et sélectionnez le créneau qui vous convient, 24h/24 et 7j/7.",
  },
  {
    icon: CircleCheckBig,
    step: "3",
    title: "Confirmez votre rendez-vous",
    text: "Recevez une confirmation instantanée par Email. Un rappel automatique vous est envoyé la veille de votre consultation.",
  },
];

export const previewDoctorsExample: doctorProps[] = [
  {
    id: 1,
    nom: "Mbaye",
    prenom: "Aissatou",
    adresse: "Clinique Pasteur, Dakar",
    specialite: "Cardiologie",
    disponibilite: "Aujourd'hui, 14h00",
    prix: "20 000",
  },
  {
    id: 2,
    nom: "Diop",
    prenom: "Ibrahima",
    adresse: "CHU de Dakar, Plateau",
    specialite: "Médecine générale",
    disponibilite: "09h30",
    prix: "15 000",
  },
  {
    id: 3,
    nom: "Ndiaye",
    prenom: "Fatou",
    adresse: "Polyclinique Madeleine",
    specialite: "Pédiatrie",
    disponibilite: "Aujourd'hui, 16h30",
    prix: "18 000",
  },
];

export const supportClient: { icon: LucideIcon; info: string }[] = [
  {
    icon: Shield,
    info: "Données sécurisées",
  },
  {
    icon: CircleCheckBig,
    info: "Médecins certifiés",
  },
  {
    icon: Clock,
    info: "Disponible 24h/24",
  },
  {
    icon: Phone,
    info: "Support en français",
  },
];
export const socialMedia: socialCardProps[] = [
  {
    icon: FaFacebookF,
    url: "#",
  },
  {
    icon: BsTwitter,
    url: "#",
  },
  {
    icon: BsInstagram,
    url: "#",
  },
  {
    icon: FaLinkedinIn,
    url: "#",
  },
];

export const footerLink = {
  plateforme: [
    { url: "/", nom: "Acceuil" },
    { url: "/doctors", nom: "Trouver un médecin" },
    { url: "/appointments", nom: "Prendre rendez-vous" },
    { url: "/auth/me", nom: "Mon compte" },
  ],
  specialites: [
    { url: "", nom: "Médecine générale" },
    { url: "", nom: "Cardiologie" },
    { url: "", nom: "Pédiatrie" },
    { url: "", nom: "Gynécologie" },
    { url: "", nom: "Dermatologie" },
    { url: "", nom: "Dentiste" },
  ],
  professionnels: [
    { url: "/doctor-applications/", nom: "Rejoindre MediRDV" },
    { url: "/doctor/dashboard", nom: "Espace médecin" },
    { url: "", nom: "Facturation" },
  ],
  aide: [
    { url: "#comment-marche", nom: "Comment ça marche" },
    { url: "/faq", nom: "FAQ" },
    { url: "/confidentialite", nom: "Politique de confidentialité" },
    { url: "/cgu", nom: "Conditions d'utilisation" },
  ],
};

export const supportMediRV: { icon: LucideIcon; info: string }[] = [
  {
    icon: Phone,
    info: "+221 33 800 00 00",
  },
  {
    icon: Mail,
    info: "contact@medirv.sn",
  },
  {
    icon: MapPin,
    info: "Dakar, Sénégal",
  },
];

export const authNavbar: navbarItems[] = [
  {
    nom: "Connexion",
    url: "/auth/login",
  },
  {
    nom: "Incription",
    url: "/auth/register",
  },
  {
    nom: "Mot de passe oublié",
    url: "/auth/change-password/",
  },
];

export const patientNavigation: navPatient[] = [
  {
    icon: House,
    name: "Acceuil",
    url: "/auth/me/accueil",
  },
  {
    icon: Search,
    name: "Trouver un médecin",
    url: "/doctors",
  },
  {
    icon: CalendarDays,
    name: "Mes rendez-vous",
    url: "/auth/me/appointments",
  },
  {
    icon: User,
    name: "Mon profil",
    url: "/auth/me/profil",
  },
];

export const patientRV: rvDetail[] = [
  {
    id: 1,
    date: "Ven 16 octobre 2026",
    drImage: doctor,
    firstName: "Ibrahima",
    lastName: "Ndiaye",
    lieu: "CHU de Dakar, Plateau",
    speciality: "Médecine générale",
    heure: "09h30",
    status: "rejected",
  },
  {
    id: 2,
    date: "Ven 16 octobre 2026",
    drImage: doctor,
    firstName: "Ibrahima",
    lastName: "Ndiaye",
    lieu: "CHU de Dakar, Plateau",
    speciality: "Médecine générale",
    heure: "09h30",
    status: "accepted",
  },
  {
    id: 3,
    date: "Ven 16 octobre 2026",
    drImage: doctor,
    firstName: "Ibrahima",
    lastName: "Ndiaye",
    lieu: "CHU de Dakar, Plateau",
    speciality: "Médecine générale",
    heure: "09h30",
    status: "pending",
  },
  {
    id: 4,
    date: "Ven 16 octobre 2026",
    drImage: doctor,
    firstName: "Ibrahima",
    lastName: "Ndiaye",
    lieu: "CHU de Dakar, Plateau",
    speciality: "Médecine générale",
    heure: "09h30",
    status: "cancelled",
  },
  {
    id: 5,
    date: "Ven 16 octobre 2026",
    drImage: doctor,
    firstName: "Aissatou",
    lastName: "Diop",
    lieu: "CHU de Dakar, Plateau",
    speciality: "Médecine générale",
    heure: "09h30",
    status: "accepted",
  },
];
export const statusStyle: { status: string; style: string }[] = [
  {
    status: "accepted",
    style: "bg-[#E0F2F4] text-[#0B6B78] border border-[#0B6B78]",
  },
  {
    status: "rejected",
    style: "bg-[#FCF4F4] text-[#C8322A] border-[#C8322A] border",
  },
  {
    status: "cancelled",
    style: "bg-[#ECFDF5] text-[#007A55] border-[#007A55] border",
  },
  {
    status: "pending",
    style: "bg-[#FFFBEB] text-[#BB4D00] border-[#BB4D00] border",
  },
];

export const doctorNav: navPatient[] = [
  {
    icon: House,
    name: "Tableau de bord",
    url: "/doctor/dashboard/view",
  },
  {
    icon: Clock,
    name: "Disponibilité",
    url: "/doctor/dashboard/availabilities/",
  },
  {
    icon: Calendar,
    name: "Rendez-vous",
    url: "/doctor/dashboard/appointments/",
  },
];

export const filtreDoctorNav: { url: string; name: string }[] = [
  { name: "Tous", url: "/doctor/dashboard/appointments/all" },
  { name: "En attente", url: "pending" },
  { name: "Acceptés", url: "accepted" },
  { name: "Annulé", url: "rejected" },
  { name: "Terminés", url: "cancelled" },
];

export const doctorCreneaux: doctorCreneau[] = [
  {
    id: 1,
    day: "Lundi",
    availability: [{ id: 1, start: "08:00", end: "09:00" }],
  },
  {
    id: 2,
    day: "Mardi",
    availability: [{ id: 1, start: "08:00", end: "09:00" }],
  },
  {
    id: 3,
    day: "Mercredi",
    availability: [{ id: 1, start: "08:00", end: "09:00" }],
  },
  {
    id: 4,
    day: "Jeudi",
    availability: [
      { id: 1, start: "08:00", end: "09:00" },
      { id: 2, start: "10:00", end: "12:00" },
    ],
  },
  {
    id: 5,
    day: "Vendredi",
    availability: [{ id: 1, start: "08:00", end: "11:00" }],
  },
  {
    id: 6,
    day: "Samedi",
    availability: [{ id: 1, start: "08:00", end: "12:00" }],
  },
  { id: 7, day: "Dimanche" },
];

export const heureDisponible: string[] = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];
export const dayofWeek = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export const adminNav: navPatient[] = [
  {
    icon: LayoutGrid,
    name: "Tableau de bord",
    url: "/admin/dashboard",
  },
  {
    icon: UserGroup,
    name: "Utilisateurs",
    url: "/admin/users",
  },
  {
    icon: Stethoscope,
    name: "Médecins",
    url: "/admin/doctors",
  },
  {
    icon: UserCog,
    name: "Paramétre",
    url: "/admin/setting",
  },
];
export const adminRapidAction: {
  url: string;
  name: string;
  icon: LucideIcon;
  subtitle: string;
}[] = [
  {
    icon: UserRoundPlus,
    name: "Ajouter un utilisateur",
    subtitle: "Créer un nouveau compte",
    url: "/admin/setting",
  },
  {
    icon: UserCog,
    name: "Valider un médecin",
    subtitle: "Traiter les demandes en attente",
    url: "/admin/doctors",
  },
  {
    icon: ShieldCheck,
    name: "Gerer les utilisateurs",
    subtitle: "Roles et statuts",
    url: "/admin/users",
  },
];

export const users: cardAdminProps[] = [
  {
    email: "issa@gmail.com",
    firstName: "Issa",
    id: 1,
    lastName: "Niang",
    role: "patient",
    statut: "approved",
  },
   {
    email: "issa@gmail.com",
    firstName: "Issa",
    id: 2,
    lastName: "Niang",
    role: "patient",
    statut: "pending",
  },
   {
    email: "issa@gmail.com",
    firstName: "Issa",
    id: 3,
    lastName: "Niang",
    role: "patient",
    statut: "approved",
  },
   {
    email: "issa@gmail.com",
    firstName: "Issa",
    id: 4,
    lastName: "Niang",
    role: "medecin",
    statut: "approved",
    speciality:'dentiste',
    location:'Dakar,plateau'
  },
   {
    email: "issa@gmail.com",
    firstName: "Issa",
    id: 5,
    lastName: "Niang",
    role: "medecin",
    statut: "pending",
    speciality:'pediatre',
    location:'Dakar,plateau'
  },
   {
    email: "issa@gmail.com",
    firstName: "Issa",
    id: 6,
    lastName: "Niang",
    role: "medecin",
    statut: "rejected",
    speciality:'ophtalmologue',
    location:'Dakar,plateau'
  },
  {
    email: "moussa@gmail.com",
    firstName: "moussa",
    id: 7,
    lastName: "Gueye",
    role: "admin",
    statut: "approved",
  },
];
