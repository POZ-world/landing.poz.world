import { useState, useEffect } from "react";
import { PrivacyPolicy } from "../types/settings";
import Loading from "../components/loading";
import fetch from "../lib/fetch";
import GridBackground from "../components/gridBackground";

export function Privacy() {
    const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicy>({} as PrivacyPolicy);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Correct usage: Just call fetch and then set the state with the result.
                const response = await fetch<PrivacyPolicy>('/api/v1/instance/privacy_policy');
                if (response) {
                    setPrivacyPolicy(response);
                }
            } catch (error) {
                console.error("Error fetching privacy policy:", error);
            }
        };

        fetchData();
    }, []); // The empty array ensures this effect runs only once

    return privacyPolicy && privacyPolicy.content ?
        <>
            <GridBackground />
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl center">Privacy Policy</h2>
                <div className="markdown" dangerouslySetInnerHTML={{ __html: privacyPolicy.content }} />
            </div>
        </> :
        (<Loading />);
}