import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .left-column,
    .right-column {
        display: none;
    }

    @media (min-width: 1180px) {
        > main {
            display: flex;
            justify-content: center;
            margin: 0 32px;
        }

        .left-column,
        .right-column {
            display: unset;
        }

        .middle-column {
            margin: 0 16px 16px;
        }
    }
`;
