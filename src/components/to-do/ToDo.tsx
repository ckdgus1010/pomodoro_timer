import { styled } from "styled-components";
import ToDoInput from "./ToDoInput";
import ColorPickers from "./ColorPickers";
import ToDoTimer from "./ToDoTimer";
import delete_white from "../../assets/delete_white.svg";
import delete_dark from "../../assets/delete_black.svg";
import { useTheme } from "../../contexts/ThemeContext";
import React, { useState } from "react";
import { type EmojiClickData } from "emoji-picker-react";
import EmojiCard from "./EmojiCard";
import { useSetAtom } from "jotai";
import { tabAtom } from "../../atoms/tabAtom";
import { Tabs } from "../../enums/tabs";
import { colors, getDefaultTask, loadTask, saveTask } from "../../utils/taskUtils";

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
    cursor: pointer;
    width: 160px;
    height: 50px;
    background-color: ${(props) => props.theme.button.normal.bg};
    border: 1px solid ${(props) => props.theme.button.normal.border};
    border-radius: 25px;
    color: ${(props) => props.theme.button.normal.text};
    text-align: center;

    &:hover {
        background-color: ${(props) => props.theme.button.hover.bg};
        border-color: ${(props) => props.theme.button.hover.border};
    }
    &:active {
        background-color: ${(props) => props.theme.button.active.bg};
        border-color: ${(props) => props.theme.button.active.border};
    }
`;

function ToDo() {
    const { darkMode } = useTheme();
    const setCurrentTab = useSetAtom(tabAtom);

    let task = loadTask();
    
    if (!task) {
        task = getDefaultTask();
    }

    const [emoji, setEmoji] = useState(task["emoji"]);
    const [toDo, setToDo] = useState(task["toDo"]);
    const [color, setColor] = useState(task["color"]);
    const [timer, setTimer] = useState(task["timer"]["task"]);

    function selectEmoji(data: EmojiClickData) {
        setEmoji(data.emoji);
    }

    function minusTimer() {
        setTimer((prev) => Math.max(15, prev - 1));
    }

    function plusTimer() {
        setTimer((prev) => Math.min(prev + 1, 35));
    }

    function onClickCancelBtn() {
        const task = loadTask();
        const tab = task ? Tabs.Summary : Tabs.Home;
        
        setCurrentTab(tab);
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const result = {
            emoji,
            toDo,
            color,
            timer: {
                task: timer,
                rest: 5
            },
        };

        saveTask(result);
        setCurrentTab(Tabs.Summary);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormHeader>
                    <EmojiCard
                        isClickable={true}
                        backgroundColor={color}
                        emoji={emoji}
                        selectEmoji={selectEmoji}
                    />
                    <DeleteButton type="button">
                        <img src={darkMode ? delete_white : delete_dark} />
                    </DeleteButton>
                </FormHeader>
                <ToDoInput toDo={toDo} onChange={setToDo} />
                <ColorPickers colors={colors} onClick={setColor} />
                <ToDoTimer
                    timer={timer}
                    handleMinus={minusTimer}
                    handlePlus={plusTimer}
                />
                <Buttons>
                    <Button type="button" onClick={onClickCancelBtn}>
                        Cancel
                    </Button>
                    <Button type="submit">Add</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default ToDo;
