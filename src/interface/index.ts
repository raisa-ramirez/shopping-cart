import { ReactEventHandler } from "react";

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    handleAdd?: any
}

export interface CartItemsProps {
    id: number;
    title: string;
    price: number;
    quantity: number;
    handleDelete?: any;
}
