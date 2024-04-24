import React, { useEffect, useState } from 'react';
import DisplayCard from "../components/displayCard/index";
import Loading from "../components/Loading";

function NasaApiPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=7t8BGYy4A9fDxsGPtUBiS2mX9S7SOzhYzUiHwbvw`;
        setIsLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="nasa-api-page">
            <div style={{textAlign:'center',padding:'20px 0',fontSize:20,fontWeight:600}}>Image of the Day</div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <DisplayCard key={data?.date} data={data} />
                )}
        </div>
    );
}

export default NasaApiPage;
