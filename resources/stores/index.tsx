import * as React from 'react'
import { MainPanelStore } from './MainPanelStore'

export class Stores {
  mainPanelStore: MainPanelStore

  constructor() {
    this.mainPanelStore = new MainPanelStore(this)
  }
}

const stores = new Stores()

Object.assign(window, { $stores: stores })

export const StoresContext = React.createContext<Stores>(stores)

export const StoresProvider: React.FC = (props) => {
  return <StoresContext.Provider value={stores}>{props.children}</StoresContext.Provider>
}

export function useStoresContext() {
  const context = React.useContext(StoresContext)

  if (!context) {
    throw new Error('StoresProvider never found.')
  }

  return context
}
