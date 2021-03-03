import React, { useEffect, useState } from 'react';
import LoadingSpinner from './loadingSpinner';
import {useHistory} from "react-router-dom";

const Product = ({data}) => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    const handleClick = (index_number) => {
        history.push(`/productDetails/${index_number}`);
    }

    return (
    <div>
    {loading === true ? (
        <div className="loading">
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div>
          
          <table className="table">
          <h2>Product List</h2>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price (BDT)</th>
              <th>Action</th>
            </tr>
            {data.map((product, index) => (
              <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick ={() => handleClick(index)}> View Details </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}

export default Product;