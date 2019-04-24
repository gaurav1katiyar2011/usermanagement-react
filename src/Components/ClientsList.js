import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {deleteClient} from '../Actions/Update';
import {handleCustomerModal} from "../Actions/Global";

class ClientsList extends Component{
    editClient(client){
        console.log(client)
        this.props.handleCustomerModal(client);
    }
    handleDelete(clientId){
        this.props.deleteClient(clientId);
    }
    renderUsers(clients){
        return clients.map((client) => {
            return (
                <tr key={client.customer_id}>
                    <td>{client.customer_id}</td>
                    <td>{client.customer_name}</td>
                    <td>{client.status}</td>
                    <td className="md-visible">{moment(client.date_added).format('DD.MM.YYYY - hh:mm (Z)')}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=> this.editClient(client)}><i className="fa fa-edit"></i></button>
                        <button className="btn btn-danger" 
                        onClick={() => { 
                            if (window.confirm('Are you sure to delete this customer?')) this.handleDelete(client.customer_id) } }>
                            <i className="fa fa-trash"></i></button>
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
                {this.renderUsers(this.props.clients)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(globalState) {
    return {

    };
}

export default connect(mapStateToProps, { deleteClient, handleCustomerModal })(ClientsList);