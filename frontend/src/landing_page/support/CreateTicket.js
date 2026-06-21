import React from 'react';

function CreateTicket() {
    return (
        <div className="container p-5 mb-5" style={{lineHeight:"40px"}}>
            <div className="row ">
                <h1 className="mt-5">To create a ticket, select a relevant topic</h1>
                <div className='col p-5 mt-2 text-muted ' >
                    <h3 className='fs-4'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h3>
                    <a href='#'>Resident individual</a><br />
                    <a href='#'> Minor</a><br />
                    <a href='#'>Non Resident Indian (NRI)</a><br />
                    <a href='#'>Company, Partnership, HUF and LLP</a><br />
                    <a href='#'>Glossary</a><br />
                </div>
                <div className='col mt-2 text-muted p-5'>
                    <h3 className='fs-4'><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h3>
                    <a href='#'>Your Profilel</a><br />
                    <a href='#'>Account modification</a><br />
                    <a href='#'>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href='#'>Nomination</a><br />
                    <a href='#'>Transfer and conversion of securities</a><br />
                    
                </div>
                <div className='col mt-2 text-muted p-5'>
                    <h3 className='fs-4'><i class="fa fa-sitemap" aria-hidden="true"></i> Kite</h3>
                    <a href='#'>IPO </a><br />
                    <a href='#'>Trading FAQs</a><br />
                    <a href='#'>Margin Trading Facility (MTF) and Margins</a><br />
                    <a href='#'>Charts and orders</a><br />
                    <a href='#'>Alerts and Nudges</a><br />
                    <a href='#'>General</a><br />
                </div>
            </div>
            <div className="row ">
                <div className='col mt-2 text-muted p-5'>
                    <h3 className='fs-4'><i class="fa fa-money" aria-hidden="true"></i> Funds</h3>
                    <a href='#'>Add money</a><br />
                    <a href='#'>Withdraw money</a><br />
                    <a href='#'>Add bank accounts</a><br />
                    <a href='#'>eMandates</a><br />
                </div>
                <div className='col mt-2 text-muted p-5'>
                    <h3 className='fs-4'><i class="fa fa-connectdevelop" aria-hidden="true"></i> Console</h3>
                    <a href='#'>Portfolio</a><br />
                    <a href='#'>Corporate actions</a><br />
                    <a href='#'>Funds statement</a><br />
                    <a href='#'>Reports</a><br />
                    <a href='#'>Profile</a><br />
                    <a href='#'>Segments</a><br />
                </div>
                <div className='col mt-2 text-muted p-5'>
                    <h3 className='fs-4'><i class="fa fa-sun-o" aria-hidden="true"></i> Coin</h3>
                    <a href='#'>Mutual funds</a><br />
                    <a href='#'>National Pension Scheme (NPS)</a><br />
                    <a href='#'>Fixed Deposit (FD)</a><br />
                    <a href='#'>Payments and Orders</a><br />
                    <a href='#'>General</a><br />
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;