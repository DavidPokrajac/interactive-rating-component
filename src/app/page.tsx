import Image from "next/image";

export default function Home() {
    return (
        <article>
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
            <div>
                <label htmlFor="">
                    <input type="number" value={1} readOnly />
                </label>
                <label htmlFor="">
                    <input type="number" value={2} readOnly />
                </label>
                <label htmlFor="">
                    <input type="number" value={3} readOnly />
                </label>
                <label htmlFor="">
                    <input type="number" value={4} readOnly />
                </label>
                <label htmlFor="">
                    <input type="number" value={5} readOnly />
                </label>
            </div>
            <button>Submit</button>
        </article>
    );
}
