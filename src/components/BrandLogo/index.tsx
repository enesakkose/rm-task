import { useGetBreakPoint } from '@/utils/hooks/useGetBreakPoint'

function BrandLogo() {
  const SM = useGetBreakPoint('SM')
  
  return (
    <img src='/brand.png' width={SM ? 60 : 124} height={SM ? 30 : 48}/>
  )
}

export default BrandLogo