import { styled } from "styled-components";
import ToDoInput from "./ToDoInput";
import ColorPickers from "./ColorPickers";
import ToDoTimer from "./ToDoTimer";
import delete_white from "../../assets/delete_white.svg";
import delete_dark from "../../assets/delete_black.svg";
import { useTheme } from "../../contexts/ThemeContext";
import { useState } from "react";
import { type EmojiClickData } from "emoji-picker-react";
import EmojiCard from "./EmojiCard";

const Form = styled.form`
    padding: 20px;
    min-width: 380px;
    border: 1px solid #ccc;
    border-radius: 40px;
`;

const FormHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
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
    const { darkMode } = useTheme();
    const [emoji, setEmoji] = useState("🧭");
    const [toDo, setToDo] = useState("");

    function selectEmoji(data: EmojiClickData) {
        setEmoji(data.emoji);
    }

    return (
        <>
            <Form>
                <FormHeader>
                    <EmojiCard emoji={emoji} selectEmoji={selectEmoji} />
                    <DeleteButton type="button">
                        <img src={darkMode ? delete_white : delete_dark} />
                    </DeleteButton>
                </FormHeader>
                <ToDoInput toDo={toDo} onChange={setToDo} />
                <ColorPickers />
                <ToDoTimer />
                <Buttons>
                    <Button type="button">Cancel</Button>
                    <Button type="submit">Add</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default ToDo;
