import { styled } from "styled-components";
import NoTaskBox from "./components/NoTaskBox";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/headers/Header";
import ToDo from "./components/to-do/ToDo";
import { useAtomValue } from "jotai";
import { tabAtom } from "./atoms/tabAtom";
import { Tabs } from "./enums/tabs";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    const currentTab = useAtomValue(tabAtom);

    return (
        <ThemeProvider>
            <GlobalStyle />
            <Header />
            <Container>
                {currentTab === Tabs.Home && <NoTaskBox />}
                {currentTab === Tabs.Task && <ToDo />}
            </Container>
        </ThemeProvider>
    );
}

export default App;
