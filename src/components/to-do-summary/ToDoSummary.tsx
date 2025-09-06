import { styled } from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";
import EmojiCard from "../to-do/EmojiCard";
import delete_white from "../../assets/delete_white.svg";
import delete_dark from "../../assets/delete_black.svg";

const Wrapper = styled.div`
    padding: 20px;
    min-width: 380px;
    border: 1px solid #ccc;
    border-radius: 40px;
`;

const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
`;

const DeleteButton = styled.button`
    all: unset;
    cursor: pointer;
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

const Summary = styled.div`
    margin-bottom: 30px;
    padding-left: 5px;
    font-weight: 400;
    color: ${(props) => props.theme.button.normal.text};
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

function ToDoSummary() {
    const { darkMode } = useTheme();

    let task;
    try {
        task = JSON.parse(localStorage.getItem("task") || "");
    } catch (err) {
        alert("데이터를 불러올 수 없습니다.");
        return;
    }

    function deleteTask() {
        console.log("delete task.");
    }

    function startTask() {
        console.log("start task");
    }

    function editTask() {
        console.log("edit task");
    }

    return (
        <Wrapper>
            <Header>
                <EmojiCard
                    isClickable={false}
                    backgroundColor={task["color"]}
                    emoji={task["emoji"]}
                    selectEmoji={undefined}
                />
                <DeleteButton onClick={deleteTask}>
                    <img src={darkMode ? delete_white : delete_dark} />
                </DeleteButton>
            </Header>
            <Summary>
                <span>
                    {task["toDo"]} for {task["timer"]} minutes
                </span>
            </Summary>
            <Buttons>
                <Button onClick={editTask}>Edit</Button>
                <Button onClick={startTask}>Start</Button>
            </Buttons>
        </Wrapper>
    );
}

export default ToDoSummary;
