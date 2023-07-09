'use client'


import Link from "next/link"
import { useState, useEffect } from 'react'

import styles from '../styles/Card_Feed.module.css'
import Card from '../components/Card';

const CardList = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <Card 
                    src = {item}
                />
            ))}
        </div>
    )
}

const Card_Feed = () => {
    const card_count = 12;

    const [query, setQuery] = useState('')
    const [cards, setCards] = useState([])

    const setCardData = async (data) => {
        let temp = []
        for (let i = 0; i < card_count; i++) {
            const response = await fetch(`${data[i].href}`);
            const new_data = await response.json();
            const image = new_data[1]
            temp.push(image)
        }
        // alert(temp)
        setCards(temp)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`/api/gallery/search?id=${encodeURIComponent(query)}`);
            const data = await response.json();

            if (data.collection.items.length == 0) {
                alert("No results found")
            }
            setCardData(data.collection.items)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    return (
        <div>
            <div className={styles.bar_frame}> 
                <form className={ styles.form } onSubmit={handleSubmit}> 
                    <input className={styles.search_bar}
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    />       
                    <button className={ styles.button } type="submit"  >Search</button>
                </form>
            </div>
            <div className={styles.section}>
                <div className={styles.array}>
                    {
                        // map images in cards
                        cards.map((imageUrl, index) => (
                            <Card key={index} src={imageUrl} />
                        ))
                    }
                </div>
                {/* <CardList className={styles.section} data={cards} />
                <div className={styles.array}> 
                    {Array.from({ length: card_count }).map((_, index) => (
                        <Card key={index} />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Card_Feed