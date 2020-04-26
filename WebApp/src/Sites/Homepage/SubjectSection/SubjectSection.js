import React from 'react';
import './SubjectSection.css';
import svgDocsBlue from './../../../SVG/DocsBlue.svg';
import svgInfo from './../../../SVG/Info.svg';
import svgPerson from './../../../SVG/Person.svg';
import svgThreeDots from './../../../SVG/ThreeDots.svg';

const SubjectSection = () => {
    return (
        <div className="homepage-section">
            <div id="section-left">
                <div id="section-class-name">SE104.K22.PMCL</div>
                <div id="section-details">
                    <div id="details-icon"><img alt="" class="wh25" src={svgInfo} /></div>
                    <div id="details-text">Nhập môn CNPM</div>
                </div>
                <div id="section-details">
                    <div id="details-icon"><img alt="" class="wh25" src={svgPerson} /></div>
                    <div id="details-text">42</div>
                </div>
            </div>
            <div id="section-right">
                <img id="icon-top-threeDot" alt="" className="wh25" src={svgThreeDots} />
                <img id="icon-bottom-docs" alt="" className="wh40" src={svgDocsBlue} />
            </div>
        </div>
    )
}

export default SubjectSection;