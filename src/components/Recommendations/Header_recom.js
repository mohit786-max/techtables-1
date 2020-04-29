import React, {Component} from 'react';
import './css/styleheader.css';

export class NavBar extends Component{
    render(){
        return(
            <header className='container'>
                <ul className='progressbar'>
                    <li>
                        <img src='profile.jpg'/>
                        <p>Profile</p>
                    </li>
                    <li>
                        <img src='edu.jpg'/>
                        <p>Education</p>
                    </li>
                    <li>
                        <img src='edu.jpg'/>
                        <p>Skills</p>
                    </li>
                    <li>
                        <img src='edu.jpg'/>
                        <p>Experience</p>
                    </li>
                    <li>
                        <img src='edu.jpg'/>
                        <p>Links</p>
                    </li>
                    <li>
                        <img src='edu.jpg'/>
                        <p>Accomplishments</p>
                    </li>
                </ul>
            </header>
        );

    }
}