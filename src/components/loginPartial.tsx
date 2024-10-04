import React from "react";
import { Link } from "../types/links";
import { MASTODON_URL } from "../mastodon-url";
import Hyperlink from "./hyperlink";

const login = { url: `${MASTODON_URL}/auth/sign_in`, label: "Log in", target: "_blank", description: "Log in to POZ.world", className: "inline-flex button-small bg-indigo-600 hover:bg-indigo-700 text-white" };

export default function LoginPartial() {
    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {(window.currentlyLoggedInUserId == '') ?
                <Hyperlink link={login} id={"login"} />
                :
                (<div>
                    Welcum, {window.currentlyLoggedInUserName}!
                </div>)
            }
        </div>
    );
}