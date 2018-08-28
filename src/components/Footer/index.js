import React, { Component } from 'react';

import './style.css';

class Footer extends Component 
{
    render() 
    {
        return (
            <div className="footer" >
                
                <div className="copyright" >
                    &copy; 2018 &middot; E-Cell IIIT-Bh <br /><br />
                    Handcrafted by &nbsp;
                    <a
                        href="https://sonu12485.github.io/"
                        target="_blank"
                        className="names"
                    ><span className="names" >K.Sai Kishan</span></a>&nbsp;
                    &amp; &nbsp;
                    <a
                        href="https://geekysrm.github.io/"
                        target="_blank"
                        className="names"
                    ><span className="names" >Soumya Ranjan Mohanty</span></a>
                </div>

            </div>
        );
    }
}

export default Footer;