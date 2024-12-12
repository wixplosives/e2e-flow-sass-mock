import styles from './simple-button.module.scss';
import cx from 'classnames';

export const SimpleButton = ({
    className,
    children = 'Button',
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button className={cx(styles.root, className)}>{children}</button>;
};
