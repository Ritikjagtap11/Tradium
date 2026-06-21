import React from 'react';

function Hero() {
    return (  
        <div className="container-fluid" id="supportHero">
            <div className='p-5 mt-5' id="supportWrapper">
                <h3>Support Potral</h3>
                <a href='#' style={{color:'#ffffff'}}>Track Tickets</a>
            </div>
            <div className='row p-5' id="supportWrapper">
                <div className='col' >
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg.how do i active F&Q.'/><br/>
                    <a href='#'>Track account opening</a>
                    <a href='#' style={{marginLeft:"15px"}}>Track segment activation</a>
                    <a href='#'style={{marginLeft:"15px"}}>Intraday margins</a>
                    <a href='#'style={{marginLeft:"15px"}}>kite user manual</a>
                </div>
                <div className='col ' >
                    <h1 className='fs-3'>Feature</h1>
                    <ol>
                        <li><a href='#'>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href='#'>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>                    
                </div>
            </div>
        </div>
    );
}

export default Hero;