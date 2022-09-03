import React from 'react';
import styles from './style.module.css';

export const Navbar = () => {
    const navItems = [
        'About',
        'Experience',
        'Work',
        'Skills',
        'Writing',
        'Contact',
    ];
    return (
        <div className={styles.navItemsContainer}>
            {navItems.map((nav) => (
                <div key={nav} className={styles.navItems}>
                    {nav}
                </div>
            ))}
        </div>
    );
};
