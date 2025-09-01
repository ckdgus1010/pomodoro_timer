import { styled } from "styled-components";
import NoTaskBox from "./components/NoTaskBox";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/headers/Header";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <Header />
            <Container>
                <NoTaskBox />
            </Container>
        </ThemeProvider>
    );
}

export default App;
