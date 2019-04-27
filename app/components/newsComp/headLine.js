import styled from 'styled-components'

export const IconStyle = styled.h2`
    font-size: 13px;
    margin-top: 3px;
`;

export default function headLine(props) {
    const { title } = props;

    return (
        <h2>{title}</h2>
    )
}
