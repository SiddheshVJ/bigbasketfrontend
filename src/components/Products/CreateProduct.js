import axios from "axios";
import React from "react";
import { Navigate } from 'react-router-dom'



class CreateProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {
                name: '',
                image: '',
                price: '',
                qty: '',
                info: ''
            },
            isSubmitted: false,
            errorMsg: ''

        }
    }

    updateInput = (e) => {
        this.setState({
            product: {
                ...this.state.product,
                [e.target.name]: e.target.value
            }
        })
    }

    updateImage = async (e) => {
        let imgFile = e.target.files[0]
        let base64Img = await this.convertBase64String(imgFile)
        this.setState({
            product: {
                ...this.state.product,
                image: base64Img
            }
        })
    }

    convertBase64String = (imgFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader()
            fileReader.readAsDataURL(imgFile)
            fileReader.addEventListener('load', () => {
                if (fileReader.result) {
                    resolve(fileReader.result)
                } else {
                    reject('Error Occurred')
                }
            })
        })
    }

    // Submit product
    submitProduct = (e) => {
        e.preventDefault()
        let dataUrl = 'http://127.0.0.1:1896/products/addproduct'
        axios.post(dataUrl, this.state.product)
            .then((response) => {
                this.setState({
                    ...this.state,
                    isSubmitted: true
                })
                alert('Product Created')
            })
            .catch(() => {
            })

    }

    render() {
        return (
            <>
                {
                    this.state.isSubmitted ? <Navigate to="/product/admin" /> :

                        <div className="container mt-3">
                            <div className="row">
                                <div className="col">
                                    <p className="h3 text-primary">Create a Product</p>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi vel consequuntur ab natus cum amet repudiandae minus est. Voluptas, esse ducimus. Eum, voluptatibus. Error unde dolorem odio autem expedita!</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-5">
                                    <div className="card">
                                        <div className="card-header bg-success text-white text-center">
                                            <p className="h4">Add New Product</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.submitProduct}>
                                                <div className="form-group mb-3">
                                                    <input required type="text" className="form-control" placeholder="Product name"
                                                        value={this.state.product.name}
                                                        onChange={this.updateInput}
                                                        name="name" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <div class="input-group ">
                                                        <input onChange={this.updateImage} required type="file" class="form-control" id="inputGroupFile02" />
                                                        <label class="input-group-text" for="inputGroupFile02">
                                                            {
                                                                this.state.product.image !== '' ?
                                                                    <img alt="" src={this.state.product.image} width="25" height="25" /> : <span>Product Image</span>
                                                            }</label>
                                                    </div>
                                                </div>
                                                <div className="form-group  mb-3">
                                                    <input type="number" required className="form-control" placeholder="Price"
                                                        value={this.state.product.price}
                                                        onChange={this.updateInput}
                                                        name="price" />
                                                </div>
                                                <div className="form-group  mb-3">
                                                    <input type="number" required className="form-control" placeholder="Qty"
                                                        value={this.state.product.qty}
                                                        onChange={this.updateInput}
                                                        name="qty" />
                                                </div>
                                                <div className="form-group  mb-3">
                                                    <textarea className="form-control" rows="2" placeholder="Product Info"
                                                        value={this.state.product.info}
                                                        onChange={this.updateInput}
                                                        name="info" />
                                                </div>
                                                <div >
                                                    <input type="submit" className="btn tbn-sm btn-success" value="Create" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <div style={{ marginBottom: '150px' }}></div>

            </>
        )
    }
}

export default CreateProduct