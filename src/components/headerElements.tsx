import { useEffect, useState } from "react";
import { InstanceVNext } from "../types/instance";
import fetch from "../lib/fetch";
import { Helmet } from "react-helmet";

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
            <title>{instance.title}</title>
            <meta name="description" content={instance.description} />
            <meta property="og:title" content={instance.title} />
            <meta property="og:description" content={instance.description} />
            {instance.icons.map((icon, index) => (
                <link key={index} rel="icon" type={icon.type} href={icon.src} sizes={icon.sizes} />
            ))}
        </Helmet>
    ) : <></>;
}