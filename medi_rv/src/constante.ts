import {
  Baby,
  Calendar,
  CircleCheckBig,
  Clock,
  FaceSlightlySmiling,
  Heart,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  ShieldPlus,
  Stethoscope,
  Venus,
  type LucideIcon,
} from "lucide-react";
import type { navbarItems } from "./types/navbar";
import type { specialityItems } from "./types/speciality";
import type { stepProps } from "./types/comment_marche";
import type { doctorProps } from "./components/doctorCard";
import type { socialCardProps } from "./components/socialMediaCard";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

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
    id:1,
    nom: "Mbaye",
    prenom: "Aissatou",
    adresse: "Clinique Pasteur, Dakar",
    specialite: "Cardiologie",
    disponibilite: "Aujourd'hui, 14h00",
    prix: "20 000",
  },
  {
    id:2,
    nom: "Diop",
    prenom: "Ibrahima",
    adresse: "CHU de Dakar, Plateau",
    specialite: "Médecine générale",
    disponibilite: "Demain, 09h30",
    prix: "15 000",
  },
  {
    id:3,
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

export const footerLink={
    plateforme:[
        {url:'/', nom:'Acceuil'},
        {url:'/doctors', nom:'Trouver un médecin'},
        {url:'/appointments', nom:'Prendre rendez-vous'},
        {url:'/auth/me', nom:'Mon compte'},
    ],
    specialites:[
        {url:'', nom:'Médecine générale'},
        {url:'', nom:'Cardiologie'},
        {url:'', nom:'Pédiatrie'},
        {url:'', nom:'Gynécologie'},
        {url:'', nom:'Dermatologie'},
        {url:'', nom:'Dentiste'},
    ],
    professionnels:[
        {url:'/doctor-applications/', nom:'Rejoindre MediRDV'},
        {url:'/doctor/dashboard', nom:'Espace médecin'},
        {url:'', nom:'Facturation'},
        
    ],
    aide:[
        {url:'#comment-marche', nom:'Comment ça marche'},
        {url:'/faq', nom:'FAQ'},
        {url:'/politique-confidentialite', nom:"Politique de confidentialité"},
        {url:'/condution-utilisation', nom:"Conditions d'utilisation"},
        
    ]
    
}

export const supportMediRV:{icon:LucideIcon, info:string}[]=[
    {
        icon:Phone,
        info:'+221 33 800 00 00'
    },
    {
        icon:Mail,
        info:'contact@medirv.sn'
    },
    {
        icon:MapPin,
        info:'Dakar, Sénégal'
    },
]

export const authNavbar:navbarItems[]=[
    {
        nom:'Connexion',
        url:'/auth/login'
    },
    {
        nom:'Incription',
        url:'/auth/register'
    },
    {
        nom:'Mot de passe oublié',
        url:'/auth/change-password/'
    },
]