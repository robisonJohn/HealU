import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://raw.githubusercontent.com/robisonJohn/CSV-Hosting/main/healUversionFour-Grid%20view-5.csv';
    // 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

    export const useData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const row = d => {
        return d;
        };
        csv(csvUrl, row).then(data => {
        setData(data.slice(0, 11));
        });
    }, []);
    
    return data;
    };