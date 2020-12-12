import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            Hi, Wanker.<Link to="/login">Login</Link>
        </div>
    );
};
