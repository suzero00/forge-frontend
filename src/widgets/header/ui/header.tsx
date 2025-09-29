import styles from './header.module.scss';
import React from 'react';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <ThemeSwitcher />
            <nav className={styles.nav}>
                <span className={styles.nav_link} onClick={() => navigate('/')}>
                    main
                </span>
                <span className={styles.nav_link} onClick={() => navigate('/about')}>
                    about
                </span>
            </nav>
        </div>
    );
};
