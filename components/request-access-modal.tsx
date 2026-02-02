"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RequestAccessForm } from "@/components/request-access-form"
import { Button } from "@/components/ui/button"
import type { Database } from "@/types/db"

type Role = Database["public"]["Tables"]["access_requests"]["Row"]["role"]

interface RequestAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultRole?: Role
}

export function RequestAccessModal({
  open,
  onOpenChange,
  defaultRole = "provider",
}: RequestAccessModalProps) {
  const [isSuccess, setIsSuccess] = React.useState(false)

  // Reset success state when modal closes
  React.useEffect(() => {
    if (!open) {
      // Delay reset to allow close animation to complete
      const timer = setTimeout(() => {
        setIsSuccess(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [open])

  const handleSuccess = () => {
    setIsSuccess(true)
  }

  const handleClose = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.1,
                }}
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/50"
              >
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold"
              >
                Request Submitted!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-muted-foreground"
              >
                Thanks for your interest in Lyfe AI. We&apos;ll be in touch soon.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Button onClick={handleClose} variant="outline">
                  Close
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle>Request Access</DialogTitle>
                <DialogDescription>
                  Fill out the form below and we&apos;ll reach out to get you started.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <RequestAccessForm
                  defaultRole={defaultRole}
                  onSuccess={handleSuccess}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
