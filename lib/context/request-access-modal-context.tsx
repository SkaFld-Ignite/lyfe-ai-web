"use client"

import * as React from "react"
import type { Database } from "@/types/db"

type Role = Database["public"]["Tables"]["access_requests"]["Row"]["role"]

interface RequestAccessModalContextValue {
  isOpen: boolean
  openModal: (role?: Role) => void
  closeModal: () => void
  defaultRole: Role
}

const RequestAccessModalContext =
  React.createContext<RequestAccessModalContextValue | null>(null)

export function useRequestAccessModal() {
  const context = React.useContext(RequestAccessModalContext)
  if (!context) {
    throw new Error(
      "useRequestAccessModal must be used within a RequestAccessModalProvider"
    )
  }
  return context
}

interface RequestAccessModalProviderProps {
  children: React.ReactNode
}

export function RequestAccessModalProvider({
  children,
}: RequestAccessModalProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [defaultRole, setDefaultRole] = React.useState<Role>("provider")

  const openModal = React.useCallback((role?: Role) => {
    if (role) {
      setDefaultRole(role)
    }
    setIsOpen(true)
  }, [])

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = React.useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
      defaultRole,
    }),
    [isOpen, openModal, closeModal, defaultRole]
  )

  return (
    <RequestAccessModalContext.Provider value={value}>
      {children}
    </RequestAccessModalContext.Provider>
  )
}
