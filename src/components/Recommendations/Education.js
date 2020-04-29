import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
export class EducationDetails extends Component{
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
                     title="Education Details"
                     style={{ backgroundColor: 'rgba(19, 148, 71, 0.6)' ,textAlign:'center'}}
                     showMenuIconButton={false}
                     />
                     <div style={{justifyContent: 'center',textAlign:'center'}}>
                     <h2>Graduation</h2>
                     <div className="grad" style={styles.grad}>                     
                            <TextField
                        className='degree'
                        hintText="Enter degree"
                        floatingLabelText="Degree"
                        onChange={handleChange('degree')}
                        defaultValue={values.degree}
                        style={{textAlign:'left',paddingRight: 25}}
                        />
                        <br/>
                    
                        <TextField
                        className='percentage'
                        hintText="Percentage"
                        floatingLabelText="percentage"
                        onChange={handleChange('percentageG')}
                        defaultValue={values.percentageG}
                        style={{textAlign:'right',paddingLeft: 50}}
                        />
                        <br/>
                    </div>
                        <TextField
                        className='degree'
                        hintText="Enter college"
                        floatingLabelText="College"
                        onChange={handleChange('college')}
                        defaultValue={values.college}
                        style={{padding: 0.2}}
                        />
                        <br/>
                    
                    
                    </div>
                    <div style={{textAlign:'center'}}>
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
        textAlign:'center'
      
    }

}