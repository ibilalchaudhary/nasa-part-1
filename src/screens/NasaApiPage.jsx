import React, { useState } from 'react';
import DisplayCard from "../components/displayCard/index";
import Loading from "../components/Loading.jsx";

function NasaApiPage() {
    const [data, setData] = useState(null);
    const [date, setDate] = useState('');
    // const [toDate, setToDate] = useState('');
    // const [fromDate, setFromDate] = useState('');
    const [count, setCount] = useState('');
    const [hd, setHd] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const url = `https://api.nasa.gov/planetary/apod?api_key=7t8BGYy4A9fDxsGPtUBiS2mX9S7SOzhYzUiHwbvw&count=${count}&hd=${hd}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            });
    };

    return (
        <div className="nasa-api-page">
            <div style={{textAlign:'center',padding:'20px 0'}}>Filters</div>
            <form onSubmit={handleSubmit} className="form">
                <div style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
                <div style={{width:'49%'}} className="input-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" style={{width:'100%'}} value={date} onChange={(e) => setDate(e.target.value)} className="input" />
                </div>
                <div style={{width:'49%'}} className="input-group">
                    <label htmlFor="count">Count:</label>
                    <input type="number" style={{width:'100%'}} id="count" value={count} onChange={(e) => setCount(e.target.value)} className="input" />
                </div>
                </div>
                <div className="input-group">
                    <label htmlFor="hd">HD Image:</label>
                    <input type="checkbox" id="hd" checked={hd} onChange={(e) => setHd(e.target.checked)} />
                </div>
                <button type="submit" className="submit-button" disabled={isLoading}>{isLoading ? 'Fetching...': 'Fetch Data'}</button>
            </form>
            {isLoading ? (
                <Loading />
            ) : (
                Array.isArray(data) ? (
                    data && data?.length && data.map(item => <DisplayCard key={item.date} data={item} />)
                ) : (
                    data ? <DisplayCard key={data.date} data={data} /> : null
                )
            )}
        </div>
    );
}

export default NasaApiPage;
