import React from "react";
import { Link, LinkButton } from "../types/links";
import MASTODON_URL from "../constants/mastodon-url";
import Hyperlink from "./hyperlink";
import { logOut } from "@poz-world/poz.world/mastodon/utils/log_out"

const login: Link = { action: `${MASTODON_URL}/auth/sign_in`, label: "Log in", target: "_blank", description: "Log in to POZ.world", className: "inline-flex button-small bg-indigo-600 hover:bg-indigo-700 text-white" };
const logout: Link = { action: () => logOut(), label: "Log out", target: "_blank", description: "Log out of POZ.world", className: "inline-flex button-small bg-indigo-600 hover:bg-indigo-700 text-white", method: "DELETE" };

export default function LoginPartial() {
    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {(window.currentlyLoggedInUserId === '') ?
                <Hyperlink link={login} id={"login"} />
                :
                (<div className="content-center">
                    <div className="flex">Welcum, {window.currentlyLoggedInUserName}!</div>
                    <Hyperlink link={logout} id={"logout"} />
                </div>)
            }
        </div>
    );
}