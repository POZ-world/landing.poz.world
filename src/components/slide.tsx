import resizeAvatar from "../lib/resizeAvatar";
import { MASTODON_URL } from '../mastodon-url';
import { SLIDESHOW_ANCHOR_CLASS, SLIDESHOW_IMAGE_SPACING } from "../lib/constants";
import React from "react";
import { Account } from "src/types";

type SlideProps = {
    account: Account;
    index: number;
};

export default function Slide({ account, index }: SlideProps) {
    return (
        <a
            href={`${MASTODON_URL}/@${account.username}`}
            key={`${index}-${account.id}`}
            className={SLIDESHOW_ANCHOR_CLASS}
            title={`Visit ${account.display_name || account.username}'s profile`}
        >
            <div className="rounded-xl bg-white h-full">
                <img
                    src={resizeAvatar(account.avatar, 324)}
                    alt={`${account.username}'s avatar`}
                    className={`${SLIDESHOW_IMAGE_SPACING} object-cover rounded-xl shadow-lg bg-white animate-slide-in`}
                    onLoad={(e) => {
                        // trigger animation
                        const target = e.target as HTMLElement;
                        target.classList.remove('animate-slide-in');
                        void target.offsetWidth;
                        target.classList.add('animate-slide-in');
                    }}
                />
            </div>
        </a>
    );
}