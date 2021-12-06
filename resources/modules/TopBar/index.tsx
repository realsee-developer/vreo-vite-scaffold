import * as React from 'react'
import classNames from 'classnames'
import { useVreoAction, useVreoPausedState } from '@realsee/vreo/lib/react'

import './index.css'
import { useStoresContext } from '../../stores'
import { useFiveCurrentState, useFiveEventCallback } from '@realsee/five/react'
import { Five } from '@realsee/five'

function VeroPlayingIcon() {
  const paused = useVreoPausedState()
  const { pause, hide } = useVreoAction()
  const stores = useStoresContext()

  return (
    <div
      className={classNames('topbar-btn', {
        'topbar-btn--visible': !paused,
      })}
      onClick={() => {
        if (paused) {
          return
        }
        pause()
        hide()
        stores.mainPanelStore.setVisible(true)
      }}
    >
      <i className="topbar-icon topbar-icon--exit"></i>
    </div>
  )
}

export function BackIcon() {
  const [, setFiveState] = useFiveCurrentState()

  return (
    <div
      className="topbar-btnback"
      onClick={() => {
        setFiveState({ mode: Five.Mode.Panorama })
      }}
    >
      <i className="topbar-icon topbar-icon--back"></i>
    </div>
  )
}

export function TopBar() {
  const [fiveState] = useFiveCurrentState()

  return (
    <div
      className={classNames('topbar', {
        'topbar--Floorplan': fiveState.mode === Five.Mode.Floorplan,
      })}
    >
      <div className="topbar-inner">
        <div className="topbar-left">
          <BackIcon />
          <div className="topbar-title">智能语音导览</div>
        </div>
        <div className="topbar-right">
          <VeroPlayingIcon />
        </div>
      </div>
    </div>
  )
}
