'use client';

import Navbar from "./Navbar";
import Footer from "./Footer";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import Cart from "./Cart";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [showCart, setShowCart] = useState(false);
    
    return (
        <Provider store={store}>
            <Navbar setShowCart={setShowCart} />
            {showCart && <Cart setShowCart={setShowCart} />}
            {children}
            <Footer />
        </Provider>
    );
}
