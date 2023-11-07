import React from "react";
import { Link } from 'react-router-dom'
import CreateProduct from '../Products/CreateProduct'

class ProductAdmin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
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
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

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