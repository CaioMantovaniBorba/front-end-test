import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;

    .date {
        font-size: 14px;
        color: var(--color-gray);
        margin-left: 8px;
    }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px 8px;
    margin-bottom: 8px;
    border-radius: 6px;
    border: 1px solid var(--color-gray-light);
    background: var(--color-white);

    h1 {
        font-size: 16px;
        font-weight: 400;
        color: var(--color-link);
    }

    p {
        font-size: 14px;
        color: var(--color-gray);
        text-align: center;
    }
`;

export const Separator = styled.div`
    width: 320px;
    margin: 16px 0;
    border: 3px solid var(--color-gray-light);
`;

export const Row = styled.div`
    display: flex;

    &.activities-projects {
        width: 100%;
    }

    &.percent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--color-blue);
        border-radius: 6px;
        padding: 6px;
        width: 50%;
        font-size: 14px;
        font-weight: 700;
        color: var(--color-white);
        margin-right: 8px;

        & + & {
            background: var(--color-green);
            margin-right: 0;
        }

        .percent-big {
            font-size: 18px;
        }
    }

    &.percent-total {
        background: var(--color-orange);
        width: 100%;
        margin: 8px 0;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    &.pending {
        border: 1px solid var(--color-blue);
        border-radius: 6px;
        padding: 12px 6px;
        margin-right: 8px;

        & + & {
            border: 1px solid var(--color-green);
        }

        & + & + & {
            border: 1px solid var(--color-orange);
            margin-right: 0;
        }

        strong {
            margin: 2px 0;
            font-size: 12px;
            text-align: center;
        }

        span {
            margin: 2px 0;
            font-size: 12px;
        }
    }
`;
