import { useState } from 'react';

import { Container, Row, Separator, Avatar, Column } from './styles';

import {
    AlarmIcon,
    LockIcon,
    ArrowIcon,
    LikeIcon,
    LikeIcon2,
    CommentIcon,
    ShareIcon,
} from '../../../styles/icons';

function Post() {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        if (like) {
            setLike(false);
        } else {
            setLike(true);
        }
    };

    return (
        <Container>
            <Row className="heading">
                <Row>
                    <Avatar
                        src="https://picsum.photos/id/1011/45/45"
                        alt="Avatar"
                    />
                    <Column>
                        <h3>Patricia Santos</h3>
                        <Row>
                            <h4>
                                <AlarmIcon /> há cerca de 8 horas
                            </h4>
                            <h4>
                                <LockIcon /> Somente eu
                            </h4>
                        </Row>
                    </Column>
                </Row>

                <ArrowIcon />
            </Row>

            <Row>
                <p>
                    Esta publicação está configurada no modo privado &quot;
                    somente eu &quot;.
                </p>
            </Row>

            <Row className="likes">
                <span className="number">
                    <LikeIcon2 />{' '}
                    {like ? 'Você curtiu isso' : 'Seja o primeiro a curtir'}
                </span>

                <div>
                    <span>0 comentários</span>
                    <span>0 compartilhamentos</span>
                </div>
            </Row>

            <Separator />

            <Row className="actions">
                <button
                    type="button"
                    className="button-like"
                    onClick={handleLike}
                >
                    {like ? (
                        <>
                            <LikeIcon color="#0073b1" />
                            <span className="is-like">Curtir</span>
                        </>
                    ) : (
                        <>
                            <LikeIcon />
                            <span>Curtir</span>
                        </>
                    )}
                </button>

                <button type="button">
                    <CommentIcon />
                    <span>Comentar</span>
                </button>

                <button type="button">
                    <ShareIcon />
                    <span>Compartilhar</span>
                </button>
            </Row>

            <Separator />
        </Container>
    );
}

export default Post;
