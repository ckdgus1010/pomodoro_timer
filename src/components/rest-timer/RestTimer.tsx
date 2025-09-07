import { styled } from "styled-components";
import ToDoTimer from "../to-do/ToDoTimer";
import { useState } from "react";

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
    const [restTimer, setRestTimer] = useState(5);

    function minusTimer() {
        setRestTimer((prev) => Math.max(1, prev - 1));
    }

    function plusTimer() {
        setRestTimer((prev) => Math.min(prev + 1, 15));
    }

    function cancel() {
        console.log("cancel");
    }

    function startTimer() {
        console.log("start timer");
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
