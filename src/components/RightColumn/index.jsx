import { Container, Card, Separator, Row, Column } from './styles';

function RightColumn() {
    return (
        <Container className="right-column">
            <Card>
                <h1>📊 Eficiência</h1>

                <Separator />

                <Row className="activities-projects">
                    <Row className="percent">
                        <Column>
                            <span>Atividades</span>
                            <span>23/106</span>
                        </Column>
                        <span className="percent-big">50%</span>
                    </Row>

                    <Row className="percent">
                        <Column>
                            <span>Projetos</span>
                            <span>23/106</span>
                        </Column>
                        <span className="percent-big">50%</span>
                    </Row>
                </Row>

                <Row className="percent percent-total">
                    <Column>
                        <span>Total</span>
                        <span>23/106</span>
                    </Column>
                    <span className="percent-big">50%</span>
                </Row>

                <Row className="resume">
                    <Column className="pending">
                        <strong>Atividades</strong>
                        <span>Pendentes 3</span>
                        <span>Pendentes 3</span>
                        <span>Pendentes 3</span>
                    </Column>
                    <Column className="pending">
                        <strong>Projetos</strong>
                        <span>Pendentes 6</span>
                        <span>Pendentes 6</span>
                        <span>Pendentes 6</span>
                    </Column>
                    <Column className="pending">
                        <strong>Total</strong>
                        <span>Pendentes 9</span>
                        <span>Pendentes 9</span>
                        <span>Pendentes 9</span>
                    </Column>
                </Row>
            </Card>

            <Card>
                <h1>🎂 Aniversariantes</h1>
                <Separator />
                <p>Nenhum dos seus amigos comemora aniversário hoje</p>
            </Card>

            <Card>
                <h1>📑 Pendências</h1>
            </Card>

            <strong className="date">Seg. 21 de Jun</strong>

            <Card>
                <p>Você não possui nenhuma para pendência hoje</p>
            </Card>
        </Container>
    );
}

export default RightColumn;
