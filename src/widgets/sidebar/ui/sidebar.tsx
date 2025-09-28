import styles from './sidebar.module.scss'
import {useState} from "react";
import clsx from "classnames";
import {ThemeSwitcher} from "@/widgets/theme-switcher";
import {LangSwitcher} from "@/widgets/lang-switcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={clsx({
                [styles.container]: true,
                [styles.collapsed]: collapsed,
                className
            })}
        >
            <button onClick={onToggle}>collapse</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher />
            </div>
        </div>
    );
};