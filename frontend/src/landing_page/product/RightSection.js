import React from 'react'

function RightSection({imageURL, productName, productDescription, tryDemo, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} >Learn More</a>
                </div>
                <div className='col-6 p-5'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;