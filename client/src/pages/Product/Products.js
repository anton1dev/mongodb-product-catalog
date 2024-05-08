import React, { Component } from 'react';
import axios from 'axios';

import Products from '../../components/Products/Products.js';

export class ProductsPage extends Component {
  state = { isLoading: true, products: [] };
  componentDidMount() {
    this.fetchData();
  }

  productDeleteHandler = productId => {
    axios
      .delete('https://mern-product-catalog-backend-8984bcc3b1db.herokuapp.com/products/' + productId)
      .then(result => {
        this.fetchData();
      })
      .catch(err => {
        this.props.onError(
          'Deleting the product failed. Please try again later'
        );
      });
  };

  fetchData = () => {
    axios
      .get('https://mern-product-catalog-backend-8984bcc3b1db.herokuapp.com/products')
      .then(productsResponse => {
        this.setState({ isLoading: false, products: productsResponse.data });
      })
      .catch(err => {
        this.setState({ isLoading: false, products: [] });
        this.props.onError('Loading products failed. Please try again later');
      });
  }

  render() {
    let content = <p>Loading products...</p>;

    if (!this.state.isLoading && this.state.products.length > 0) {
      content = (
        <Products
          products={this.state.products}
          onDeleteProduct={this.productDeleteHandler}
        />
      );
    }
    if (!this.state.isLoading && this.state.products.length === 0) {
      content = <p>Found no products. Try again later.</p>;
    }
    return <main>{content}</main>;
  }
}

