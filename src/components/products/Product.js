import React from "react";
import "./product.css";
import { Edit, Delete } from "@material-ui/icons";

const Product = () => {
  return (
    <div>
      <h3>Products</h3>
      <div className="option-tab">
        <div className="select-tab">
          <input placeholder="search for products"></input>
          <select>
            <option>Quantity</option>
            <option>Price</option>
          </select>
        </div>
        <div>
          <button>Add Products</button>
        </div>
      </div>
      <div>
        <table className="table">
          <tr className="table-head">
            <th>Products</th>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>

          <tr className="table-body">
            <td>Img</td>
            <td>#0001</td>
            <td>Aqua</td>
            <td>20 liters</td>
            <td>₹ 50</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
          <tr className="table-body">
            <td>Img</td>
            <td>#0001</td>
            <td>Aqua</td>
            <td>20 liters</td>
            <td>₹ 50</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
          <tr className="table-body">
            <td>Img</td>
            <td>#0001</td>
            <td>Aqua</td>
            <td>20 liters</td>
            <td>₹ 50</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
          <tr className="table-body">
            <td>Img</td>
            <td>#0001</td>
            <td>Aqua</td>
            <td>20 liters</td>
            <td>₹ 50</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
          <tr className="table-body">
            <td>Img</td>
            <td>#0001</td>
            <td>Aqua</td>
            <td>20 liters</td>
            <td>₹ 50</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Product;
