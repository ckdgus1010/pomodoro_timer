import { useState } from "react";
import { styled } from "styled-components";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";

const Card = styled.div<{ $bgColor: string }>`
    cursor: pointer;
    margin-bottom: 20px;
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: ${(props) => props.$bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;

    span {
        pointer-events: none;
    }
`;

const EmojiPickerBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

interface IProp {
    backgroundColor: string;
    emoji: string;
    selectEmoji: (data: EmojiClickData) => void;
}

function EmojiCard({ backgroundColor, emoji, selectEmoji }: IProp) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    function handleEmojiPicker() {
        setShowEmojiPicker((prev) => !prev);
    }

    return (
        <>
            <Card onClick={handleEmojiPicker} $bgColor={backgroundColor}>
                <span>{emoji}</span>
            </Card>
            {showEmojiPicker && (
                <>
                    <EmojiPickerBackground
                        onClick={handleEmojiPicker}
                    ></EmojiPickerBackground>
                    <EmojiPicker
                        style={{
                            position: "absolute",
                            top: "60px",
                            left: "-5px",
                        }}
                        onEmojiClick={selectEmoji}
                    />
                </>
            )}
        </>
    );
}

export default EmojiCard;
