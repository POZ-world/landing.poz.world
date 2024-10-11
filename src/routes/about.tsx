import { useEffect, useState } from "react";
import { InstanceVNext } from "../types/instance";
import fetch from "../lib/api-fetch";
import Loading from "../components/loading";
import InstanceStats from "../components/instanceStats";
import GridBackground from "../components/gridBackground";
import { LandingDirectory } from "../types/landing-directory";
import AccountStacks from "../components/accountStacks";
import AccountList from "../components/accountList";
import { DEFAULT_DIRECTORY_LIMIT } from "../lib/constants";
import React from "react";

export default function About() {
    const [instance, setInstance] = useState<InstanceVNext>({} as InstanceVNext);
    const [directoryLimit, setDirectoryLimit] = useState(DEFAULT_DIRECTORY_LIMIT);
    const [directory, setDirectory] = useState<LandingDirectory>({} as LandingDirectory);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Correct fetch function usage without passing state tuple
                const response = await fetch<InstanceVNext>('/api/vnext/instance');
                const landingDirectoryResponse = await fetch<LandingDirectory>('/api/v1/landing');
                if (response) {
                    setInstance(response);
                }
                if (landingDirectoryResponse) {
                    setDirectory(landingDirectoryResponse);
                }
            } catch (error) {
                console.error("Error fetching instance data:", error);
            }
        };
        fetchData();
    }, []);  // The empty array ensures this effect runs only once
    return instance && instance.description && instance.title ? (
        <>
            <GridBackground />
            <div className="">
                <div className="flex">
                    <div className="flex-auto my-auto">
                        <h1 className="title pb-8 font-bold" dangerouslySetInnerHTML={{ __html: instance.tagline }} />

                        <a href={instance.urls.sign_up} type="button" className="inline-flex button mr-4 bg-indigo-600 hover:bg-indigo-700 text-white animate-wiggle">
                            Join Here
                        </a>

                        <a href={instance.urls.log_in} type="button" className="button bg-gray-100 hover:bg-gray-200 text-gray-900 border">
                            Log in
                        </a>
                    </div>
                    <AccountStacks />
                </div>

                <div className="flex flex-col lg:flex-row gap-y-12 my-16">
                    <div className="flex-1 max-w-2xl xl:max-w-none">
                        <p className="text-md font-bold mb-4 markdown" dangerouslySetInnerHTML={{ __html: instance.description }} />
                    </div>
                    <div className="flex flex-shrink mx-auto xl:flex-1 justify-center lg:justify-end">
                        <InstanceStats stats={instance.stats} />
                    </div>
                </div>

                <AccountList directory={directory} directoryLimit={directoryLimit} setDirectoryLimit={setDirectoryLimit} />

                {/* {rules()}

            <FAQ /> */}
            </div>
        </>)
        : (<Loading />);
    //     <div className="flex">
    //         {/* <h1 className="center" dangerouslySetInnerHTML={{__html: instance.title}} /> */}
    //         <div className="flex-auto my-auto">
    //             <div className="title pb-8 font-bold" dangerouslySetInnerHTML={{__html: instance.tagline}} />
    //             <a href={instance.urls.sign_up} className="inline-flex button mr-4 bg-indigo-600 hover:bg-indigo-700 text-white animate-wiggle">
    //                 Join Here
    //             </a>
    //             <a href={instance.urls.log_in} className="button bg-gray-100 hover:bg-gray-200 text-gray-900 border">
    //                 Log in
    //             </a>
    //         </div>
    //         <div className="flex flex-col lg:flex-row gap-y-12 my-16">
    //             <div className="flex-1 max-w-2xl xl:max-w-none">
    //                 <div className="markdown">
    //                     <div dangerouslySetInnerHTML={{__html: instance.description}} />
    //                 </div>
    //             </div>
    //             <div className="flex flex-shrink mx-auto xl:flex-1 justify-center lg:justify-end">
    //                 <dl className="flex flex-row lg:flex-col gap-y-8 gap-x-12 text-center lg:text-left justify-center">
    //                     <div>
    //                         <div className="text-2xl sm:text-5xl font-bold text-black dark:text-neutral-100">
    //                             {instance.stats.user_count}
    //                         </div>
    //                         <div className="text-sm sm:text-md py-2">
    //                             Perverted POZ Pigs
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <div className="text-2xl sm:text-5xl font-bold text-black dark:text-neutral-100">
    //                             {instance.stats.status_count}
    //                         </div>
    //                         <div className="text-sm sm:text-md py-2">
    //                             POZ Posts
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <div className="text-2xl sm:text-5xl font-bold text-black dark:text-neutral-100">
    //                             {instance.stats.domain_count}
    //                         </div>
    //                         <div className="text-sm sm:text-md py-2">
    //                             Brother Domains
    //                         </div>
    //                     </div>
    //                 </dl>
    //             </div>
    //         </div>
    //     </div>
    // ) : (<Loading />);
}