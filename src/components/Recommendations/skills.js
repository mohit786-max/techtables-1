import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


export class SkillsDetails extends Component{
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
                     title="Skills"
                     style={{textAlign:'center',backgroundColor: ' rgba(0, 0, 0, 0.61)'  }}
                     showMenuIconButton={false}
                     />
                    <div style={styles.fields}>
                    
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