import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './css/experience.css';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from "react-responsive-modal";



export class ExperienceDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
     openForm1 = () => {
        document.getElementById("popup-Form1").style.display = "block";
    };
    closeForm1= () => {
        document.getElementById("popup-Form1").style.display = "none";
    };
    openForm2 = () => {
        document.getElementById("popup-Form2").style.display = "block";
        console.log('working');
    };
    closeForm2 = () => {
        document.getElementById("popup-Form2").style.display = "none";
    };
 

    render(){
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                     title="Experience Details"
                     style={{textAlign:'center',backgroundColor: 'rgba(249, 113, 16, 0.7)'  }}
                     showMenuIconButton={false}
                     />
                    <div className='main_body' >
                        <h3>Add Experience:</h3>
                        <button className='internship' onClick={this.openForm1}>Internship
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <button className='Project' onClick={this.openForm2}>Project
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>

                    
                    </div>
                    <br/>
                    <div className='button'style={{textAlign:'center'}}>
                    <RaisedButton
                     label="Back"
                     primary={false}
                     style={styles.button}
                     onClick={this.back}
                    />
                    <RaisedButton
                     label="Continue"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
                    />
                    </div>
                    <div class="form-popup" id="popup-Form1">
                        <div className="form-container">
                        <AppBar
                     title="Internship Details"
                     style={{textAlign:'center',backgroundColor: 'rgba(249, 113, 16, 0.7)'  }}
                     showMenuIconButton={false}
                     />
                            <button className="btn cancel"  onclick={this.closeForm1}>Cancel</button>
                        </div>
                    </div>
                    <div class="form-popup" id="popup-Form2">
                        <div className="form-container">
                        <AppBar
                     title="Project Details"
                     style={{textAlign:'center',backgroundColor: 'rgba(249, 113, 16, 0.7)'  }}
                     showMenuIconButton={false}
                     />
                            <button className="btn cancel"  onclick={this.closeForm2}>Cancel</button>
                        </div>
                    </div>
                    

                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

const styles = {
    button:{
        margin: 15,
        textAlign:'center',
    },
    fields:{
        textAlign: 'center',
    },
    grad:{
        display: 'flex',
      
    }

}