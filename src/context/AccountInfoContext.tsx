import React, { createContext, useContext, useState } from 'react'
import { type CreateAccountObjectType } from '@/components/Modal'
import { MOCK } from '@/utils/helpers/mock'

type AccountInfoContextType = {
  data: CreateAccountObjectType[]
  setData: React.Dispatch<React.SetStateAction<CreateAccountObjectType[]>>
  defaultArray: CreateAccountObjectType[]
  currentData: CreateAccountObjectType[]
  setCurrentData: React.Dispatch<React.SetStateAction<CreateAccountObjectType[]>>
  searchData: CreateAccountObjectType[]
  setSearchData: React.Dispatch<React.SetStateAction<CreateAccountObjectType[]>>
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
  const localData = JSON.parse(localStorage.getItem('accountsInfo') || 'null')
  const dataWithMock: CreateAccountObjectType[] =  localData ? [...MOCK, ...localData] : [...MOCK]
  const [data, setData] = useState(dataWithMock.slice(0, 8))// for begin data
  const [currentData, setCurrentData] = useState(dataWithMock.slice(0, 8))//for filter
  const defaultArray = [...dataWithMock]//for search query
  const [searchData, setSearchData] = useState([...defaultArray])// for search query

  const value = { data, setData, defaultArray, currentData, setCurrentData, searchData, setSearchData }

  return <AccountInfoContext.Provider value={value}>{children}</AccountInfoContext.Provider>
}

//currentData is created so that it can only sort visible data on the page