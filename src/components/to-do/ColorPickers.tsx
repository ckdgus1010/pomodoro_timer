import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";

const Wrapper = styled.div`
    margin-bottom: 20px;
    padding: auto 10px;
    width: 100%;
    height: 60px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function ColorPickers() {
    return (
        <Wrapper>
            <ColorPicker color="red"/>
            <ColorPicker color="orange"/>
            <ColorPicker color="yellow"/>
            <ColorPicker color="green"/>
            <ColorPicker color="blue"/>
            <ColorPicker color="purple"/>
            <ColorPicker color="pink"/>
        </Wrapper>
    );
}

export default ColorPickers;
