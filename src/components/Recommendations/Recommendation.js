import React, { Component } from 'react';
import { GetStarted } from './GetStarted';
import { EducationDetails } from './Education';
import { SkillsDetails } from './skills';
import { ExperienceDetails } from './Experience';
import { NavBar } from './Header_recom';

export class Recommendations extends Component{
    state={
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        address:'',
        city:'',
        degree:'',
        college:'',
        percentageG: 0,
        endYear: 0,
        phoneNo:'',
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
        const {firstName, lastName, email,phoneNo} = this.state;
        const values= {firstName, lastName, email,phoneNo};
        switch(step){
            case 1:
                return(
                    <div>
                            <NavBar/>
                            <GetStarted
                             prevStep={this.prevStep}
                             nextStep={this.nextStep}
                             handleChange={this.handleChange}
                             values={values}
                            />
                        </div>
                )
 
                case 2:
                    return(
                        <div>
                            <NavBar/>
                            <EducationDetails
                             prevStep={this.prevStep}
                             nextStep={this.nextStep}
                             handleChange={this.handleChange}
                             values={values}
                            />
                        </div>
                            
                        );
                case 3:
                        return(
                            <div>
                            <NavBar/>
                            <SkillsDetails
                             prevStep={this.prevStep}
                             nextStep={this.nextStep}
                             handleChange={this.handleChange}
                             values={values}
                            />
                        </div>
                            )
                case 4:
                        return(
                            <div>
                            <NavBar/>
                            <ExperienceDetails
                             prevStep={this.prevStep}
                             nextStep={this.nextStep}
                             handleChange={this.handleChange}
                             values={values}
                            />
                        </div>
                        )
        }
    }
}

