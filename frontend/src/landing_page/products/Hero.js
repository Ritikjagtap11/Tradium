import React from 'react';

function Hero() {
    return ( 
        <div className="container text-center border-bottom p-5 mt-5 ">
            <h1>Tradium Products</h1>
            <h4 className="mt-3 text-muted fs-4">Sleek, modern, and intuitive trading platforms</h4>
            <p className="mt-3 mb-5">Check out our <a href="#" style={{ textDecoration: 'none' }}> investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
     );
}

export default Hero;