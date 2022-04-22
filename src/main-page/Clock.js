import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setDate(new Date());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    return (
        <div className="row h-100 font-weight-bold" style={{ fontSize: '1.2rem' }}>
            <div className="col-sm-12 my-auto">
                <span>
                    {date.toLocaleTimeString("fi-FI")}
                </span>
                <span style={{ marginLeft: '1rem' }}>
                    {date.toLocaleDateString("fi-FI")}
                </span>
            </div>
        </div>
    )
}

export default Clock;