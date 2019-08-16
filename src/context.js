//Context.js handles all methods to be called from the application

import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products: [], 
        detailProduct: detailProduct,
        modalOpen: false,
        modalProduct:detailProduct,
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let products = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            products = [...products, singleItem];

        })
        this.setState(() => {
            return {products}
        })
    };

    //Return product from ID
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    //Open detail page for product
    handleDetail = id => {
        const product = this.getItem(id);
        this.setState (() => {
            return {detailProduct:product};
        });
    };

    //Modal methods
    openModal = id => {
        console.log("Modal Opened");
    }

    closeModal = () => {
        console.log("Modal closed");
    }
    
    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail:this.handleDetail,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };