import * as React from 'react'
import { TopBar } from './modules/TopBar'
import { StoresProvider } from './stores'
import { MainPanel } from './modules/MainPanel'
import { TreasureBox } from './modules/TreasureBox'
import { PanoVreoTags } from './modules/PanoVreoTags'
import { PanoFloorplanRadar } from './modules/PanoFloorplanRadar'

export function App() {
  return (
    <StoresProvider>
      <TopBar />
      <MainPanel />
      <PanoFloorplanRadar />
      <PanoVreoTags />
      <TreasureBox />
    </StoresProvider>
  )
}
