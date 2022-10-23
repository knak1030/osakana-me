import { createContext, useCallback, useState } from 'react'

type TabIndexContext = {
  tabIndex: number
  setTabIndex: (tabIndex: number) => void
};

const defaultContext: TabIndexContext = {
  tabIndex: -1,
  setTabIndex: () => ({}),
}

export const TabIndexContext = createContext<TabIndexContext>(defaultContext)

export const useTabIndex = (defaultIndex: number): TabIndexContext => {
  const [tabIndex, setIndex] = useState<number>(defaultIndex)
  const setTabIndex = useCallback((data: number): void => {
    console.log('setTabIndex hook use callbackの中')
    setIndex(data)
  }, [])

  return {
    tabIndex,
    setTabIndex
  }
}
