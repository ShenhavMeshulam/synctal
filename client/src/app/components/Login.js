import React from 'react';

export default ({ className }) => {
    console.log({ className });
    return (<div className={className}><h1>login page</h1></div>);
};