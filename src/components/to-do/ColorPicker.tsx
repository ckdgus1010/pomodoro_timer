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
    onClick: (value: string) => void;
}

function ColorPicker({ color, onClick }: IProps) {
    return <Wrapper $bgColor={color} onClick={() => onClick(color)} />;
}

export default ColorPicker;
