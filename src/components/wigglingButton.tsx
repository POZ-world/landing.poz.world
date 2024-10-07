import { Link } from "../types/links";
import Hyperlink from "./hyperlink";
import { WIGGLING_BUTTON_CLASS } from "../lib/constants";

export default function WigglingButton({ link }: { link: Link }) {
    link.className = `${link.className || ''} ${WIGGLING_BUTTON_CLASS}`;
    return (
        <Hyperlink link={link} />
    );
}