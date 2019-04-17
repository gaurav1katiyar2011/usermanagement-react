import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteGroup, updateGroup} from '../Actions/Update';

class GroupsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            updatedGrpName: "",
            updatedGrpId: ""
        };
        this.submitUpdate = this.submitUpdate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleUpdateBox = this.handleUpdateBox.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(groupid){
        this.props.deleteGroup(groupid);
    }
    handleUpdate(e){
        this.setState({updatedGrpName: e.target.value.replace(/(<([^>]+)>)/ig,"")});
    }
    submitUpdate(e){
        e.preventDefault();
        const { updatedGrpName, updatedGrpId } = this.state;
        if(!updatedGrpName || !updatedGrpId){
            this.setState({msgContent: 'Please provide group name', msgType: 'alert error'})
        }else{
            this.setState({loading: true}, function(){
                this.props.updateGroup(updatedGrpName, updatedGrpId);
            })
        }
    }
    //Open edit group box
    handleUpdateBox(id, title){
        this.setState({updatedGrpId: id, updatedGrpName: title});
    }
    renderGroups(groups){
        return groups.map((group) => {
            return (
                <tr key={group.id}>
                    <td>
                        {group.name}
                        {this.state.updatedid === group.id &&
                        <form onSubmit={this.submitUpdate}>
                            <div className="input-group">
                                <input 
                                    name="grpName"
                                    value={this.state.updatedGrpName} 
                                    className="form-control form-control-lg" 
                                    placeholder="Group Name" 
                                    type="text"
                                    onChange={this.handleUpdate} />
                                <div className="input-group-append">
                                    <button className="btn btn-success">Update</button>
                                </div>
                            </div>
                        </form>
                        }
                    </td>
                    <td className="xs-visible">{moment(group.date_added).format('DD.MM.YYYY - hh:mm (Z)')}</td>
                    <td>
                        {this.state.updatedGrpId === group.id ? (
                        <button className="btn btn-primary" type="button" onClick={()=> this.handleUpdateBox("", "")}><i className="fa fa-times"></i></button>
                        ):(
                        <button className="btn btn-primary" type="button" onClick={()=> this.handleUpdateBox(group.id, group.name)}><i className="fa fa-edit"></i></button>
                        )}
                        <button 
                        className="btn btn-danger" 
                        type="button"
                        onClick={() => { if (window.confirm('Are you sure to delete this group?')) this.handleDelete(group.id) } }><i className="fa fa-trash"></i></button>
                        <Link to={"/group/" + group.id}>
                            <button className="btn btn-success" type="button"><i className="fa fa-info"></i></button>
                        </Link>
                    </td>
                </tr>
            );
        })
    }
    render(){
        return(
            <table className="table table-responsive-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="xs-visible">Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderGroups(this.props.groups)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        
    };
}

export default connect(mapStateToProps, {deleteGroup, updateGroup})(GroupsList);