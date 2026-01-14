/**
 * 🏠 PÁGINA RAÍZ - ENTRADA PRINCIPAL
 *
 * Responsabilidad: Redireccionar a la página principal (/login)
 * Flujo: Primera página que ve el usuario → Redirección automática
 */

import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirigir al login por defecto
  redirect('/login');
}