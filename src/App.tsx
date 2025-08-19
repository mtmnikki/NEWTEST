/**
 * App routes for ClinicalRxQ
 * Uses React Router v7 (react-router) with MemoryRouter to avoid react-router-dom dependency.
 * Member pages are gated behind ProtectedRoute, and ErrorBoundary prevents blank screens.
 */

import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import ProgramPage from './pages/programs/ProgramPage'
import ProgramsPage from './pages/Programs'
import ResourcesPage from './pages/Resources'
import ContactPage from './pages/Contact'
import JoinPage from './pages/Join'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { AuthProvider } from './components/auth/AuthContext'
import ErrorBoundary from './components/common/ErrorBoundary'

/**
 * Root App component defining providers and MemoryRouter with an ErrorBoundary wrapper.
 * Note: MemoryRouter keeps navigation in-memory (no URL changes), which suits this preview environment.
 */
export default function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/enroll" element={<JoinPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Member-only (Gated) Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/programs"
              element={
                <ProtectedRoute>
                  <ProgramsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/programs/:slug"
              element={
                <ProtectedRoute>
                  <ProgramPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/library"
              element={
                <ProtectedRoute>
                  <ResourcesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute>
                  <ResourcesPage />
                </ProtectedRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </ErrorBoundary>
    </AuthProvider>
  )
}
