import { ToastPosition } from "react-toastify";

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    image: string;
    handleAdd?: any
}

export interface CartItemsProps {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    handleDelete?: any;
    handleAddItem?: any;
    handleRemoveItem?:any;
}

export interface AlertProps {
    text: string;
    position?: ToastPosition;
    theme?: string;
}

export interface ProductState {
    filter: string;
    products: ProductProps[];
}
