
export default function NavLinksBtns({href, title, bgCol, txtCol}) {
    return (
        <div>
            <a style={{backgroundColor: bgCol}} className="w-[90px] bmss:w-[120px] bmss:py-2 justify-center rounded-md py-1 flex items-center text-center" href={href}>
                <span style={{color: txtCol}} className="side-bar-paragraph">{title}</span>
            </a>
        </div>
    )
}