import { Container, ProfileCard } from './styles';

import { LocalIcon, CompanyIcon, UniversityIcon } from '../../styles/icons';

function LeftColumn() {
    return (
        <Container className="left-column">
            <ProfileCard>
                <div className="profile-cover" />

                <img
                    src="https://picsum.photos/id/1005/120/120"
                    alt="Avatar"
                    className="profile-picture"
                />
                <h1>Kenedy Morais</h1>
                <h2>@kenedymorais</h2>
                <h3>Front-end Developer</h3>

                <div className="local">
                    <LocalIcon />
                    <span>Rio Branco/Acre - Brasil</span>
                </div>

                <div className="local">
                    <span>
                        <CompanyIcon /> InCicle
                    </span>
                    <span>
                        <UniversityIcon /> Uninorte
                    </span>
                </div>
            </ProfileCard>
        </Container>
    );
}

export default LeftColumn;
