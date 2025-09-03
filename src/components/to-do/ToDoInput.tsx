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

function ToDoInput() {
    return <Input minLength={1} maxLength={15} required></Input>;
}

export default ToDoInput;
