import { createBoard } from '@wixc3/react-board';
import { StylePanelGrid } from '~/components/style-panel-grid/style-panel-grid';

export default createBoard({
    name: 'StylePanelGrid',
    Board: () => <StylePanelGrid />,
});
