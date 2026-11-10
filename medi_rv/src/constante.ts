import {Baby, Calendar, CircleCheckBig, FaceSlightlySmiling, Heart, HeartPulse, Search, ShieldPlus, Stethoscope, Venus } from "lucide-react";
import type { navbarItems } from "./types/navbar";
import type { specialityItems } from "./types/speciality";
import type { stepProps } from "./types/comment_marche";

export const navbar:navbarItems[] =[
    {
        icon:Heart,
        nom:'MediRV',
        url:'/' 
    },
    {
        nom:'Médecins',
        url:'#medecins'
    },
    {
        nom:'Comment ça marche',
        url:'#comment-marche'
    },
    {
        nom:'Contact',
        url:'#contact'
    },
    {
        nom:'Connexion',
        url:'/auth/login'
    },
    {
        nom:'Inscription',
        url:'/auth/signup'
    },
]

export const specialities:specialityItems[] = [
    {
        icon:Stethoscope,
        speciality:'Médecine générale',
        iconStyle:'bg-[#E0F2F4] hover:bg-[#0B6B78] text-[#0B6B78] hover:text-white'
    },
    {
        icon:ShieldPlus,
        speciality:'Dermatologie',
        iconStyle:'bg-[#F5F3FF] hover:bg-[#7F22FE] text-[#7F22FE] hover:text-white'
    },
    {
        icon:FaceSlightlySmiling,
        speciality:'Dentiste',
        iconStyle:'bg-[#EFF6FF] hover:bg-[#155DFC] text-[#155DFC] hover:text-white'
    },
    {
        icon:Venus,
        speciality:'Gynécologie',
        iconStyle:'bg-[#FDF2F8] hover:bg-[#E60076] text-[#E60076] hover:text-white'
    },
    {
        icon:Baby,
        speciality:'Pédiatrie',
        iconStyle:'bg-[#FFFBEB] hover:bg-[#E17100] text-[#E17100] hover:text-white'
    },
    {
        icon:HeartPulse,
        speciality:'Cardiologies',
        iconStyle:'bg-[#FEF2F2] hover:bg-[#E7000B] text-[#E7000B] hover:text-white'
    }
]

export const step:stepProps[] = [
    {
        icon:Search,
        step:'1',
        title:'Recherchez un médecin',
        text:"Trouvez le spécialiste qu'il vous faut par spécialité, nom ou localisation à Dakar."
    },
    {
        icon:Calendar,
        step:'2',
        title:'Recherchez un médecin',
        text:"Consultez les disponibilités en temps réel et sélectionnez le créneau qui vous convient, 24h/24 et 7j/7."
    },
    {
        icon:CircleCheckBig,
        step:'3',
        title:'Recherchez un médecin',
        text:"Recevez une confirmation instantanée par Email. Un rappel automatique vous est envoyé la veille de votre consultation."
    }
]