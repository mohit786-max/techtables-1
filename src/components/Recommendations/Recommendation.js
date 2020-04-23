import React, { Component } from 'react';
import { GetStarted } from './GetStarted';
import { PersonalDetails } from './PersonalDetails';
import { EducationDetails } from './Education';


export class Recommendations extends Component{
    state={
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        address:'',
        city:'',
    }
    //Proceed to next step
    nextStep= () =>{
        const { step }= this.state;
        this.setState(
            {
                step: step+1
            }
        );
    }
    //Go back to previous step
    prevStep= () =>{
        const { step }= this.state;
         this.setState(
            {
                step: step-1
             }
        );
    }

    //handle fields change
    handleChange = input => e =>{
        this.setState({[input]:e.target.value});
    }
    render(){
        const { step } = this.state;
        const {firstName, lastName, email} = this.state;
        const values= {firstName, lastName, email};
        switch(step){
            case 1:
                return(
                    <GetStarted
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                    />
                )
                case 2:
                    return(
                        <PersonalDetails
                         prevStep={this.prevStep}
                         nextStep={this.nextStep}
                         handleChange={this.handleChange}
                         values={values}
                        />
                    )
                    case 3:
                        return(
                            <EducationDetails
                             prevStep={this.prevStep}
                             nextStep={this.nextStep}
                             handleChange={this.handleChange}
                             values={values}
                            />
                        )
        }
    }
}

