import { LandingDirectory } from "../types/landing-directory";
import AccountStack from "./accountStack";
import { useEffect, useState } from "react";
import fetch from "../lib/api-fetch";
import React from "react";

// type AccountStacksParams = {
//     slideshows: ApiAccountJSON[][];
//     setSlideshows: (slideshows: ApiAccountJSON[][]) => void;
//     useEffect: typeof useEffect;
// }

export default function AccountStacks(/*{ slideshows, setSlideshows, useEffect }: AccountStacksParams*/) {
    const [directory, setDirectory] = useState<LandingDirectory>([] as LandingDirectory);
    const [slideshows, setSlideshows] = useState<LandingDirectory>([] as LandingDirectory);

    // every 10 seconds, rotate the slideshows
    useEffect(() => {
        const fetchData = async () => {
            const landingDirectoryResponse = await fetch<LandingDirectory>('/api/v1/landing');
            if (landingDirectoryResponse) {
                setDirectory(landingDirectoryResponse);
                setSlideshows([]);
            }
        }

        fetchData();

        const interval = setInterval(() => {
            if (slideshows && slideshows.length > 0) {
                let new_slideshows = structuredClone(directory);

                // pick a random index to move first index to last index
                let random_index = Math.floor(Math.random() * new_slideshows.length);
                let slideshow = [] as LandingDirectory;
                let random_account = new_slideshows[random_index];
                slideshow.push(random_account);

                setSlideshows(slideshow);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-auto hidden sm:block">
            <div className="flex">
                <div className="md:flex-1 md:my-auto hidden md:block">
                    <AccountStack start={0} end={1} directory={directory} slideshows={slideshows} />
                </div>

                <div className="md:flex-1 md:mt-16">
                    <AccountStack start={1} end={3} directory={directory} slideshows={slideshows} />
                </div>

                <div className="md:flex-1">
                    <AccountStack start={3} end={5} directory={directory} slideshows={slideshows} />
                </div>
            </div>
        </div>
    );
}