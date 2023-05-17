import Logo from "../shared/logo";
import '../../style/app.css';
import { Icon } from '@iconify/react';
import { useState } from "react";

export default function NavBar({isClicked, setIsClicked}) {
    return (
        <div className="nav-wrapper overall-padding py-[20px] bg-[#16166c] flex justify-between">
            <div className="logo-sec-wrapper">
                <Logo />
            </div>
            {isClicked ? <Icon onClick={() => setIsClicked(false)} width={25} className="hidden md:block z-[10000]" icon="material-symbols:cancel" color="white" /> : <Icon width={25} onClick={() => setIsClicked(true)} className="hidden md:block z-[10000]" icon="solar:hamburger-menu-bold" color="white" />}
        </div>
    )
}