import { ReactNode, FormEvent } from "react";

interface FormProps {
    children: ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
    return <form onSubmit={onSubmit}>{children}</form>;
}
