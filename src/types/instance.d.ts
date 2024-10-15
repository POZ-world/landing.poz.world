/* 
 * instance.ts
 *     Created: 2024-09-24T00:08:24-04:00
 *    Modified: 2024-09-24T00:08:24-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */
import { ApiAccountJSON } from "../api_types/accounts";
import { FAQ } from "./faq";
import { Rule } from "./rule";

export type InstanceBase = {
    id: number;
    name: string;
    uri: string;
    title: string;
    description: string;
    version: string;
    thumbnail: string | InstanceThumbnail;
    languages: string[];
    rules: Rule[];
    faqs: FAQ[];
};

export type Instance = InstanceBase & {
    id: number;
    name: string;
    uri: string;
    title: string;
    description: string;
    email: string;
    stats: InstanceStats;
    version: string;
    thumbnail: string;
    registrations: boolean;
    approval_required: boolean;
    invites_enabled: boolean;
    contact_account: ApiAccountJSON
};

export type InstanceV2 = InstanceBase & {
    tagline: string;
    short_description: string;
    languages: string[];
    urls: InstanceUrlsV2;
    source_url: string;
    thumbnail_proxy: string;
    thumbnail_proxy_generated: string;
    thumbnail_proxy_host: string;
    thumbnail_proxy_protocol: string;
    contact: ApiAccountJSON;
    usage: {
        users: {
            active_month: number;
        }
    }
};

export type InstanceConfiguration = {
    urls: InstanceUrls | InstanceUrlsV2;
    vapid: {
        public_key: string;
    };
    accounts: {
        max_featured_tags: number;
        max_pinned_statuses: number;
    };
    statuses: {
        max_characters: number;
        max_media_attachments: number;
        characters_reserved_per_url: number;
    };
    media_attachments: {
        supported_mime_types: string[];
        image_size_limit: number;
        image_matrix_limit: number;
        video_size_limit: number;
        video_frame_rate_limit: number;
        video_matrix_limit: number;
    };
    polls: {
        max_options: number;
        max_characters_per_option: number;
        min_expiration: number;
        max_expiration: number;
    };
}

export type InstanceThumbnail = {
    url: string;
    blurhash: string;
    versions: {
        "@1x": string;
        "@2x": string;
    }
}

export type ImageMimeType = "image/png" | "image/jpeg" | "image/webp" | "image/gif";

export type IconType = "icon" | "apple-touch-icon";

export type InstanceIcon = {
    src: string;
    sizes: IconSize;
    type: ImageMimeType;
    iconType: IconType;
}

export type InstanceUrls = {
    streaming_api: string;
    api?: string;
    oauth_auth?: string;
    oauth_token?: string;
};

export type InstanceUrlsV2 = InstanceUrls & {
    streaming: string;
    status: string;
};

export type InstanceStats = {
    user_count: number;
    status_count: number;
    domain_count: number;
};

export type IconSize = "36x36" | "48x48" | "72x72" | "96x96" | "144x144" | "192x192" | "256x256" | "288x288" | "384x384" | "512x512" | "768x768" | "1024x1024";

const IconSizesToTypes = {
  "16x16": "icon",
  "32x32": "icon",
  "48x48": "icon",
  "57x57": "apple-touch-icon",
  "60x60": "apple-touch-icon",
  "72x72": "apple-touch-icon",
  "76x76": "apple-touch-icon",
  "114x114": "apple-touch-icon",
  "120x120": "apple-touch-icon",
  "144x144": "apple-touch-icon",
  "152x152": "apple-touch-icon",
  "167x167": "apple-touch-icon",
  "180x180": "apple-touch-icon",
  "1024x1024": "apple-touch-icon",
};

export const IconSizesToTypes;

export type InstanceVNext = InstanceBase & {
    tagline: string;
    short_description: string;
    urls: InstanceUrlsV2 & { sign_up: string, log_in: string };
    stats: InstanceStats;
    icons: InstanceIcon[];
};