import { Links } from "../types/links";
import Hyperlink from "./hyperlink";

type LinkRowParams = {
    links: Links;
}
const linkClasses = 'hover:text-blue-700 dark:hover:text-blue-300'

const LinkRow = ({ links }: LinkRowParams) => {
    return (
        <div key={1} className="justify-center flex-1 flex gap-8 lg:gap-12 font-bold text-xs sm:text-sm lg:text-md my-6">
            {links.map((link, index) => {
                link.className = linkClasses;
                return (
                    <Hyperlink link={link} id={index} />
                )
            })}
        </div>
    );
}

export default LinkRow;