import cx from 'classnames';

export interface NoStyleImportProps {
    className?: string;
}

export const NoStyleImport = ({ className }: NoStyleImportProps) => {
    return <div className={cx(className)}>NoStyleImport</div>;
};
