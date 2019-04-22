import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {deleteUser} from '../Actions/Update';
import {handleModal} from "../Actions/Global";

class ClientsList extends Component{
    editUser(user){
        this.props.handleModal(user);
    }
    handleDelete(userid){
        this.props.deleteUser(userid);
    }
    renderUsers(users){
        return users.map((user) => {
            return (
                <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td className="md-visible">{moment(user.registered).format('DD.MM.YYYY - hh:mm (Z)')}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=> this.editUser(user)}><i className="fa fa-edit"></i></button>
                        <button 
                        className="btn btn-danger"
                        onClick={() => { if (window.confirm('Are you sure to delete this user?')) this.handleDelete(user.user_id) } }><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            );
        })
    }
    render(){
        return(
            <table className="table table-responsive-lg">
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th className="md-visible">Registered</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderUsers(this.props.users)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(globalState) {
    return {

    };
}

export default connect(mapStateToProps, { deleteUser, handleModal })(ClientsList);