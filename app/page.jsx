import '../styles/globals.css'
import styles from '../styles/Home.module.css'

import React from 'react'

const page = () => {
  return (
    <section className={styles.section}>
        <h1>Welcome to Space Viewer</h1>
        <p>Discover the wonders of the universe through Space Viewer, a Next.js-powered website offering a captivating collection of stunning NASA images, transporting you on an interstellar journey from mesmerizing nebulae to awe-inspiring galaxies.</p>
    </section>
  )
}

export default page