import React from "react";
import world_fill from "../images/fill.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={world_fill} alt="logo" />
            <span>my travel journal</span>
        </nav>
    );
}
