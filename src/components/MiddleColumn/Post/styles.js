import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 8px;
    padding: 8px 16px;
    border: 1px solid var(--color-gray-light);
    border-radius: 8px;
    background: var(--color-white);

    @media (min-width: 1180px) {
        margin-top: 16px;
    }
`;

export const Row = styled.div`
    display: flex;

    &.heading {
        justify-content: space-between;
        padding: 12px 0 8px;

        h3 {
            font-size: 16px;
            color: var(--color-link);
        }

        h4 {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 400;
            color: var(--color-gray);
        }

        h4:first-child {
            margin-right: 8px;
        }
    }

    p {
        margin: 4px 0;
        font-size: 14px;
        color: var(--color-gray);
    }

    &.likes {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        font-size: 12px;
        color: var(--color-gray);

        .number {
            display: flex;
            align-items: center;
        }

        div {
            display: flex;
            flex-direction: column;

            @media (min-width: 1180px) {
                flex-direction: row;

                span + span {
                    margin-left: 8px;
                }
            }
        }
    }

    &.actions {
        justify-content: center;

        button {
            display: flex;
            align-items: center;
            padding: 4px 32px;
            margin: 4px 8px;
            font-size: 14px;
            outline: none;
            border: none;
            border-radius: 16px;
            color: var(--color-gray);
            background: var(--color-gray-light);
            cursor: pointer;

            &:hover,
            &:focus {
                background: rgba(0, 0, 0, 0.08);
            }

            span {
                display: none;

                &.is-like {
                    color: #0073b1;
                    font-weight: 700;
                }

                @media (min-width: 1180px) {
                    display: unset;
                }
            }
        }
    }
`;

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px solid var(--color-gray-light);
`;

export const Avatar = styled.img`
    width: 42px;
    height: 42px;
    padding: 1px;
    margin-right: 8px;
    border-radius: 50%;
    border: 2px solid var(--color-link);
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
