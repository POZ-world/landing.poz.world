import { useState, useEffect } from "react";
import { Faq } from "../types/faq";
import Loading from "../components/loading";
import fetch from "../lib/api-fetch";
import FAQsComponent from "../components/faqs";
import GridBackground from "../components/gridBackground";
import HeaderElements from "../components/headerElements";
import React from "react";

export function FAQs() {
    const [faqs, setFaqs] = useState<Faq[]>([]);
    const [expanded, setExpanded] = useState<number>(-1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Correct fetch function usage without passing state tuple
                const response = await fetch<Faq[]>('/api/vnext/faqs');
                if (response) {
                    setFaqs(response);
                }
            } catch (error) {
                console.error("Error fetching FAQ data:", error);
            }
        };

        fetchData();
    }, []);  // The empty array ensures this effect runs only once

    useEffect(() => { }, [expanded]);

    const toggleExpanded = (index: number) => {
        setExpanded(expanded === index ? -1 : index);
    }

    return faqs && faqs.length > 0 ? (
        <>
            <HeaderElements title="Frequently Asked Questions" />
            <GridBackground />
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl center">Frequently asked questions</h2>
                <FAQsComponent faqs={faqs} expanded={expanded} toggleExpanded={toggleExpanded} />
            </div>
        </>
    ) : (
        <Loading />
    );
}