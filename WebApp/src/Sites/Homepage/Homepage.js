import React , {Component} from 'react';

import SCalendar from './../../Components/SmallCalendar/SmallCalendar';

import './Homepage.css';
import SubjectSection from './SubjectSection/SubjectSection';



class Homepage extends Component{
    render(){
        return(

         <div id="homepage-wrapper">
             <SCalendar width="90" />
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
