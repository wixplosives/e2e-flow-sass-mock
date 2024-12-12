export interface VisualizersProps {
    className?: string;
    bool?: boolean;
    arr?: number[];
    obj?: object;
    color?: string;
    func?: Function;
    enum?: object;
}

export const Visualizers = ({ className }: VisualizersProps) => {
    return <div>Visualizers</div>;
};
