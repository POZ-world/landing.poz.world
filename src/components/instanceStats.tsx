import { InstanceStats as _instanceStats } from "../types/instance";
import Loading from "./loading";
import React from "react";

type InstanceStatsParams = {
    stats: _instanceStats;
}

export default function InstanceStats({ stats }: InstanceStatsParams) {
    if (stats === null) { return (<Loading />); }

    return (
        <dl className="flex flex-row lg:flex-col gap-y-8 gap-x-12 text-center lg:text-left justify-center">
            <div>Our Stats:</div>
            {
                [
                    {
                        title: "Perverted POZ Pigs",
                        value: stats.user_count,
                    },
                    {
                        title: "POZ Posts",
                        value: stats.status_count,
                    },
                    {
                        title: "Brother Domains",
                        value: stats.domain_count,
                    }
                ].map((stat, index) => (
                    <div key={index} className="">
                        <dt className="text-2xl sm:text-5xl font-bold text-black dark:text-neutral-100">{stat.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dt>
                        <dd className="text-sm sm:text-md py-2">{stat.title}</dd>
                    </div>
                ))
            }
        </dl>
    );
}