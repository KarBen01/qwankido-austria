import React from 'react';

const SimpleIcon = ({ icon, size = 24, className = '' }) => {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="currentColor"
            className={className}
        >
            <title>{icon.title}</title>
            <path d={icon.path} />
        </svg>
    );
};

export default SimpleIcon;