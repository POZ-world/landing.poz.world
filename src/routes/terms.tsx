import { useState, useEffect } from "react";
import Loading from "../components/loading";
import fetch from "../lib/fetch";
import GridBackground from "../components/gridBackground";

export default function Terms() {
    const [terms, setTerms] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Correct usage: Just call fetch and then set the state with the result.
                const response = await fetch<string>('/api/vnext/settings/site_terms');
                if (response) {
                    setTerms(response);
                }
            } catch (error) {
                console.error("Error fetching terms of service:", error);
            }
        };

        fetchData();
    }, []); // The empty array ensures this effect runs only once

    return terms && terms !== '' ?
        <>
            <GridBackground />
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl center">Terms of Service</h2>
                <div className="markdown" dangerouslySetInnerHTML={{ __html: terms }} />
            </div>
        </> :
        (<Loading />);
}