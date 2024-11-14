"use client";
import { useState, MouseEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "./components/Input";
import Form from "./components/Form";

interface MyEventTarget extends EventTarget {
    value: string;
}

export default function Home() {
    const [buttons, setButtons] = useState([
        { value: 1, clicked: false },
        { value: 2, clicked: false },
        { value: 3, clicked: false },
        { value: 4, clicked: false },
        { value: 5, clicked: false },
    ]);

    const router = useRouter();

    function handleClick(event: MouseEvent<HTMLInputElement>) {
        const target = event.target as MyEventTarget;

        setButtons(
            buttons.map((button) => {
                if (button.clicked) {
                    return {
                        ...button,
                        clicked: false,
                    };
                }
                return {
                    ...button,
                    clicked: button.value === +target.value,
                };
            })
        );
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        return [...buttons].map((btn) => {
            if (btn.clicked) {
                router.push("/thank-you?rating=" + btn.value);
            }
        });
    }

    return (
        <article className="[ wrapper flow ] [ padding-md ]">
            <figure>
                <Image
                    src="/images/icon-star.svg"
                    width={17}
                    height={16}
                    alt=""
                />
            </figure>
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <Form onSubmit={handleSubmit}>
                {buttons.map((btn, idx) => {
                    return (
                        <label htmlFor={`rating-value-${btn.value}`} key={idx}>
                            <Input
                                btn={{ ...btn }}
                                onClick={(e) => handleClick(e)}
                            />
                        </label>
                    );
                })}
                <div>
                    <button className="[ button ] [ button-primary ]">
                        Submit
                    </button>
                </div>
            </Form>
        </article>
    );
}
