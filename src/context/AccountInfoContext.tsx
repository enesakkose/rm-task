import React, { createContext, useContext, useState } from 'react'
import { type CreateAccountObjectType } from '@/components/Modal'
import { MOCK } from '@/utils/helpers/mock'

type AccountInfoContextType = {
  data: CreateAccountObjectType[]
  setData: React.Dispatch<React.SetStateAction<CreateAccountObjectType[]>>
}

const AccountInfoContext = createContext<AccountInfoContextType | undefined>(undefined)

export const useAccountInfoContext = () => {
  const context = useContext(AccountInfoContext)
  if (!context) {
    throw new Error('useAccountInfoContext must be used within a AccountInfoProvider')
  }
  return context
}

type AccountInfoProviderProps = {
  children: React.ReactNode
}

export const AccountInfoProvider = ({ children }: AccountInfoProviderProps) => {
  const [data, setData] = useState(MOCK)

  const value = { data, setData }

  return <AccountInfoContext.Provider value={value}>{children}</AccountInfoContext.Provider>
}