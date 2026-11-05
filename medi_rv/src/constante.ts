import { Heart } from "lucide-react";
import type { navbarItems } from "./types/navbar";

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