import { styled } from "styled-components";

const Wrapper = styled.button`
    padding: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    font-size: 2.2rem;
    img {
        height: 100%;
    }
`;

interface IProps {
    imgSrc: string;
    alt: string;
    onClick: () => void;
}

function ImgButton({ imgSrc, alt, onClick }: IProps) {
    return (
        <Wrapper onClick={onClick}>
            <img src={imgSrc} alt={alt} />
        </Wrapper>
    );
}

export default ImgButton;
