import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchClients, moreClients, searchClient} from '../Actions/List';
import {handleCustomerModal} from "../Actions/Global";
import ClientsList from '../Components/ClientsList';
import ClientModal from '../Components/ClientModal';

class Clients extends Component {
    constructor(props){
        super(props);
        this.state = {
            skip: 0,
            perPage: 24,
            inPage: 24,
            loading: false,
            msgContent: null,
            msgType: null,
            searchterm: "",
            clientupdates: props.clientupdates
        };
        this.loadMore = this.loadMore.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        
    }
    loadMore(){
        this.setState({skip: this.state.skip + this.state.perPage, inPage: this.state.inPage + this.state.perPage}, function () {
            this.props.moreClients(this.state.skip , this.state.perPage);
        });
    }
    handleSearch(e) {
        this.setState({ searchterm: e.target.value.replace(/(<([^>]+)>)/ig,"")}, function(){
            if(this.state.searchterm){
                this.props.searchClient(this.state.searchterm);
            }else{
                this.props.fetchClients(this.state.skip , this.state.perPage);
            }
        });
    }
    addClient=()=>{
        const client = {
            customer_id: "",
            customer_name: "",
            status: "",
            updated_user_id: "",
            type: "add"
        }
        this.props.handleCustomerModal(client);
    }
    componentDidMount(){
        this.props.fetchClients(this.state.skip , this.state.perPage);
        window.scrollTo(0, 0);
    }
    static getDerivedStateFromProps(props, state) {
        if(props.clientupdates && props.clientupdates !== state.clientupdates){
            window.scrollTo(0, 0);
            if(props.clientupdates.code === 200){
                props.fetchClients(state.skip , state.perPage);
                return{
                    msgContent: props.clientupdates.message,
                    msgType: 'alert success',
                    clientupdates: props.clientupdates,
                    loading: false
                }
            }else{
                return{
                    msgContent: props.clientupdates.error,
                    msgType: 'alert error',
                    clientupdates: props.clientupdates,
                    loading: false
                }
            }
        }else{
            return null;
        }
  }
    render() {
        const clients = this.props.clients;
        let loadMore = clients.length >= this.state.inPage;
        return (
            <div className="list-page">
                {this.state.msgContent &&
                <div className={this.state.msgType} role="alert">
                    {this.state.msgContent}
                </div>
                }
                <div className="wrap">
                    <div className="col-full">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-align-justify"></i> Customers List
                                <div className="card-actions">
                                    <button className="btn btn-success" onClick={this.addClient}>
                                        <i className="fa fa-user-plus"></i> Add Customer
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group wrap">
                                    <div className="col-full">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-search"></i></span>
                                            </div>
                                            <input 
                                                onChange={this.handleSearch} 
                                                value={this.state.searchterm} 
                                                name="searchterm" 
                                                className="form-control form-control-lg" 
                                                placeholder="Search Customer" 
                                                type="text" />
                                        </div>
                                    </div>
                                </div>
                                <ClientsList clients={clients}/>
                            </div>
                            {loadMore &&
                            <div className="card-footer">
                                <button type="button" className="btn btn-sm btn-success" onClick={this.loadMore}><i className="fa fa-more"></i> Load more</button>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <ClientModal />
            </div>
        )
    }
}
                
function mapStateToProps(globalState) {
    return {
        clients: globalState.clients,
        clientupdates: globalState.clientupdates
    };
}

export default connect(mapStateToProps, {fetchClients, moreClients,  searchClient, handleCustomerModal})(Clients);