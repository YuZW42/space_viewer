"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react"

const Nav = () => {
  return (
    <nav>
        <Link href="/">
            <Image
                src="/assets/icons/logo.svg"
                alt="Space Viewer Logo"
                width={100}
                height={100}
            />
        </Link>
        <p className="logo_text">Space Viewer</p>
        <Link href="/daily">Picture of the Day</Link>
        <Link href="/feed">Gallery</Link>
    </nav>
  )
}

export default Nav