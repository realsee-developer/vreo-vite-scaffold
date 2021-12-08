import * as React from 'react'
import TreasurePlugin from '@realsee/dnalogel/plugins/TreasurePlugin'
import { useFivePlugin } from '@realsee/dnalogel/shared-utils/five/useFivePlugin'

export function TreasureBox() {
  const treasurePlugin = useFivePlugin<typeof TreasurePlugin>('treasurePlugin')

  React.useEffect(() => {
    treasurePlugin.load({
      treasures: [
        {
          id: '餐桌', // 宝箱唯一标识
          position: { x: 0.2287512636939919, y: 0.7599949836730957, z: -4.91298789515908 },
          type: 0,
        },
        {
          id: '灶台', // 宝箱唯一标识
          position: { x: -1.413017058083, y: 0.853471678296, z: -8.691163807665 },
          type: 0,
        },
      ],
    })

    treasurePlugin.hooks.on('tap', () => {
      console.log('宝箱被点击')
    })

    treasurePlugin.hooks.on('openAnimationEnded', () => {
      console.log('开箱动画结束')
    })
  }, [])

  return <></>
}
