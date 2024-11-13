"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ThankYou() {
    const searchParams = useSearchParams();
    const search = searchParams.get("rating");
    return (
        <Suspense>
            <article className="[ wrapper flow ] [ padding-l text-center ]">
                <figure className="[ image-center bg-transparent ]">
                    <Image
                        src="/images/illustration-thank-you.svg"
                        width={162}
                        height={108}
                        alt=""
                    />
                </figure>
                <span className="[ inline-block text-orange bg-light padding-sm border-radius-md ]">
                    You selected out {search} of 5
                </span>
                <p className="[ fs-l fw-bold text-white ]">Thank you!</p>
                <p>
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don’t hesitate to get in touch!
                </p>
            </article>
        </Suspense>
    );
}
