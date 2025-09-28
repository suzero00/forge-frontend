import styles from './theme-switcher.module.scss'
import {useTheme} from "@/shared/hooks/useTheme";
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import {FC} from "react";
import {Theme} from "@/app/providers/theme-provider";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme} className={`${styles.container} ${className}`}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </button>
    );
};