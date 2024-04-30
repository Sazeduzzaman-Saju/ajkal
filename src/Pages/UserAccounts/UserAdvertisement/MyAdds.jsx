import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuView } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const MyAdds = () => {
  const [myAdds, setMyAdds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("Access token not found in localStorage");
        }

        const response = await axios.post(
          "https://backoffice.ajkal.us/ad/my-ads",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setMyAdds(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching ads:", error);
        setError("Error fetching ads. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <tbody className="text-center">
        {myAdds.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.category}</td>
            <td>{item.postDate}</td>
            <td>{item.advertisement}</td>
            <td>{item.postStatus}</td>
            <td>10$</td>
            <td>
              <div className="d-flex justify-content-center align-items-center">
                <Link to={"#"} className="me-2 user-dash-icons">
                  <LuView />
                </Link>
                <Link to={"#"} className="me-2 user-dash-icons">
                  <TbEdit />
                </Link>
                <Link to={"#"} className="user-dash-icons">
                  <MdDelete />
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
