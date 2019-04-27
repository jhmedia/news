import styled from 'styled-components'

export const IconStyle = styled.img`
    width: 100%;
    margin-top: 3px;
`;

export default function newsImage(props) {
    const { src } = props;

    return (
        <IconStyle src={src} />
    )
}
