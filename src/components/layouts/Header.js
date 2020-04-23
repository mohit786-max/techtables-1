import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



export const Header=()=>{
    return(
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar
                     title="Personal Details"
                     style={{ backgroundColor: 'white' ,fontColor: 'black'}}
                     />
            </React.Fragment>
            
        </MuiThemeProvider>
    );
}
