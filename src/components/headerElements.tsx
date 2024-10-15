import { useEffect, useState } from "react";
import { InstanceVNext } from "../types/instance";
import fetch from "../lib/api-fetch";
import { Helmet } from "react-helmet";
import React from "react";

type HeaderElementsProps = {
    title: string;
}

export default function HeaderElements({ title }: HeaderElementsProps) {
    const [instance, setInstance] = useState<InstanceVNext>({} as InstanceVNext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Correct fetch function usage without passing state tuple
                const response = await fetch<InstanceVNext>('/api/vnext/instance');
                if (response) {
                    setInstance(response);
                }
            } catch (error) {
                console.error("Error fetching instance data:", error);
            }
        };
        fetchData();
    }, []);  // The empty array ensures this effect runs only once

    return instance && instance.icons && instance.icons.length > 0 ? (
        <Helmet>
            <title>{title} - {instance.title}</title>
            <meta name="description" content={instance.description} />
            <meta property="og:title" content={instance.title} />
            <meta property="og:description" content={instance.description} />
            {instance.icons.map((icon, index) => (
              <link key={icon.src} rel={icon.iconType || 'icon'} type={icon.type} href={icon.src} sizes={icon.sizes} />
            ))}
        </Helmet>
    ) : <></>;
}