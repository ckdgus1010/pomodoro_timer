import { styled } from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";
import icon_light_mode from "../../assets/icon_light_mode.svg";
import icon_dark_mode from "../../assets/icon_dark_mode.svg";
import github_logo_light from "../../assets/github-mark.svg";
import github_logo_dark from "../../assets/github-mark-white.svg";
import ImgButton from "./ImgButton";
import ImgLink from "./ImgLink";

const Wrapper = styled.div`
    position: absolute;
    padding: 15px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: end;
    gap: 1rem;
`;

function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    return (
        <Wrapper>
            <ImgButton
                imgSrc={darkMode ? icon_light_mode : icon_dark_mode}
                alt={darkMode ? "Light Mode" : "Dark Mode"}
                onClick={toggleDarkMode}
            />
            <ImgLink
                href="https://github.com/ckdgus1010/pomodoro_timer"
                target="_blank"
                imgSrc={darkMode ? github_logo_dark : github_logo_light}
                alt="GitHub"
            />
        </Wrapper>
    );
}

export default Header;
