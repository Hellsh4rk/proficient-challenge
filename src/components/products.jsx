import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Store/countSlice";
import {dataBase} from "../Database/dataBase";
import { ProductsId } from "./productsId";
import { sumArray, minArray, resArray, sumTotal } from "../Database/sumArray";

const Products = () => {
    const dispatch = useDispatch();
    const countValue = useSelector((state) => state.count.value)
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleReset = () => {
        dispatch(reset())
    }
    let sumArray = [];

    const button = ({product}) => {
        return (
            <div>
                <button onClick={handleDecrement}>+</button>
                <p>{product.price}</p>
                <button onClick={handleIncrement}>-</button>
            </div>
        )
    }

    return (
        <div className="products">
            {dataBase.map((product, i) => {
                return (
                    <div key={product.id} className="product">
                        <div className="productImage">
                            <img src={product.image} alt="productImage" />
                        </div>
                        <div className="button">
                            <button onClick={handleDecrement}>+</button>
                            <p>{product.price}</p>
                            <button onClick={handleIncrement}>-</button>
                        </div>
                    </div>
                )
            })}

        <div className="buttonReset">
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
    );
};

export default Products;