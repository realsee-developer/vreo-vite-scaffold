import * as React from 'react'
import classNames from 'classnames'

import { useFivePlugin } from '@realsee/dnalogel/shared-utils/five/useFivePlugin'
import PanoFloorplanRadarPlugin from '@realsee/dnalogel/plugins/floorplan/PanoFloorplanRadarPlugin'
import { floorplanData } from '../../data/floorplan'

import './index.css'
import { useFiveEventCallback, useFiveState } from '@realsee/five/react'
import { Five } from '@realsee/five'

export function PanoFloorplanRadar() {
  const ref = React.useRef(null)
  const panoFloorplanRadarPlugin = useFivePlugin<typeof PanoFloorplanRadarPlugin>('panoFloorplanRadar')
  const [, changeFiveState] = useFiveState()
  const [visible, setVisible] = React.useState(true)
  React.useEffect(() => {
    const asynccallback = async () => {
      if (!ref.current) return

      panoFloorplanRadarPlugin.appendTo(ref.current)
      await panoFloorplanRadarPlugin.load(floorplanData)
    }
    asynccallback()
  }, [])

  useFiveEventCallback('modeChange', (mode) => {
    if (mode === Five.Mode.Floorplan) {
      setVisible(false)
    } else if (mode === Five.Mode.Panorama) {
      setVisible(true)
    }
  })

  return (
    <div
      onClick={() => {
        changeFiveState({ mode: Five.Mode.Floorplan })
      }}
      className={classNames('PanoFloorplanRadar', {
        'PanoFloorplanRadar--visible': visible,
      })}
      ref={ref}
    ></div>
  )
}
