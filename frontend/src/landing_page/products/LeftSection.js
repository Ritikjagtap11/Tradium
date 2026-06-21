import React from 'react';



function LeftSection({   
        imageUrl, 
        productName, 
        productDescription, 
        tryDemo, 
        learnMore, 
        googlePlay, 
        appStore}) {
    return (
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col">
                    <img src={imageUrl} alt="Product Image"/>
                </div>
                <div className="col">
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                      <a href={tryDemo} style={{marginRight:"50px"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                      <a href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>  
                    </div>
                    <div className="mt-3">
                      <a href={googlePlay} style={{marginRight:"30px"}}><img src="media/images/googlePlayBadge.svg" alt="Google Play"/></a>
                      <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store"/></a>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    );

}

export default LeftSection;
