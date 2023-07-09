import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css';
import Image from 'next/image';

const Card = (props) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const placeholderImage = '/assets/images/placeholder.png'; // Specify the path to your placeholder image here

  return (
    <div className={styles.boundary}>
      <div className={styles.view_window}>
        <div className={styles.image}>
          {imageError ? (
            <Image 
                src={placeholderImage} 
                width={260}
                height={200}
                alt="Placeholder Image" 
                className={styles.image} 
            />
          ) : (
            <Image
              src={props.src}
              alt="Placeholder Image"
              width={260}
              height={200}
              className={styles.image}
              onError={handleImageError}
            />
          )}
        </div>
        {/* <div className={styles.description}>
          <h3>Date</h3>
          <p>Title</p>
          <Link href="/gallery">
            <h4>View</h4>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
