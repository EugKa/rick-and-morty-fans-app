import React from 'react'
import { Link } from 'react-router-dom';
import styles from './index.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link to='/' className={styles.link}>
                    <h3 className={styles.htag}>
                        My watch list
                    </h3> 
                </Link>
                <Link to='/character' className={styles.link}>
                    <h3 className={styles.htag}>
                        Characters
                    </h3>
                </Link>
                <Link to='/episode' className={styles.link}>
                    <h3 className={styles.htag}>
                        Epissodes
                    </h3> 
                </Link>
                <Link to='/location' className={styles.link}>
                    <h3 className={styles.htag}>
                        Locations
                    </h3> 
                </Link>
            </div>
        </header>
    )
}
