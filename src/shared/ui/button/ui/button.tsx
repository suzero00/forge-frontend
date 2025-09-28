import styles from './button.module.scss'
import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import clsx from 'classnames';

type ButtonVariant = 'main' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({children, className, variant = 'main', disabled, ...props}) => {
    return (
        <button className={clsx({
            [styles.container]: true,
            [styles[`_${variant}`]]: true,
            [styles._disabled]: disabled,
            className,
        })} {...props}
        >
            {children}
        </button>
    );
};