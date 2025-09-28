import styles from './app-link.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC, ReactNode} from "react";

interface AppLinkProps extends LinkProps {
    children?: ReactNode;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({children, className, to, ...props}) => {
    return (
        <Link to={to} className={`${styles.container} ${className}`} {...props}>
            {children}
        </Link>
    );
};