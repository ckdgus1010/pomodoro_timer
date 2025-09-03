import { styled } from "styled-components";

const Wrapper = styled.div<{ $bgColor: string }>`
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: ${(props) => props.$bgColor};
`;

interface IProps {
    color: string;
}

function ColorPicker({ color }: IProps) {
    return <Wrapper $bgColor={color}></Wrapper>;
}

export default ColorPicker;
