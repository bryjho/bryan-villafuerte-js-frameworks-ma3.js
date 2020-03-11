import React from "react";

function HomeContent({ children }) {
	return (
        <p className="lead">{ children }</p>
    );
}

export default HomeContent;