import React from 'react';
import { Link } from 'react-router-dom';


const RandomGenerator = () => {
    return (
       
            <div className="randomGen">
                <div className="randomGen-inner">
                <h1 className="x-large">STFU & EAT</h1>
                <p className="lead">
                <span className='hide-sm'> We have all been there. With a group of friends, starving, but no one can make a decision. Should we get Thai? or pizza?

                    STFU&EAT acts as your trigger man, providing a random restaurant recommendation for those hangry moments. All local St. Louis CITY restaurants that are under $25 for one person, chains excluded.

                    The best part? Great food and no obligation to go to the place suggested by your friend of a friend of a friend. You get the idea. </span> Hit the "Let's Eat!" button and your culinary journey begins
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
