import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import CreateProduct from '../Products/CreateProduct'
import UpdateProduct from '../Products/UpdateProduct'

class ProductAdmin extends React.Component {

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
                            <p className="h3 text-info"> Product Admin</p>
                            <p className="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa est id nisi dicta ab ducimus saepe adipisci veniam ipsam, totam veritatis reiciendis ex sapiente, aliquid natus quas quia earum</p>
                            <Link to='/product/create' Component={CreateProduct} className="btn btn-warning btn-sm">Create New</Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.productsList.length > 0 ?
                                            <>
                                                {
                                                    this.state.productsList.map((product) => {
                                                        return (
                                                            <tr key={product._id}>
                                                                <td>{product._id.substr(product._id.length - 5)}</td>
                                                                <td>
                                                                    <img src={product.image} alt="" width="25" height="25" />
                                                                </td>
                                                                <td>{product.name}</td>
                                                                <td>&#8377; {product.price} / Kg</td>
                                                                <td>{product.qty} Kg</td>
                                                                <td>
                                                                    <Link to="/product/update" className="m-auto btn btn-info btn-sm" component={UpdateProduct}>Update</Link>
                                                                    <button className="btn btn-sm btn-danger">Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </> : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductAdmin