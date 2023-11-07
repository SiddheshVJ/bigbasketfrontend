import React from "react";


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column justify-content-center text-center align-item-center h-100">
                            <h5 className="display-4"><i class="fa fa-shopping-cart p-2" aria-hidden="true"></i>Big Basket</h5>
                            <p className="lead px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nam eveniet asperiores libero doloremque ut architecto. Laudantium ab dolorem alias ipsam similique aut. Minus repellat sed ut velit illo quod?</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home