import React from 'react'

import css from './spinner.module.css'

export default function Spinner({ description }) {
  return (
    <div className={css.flexRow}>
      <div class="preloader-wrapper small active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: '2rem', marginLeft: '10px' }}>{description}</div>
    </div>
  )
}
