import React from 'react'
import styles from './loading.module.scss'
function Loading() {
  return (
    <div className={styles.container}>
    <div className={styles.ring}>
        <h1>Loading...</h1>
    </div>
</div>
  )
}

export default Loading