import React from 'react';

import {Link} from "react-router-dom"


function Universe() {
    return (
        <div className="container mt-5 p-5 text-center text-muted">
            <h2 className='mb-4'>The Tradium Universe</h2>
            <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row">
                <div className="col-4">
                    <img src="media/images/tradiumFundhouse.png" style={{ width: "50%" }} alt="Product Image" />
                    <p className='text-muted fs-6 p-4'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/sensibullLogo.svg" style={{ width: "50%"}} alt="Product Image" />
                    <p className='text-muted fs-6 p-5' >Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/tijori.svg" style={{ width: "50%" }} alt="Product Image" />
                    <p className='text-muted fs-6 p-2'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.

                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src="media/images/streakLogo.png" style={{ width: "50%" }} alt="Product Image" />
                    <p className='text-muted fs-6 p-4'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/smallcaseLogo.png" style={{ width: "50%" }} alt="Product Image" />
                    <p className='text-muted fs-6 p-5'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/dittoLogo.png" style={{ width: "50%" }} alt="Product Image" />
                    <p className='text-muted fs-6 p-4'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
                <Link to="/signup"><button className="p-2 btn btn-primary fs-5" style={{width: '20%', margin: '0 auto'}}>Signup Now</button></Link>
            </div>
        </div>
    );
}

export default Universe;