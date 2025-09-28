import styles from './header.module.scss';
import { AppLink } from '@/shared/ui/app-link';
import React from 'react';
import { ThemeSwitcher } from '@/widgets/theme-switcher';

export const Header = () => {
    return (
        <div className={styles.container}>
            <ThemeSwitcher />
            <nav className={styles.nav}>
                <AppLink to={'/'}>main</AppLink>
                <AppLink to={'/about'}>about</AppLink>
            </nav>
        </div>
    );
};
