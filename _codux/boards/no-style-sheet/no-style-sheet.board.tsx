import { createBoard } from '@wixc3/react-board';
import { NoStyleSheet } from '~/components/no-style-sheet/no-style-sheet';

export default createBoard({
    name: 'NoStyleSheet',
    Board: () => <NoStyleSheet />,
});
