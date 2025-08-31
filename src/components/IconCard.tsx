import { styled } from "styled-components";

const Outer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    padding: 5px;
    width: 80px;
    height: 80px;
    border: 1px solid #f1f3f5;
    border-radius: 25px;
    background-color: white;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15),
        0 1px 0 rgba(255, 255, 255, 0.6) inset;
    display: flex;
    justify-content: center;
    align-items: center;

    &.center {
        z-index: 1;
        transform: translateX(-50%) translateY(-6px);
    }

    &.left {
        transform: translateX(calc(-50% - 48px)) rotate(-6deg);
    }

    &.right {
        transform: translateX(calc(-50% + 48px)) rotate(6deg);
    }
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f1f3f5;
    border-radius: 20px;
    font-size: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IProps {
    icon: string;
    align: "left" | "center" | "right";
}

function IconCard({ icon, align }: IProps) {
    return (
        <Outer className={align}>
            <Inner>
                <span>{icon}</span>
            </Inner>
        </Outer>
    );
}

export default IconCard;
