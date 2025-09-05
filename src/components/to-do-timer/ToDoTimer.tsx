import styled from "styled-components";
import Button from "./Button";

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
    return (
        <Wrapper>
            <FinishBtn>finish</FinishBtn>
            <Tab>
                <Timer>25:00</Timer>
                <Buttons>
                    <Button
                        text={"Cancel"}
                        onClick={() => console.log("Cancel")}
                    />
                    <Button
                        text={"Pause"}
                        onClick={() => console.log("Pause")}
                    />
                </Buttons>
            </Tab>
        </Wrapper>
    );
}

export default ToDoTimer;
