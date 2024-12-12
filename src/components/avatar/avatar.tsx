import styles from './avatar.module.scss';
import cx from 'classnames';

export interface AvatarProps {
    className?: string;
    image: string;
    title: string;
    subtitle?: string;
    children?: JSX.Element;
}

export const Avatar = ({ className, image, title, subtitle }: AvatarProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <img src={image} alt="image" className={styles.avatarImage} />
            <div>
                <div className={styles.avatarTitle}>{title}</div>
                <div className={styles.avatarSubtitle}>{subtitle}</div>
            </div>
        </div>
    );
};
