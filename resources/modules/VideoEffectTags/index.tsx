import * as React from 'react'
import * as THREE from 'three'
import { useFiveEventCallback, useFiveProject2d, useFiveState } from '@realsee/five/react'

import { videoEffectTags } from '../../data/videoEffectTags'

import './index.css'
import { useFivePlugin } from '@realsee/dnalogel/shared-utils/five/useFivePlugin'
import { TreasurePlugin } from '@realsee/dnalogel/plugins/TreasurePlugin'
import { CameraMovementPlugin } from '@realsee/dnalogel/plugins/CameraMovementPlugin'

export interface VideoEffectTagProps {
  text: string
  position: {
    x: number
    y: number
    z: number
  }
  url: string // 视频地址
  startframe: {
    fov: number
    panoIndex: number
    latitude: number
    longitude: number
  }
  // 视频播放结束后的动作
  endframe: {
    fov: number
    panoIndex: number
    latitude: number
    longitude: number
  }
}

function VideoEffectTag(props: VideoEffectTagProps) {
  const ref = React.useRef<HTMLVideoElement>(null)

  const [visible, setVisible] = React.useState(false)
  const [fiveState] = useFiveState()
  const fiveProject2d = useFiveProject2d()
  const [pos, setPos] = React.useState<[number, number]>([0, 0])

  const treasurePlugin = useFivePlugin<typeof TreasurePlugin>('treasurePlugin')
  const cameraMovementPlugin = useFivePlugin<typeof CameraMovementPlugin>('cameraMovementPlugin')

  // 文字坐标跟随相机运镜
  useFiveEventCallback(
    'stateChange',
    () => {
      if (fiveState.panoIndex !== props.startframe.panoIndex) {
        return
      }

      const res = fiveProject2d(new THREE.Vector3(props.position.x, props.position.y, props.position.z), false)

      if (!res) {
        return
      }

      const { x, y } = res
      setPos([x, y])
    },
    [fiveState.panoIndex]
  )

  // 点击行为
  const onClick = async () => {
    // 运镜
    await cameraMovementPlugin.rotate(props.startframe, 300)

    // 展示视频
    setVisible(true)
    // 播放视频
    ref.current?.play()

    // 视频播放完成回调
    const callback = async () => {
      // 隐藏视频
      setVisible(false)
      // HACK 业务逻辑
      // 运镜：移动到 宝箱位置
      await cameraMovementPlugin.rotate(props.endframe, 300)
      // 展示宝箱
      treasurePlugin.getTreasureByID('icebox')?.show()

      // 移除 异步事件监听
      ref.current?.removeEventListener('ended', callback)
    }

    ref.current?.addEventListener('ended', callback)
  }

  return (
    <div
      className="VideoEffectTag"
      style={{ display: fiveState.panoIndex === props.startframe.panoIndex ? 'flex' : 'none' }}
    >
      <div
        onClick={onClick}
        className="VideoEffectTag-txt"
        style={{
          WebkitTransform: `translate3d(${pos[0] + 'px'},${pos[1] + 'px'}, 0px)`,
          transform: `translate3d(${pos[0] + 'px'},${pos[1] + 'px'}, 0px)`,
          display: !visible ? 'block' : 'none',
        }}
      >
        <div className="VideoEffectTag-txt--inner">{props.text}</div>
      </div>
      <video
        style={{
          display: visible ? 'block' : 'none',
        }}
        ref={ref}
        className="VideoEffectTag-video"
        playsInline
        src={props.url}
      ></video>
    </div>
  )
}

export function VideoEffectTags() {
  return (
    <>
      {videoEffectTags.map((props, idx) => (
        <VideoEffectTag key={idx} {...props} />
      ))}
    </>
  )
}
