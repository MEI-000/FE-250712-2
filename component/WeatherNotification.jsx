import React, { useEffect, useState } from 'react';

const WeatherNotification = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timeout);
    }, []);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: '#ffeeba',
            color: '#333',
            border: '1px solid #f5c6cb',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 9999
        }}>
            <strong>weather notification</strong> {message}
        </div>
    );
};

export default WeatherNotification;