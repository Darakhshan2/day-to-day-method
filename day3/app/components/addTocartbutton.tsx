"use client";
import { Product } from "./type";
import { AddtoCart } from "../functionality/funct";
function AddTocartbutton() {
  const HandleCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault;
    AddtoCart(product);
  };
  
}

export default AddTocartbutton;
