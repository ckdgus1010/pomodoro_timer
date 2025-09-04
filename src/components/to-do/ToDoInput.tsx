import { styled } from "styled-components";

const Input = styled.input`
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    height: 50px;
    border: 2px solid #ccc;
    border-radius: 15px;
    font-size: 1.2rem;
    text-align: center;
`;

interface IProps {
    toDo: string;
    onChange: (value: string) => void;
}

function ToDoInput({ toDo, onChange }: IProps) {
    return (
        <Input
            minLength={1}
            maxLength={15}
            required
            value={toDo}
            onChange={(e) => onChange(e.currentTarget.value)}
        ></Input>
    );
}

export default ToDoInput;
