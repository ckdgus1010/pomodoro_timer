import { styled } from "styled-components";

const Link = styled.a`
    width: 30px;
    height: 30px;
    img {
        height: 100%;
    }
`;

interface IProps {
    href: string;
    target: "_self" | "_blank" | "_parent" | "_top";
    imgSrc: string;
    alt: string;
}

function ImgLink({ href, target, imgSrc, alt }: IProps) {
    return (
        <Link href={href} target={target}>
            <img src={imgSrc} alt={alt} />
        </Link>
    );
}

export default ImgLink;
