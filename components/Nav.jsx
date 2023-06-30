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
    </nav>
  )
}

export default Nav