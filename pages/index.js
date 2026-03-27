import React from 'react';

const APEX_DAY = () => {
    const currentDate = new Date().toISOString();

    return (
        <div>
            <h1>Welcome to APEX DAY!</h1>
            <p>Current Date and Time (UTC): {currentDate}</p>
        </div>
    );
};

export default APEX_DAY;