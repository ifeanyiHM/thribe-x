import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
    label: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
};

const Button = ({ label, href, onClick, className = "", children, disabled }: ButtonProps) => {
    return href ? (
        <Link href={href} className={`${className} button-class`}>
            {label}
            {children && <span>{children}</span>}
        </Link>
    ) : (
        <button onClick={onClick} className={`${className} button-class`} disabled={disabled}>
            {label}
            {children && <span>{children}</span>}
        </button>
    );
};

export default Button;
