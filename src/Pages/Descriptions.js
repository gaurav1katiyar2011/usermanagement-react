import React, { Component } from 'react';
import DescriptionDetail from '../Components/DescriptionDetail'
export default class Descriptions extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        return (
            <div className="list-page">
              
                <div className="wrap">
                    <div className="col-full">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-align-justify"></i> Descriptions
                            </div>
                            <div className="card-body">
                                
                                <DescriptionDetail />
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}