import * as React from 'react'
import TreasurePlugin from '@realsee/dnalogel/plugins/TreasurePlugin'
import { useFivePlugin } from '@realsee/dnalogel/shared-utils/five/useFivePlugin'

export function TreasureBox() {
  const treasurePlugin = useFivePlugin<typeof TreasurePlugin>('treasurePlugin')

  React.useEffect(() => {
    const asynccallback = async () => {
      await treasurePlugin.load({
        treasures: [
          {
            id: '餐桌', // 宝箱唯一标识
            position: { x: 0.2287512636939919, y: 0.7599949836730957, z: -4.91298789515908 },
            type: 0,
          },
          {
            id: 'icebox', // 冰箱地面宝箱位置
            position: { x: -2.9633382297915416, y: 0.1, z: -8.176392826524335 },
            type: 0,
            config: {
              scale: 0.5,
            },
          },
        ],
      })

      treasurePlugin.hooks.on('tap', () => {
        console.log('宝箱被点击')
      })

      treasurePlugin.hooks.on('openAnimationEnded', () => {
        console.log('开箱动画结束')
      })

      treasurePlugin.getTreasureByID('icebox')?.hide()
    }
    asynccallback()
  }, [])

  return <></>
}
