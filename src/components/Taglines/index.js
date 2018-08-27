import React, { Component } from 'react';

import './style.css';

class Taglines extends Component 
{
    render() 
    {
        return (
            <div>
                
                <div className="tagline" >
                    <div className="tag-heading" >
                        Vision
                    </div>
                    <div className="tag" >
                        All our dreams can come true, if we have the courage to pursue them.
                    </div>
                </div>
                <br />
                <div className="tagline" >
                    <div className="tag-heading" >
                        Moto
                    </div>
                    <div className="tag" >
                        All our dreams can come true, if we have the courage to pursue them.
                    </div>
                </div>
                <br />
                <div className="tagline" >
                    <div className="tag-heading" >
                        Objective
                    </div>
                    <div className="tag" >
                        All our dreams can come true, if we have the courage to pursue them.
                    </div>
                </div>

            </div>
        );
    }
}

export default Taglines;