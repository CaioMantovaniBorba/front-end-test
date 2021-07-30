import LeftColumn from '../../components/LeftColumn';
import MiddleColumn from '../../components/MiddleColumn';
import RightColumn from '../../components/RightColumn';

import { Container } from './styles';

function Main() {
    return (
        <Container>
            <main>
                <LeftColumn />
                <MiddleColumn />
                <RightColumn />
            </main>
        </Container>
    );
}

export default Main;
