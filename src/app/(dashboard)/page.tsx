/**
 * 📊 DASHBOARD PAGE - PÁGINA PRINCIPAL DEL SISTEMA
 *
 * Responsabilidad: Mostrar estadísticas y resumen general del sistema
 * Flujo: Página principal → Muestra métricas de activos fijos
 *
 * Contiene:
 * - Header con título y descripción
 * - Cards con estadísticas (Total activos, Activos activos, etc.)
 * - Gráficos y métricas visuales
 * - Lista de activos recientes (mock data)
 * - Alertas del sistema
 *
 * [Futuro] Conectará con:
 * - Hooks para obtener datos reales
 * - GraphQL queries para estadísticas
 * - Componentes reutilizables para métricas
 */

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header de la página */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Dashboard</h1>
        <p className="text-[var(--text-secondary)] mt-1">
          Bienvenido al Sistema de Gestión de Activos Fijos
        </p>
      </div>

      {/* Cards de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[var(--card-bg)] p-6 rounded-lg card-shadow border border-[var(--border-color)]">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[var(--text-secondary)]">Total Activos</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] p-6 rounded-lg card-shadow border border-[var(--border-color)]">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[var(--text-secondary)]">Activos Activos</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">987</p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] p-6 rounded-lg card-shadow border border-[var(--border-color)]">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[var(--text-secondary)]">En Mantenimiento</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">23</p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] p-6 rounded-lg card-shadow border border-[var(--border-color)]">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-[var(--text-secondary)]">Valor Total</p>
              <p className="text-2xl font-bold text-[var(--text-primary)]">$2.5M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido adicional */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[var(--card-bg)] p-6 rounded-lg card-shadow border border-[var(--border-color)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Activos Recientes</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-[var(--border-color)]">
              <div>
                <p className="font-medium text-[var(--text-primary)]">Laptop Dell XPS 13</p>
                <p className="text-sm text-[var(--text-secondary)]">Agregado hace 2 días</p>
              </div>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                Activo
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[var(--border-color)]">
              <div>
                <p className="font-medium text-[var(--text-primary)]">Impresora HP LaserJet</p>
                <p className="text-sm text-[var(--text-secondary)]">Agregado hace 5 días</p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                Mantenimiento
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] p-6 rounded-lg card-shadow border border-[var(--border-color)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Alertas</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Mantenimiento pendiente
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  5 activos requieren mantenimiento este mes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
