import React, {Component} from 'react';

class ProductDetails extends Component {
    handleRedirect = () => {
        this.props.history.replace("/products");
    }
    render() { 
        const {id} = this.props.match.params;
        return (
            <div>
                <h1>Product Details → {id}</h1>
                <button onClick={this.handleRedirect}>Go to Products</button>
            </div>
        );
    }
}
 
export default ProductDetails;