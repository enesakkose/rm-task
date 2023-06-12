import React, { createContext, useContext, useState } from 'react'
import { type CreateAccountObjectType } from '@/components/Modal'
import { MOCK } from '@/utils/helpers/mock'

type AccountInfoContextType = {
  data: CreateAccountObjectType[]
  setData: React.Dispatch<React.SetStateAction<CreateAccountObjectType[]>>
  defaultArray: CreateAccountObjectType[]
  currentData: CreateAccountObjectType[]
  setCurrentData: React.Dispatch<React.SetStateAction<CreateAccountObjectType[]>>
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
  const [data, setData] = useState(MOCK.slice(0, 8))
  const [currentData, setCurrentData] = useState(MOCK.slice(0, 8))
  const defaultArray = [...MOCK]

  const value = { data, setData, defaultArray, currentData, setCurrentData }

  return <AccountInfoContext.Provider value={value}>{children}</AccountInfoContext.Provider>
}

//currentData is created so that it can only sort visible data on the page