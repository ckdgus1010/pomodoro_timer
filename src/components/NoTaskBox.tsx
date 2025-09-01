import { styled } from "styled-components";
import IconCards from "./IconCards";

const Wrapper = styled.div`
    padding: 20px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.text.title};
    transition: color 0.2s ease;
`;

const Message = styled.span`
    margin-bottom: 40px;
    line-height: 1.6rem;
    font-size: 1.2rem;
    text-align: center;
    color: ${props => props.theme.text.normal};
    transition: color 0.2s ease;
`;

const Button = styled.button`
    all: unset;
    cursor: pointer;
    width: 150px;
    height: 50px;
    background-color: ${props => props.theme.button.normal.bg};
    border: 2px solid ${props => props.theme.button.normal.border};
    border-radius: 25px;
    color: ${props => props.theme.button.normal.text};
    font-size: 1.4rem;
    text-align: center;
    transition: color 0.2s ease;
    
    &:hover {
        background-color: ${props => props.theme.button.hover.bg};
        border-color: ${props => props.theme.button.hover.border};
    }
    &:active {
        background-color: ${props => props.theme.button.active.bg};
        border-color: ${props => props.theme.button.active.border};
    }
`;

function NoTaskBox() {
    return (
        <Wrapper>
            <IconCards />
            <Title>What's your focus for today?</Title>
            <Message>
                Set your task and get started.<br/>
                Small steps lead to big progress.
            </Message>
            <Button>Add Task</Button>
        </Wrapper>
    );
}

export default NoTaskBox;
