import * as React from 'react'
import classNames from 'classnames'
import { useFiveEventCallback, useFiveProject2d, useFiveState } from '@realsee/five/react'

import { VreoUnit } from '@realsee/vreo/lib/typings/VreoUnit'
import { Vector3 } from 'three'
import { useVreoAction, useVreoEventCallback, useVreoPausedState } from '@realsee/vreo/lib/react'
import { useStoresContext } from '../../stores'

export interface PanoVeroTagProps {
  model_name: string
  position: [number, number, number]
  pano_index: number
  vreo_unit: VreoUnit
}

export function PanoVreoTag(props: PanoVeroTagProps) {
  const [fiveState] = useFiveState()
  const [paused, setPaused] = React.useState(true)
  const project2d = useFiveProject2d()
  const stores = useStoresContext()
  const { load, show } = useVreoAction()
  const [state, setState] = React.useState<{ left: number; top: number } | null>(null)

  const updateState = () => {
    const res = project2d(new Vector3(...props.position), false)
    if (!res) return
    const { x: left, y: top } = res

    if (left === 0 && top === 0) {
      return
    }
    console.log('updateState', paused)
    setState({ left, top })
  }

  useFiveEventCallback('modelLoaded', () => updateState())
  useFiveEventCallback('currentStateChange', () => updateState(), [props.position])

  useVreoEventCallback('paused', () => setPaused(true))
  useVreoEventCallback('playing', () => setPaused(false))

  return (
    <div
      className={classNames('PanoVreoTag', {
        // 当前点位才展示
        'PanoVreoTag--visible': fiveState.panoIndex === props.pano_index && state && paused,
      })}
      style={{
        WebkitTransform: `translate3d(${(state?.left || 0) + 'px'},${(state?.top || 0) + 'px'}, 0px)`,
        transform: `translate3d(${(state?.left || 0) + 'px'},${(state?.top || 0) + 'px'}, 0px)`,
      }}
      onClick={() => {
        if (!paused) {
          return
        }
        console.log('paused', paused)
        stores.mainPanelStore.setVisible(false)
        show()

        // 保障每次播放都是最新的
        load(JSON.parse(JSON.stringify(props.vreo_unit)))
      }}
    >
      <div className="PanoVreoTag--inner">
        <i className="PanoVreoTag-icon PanoVreoTag-icon--play"></i>
        <span>听介绍</span>
        <div className="PanoVreoTag-wave PanoVreoTag-wave--left"></div>
        <div className="PanoVreoTag-wave PanoVreoTag-wave--right"></div>
      </div>
    </div>
  )
}
