import 'babel-polyfill'

import * as React from 'react'
import ReactDOM from 'react-dom'
import { VreoProvider } from '@realsee/vreo/lib/react'
import { FiveInitArgs, parseWork } from '@realsee/five'
import { createFiveProvider } from '@realsee/five/react'
import TreasurePlugin from '@realsee/dnalogel/plugins/TreasurePlugin'
import CameraMovementPlugin from '@realsee/dnalogel/plugins/CameraMovementPlugin'
import PanoFloorplanRadarPlugin from '@realsee/dnalogel/plugins/floorplan/PanoFloorplanRadarPlugin'

import { App } from './App'
import { work } from './data/work/znRoyv06SZQeqA7m'

import './index.css'
import { ResponsiveFullScreenFiveCanvas } from './components/ResponsiveFullScreenFiveCanvas'

const defaultInitArgs: FiveInitArgs = {
  imageOptions: { size: 1024 },
  textureOptions: { size: 64 },
  onlyRenderIfNeeds: true,
  antialias: false,
  model: {},
  plugins: [
    [CameraMovementPlugin, 'cameraMovementPlugin', {}],
    [TreasurePlugin, 'treasurePlugin'],
    [PanoFloorplanRadarPlugin, 'panoFloorplanRadar', {}],
  ],
}

const FiveProvider = createFiveProvider(defaultInitArgs)

ReactDOM.render(
  <React.StrictMode>
    <FiveProvider initialWork={parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref?.five })}>
      <ResponsiveFullScreenFiveCanvas />
      <VreoProvider>
        <App />
      </VreoProvider>
    </FiveProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
