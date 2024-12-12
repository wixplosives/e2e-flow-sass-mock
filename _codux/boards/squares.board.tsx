import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Squares',
    Board: () => (
        <div
            className="1"
            style={{ minWidth: '50px', minHeight: '50px', padding: '10px', background: 'black' }}
        >
            <div
                className="2"
                style={{
                    minWidth: '50px',
                    minHeight: '50px',
                    padding: '10px',
                    background: 'white',
                }}
            >
                <div
                    className="3"
                    style={{
                        minWidth: '50px',
                        minHeight: '50px',
                        padding: '10px',
                        background: 'royalblue',
                    }}
                >
                    <div
                        className="4"
                        style={{
                            minWidth: '50px',
                            minHeight: '50px',
                            padding: '10px',
                            background: 'maroon',
                        }}
                    >
                        <div
                            className="5"
                            style={{
                                minWidth: '50px',
                                minHeight: '50px',
                                padding: '10px',
                                background: 'gold',
                            }}
                        >
                            <div
                                className="6"
                                style={{
                                    minWidth: '50px',
                                    minHeight: '50px',
                                    padding: '10px',
                                    background: 'lightseagreen',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: false,
});
