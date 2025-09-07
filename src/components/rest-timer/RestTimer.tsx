import { styled } from "styled-components";
import ToDoTimer from "../to-do/ToDoTimer";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { tabAtom } from "../../atoms/tabAtom";
import { Tabs } from "../../enums/tabs";
import { loadTask, saveTask } from "../../utils/taskUtils";

const Wrapper = styled.div`
    padding: 20px;
    min-width: 380px;
    border: 1px solid #ccc;
    border-radius: 40px;
`;

const Title = styled.h3`
    margin: 20px auto;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${(props) => props.theme.text.title};
    text-align: center;
`;

const Message = styled.span`
    display: block;
    text-align: center;
    color: ${(props) => props.theme.text.normal};
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

function RestTimer() {
    const task = loadTask();
    if (!task) {
        return;
    }

    const initail = task["timer"]["rest"];

    const [restTimer, setRestTimer] = useState(initail ? initail : 5);
    const setCurrentTab = useSetAtom(tabAtom);

    function minusTimer() {
        setRestTimer((prev) => Math.max(1, prev - 1));
    }

    function plusTimer() {
        setRestTimer((prev) => Math.min(prev + 1, 15));
    }

    function cancel() {
        setCurrentTab(Tabs.Summary);
    }

    function startTimer() {
        const task = loadTask();
        
        if (task) {
            task["timer"]["rest"] = restTimer;
            saveTask(task);
        } else {
            setCurrentTab(Tabs.Home);
        }
    }

    return (
        <Wrapper>
            <Title>Take a Break?</Title>
            <Message>Break for {restTimer} minutes</Message>
            <ToDoTimer
                timer={restTimer}
                handleMinus={minusTimer}
                handlePlus={plusTimer}
            />
            <Buttons>
                <Button onClick={cancel}>Cancel</Button>
                <Button onClick={startTimer}>Start</Button>
            </Buttons>
        </Wrapper>
    );
}

export default RestTimer;
