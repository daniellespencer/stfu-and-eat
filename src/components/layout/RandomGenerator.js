import React from 'react';
import { Link } from 'react-router-dom';


const RandomGenerator = () => {
    return (
       
            <div className="randomGen">
                <div className="randomGen-inner">
                <h1 className="x-large">STFU & EAT</h1>
                <p className="lead">
                    Hit the "Let's Eat!" button and your culinary journey begins
                </p>
                <div className="buttons">
                    <Link to="/recommendation" className="btn btn-success btn-lg">
                        LET'S EAT
                        {' '}<i className='fa fa-utensils'></i>
                    </Link>
                    
                </div>
                </div>
            </div>
     
    )
}

export default RandomGenerator
