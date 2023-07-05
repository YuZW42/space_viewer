'use client'

import { useState, useEffect } from 'react'

import styles from '../styles/Card_Feed.module.css'
import Card from '../components/Card';

const Card_Feed = () => {
    const card_count = 12;

    return (
    <div className={styles.section}>
        <div className={styles.array}> 
            {Array.from({ length: card_count }).map((_, index) => (
                        <Card key={index} />
                    ))}
        </div>
    </div>
    )
}

export default Card_Feed