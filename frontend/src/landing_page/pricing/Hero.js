import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 text-center">
            <div className="row p-5 border-bottom">
            <h2 className='mb-3'>Charges</h2>
            <p className=" text-muted fs-4">List of all charges and taxes</p>
            </div>
            <div className="row mt-5 p-5">
                <div className="col-4">
                    <img src="media/images/pricingMF.svg"  style={{ width: "80%"}} alt="Product Image" />
                    <h3>Free equity delivery</h3>
                    <p className='text-muted fs-6 p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/intradayTrades.svg" style={{ width: "80%"}} alt="Product Image" />
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted fs-6 p-3' >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/images/pricingMF.svg" style={{ width: "80%" }} alt="Product Image" />
                    <h3>Free direct MF</h3>
                    <p className='text-muted fs-6 p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.

                    </p>
                </div>
            </div>
            
        </div>
     );
}

export default Hero;
