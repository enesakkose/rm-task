import React, { createContext, useContext, useState } from 'react'

type ModalContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

type ModalProviderProps = {
  children: React.ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [open, setOpen] = useState(false)
  const value = { open, setOpen }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}