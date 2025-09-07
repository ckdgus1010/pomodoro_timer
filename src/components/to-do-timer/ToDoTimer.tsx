import styled from "styled-components";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { loadTask } from "../../utils/taskUtils";
import { useAtom } from "jotai";
import { tabAtom } from "../../atoms/tabAtom";
import { Tabs } from "../../enums/tabs";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FinishBtn = styled.button`
    all: unset;
    cursor: pointer;
    margin-bottom: 30px;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.accentButton.normal.bg};
    color: ${(props) => props.theme.accentButton.normal.text};
    text-align: center;

    &:hover {
        background-color: ${(props) => props.theme.accentButton.hover.bg};
        border-color: ${(props) => props.theme.accentButton.hover.border};
    }
    &:active {
        background-color: ${(props) => props.theme.accentButton.active.bg};
        border-color: ${(props) => props.theme.accentButton.active.border};
    }
`;

const Tab = styled.div`
    padding: 20px;
    min-width: 380px;
    border: 1px solid #ccc;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Timer = styled.div`
    margin: 30px 0 50px 0;
    color: ${(props) => props.theme.text.title};
    font-size: 2.5rem;
    font-weight: 500;
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function ToDoTimer() {
    const [currentTab, setCurrentTab] = useAtom(tabAtom);

    const task = loadTask();

    if (!task) {
        alert("데이터를 불러올 수 없습니다.");
        setCurrentTab(Tabs.Home);

        return;
    }

    const timerType = currentTab === Tabs.ToDoTimer ? "task" : "rest";
    const timer = task["timer"][timerType];

    const [seconds, setSeconds] = useState(timer * 60);
    const [isRunning, setIsRunning] = useState(true);
    const timerId = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        timerId.current = setInterval(() => {
            setSeconds((prev) => {
                if (prev === 1) {
                    return 0;
                } else if (prev === 0) {
                    finishTimer();
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerId.current);
    }, [isRunning]);

    function handlePauseTimer() {
        setIsRunning((prev) => !prev);
    }

    function cancelTimer() {
        stopTimer();
        setCurrentTab(Tabs.Summary);
    }

    function stopTimer() {
        clearInterval(timerId.current);
        setIsRunning(false);
        setSeconds(0);
    }

    function finishTimer() {
        stopTimer();

        const tabName =
            currentTab === Tabs.ToDoTimer ? Tabs.RestSetting : Tabs.Summary;
        setCurrentTab(tabName);
    }

    return (
        <Wrapper>
            <FinishBtn onClick={finishTimer}>finish</FinishBtn>
            <Tab>
                <Timer>
                    {String(Math.floor(seconds / 60)).padStart(2, "0")}:
                    {String(seconds % 60).padStart(2, "0")}
                </Timer>
                <Buttons>
                    <Button text={"Cancel"} onClick={cancelTimer} />
                    <Button
                        text={isRunning ? "Pause" : "Restart"}
                        onClick={handlePauseTimer}
                    />
                </Buttons>
            </Tab>
        </Wrapper>
    );
}

export default ToDoTimer;
