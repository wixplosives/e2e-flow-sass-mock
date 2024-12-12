import styles from './style-panel-grid.module.scss';
import cx from 'classnames';

export interface StylePanelGridProps {
    className?: string;
    colors?: Array<string>;
}

export const StylePanelGrid = ({
    className,
    colors = ['#F25022', '#7FBA00', '#00A4EF', '#FFB900'],
}: StylePanelGridProps) => {
    colors = [...new Set(colors)];
    return (
        <div className={cx(styles.root, className)}>
            {colors.map((box) => (
                <div className={styles.box} key={box} style={{ background: box }} />
            ))}
        </div>
    );
};
