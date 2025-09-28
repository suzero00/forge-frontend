import styles from './lang-switcher.module.scss'
import React from "react";
import {useTranslation} from "react-i18next";

export const LangSwitcher = () => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
            <button onClick={toggle} className={styles.container}>
                {t('Язык')}
            </button>
    );
};