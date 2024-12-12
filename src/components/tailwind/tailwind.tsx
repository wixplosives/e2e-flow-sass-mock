import styles from './tailwind.module.scss';
import cx from 'classnames';

export interface TailwindProps {
    className?: string;
}

export const Tailwind = ({ className }: TailwindProps) => {
    return (
        <div className={cx('bg-blue-700 text-orange-700', styles.root, className)}>Tailwind</div>
    );
};
