/**
 * 🎣 HOOKS - LÓGICA DE DATOS Y ESTADO
 *
 * Responsabilidad: Centralizar custom hooks para manejo de datos
 * Flujo: Importado por componentes → Conecta con GraphQL/Backend
 *
 * Contiene:
 * - useAuth: Autenticación y usuario (viene de context)
 * - [Futuro] useActivos: Gestión de activos fijos
 * - [Futuro] useCategorias: Categorías de activos
 */

// Hooks de autenticación (viene del context)
export { useAuth } from '@/context/auth-context';

// [Futuro] Exportar hooks personalizados aquí
// export { useActivos } from './useActivos';
// export { useCategorias } from './useCategorias';
