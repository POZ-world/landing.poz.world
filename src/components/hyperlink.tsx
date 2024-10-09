import React from "react";
import { Action, Link } from "../types/links";

export default function Hyperlink({ link, id }: { link: Link, id?: any }) {
    return typeof link.action === 'string' ? 
        (<a id={id} title={link.description} href={link.action as string} target={link.target} className={link.className || 'text-blue-500 hover:text-blue-700'} dangerouslySetInnerHTML={{ __html: link.label }} data-method={(link.method || "GET").toLowerCase()}  /> ):
        (<button id={id} title={link.description} onClick={link.action as Action} className={link.className || 'text-blue-500 hover:text-blue-700'} dangerouslySetInnerHTML={{ __html: link.label }} />
    );
}