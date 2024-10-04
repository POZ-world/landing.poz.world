import React from "react";
import { Link } from "../types/links";

export default function Hyperlink({ link, id }: { link: Link, id?: any }) {
    return (
        <a id={link.url} title={link.description} href={link.url} target={link.target} className={link.className || 'text-blue-500 hover:text-blue-700'} dangerouslySetInnerHTML={{ __html: link.label }} />
    );
}