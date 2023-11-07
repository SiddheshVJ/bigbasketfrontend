import React from "react";
import image1 from '../../assets/img/grocery-1232944_1920.jpg'

class ProductLists extends React.Component {

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
                            <p className="h3 text-success">Product List</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, atque placeat tempora aliquam commodi minima.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img className="img-fluid" src={image1} alt="" />
                                <div className="card-body">
                                    <ul className="">
                                        <li className="list-group-item">
                                            Name :
                                        </li>
                                        <li className="list-group-item">
                                            Price :
                                        </li>
                                        <li className="list-group-item">
                                            Quantity :
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductLists