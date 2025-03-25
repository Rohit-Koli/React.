import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/Rohit-Koli')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []); // Empty dependency array to run once

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img className='mt-4 w-24 h-24 rounded-full' src={data.avatar_url} alt="Github Avatar" />
        </div>
    );
}

export default Github;
