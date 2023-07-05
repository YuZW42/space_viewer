"use client"
import '../styles/globals.css';
import styles from '../styles/Nav.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react"

const Nav = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
          <div>
              <Link href="/" className={styles.title}>
                  <Image
                      src="/assets/icons/logo.svg"
                      alt="Space Viewer Logo"
                      width={60}
                      height={60}
                  />
                  <p href="/">Space Viewer</p>
              </Link>
          </div>
          <div className={styles.menu}>
              <Link href="/">Home</Link>
              <Link href="/daily">Picture of the Day</Link>
              <Link href="/gallery">Gallery</Link>
          </div>
      </div>
    </div>
  )
}

export default Nav