import { createBoard } from '@wixc3/react-board';
import { NoStyleImport } from '~/components/no-style-import/no-style-import';

export default createBoard({
    name: 'NoStyleImport',
    Board: () => <NoStyleImport />,
});
