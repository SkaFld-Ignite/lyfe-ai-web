"use client"

import { RequestAccessModal } from "@/components/request-access-modal"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"

export function RequestAccessModalContainer() {
  const { isOpen, closeModal, defaultRole } = useRequestAccessModal()

  return (
    <RequestAccessModal
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeModal()
      }}
      defaultRole={defaultRole}
    />
  )
}
