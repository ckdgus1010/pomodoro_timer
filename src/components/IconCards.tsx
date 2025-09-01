import { styled } from "styled-components";
import IconCard from "./IconCard";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
`;

function IconCards() {
    return (
        <Wrapper>
            <IconCard icon="⏲️" align="left" />
            <IconCard icon="⏱️" align="center" />
            <IconCard icon="⏳" align="right" />
        </Wrapper>
    );
}

export default IconCards;
