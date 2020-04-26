import React , {Component} from 'react';
import './Homepage.css';
import SubjectSection from './SubjectSection/SubjectSection';
class Homepage extends Component{
    render(){
        return(

         <div id="homepage-wrapper">
             <SubjectSection />
             <SubjectSection />
             <SubjectSection />
             <SubjectSection />
             <SubjectSection />
             <SubjectSection />
             <SubjectSection />

             

         </div>  

        )
    }
}

export default Homepage;
