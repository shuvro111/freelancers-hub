import { ClassValue } from "clsx"

import { cn } from "@/lib/utils"

export interface BaseProps {
  children: React.ReactNode
  className?: ClassValue
}

export interface BackdropProps extends BaseProps {
  open: boolean
  onClose(): void
}

export interface ModalContentProps extends BaseProps {
  open: boolean
}

export interface ModalTriggerProps extends BaseProps {
  onClose(): void
}

export const Modal = ({ children, className }: BaseProps) => {
  return (
    <div
      className={cn(``, `${className}`)}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export const Backdrop = ({
  open,
  onClose,
  children,
  className,
}: BackdropProps) => {
  //Backdrop
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center transition-colors",
        `${open ? "visible bg-black/20 backdrop-blur-sm" : "invisible"}`,
        `${className}`
      )}
      onClick={onClose}
    >
      {children}
    </div>
  )
}

export const ModalContent = ({
  children,
  className,
  open,
}: ModalContentProps) => {
  return (
    <div
      className={cn(
        `transition-all duration-500 ease-in-out`,
        `${
          open
            ? "translate-x-0 opacity-100"
            : "right-full translate-x-full opacity-0"
        }`,
        `${className}`
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export const ModalTrigger = ({
  children,
  className,
  onClose,
}: ModalTriggerProps) => {
  return (
    <div className={cn(``, `${className}`)} onClick={onClose}>
      {children}
    </div>
  )
}
