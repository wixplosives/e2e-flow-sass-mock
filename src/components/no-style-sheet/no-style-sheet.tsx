export interface NoStyleSheetProps {
    className?: string;
}

export const NoStyleSheet = ({ className }: NoStyleSheetProps) => {
    return (
        <div style={{ height: '100px', width: '100px', textAlign: 'center' }}>
            Change me to a yellow circle
        </div>
    );
};
