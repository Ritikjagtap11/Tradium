import React from 'react';

function Brokerage() {
    return (  
        <div className="container mt-5 p-5 border-top">
            <div className="row ">
            <h2 className='mb-3'>Charges explained</h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className='mt-3 text-muted fs-6'>
                        <h4>Securities/Commodities transaction tax</h4>
                        <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                        <p>When trading at Tradium, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    </div>
                </div>
                <div className="col">
                    <div className='mt-3 text-muted fs-6'>
                        <h4>Transaction/Turnover Charges</h4>
                        <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                        <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    </div>   
                </div>

            </div>
            
        </div>
    );
}

export default Brokerage;