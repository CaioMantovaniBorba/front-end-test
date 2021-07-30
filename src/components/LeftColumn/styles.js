import styled from 'styled-components';

import bgProfileHeader from '../../assets/bg-profile-header.png';

export const Container = styled.div`
    min-width: 250px;
    height: fit-content;
    background: var(--color-white);
`;

export const ProfileCard = styled.div`
    padding-bottom: 12px;
    border: 1px solid var(--color-gray-light);
    border-radius: 8px;

    .profile-cover {
        width: 100%;
        height: 120px;
        background: url(${bgProfileHeader});
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .profile-picture {
        display: flex;
        width: 120px;
        height: 120px;
        margin: -40px auto 8px;
        padding: 2px;
        border-radius: 50%;
        border: 4px solid var(--color-link);
    }

    h1 {
        font-size: 24px;
        text-align: center;
        color: var(--color-link);
    }

    h2 {
        margin-top: 4px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        color: var(--color-gray);
    }

    h3 {
        margin: 4px 0 16px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: var(--color-gray);
    }

    .local {
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 12px;
        margin: 4px 12px;

        span {
            display: flex;
            align-items: center;
            color: var(--color-gray);

            &:first-child {
                margin-right: 32px;
            }
        }
    }
`;
