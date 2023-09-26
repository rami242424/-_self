import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { soldOut, sale } from "../modules/stockCounter";

export default function StockCounter() {
    const {message} = useSelector((state)=> {
        return {
            message: state.stockReducer.message
        }
    });

    const { stock } = useSelector((state) => {
        return {
            stock: state.goodsReducer.stock
        }
    });

    const dispatch = useDispatch();
    const onSoldout = () => dispatch(soldOut());

    useEffect(()=> {
        if(stock <= 0) {
            onSoldout();
        }else {
            dispatch(sale());
        }
    }, [stock])

    return (
        <p>{message}</p>
    )
}
