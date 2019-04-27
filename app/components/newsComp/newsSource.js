import styled from 'styled-components'

export const styledP = styled.p`
    font-size: 3px;
`;

export default function ingress(props) {
    const { source } = props;

    return (
        <styledP>{source}</styledP>
    )
}