import * as React from 'react'
import TreasurePlugin, { TreasureType } from '@realsee/dnalogel/plugins/TreasurePlugin'
import { useFivePlugin } from '@realsee/dnalogel/shared-utils/five/useFivePlugin'
// import * as THREE from 'three'

export function TreasureBox() {
  const treasurePlugin = useFivePlugin<typeof TreasurePlugin>('treasurePlugin')

  React.useEffect(() => {
    // const vector = new THREE.Vector3().fromArray([0.2287512636939919, -0.7599949836730957, 4.91298789515908])
    // vector.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI)

    // console.log('vector', { vector })

    treasurePlugin.load({
      treasures: [
        {
          id: Date.now() + 'uuid',
          position: [0.2287512636939919, -0.7599949836730957, 4.91298789515908],
          type: 0,
        },
      ],
    })
  }, [])

  return <></>
}
