import { MASTODON_URL } from "../mastodon-url";

export default function Logo() {
    return (
        <svg className="h-12 lg:h-16 w-auto mx-auto mb-4 lg:m-0" viewBox="0 0 2522 820" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image href={`${MASTODON_URL}/wordmark.svg`} style={{ height: '100%', width: '100%' }} />
        </svg>
    );
}