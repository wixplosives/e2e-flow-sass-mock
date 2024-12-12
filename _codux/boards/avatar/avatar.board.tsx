import { createBoard } from '@wixc3/react-board';
import { Avatar } from '~/components/avatar/avatar';

export default createBoard({
    name: 'Avatar',
    Board: () => (
        <Avatar
            title="Sagiv Dayan"
            subtitle="@thealmightycrumb"
            image="https://avatars.githubusercontent.com/u/67858097?v=4"
        ></Avatar>
    ),
});
