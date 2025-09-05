import { styled } from "styled-components";

const Btn = styled.button`
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

interface IProps {
    text: string;
    onClick: () => void;
}

function Button({ text, onClick }: IProps) {
    return <Btn onClick={onClick}>{text}</Btn>;
}

export default Button;
