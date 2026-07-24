/**
 * Route API de formulaire de contact
 * Gestion des requêtes POST du formulaire de contact
 * 
 * @author Rayane Laidi
 * @version 2.0
 * @description Endpoint API pour le traitement du formulaire de contact
 * avec validation des données et gestion des erreurs
 */

import { NextRequest, NextResponse } from "next/server";

// Structure des données du formulaire
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Vérification que tous les champs sont remplis
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Validation basique du format email
    // Recherche : quelquechose @ quelquechose . quelquechose
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Refus des messages trop courts
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Logging temporaire - service email à implémenter
    console.log("Nouvelle soumission du formulaire de contact:", {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message.substring(0, 100) + "...", // Tronqué pour logs propres
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur du formulaire de contact:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
