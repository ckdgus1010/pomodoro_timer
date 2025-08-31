import { styled } from "styled-components";
import NoTaskBox from "./components/NoTaskBox";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    return (
        <Container>
            <NoTaskBox />
        </Container>
    );
}

export default App;
