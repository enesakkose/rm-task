import useGetWindowSize from './useGetWindowSize'

export const useGetBreakPoint = (breakPoint: 'SM' | 'MD') => {
  const size = useGetWindowSize()

  if(breakPoint === 'SM'){
    const SM = size === 'SM' || size === 'MD'
  
    return SM
  }
}