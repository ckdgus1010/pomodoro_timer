import styled from "styled-components";

const Wrapper = styled.div`
    margin: 40px auto 50px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Timer = styled.div`
    color: ${(props) => props.theme.text.title};
    font-size: 2.5rem;
    font-weight: 500;
`;

const Button = styled.button`
    all: unset;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.button.normal.text};
    font-size: 2rem;
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

function ToDoTimer() {
    return (
        <Wrapper>
            <Button>-</Button>
            <Timer>25:00</Timer>
            <Button>+</Button>
        </Wrapper>
    );
}

export default ToDoTimer;
