import React , { useState, useEffect } from 'react';

import './ClassInfo.css';


import SubjectsBar from './SubjectsBar/SubjectBars';
import GeneralClassDetails from './GeneralClassDetails/GeneralClassDetails';
import SubjectDetails from './SubjectDetails/SubjectDetails';

import {Route} from 'react-router-dom';





const ClassInfo = (props) => { 

    const [classCode, setClassCode] = useState();
    useEffect(() => {
        if(classCode!==props.match.params.classCode)
            setClassCode(props.match.params.classCode);
    }, [classCode, props.match.params.classCode]);

    
        
        
        return(

            <div>
                
                

                <SubjectsBar parentUrl={props.match.url} classCode={classCode} />
                
                <div id="classinfo-mainview">
                    
                    
                    
                    <Route path={`${props.match.url}/:subjectName`}  
                        render={({match}) => (
                            
                            <SubjectDetails classCode={classCode}  subjectName={match.params.subjectName}    />
                            
                        )}
                    >
                    
                    </Route>

                    <Route path={props.match.url} exact>  
                            <GeneralClassDetails classCode={classCode}   />
                    </Route>
                </div>
            </div>
        );
    
}

export default ClassInfo;
