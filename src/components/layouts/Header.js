import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        let linksMarkup = this.props.links.map((link, index)=>{
            return(
                <li><a href={link.link}>{link.label}</a></li>
                    

            );
        });

        return(
            <header className="toolbar">
            <nav className="toolbar__navigation">
                <div><a href="" className="toolbar__logo">logo</a></div>
                <div className="toolbar__navigation-items">
                    <ul>
                        {linksMarkup}
                        <div className='spacer'/>
                        <li><button>Sign In</button></li>

                    </ul>
                </div>
            </nav>
    
        </header>
        )
    }
    
}

export default Header;