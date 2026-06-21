import React from 'react';



function RightSection({   
        imageUrl, 
        productName, 
        productDescription, 
        learnMore,}) {
    return (  
        <div className="container mt-5 p-5">
            <div className="row ">
                <div className="col">
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                      <a href={learnMore} >Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>  
                    </div>
                    <br/>
                </div>
                <div className="col">
                    <img src={imageUrl} alt="Product Image"/>
                </div>
            </div>
        </div>
    );

}

export default RightSection;