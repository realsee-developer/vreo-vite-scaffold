import * as React from 'react'
import { vreoTags } from '../../data/vreoTags'
import { PanoVeroTagProps, PanoVreoTag } from './PanoVreoTag'

import './index.css'

export function PanoVreoTags() {
  return (
    <>
      {vreoTags.map((item, idx) => {
        const tag = item as PanoVeroTagProps
        return <PanoVreoTag key={idx} {...tag} />
      })}
    </>
  )
}
