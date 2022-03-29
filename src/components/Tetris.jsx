import { useEffect, useState } from "react";
import "./Tetris.css";

export default function Tetris() {
    const [slots, setSlots] = useState([]);
    // L | J | I | Z | S | O | T
    const [currentPiece, setCurrentPiece] = useState({ shape: "L" });
    useEffect(() => {
        const slots = [];
        for (let row = 1; row <= 20; row++) {
            for (let column = 1; column <= 10; column++) {
                const slot = { id: `${row}_${column}`, filled: false, position: [row, column] };
                slots.push(slot);
            }
        }
        setSlots(slots);
        setInterval(() => {
            if (currentPiece) {
            }
        }, 500);
    }, []);

    return (
        <div className="tetris-container">
            {slots.map((i) => (
                <div className={`${i.filled ? "filled" : ""}`}></div>
            ))}
        </div>
    );
}
