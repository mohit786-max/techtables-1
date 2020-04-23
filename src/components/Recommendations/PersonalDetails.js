import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


export class PersonalDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                     title="Personal Details"
                     style={{ backgroundColor: '#2196F3' }}
                     />
                    <TextField
                     style={{ textAlign: 'center' }}
                     hintText="Enter your first name"
                     floatingLabelText="First Name"
                     onChange={handleChange('firstName')}
                     defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                     hintText="Enter your last name"
                     floatingLabelText="Last Name"
                     onChange={handleChange('lastName')}
                     defaultValue={values.emaile}
                    />
                    <br/>
                    <TextField
                     hintText="Enter your email"
                     floatingLabelText="Email"
                     onChange={handleChange('email')}
                     defaultValue={values.email}
                    />
                    <br/>
                    <TextField
                     hintText="Enter your address"
                     floatingLabelText="Address"
                     onChange={handleChange('address')}
                     defaultValue={values.address}
                    />
                    <br/>
                    <TextField
                     hintText="Enter your city"
                     floatingLabelText="City"
                     onChange={handleChange('city')}
                     defaultValue={values.city}
                    />
                    <br/>
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
                    


                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}
const styles = {
    button:{
        margin: 15,
    }
}