import { MouseEvent } from "react";

interface ButtonProps {
    btn: {
        value: number;
        clicked: boolean;
    };

    onClick: (e: MouseEvent<HTMLInputElement>) => void;
}

export default function Input({ btn, onClick }: ButtonProps) {
    return (
        <input
            type="number"
            id={`rating-value-${btn.value}`}
            className="[ input ] [ input-primary text-center ]"
            data-state={btn.clicked ? "selected" : ""}
            value={btn.value}
            readOnly
            onClick={onClick}
        />
    );
}
