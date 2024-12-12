import { createBoard } from '@wixc3/react-board';
import { SimpleButton } from '~/components/simple-button/simple-button';

export default createBoard({
    name: 'SimpleButton',
    Board: () => <SimpleButton />,
});
