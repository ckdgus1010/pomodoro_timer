import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";

const Wrapper = styled.div`
    cursor: pointer;
    margin-bottom: 20px;
    padding: auto 10px;
    width: 100%;
    height: 60px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface IProps {
    colors: string[];
    onClick: (color: string) => void;
}

function ColorPickers({ colors, onClick }: IProps) {
    return (
        <Wrapper>
            {colors.map((color, idx) => (
                <ColorPicker key={idx} color={color} onClick={onClick} />
            ))}
        </Wrapper>
    );
}

export default ColorPickers;
