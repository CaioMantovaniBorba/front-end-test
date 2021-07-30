import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 1180px) {
        width: 550px;
    }
`;

export const Publish = styled.div`
    color: var(--color-gray);
    border: 1px solid var(--color-gray-light);
    border-radius: 8px;
    background: var(--color-white);

    .write {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 24px;

        div {
            display: flex;
            align-items: center;
        }

        input {
            margin-left: 8px;
            border: none;
        }

        button {
            display: flex;
            align-items: center;
            padding: 8px;
            background: none;
            border: none;
            cursor: pointer;

            &:hover,
            &:focus {
                background: var(--color-gray-light);
            }
        }
    }

    .attachment {
        display: none;

        @media (min-width: 1180px) {
            display: flex;
            align-items: center;
            justify-content: start;
            height: 30px;
            padding: 0 24px;
            font-size: 14px;
            background: var(--color-bar);
            border-radius: 8px;

            a {
                margin: 0 4px;
                text-decoration: none;
                font-weight: 700;
                color: var(--color-link);

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
