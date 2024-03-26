import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LuView } from 'react-icons/lu';
import { TbEdit } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';

const MyAdds = () => {
    const [myAdds, setMyAdds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve access token from localStorage
                const accessToken = localStorage.getItem('accessToken');

                // Check if access token exists
                if (!accessToken) {
                    console.error('Access token not found in localStorage');
                    return;
                }

                // Make POST request to the API URL using Axios
                const response = await axios.post('https://news.goexpressus.com/ad/my-ads', {}, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                // Handle successful response
                console.log('Ads:', response.data);
                setMyAdds(response.data);
            } catch (error) {
                // Handle error response
                console.error('Error fetching ads:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // This empty dependency array ensures that this effect runs only once on component mount
    return (
        <>
        <p>{myAdds.length}</p>
        <tbody className="text-center">
            {Array.isArray(myAdds) && myAdds.map((item, index) => (
                <tr key={index} className="text-center">
                    <td>{index + 1}</td>
                    <td>{item.category}</td>
                    <td>{item.postDate}</td>
                    <td>{item.advertisement}</td>
                    <td>{item.postStatus}</td>
                    <td>10$</td>
                    <td>
                        <div className="d-flex justify-content-center  align-items-center ">
                            <Link to={"#"} className="me-2 user-dash-icons">
                                <LuView></LuView>
                            </Link>
                            <Link to={"#"} className="me-2 user-dash-icons">
                                <TbEdit></TbEdit>
                            </Link>
                            <Link to={"#"} className="user-dash-icons">
                                <MdDelete></MdDelete>
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
        </>
    );
};

export default MyAdds;
