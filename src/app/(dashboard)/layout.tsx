/**
 * 📊 DASHBOARD LAYOUT - ESTRUCTURA PRINCIPAL DE LA APP
 *
 * Responsabilidad: Layout con sidebar y header para páginas protegidas
 * Flujo: Envuelve páginas del dashboard → Proporciona navegación y estructura
 *
 * Contiene:
 * - PrivateRoute: Protección automática de rutas autenticadas
 * - Sidebar: Navegación lateral (responsive, oculto en mobile)
 * - Header: Barra superior con título y acciones (logout)
 * - Main: Área de contenido principal con scroll
 *
 * Integraciones actuales:
 * - PrivateRoute: Redirige a /login si no está autenticado
 * - [Futuro] SidebarProvider para estado de navegación
 * - [Futuro] Auth checks automáticos
 */

import { PrivateRoute } from '@/components/common';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[var(--background)]">
        {/* Sidebar placeholder - Navegación lateral */}
        <div className="w-64 bg-[var(--sidebar-bg)] border-r border-[var(--border-color)] hidden md:block">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Activos Fijos</h2>
            <nav className="mt-8">
              <ul className="space-y-2">
                <li>
                  <a href="/dashboard" className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/activos" className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-colors">
                    Activos
                  </a>
                </li>
                <li>
                  <a href="/categorias" className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-colors">
                    Categorías
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content - Área principal */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Header placeholder - Barra superior */}
          <header className="bg-[var(--header-bg)] border-b border-[var(--border-color)] px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-[var(--text-primary)]">Sistema de Activos Fijos</h1>
              <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary)]/90 transition-colors">
                Cerrar Sesión
              </button>
            </div>
          </header>

          {/* Main content area - Contenido de páginas */}
          <main className="flex-1 overflow-y-auto bg-[var(--content-bg)] p-6">
            {children}
          </main>
        </div>
      </div>
    </PrivateRoute>
  );
}
