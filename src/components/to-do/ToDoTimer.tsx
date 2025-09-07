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
    cursor: pointer;
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

interface IProps {
    timer: number;
    handleMinus: () => void;
    handlePlus: () => void;
}

function ToDoTimer({ timer, handleMinus, handlePlus }: IProps) {
    return (
        <Wrapper>
            <Button type="button" onClick={handleMinus}>
                -
            </Button>
            <Timer>{timer}:00</Timer>
            <Button type="button" onClick={handlePlus}>
                +
            </Button>
        </Wrapper>
    );
}

export default ToDoTimer;
