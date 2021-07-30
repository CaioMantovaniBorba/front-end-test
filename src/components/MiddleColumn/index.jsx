import { Container, Publish } from './styles';

import { WriteIcon, CameraIcon, VideoCameraIcon } from '../../styles/icons';

import Post from './Post';

function MiddleColumn() {
    return (
        <Container className="middle-column">
            <Publish>
                <div className="write">
                    <div>
                        <WriteIcon />
                        <input
                            type="text"
                            placeholder="Escreva uma publicação"
                        />
                    </div>

                    <div>
                        <button>
                            <CameraIcon />
                        </button>
                        <button>
                            <VideoCameraIcon />
                        </button>
                    </div>
                </div>

                <div className="attachment">
                    ou <a href="/">publique um artigo</a> na InCicle
                </div>
            </Publish>

            <Post />
            <Post />
        </Container>
    );
}

export default MiddleColumn;
