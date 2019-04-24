import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {deleteUser} from '../Actions/Update';
import {handleModal} from "../Actions/Global";

class UsersList extends Component{
    editUser(user){
        this.props.handleModal(user);
    }
    handleDelete(userid){
        this.props.deleteUser(userid);
    }
    renderUsers(users){
        return users.map((user) => {
            console.log(user)
            return (
                <tr key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.group.name}</td>
                    <td>{user.customer===null?'':user.customer.customer_name}</td>
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
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Group</th>
                        <th>Customer</th>
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

export default connect(mapStateToProps, { deleteUser, handleModal })(UsersList);