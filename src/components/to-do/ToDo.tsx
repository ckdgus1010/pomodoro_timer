import { styled } from "styled-components";
import ToDoInput from "./ToDoInput";
import ColorPickers from "./ColorPickers";
import ToDoTimer from "./ToDoTimer";
import delete_white from "../../assets/delete_white.svg";
import delete_dark from "../../assets/delete_black.svg";
import { useTheme } from "../../contexts/ThemeContext";

const Wrapper = styled.div`
    padding: 20px;
    min-width: 380px;
    border: 1px solid #ccc;
    border-radius: 40px;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EmojiCard = styled.div`
    margin-bottom: 20px;
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`;

const DeleteButton = styled.button`
    all: unset;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.button.normal.text};
    text-align: center;
    border-radius: 10px;
    background-color: transparent;

    &:hover {
        background-color: ${(props) => props.theme.button.normal.bg};
    }
    &:active {
        background-color: ${(props) => props.theme.button.active.bg};
    }
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    all: unset;
    width: 160px;
    height: 50px;
    background-color: ${(props) => props.theme.button.normal.bg};
    border: 1px solid ${(props) => props.theme.button.normal.border};
    border-radius: 25px;
    color: ${(props) => props.theme.button.normal.text};
    text-align: center;
`;

function ToDo() {
    const {darkMode} = useTheme();
    return (
        <Wrapper>
            <Top>
                <EmojiCard>😀</EmojiCard>
                <DeleteButton>
                    <img src={darkMode ? delete_white : delete_dark} />
                </DeleteButton>
            </Top>
            <ToDoInput />
            <ColorPickers />
            <ToDoTimer />
            <Buttons>
                <Button>Cancel</Button>
                <Button>Add</Button>
            </Buttons>
        </Wrapper>
    );
}

export default ToDo;
