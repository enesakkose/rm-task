import React, { createContext, useContext, useState } from 'react'

export type RowType = { value: '4' | '8' | '12' | '16' | '20', piece: string } 

type RowContextType = {
  row: RowType
  setRow: React.Dispatch<React.SetStateAction<RowType>>
}

const RowContext = createContext<RowContextType | undefined>(undefined)

export const useRowContext = () => {
  const context = useContext(RowContext)
  if (!context) {
    throw new Error('useRowContext must be used within a RowProvider')
  }
  return context
}

type RowProviderProps = {
  children: React.ReactNode
}

export const RowProvider = ({ children }: RowProviderProps) => {
  const [row, setRow] = useState<RowType>({ value: '8', piece: '8 rows' })

  const value = {
    row,
    setRow,
  }

  return <RowContext.Provider value={value}>{children}</RowContext.Provider>
}
