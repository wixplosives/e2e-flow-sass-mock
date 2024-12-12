import { createBoard } from '@wixc3/react-board';
import { Tailwind } from '../../../src/components/tailwind/tailwind';

export default createBoard({
    name: 'Tailwind',
    Board: () => <Tailwind />,
});
