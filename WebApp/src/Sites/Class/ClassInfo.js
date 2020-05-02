import React , {Component} from 'react';
import RowInTable from './RowInTable/RowInTable';
import './ClassInfo.css';
import Loader1 from './../../Components/SVG/Loader_1';
import Error1 from './../../Components/SVG/Cancel_1';
import SubjectBiology from './../../Components/SVG/Subject_Biology';
import SubjectGeography from './../../Components/SVG/Subject_Geography';
import SubjectMath from './../../Components/SVG/Subject_Math';
import SubjectChemistry from './../../Components/SVG/Subject_Chemistry';
import SubjectLiterature from '../../Components/SVG/Subject_Literature';
import SubjectEnglish from '../../Components/SVG/Subject_English';
import SubjectHistory from '../../Components/SVG/Subject_History';
import SubjectPhysics from '../../Components/SVG/Subject_Physics';
class ClassInfo extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            classCode : null,
            students : [],
            stateCode: 0
        };
    }


    componentDidMount(){
        this.loadClassData();
    }

    componentDidUpdate(){
        if(window.location.pathname.split('/')[2] !== this.state.classCode){
            this.loadClassData();
        }
    }


    loaderReview(statusCode){
        if(statusCode === 1){
            return <div>
                <Loader1 /><div id="classinfo-loader-infoLoader">Loading data of {this.state.classCode}</div>
            </div>
            
        }
        else if(statusCode === -1){
            return <div>
                <Error1 /><div id="classinfo-loader-errorLoader">Cannot get data of {this.state.classCode}</div>
            </div>
        }
    }


    sleeper(ms) {
        return function(x) {
          return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
    }

    loadClassData(){
        
        this.setState({
            classCode: window.location.pathname.split('/')[2],
            stateCode : 1,
        });

        fetch('https://api.kunbr0.com/se104/class/' + window.location.pathname.split('/')[2] + ".php")
            .then((response) => {
                return response.json();
            })

            .then(this.sleeper(1000))

            .then((students) => {
                console.log(students);
                this.setState({
                    students,                 
                    stateCode : 99,
                    
                });
            })
            
            .catch((error) => {
                this.setState({stateCode : -1});
        });
    }

    render(){
        
        let elmStudents = null;
        let styleOfLoader = {};
        if(this.state.stateCode === 99){
            styleOfLoader = {"display" : "none"};
            if(this.state.students.length){
                elmStudents = this.state.students.map((student) => 
                    <RowInTable key={student.studentID} studentID={student.studentID} studentName={student.studentName} sex={student.Sex} DOB={student.DOB} address={student.Address}/>
                );
            }
        }else if(this.state.stateCode === 1){
            styleOfLoader = {"display" : ""};
        }else if(this.state.stateCode === 0){
            styleOfLoader = {"display" : "none"};
        }else if(this.state.stateCode === -1){
            styleOfLoader = {"display" : ""};
            console.log("Errorrr !!!");
        }

        
        
        return(
            
            <div>
                <div id="classinfo-loader-wrapper" style={styleOfLoader}>
                    <div id="classinfo-loader-wrapper2">
                        {this.loaderReview(this.state.stateCode)}
                    </div>
                </div>
                

                <div id="classinfo-mainview"  style={this.state.stateCode !== 99 ? {"display" : "none"} : {}}>

                    <div id="classinfo-details">
                        <div id="classinfo-info">
                            Lớp  : {this.state.classCode} <br/>
                            GVCN : Nguyen Thi Thanh B<br/>
                            Sĩ số: 42<br/>
                            Loại : chuyên Toán
                        </div>

                        <div id="classinfo-subjects">
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectMath />
                                </div>
                                <div className="classinfo-subject-name">Math</div>
                            </div>
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectPhysics />
                                </div>
                                <div className="classinfo-subject-name">Physics</div>
                            </div>
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectChemistry />
                                </div>
                                <div className="classinfo-subject-name">Chemistry</div>
                            </div>
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectBiology />
                                </div>
                                <div className="classinfo-subject-name">Biology</div>
                            </div>
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectLiterature />
                                </div>
                                <div className="classinfo-subject-name">Literature</div>
                            </div>
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectEnglish />
                                </div>
                                <div className="classinfo-subject-name">English</div>
                            </div>
                            
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectGeography />
                                </div>
                                <div className="classinfo-subject-name">Geography</div>
                            </div>
                            <div className="classinfo-subjects-elm">
                                <div className="classinfo-subject-image">
                                    <SubjectHistory />
                                </div>
                                <div className="classinfo-subject-name">History</div>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="wrapper">
                    <div className="table">
                        
                        <div className="row header">
                            <div className="cell w10pcM13px">
                            STT
                            </div>
                            <div className="cell w30pc">
                            Name
                            </div>
                            <div className="cell w10pc">
                            Sex
                            </div>
                            <div className="cell w20pc">
                            DoB
                            </div>
                            <div className="cell w20pc">
                            Address
                            </div>
                            <div className="cell w10pc">
                            Action
                            </div>
                            <div className="cell w13px">
                                .
                            </div>
                        </div>     
                        

                        
                        <div id="table-rows-view">
                        {elmStudents}
                        
                        
                        </div>


                        
                        




                    </div>
                    
                    
                </div>
                </div>
            </div>
        );
    }
}

export default ClassInfo;
