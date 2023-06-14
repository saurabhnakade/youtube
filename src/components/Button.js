import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    return <Link to={"/results?search_query="+props.name}><div className="m-3 px-4 py-2 bg-gray-300 rounded-full">{props.name}</div></Link>;
};

export default Button;
