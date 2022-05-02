import './App.css';
import { useState } from "react";
import { Header, HowItWorks } from "./components";
import { Main } from "./components";

export function App() {
    return(
        <div>
            <Header />
            <Main />
            <HowItWorks/>
        </div>
    )
}