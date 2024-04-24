import React from 'react';

const displayCard = ({ key, data }) => {
    return (
        <div className="display-card">
            <h1>{data.title}</h1>
            <img src={data.hdurl} alt={data.title} />
            <p>
                {data.explanation}
            </p>
            <div className="details">
                <div>Date: {data.date}</div>
                <div>Copyright: {data.copyright}</div>
            </div>
            <div className="view-link">
                <a href={data.url} target="_blank" rel="noopener noreferrer">View on NASA's APOD</a>
            </div>
        </div>
    );
};

export default displayCard;
