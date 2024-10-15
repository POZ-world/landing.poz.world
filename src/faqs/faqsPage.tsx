import { useState, useEffect } from "react";
import { FAQs, FAQ } from "@/faqs/faq";
import Loading from "@/components/loading";
import fetch from "@/lib/api-fetch";
import FAQsComponent from "@/faqs/components/faqs";
import GridBackground from "@/components/gridBackground";
import HeaderElements from "@/components/headerElements";
import React from "react";

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [expanded, setExpanded] = useState<boolean[]>([] as boolean[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Correct fetch function usage without passing state tuple
              const response = await fetch<FAQ[]>('/api/vnext/faqs');
                if (response) {
                    setFaqs(response);
                    setExpanded(new Array(response.length).fill(false));
                }
            } catch (error) {
                console.error("Error fetching FAQ data:", error);
            }
        };

        fetchData();
    }, []);  // The empty array ensures this effect runs only once

    useEffect(() => { }, [expanded]);

    const toggleExpanded = (index: number) => {
        expanded[index] = !expanded[index];
        if(expanded[index]) {
            for(let i = 0; i < expanded.length; i++) {
                if(i !== index) {
                    expanded[i] = false;
                }
            }
        }
        setExpanded(expanded);
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