import { styled } from "styled-components";
import IconCards from "./IconCards";

const Wrapper = styled.div`
    padding: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 2rem;
`;

const Message = styled.span`
    margin-bottom: 40px;
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
    color: #868e96;
`;

const Button = styled.button`
    all: unset;
    cursor: pointer;
    width: 150px;
    height: 50px;
    background-color: #121612;
    border-radius: 25px;
    color: white;
    font-size: 1.4rem;
    text-align: center;

    &:hover {
        background-color: #1c211a;
    }
    &:active {
        background-color: #0d100e;
    }
`;

function NoTaskBox() {
    return (
        <Wrapper>
            <IconCards />
            <Title>You have no task</Title>
            <Message>
                Create one now and start tracking your time to get productive!
            </Message>
            <Button>Add Task</Button>
        </Wrapper>
    );
}

export default NoTaskBox;
