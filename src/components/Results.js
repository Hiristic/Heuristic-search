import PropTypes from "prop-types";
import React from "react";


function getNewClassName(newClassName) {
    if (!Array.isArray(newClassName)) return newClassName;

    return newClassName.filter(name => name).join(" ");
}

function appendClassName(baseClassName, newClassName) {
    if (!newClassName) return baseClassName || "";
    if (!baseClassName) return getNewClassName(newClassName) || "";
    return `${baseClassName} ${getNewClassName(newClassName)}`;
}




function Results({ children, className, ...rest }) {
    return (
        <ul
            className={appendClassName("sui-results-container", className)}
            {...rest}
        >
            {children}
        </ul>
    );
}

Results.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Results;