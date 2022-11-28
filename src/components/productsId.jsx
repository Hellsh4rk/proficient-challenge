import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sumArray, minArray, resArray, sumTotal } from "../Database/sumArray";
import { increment, decrement, reset } from "../Store/countSlice";

const ProductsId = ({ product, i}) => {
    const [count, setCount] = useState();
    const [total, setTotal] = useState();
    let totalPrice = 0;

    const dispatch = useDispatch();
    const countValue = useSelector((state) => state.count.value)
    const [price1, setPrice1] = useState(product.price)

    useEffect(() => {
        if (countValue === 0) {
            setCount(count * 0)
            setPrice1(price1 * 0)
        }
    }, [countValue])

    const handleIncrement = () => {
        setCount(product.price++)
        setPrice1(price1 + 1)
        sumArray(product.m2)
        dispatch(increment())
        setTotal(total + 1)
    
    let totalPrice = 0;
    return totalPrice;
    }

    const handleDecrement = () => {
        if(product.price > 0) {
            dispatch(decrement())
            setCount(product.price--)
            setPrice1(price1 - 1)
            minArray.push(product.m2 * -1)
            setTotal(total - 1)
        }
    }

    const handleReset = () => {
        dispatch(reset())
        setCount(product.price = 0)
        setPrice1(price1 * 0)
        resArray.push(product.m2 * -1)
        setTotal(total * 0)
    }

    return (
        <div key={product.id} className="product">
            <div className="productImage">
                <img src={product.image} alt="productImage" />
            </div>
            <div className="button">
                <button onClick={handleDecrement}>+</button>
                <p>{count}</p>
                <button onClick={handleIncrement}>-</button>
            </div>
        </div>
    );
};

export default ProductsId;