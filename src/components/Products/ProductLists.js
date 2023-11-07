import React from "react";
import axios from "axios";

class ProductLists extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productsList: [],
            errMsg: ''
        }
    }

    componentDidMount() {
        this.getAllProducts()
    }

    // get all products

    getAllProducts = () => {
        let dataUrl = "http://127.0.0.1:1896/products"
        axios.get(dataUrl)
            .then((response) => {
                this.setState({
                    ...this.state,
                    productsList: response.data
                })
            })
            .catch((err) => {
                this.setState({
                    ...this.state,
                    errMsg: err
                })

            })
    }

    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success">Product List</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, atque placeat tempora aliquam commodi minima.</p>
                        </div>
                    </div>
                    <div className="row justify-content-space-evenly">
                        {
                            this.state.productsList.length > 0 ?
                                <>
                                    {
                                        this.state.productsList.map(product => {
                                            return (
                                                <>
                                                    <div className="col-md-3 ">
                                                        <div className="card">
                                                            <div className="card-header text-center bg-white">
                                                                <img src={product.image} alt="" />
                                                            </div>
                                                            <div className="card-body">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item">
                                                                        Name : {product.name}
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        Price : &#8377; {product.price.toFixed(2)} / Kg
                                                                    </li>
                                                                    <li className="list-group-item">
                                                                        Qty : {product.qty} Kg
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </> : null
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ProductLists