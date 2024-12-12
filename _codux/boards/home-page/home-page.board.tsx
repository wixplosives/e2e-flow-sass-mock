import { createBoard } from '@wixc3/react-board';
import HomePage from 'app/routes/_index/route';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage header={'photoCard'} color={'lightBlue'} options={['A', 'B', 'C']} />,
    environmentProps: {
        windowHeight: 900,
    },
    tags: ['home-tag'],
});
