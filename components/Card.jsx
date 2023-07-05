'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Card.module.css'
import Image from 'next/image'

const Card = () => {
  return (
    <div className={styles.boundary}>
        <div className={styles.view_window}>
            <div className={styles.image}>
                <Image
                    src="/assets/images/placeholder.png"
                    alt="Placeholder Image"
                    width={260}
                    height={200}
                    className={styles.image}
                />
            </div>
            <div className={styles.description}>
                <h3>Date</h3>
                <p>Title</p>
                <Link href="/gallery">
                    <h4>View</h4>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card