import React from "react";
import Navbar from "./components/Navbar";
import Announce from "./components/Announce";
import data from "./data/data";
import "./style/style.css";

export default function App() {
    const elements = data.map((item) => {
        return <Announce key={item.id} {...item} />;
    });
    return (
        <div className="app-container">
            <Navbar />
            {elements}
        </div>
    );
}
