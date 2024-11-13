"use client";
import { Suspense } from "react";
import ThankYou from "../components/ThankYou";

export default function ThankYouPage() {
    return (
        <Suspense>
            <ThankYou />
        </Suspense>
    );
}
