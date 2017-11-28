import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Product extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Products</h1>
            </header>
            Product {this.props.match.params.productNumber}
            <br />
            <Link to="/"> Retour à l accueil </Link>
          </div>
        );
    }
}

export default Product;
