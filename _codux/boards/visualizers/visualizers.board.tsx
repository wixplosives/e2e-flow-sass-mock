import { createBoard } from '@wixc3/react-board';
import { Visualizers } from '~/components/visualizers/visualizers';

const Seasons = {
    Summer: 'summer',
    Autumn: 'autumn',
    Winter: 'winter',
    Spring: 'spring',
};

export default createBoard({
    name: 'Visualizers',
    Board: () => (
        <Visualizers
            enum={Seasons}
            arr={[1, 2, 3, 4]}
            color={'red'}
            obj={{ test: 'test' }}
            bool={false}
            func={() => console.log('hey')}
        />
    ),
});
