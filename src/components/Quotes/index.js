import React, { Component } from 'react';

import './style.css';

class Quotes extends Component 
{
    render() 
    {
        return (
            <div className="quote"> 

                <div className="testimonial-quote group">

                    <div className="image-container" >
                        <div>
                        <img src="https://www.biography.com/.image/t_share/MTE5NDg0MDU0NTIzODQwMDE1/steven-jobs-9354805-2-402.jpg" />
                        </div>
                    </div>
                    <div className="quote-container">
                        <blockquote>
                            <p>Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.”</p>
                        </blockquote> 
                        <br /> 
                        <cite><span> - Steve Jobs</span></cite>
                    </div>
                </div>    

                <hr className="hr" />

                <div className="testimonial-quote group">

                    <div className="image-container" >
                        <div>
                        <img src="https://specials-images.forbesimg.com/imageserve/5a8d920d31358e4955adf197/416x416.jpg?background=000000&cropX1=755&cropX2=2357&cropY1=494&cropY2=2097" />
                        </div>
                    </div>
                    <div className="quote-container">
                        <blockquote>
                            <p>I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.”</p>
                        </blockquote> 
                        <br /> 
                        <cite><span> - Jeff Bezos</span></cite>
                    </div>
                </div>    

                <hr className="hr" />
            
                <div className="testimonial-quote group">

                    <div className="image-container" >
                        <div>
                        <img src="https://specials-images.forbesimg.com/imageserve/5a8d90fd4bbe6f2652f61c15/416x416.jpg?background=000000&cropX1=0&cropX2=1999&cropY1=159&cropY2=2159" />
                        </div>
                    </div>
                    <div className="quote-container">
                        <blockquote>
                            <p>When something is important enough, you do it even if the odds are not in your favor.”</p>
                        </blockquote> 
                        <br /> 
                        <cite><span> - Elon Musk</span></cite>
                    </div>
                </div> 

            </div>
        );
    }
}

export default Quotes;