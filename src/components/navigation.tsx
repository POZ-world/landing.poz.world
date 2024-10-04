import { MASTODON_URL } from "../mastodon-url";
import { PUBLIC_URL } from "../public-url";
import Logo from "./logo";
import { Link, LinkArray } from "../types/links";
import LinkRow from "./linkrow";
import { useState, useEffect } from "react";
import Loading from "../components/loading";
import fetch from "../lib/api-fetch";
import Hyperlink from "./hyperlink";
import { InstanceVNext } from "../types/instance";
import Version from "./versions";
import LoginPartial from "./loginPartial";

const header_links: Link[] = [
    { url: `${PUBLIC_URL}/`, label: 'About', target: '_self', description: 'Learn more about POZ.world' },
    { url: `${PUBLIC_URL}/faqs`, label: 'FAQs', target: '_self', description: 'Frequently asked questions' },
    { url: `${PUBLIC_URL}/privacy`, label: 'Privacy', target: '_self', description: 'Learn about our privacy policy' },
    { url: `${PUBLIC_URL}/rules`, label: 'Rules', target: '_self', description: 'Read the rules of the community' },
    { url: `${PUBLIC_URL}/terms`, label: 'TOS', target: '_self', description: 'Read the terms of service' },
];

const footer_links: Link[][] = [[
    { url: `https://status.poz.world`, label: 'Status', target: '_blank', description: 'Check the status of the POZ.world services' },
    { url: `${MASTODON_URL}/directory`, label: 'Members', target: '_blank', description: 'Browse the members directory' },
    { url: `${MASTODON_URL}/invites`, label: 'Invite', target: '_blank', description: 'Invite friends to join POZ.world' },
    { url: `${MASTODON_URL}/explore`, label: 'Explore', target: '_blank', description: 'Explore the POZ.world network' },
],
[
    { url: `https://joinmastodon.org/`, label: 'Mastodon', target: '_blank', description: 'Learn more about Mastodon, the software the powers POZ.world' },
    { url: `https://joinmastodon.org/apps`, label: 'Apps', target: '_blank', description: 'Find Mastodon apps for your device' },
    { url: `https://github.com/justinwritescode/mastodon/tree/poz.world`, label: 'Source', target: '_blank', description: 'View the source code for POZ.world' },
    { url: `https://github.com/poz-world/landing.poz.world`, label: 'Source (Landing)', target: '_blank', description: 'View the source code for the POZ.world landing page' },
]];

const log_in = { url: `${MASTODON_URL}/auth/sign_in`, label: 'Log in', target: '_self', className: 'inline-flex button-small bg-indigo-600 hover:bg-indigo-700 text-white' };
const create_account = { url: `${MASTODON_URL}/auth/sign_up`, label: '<span>Create Account</span>', target: '_self', className: 'button inline-flex bg-indigo-600 hover:bg-indigo-700 text-white animate-wiggle' };

// Join <green heart emoji> to the right
const linkClasses = 'hover:text-blue-700 dark:hover:text-blue-300'
const links = footer_links;

export function Header() {
    return (
        <nav className="lg:flex items-center py-6">
            <div className="block lg:flex-1">
                <Logo />
            </div>
            <div className="flex">
                <div className="justify-center flex-1 flex gap-12 font-bold text-md">
                    <LinkRow links={LinkArray.fromArray(header_links)} />
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {/* <a href={`${MASTODON_URL}/auth/sign_in`} type="button" className="inline-flex button-small bg-indigo-600 hover:bg-indigo-700 text-white">
                    <span>Log in</span>
                </a> */}
                <LoginPartial />
            </div>
        </nav>
    );
}

export function Footer() {
    // const [links, setLinks] = useState<Links>([] as Links);
    const [instance, setInstance] = useState<InstanceVNext>({} as InstanceVNext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch<Links>('/api/vnext/links');
                const instanceResponse = await fetch<InstanceVNext>('/api/vnext/instance');
                // if (response) {
                //     setLinks(response);
                // }
                if (instanceResponse) {
                    setInstance(instanceResponse);
                }
            } catch (error) {
                console.error("Error fetching instance:", error);
            }
        };

        fetchData();
    }, []); // The empty array ensures this effect runs only once

    return links && links.length > 0 ? (
        <div className="my-36 text-center">
            {
                footer_links.map((row, index) => {
                    return (
                        <div key={index}>
                            <LinkRow links={LinkArray.fromArray(row)} />
                        </div>
                    )
                })
            }
            <div className="my-16">
                <div className="mb-4">
                    {/* <a href={create_account.href} type="button" className="button inline-flex bg-indigo-600 hover:bg-indigo-700 text-white animate-wiggle">
                        <span>Create Account</span>
                    </a> */}
                    <Hyperlink link={create_account} />
                </div>
                <a href={`${MASTODON_URL}/auth/sign_in`} className={linkClasses}>
                    <span className="text-sm">Already have an account? <span className="font-bold">Log in</span></span>
                </a>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} {instance.title}. All rights reserved.</p>
            <Version instance={instance} />
        </div>
    ) : (<Loading />);
}