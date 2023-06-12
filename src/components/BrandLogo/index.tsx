import React from 'react'
import { useGetBreakPoint } from '@/utils/hooks/useGetBreakPoint'

function BrandLogo() {
  const SM = useGetBreakPoint('SM')
  
  return (
    <img src='https://rastmobile.com/wp-content/uploads/2022/08/Rastmobile-Logo.svg' width={SM ? 62 : 124} height={60}/>
  )
}

export default BrandLogo