import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Home/Home.css";
const Home = () => {
  const [bookdata, setBookData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://664aea64a300e8795d43675e.mockapi.io/api/book"
      );
      setBookData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1 className="text-center title mb-4">Libaray Management System</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-3 m-1">
          {bookdata.map((element, index) => {
            return (
              <div key={index} className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3 text-center card-title">
                    <h4 className="my-0 fw-normal">{element.title}</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>
                        <p>
                          <span className="heading">Author: </span>
                          {element.author}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="heading">ISBN Number: </span>
                          {element.ISBN_number}
                        </p>
                      </li>
                      <li>
                        <span className="heading">Publication Data: </span>
                        {element.publication_data}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
