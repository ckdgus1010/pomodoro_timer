import { styled } from "styled-components";
import NoTaskBox from "./components/NoTaskBox";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/headers/Header";
import ToDo from "./components/to-do/ToDo";
import { useAtom, useAtomValue } from "jotai";
import { tabAtom } from "./atoms/tabAtom";
import { Tabs } from "./enums/tabs";
import ToDoTimer from "./components/to-do-timer/ToDoTimer";
import ToDoSummary from "./components/to-do-summary/ToDoSummary";
import { loadTask } from "./utils/utils";
import { useEffect } from "react";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    const [currentTab, setCurrentTab] = useAtom(tabAtom);

    useEffect(() => {
        const task = loadTask();
        const tab = task ? Tabs.Summary : Tabs.Home;

        setCurrentTab(tab);
    }, []);

    return (
        <ThemeProvider>
            <GlobalStyle />
            <Header />
            <Container>
                {currentTab === Tabs.Home && <NoTaskBox />}
                {currentTab === Tabs.Task && <ToDo />}
                {currentTab === Tabs.Summary && <ToDoSummary />}
                {currentTab === Tabs.ToDoTimer && <ToDoTimer />}
            </Container>
        </ThemeProvider>
    );
}

export default App;
