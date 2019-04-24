import React, {Component} from 'react';
import {handleCustomerModal} from "../Actions/Global";
import {updateClient} from '../Actions/Update';
import {addClient} from '../Actions/Create';
import {connect} from "react-redux";

class ClientModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            clientmodal: null,
            loading: false,
            msgContent: null,
            msgType: null,
            customerId:"",
            customerName: "",
            status: "",
            updatedUserId: "",
            type: "edit",
            clientupdates: props.clientupdates
        }
        this.setModalRef = this.setModalRef.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.modalClickOutside = this.modalClickOutside.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    setModalRef(node) {
        this.modalRef = node;
    }
    modalClickOutside(event){
        if (this.modalRef && !this.modalRef.contains(event.target)) {
            this.props.handleCustomerModal(null);
        }
    }
    closeModal(){
        this.setState({msgContent: null, msgType: null, loading: false})
        this.props.handleCustomerModal(null);
    }
    handleInput(e) {
        const {name,value} = e.target;
        console.log("name="+name+",value="+value);
        this.setState({ [name]: value});
    }
    handleSubmit(e) {
        e.preventDefault();
        const { customerId, customerName, status,updatedUserId } = this.state;

        if(!customerId && this.state.type==='add'){
            this.setState({msgContent: 'Please enter valid customer id', msgType: 'alert error'})
        }else if(!customerName){
            this.setState({msgContent: 'Please enter valid customer name', msgType: 'alert error'})
        }else if(!status){
            this.setState({msgContent: 'Please enter customer status', msgType: 'alert error'})
        }else{
            this.setState({loading: true}, function(){
                if(this.state.type === "add"){
                    this.props.addClient({customerId,customerName, status,updatedUserId});
                }else{
                    this.props.updateClient(this.state.clientmodal.customer_id, {customerName, status});
                }
            })
        }
    }
    componentDidMount(){
        document.addEventListener('mousedown', this.modalClickOutside);
    }
    static getDerivedStateFromProps(props, state) {
        console.group("modal")
        console.log(state);
        console.log(props)
        console.groupEnd()
        // check modal open/close
        if(props.clientmodal && props.clientmodal !== state.clientmodal){
            console.log("inside first condition",props.clientmodal)
            return{
                clientmodal: props.clientmodal,
                customerId: props.clientmodal.customer_id,
                customerName: props.clientmodal.customer_name,
                status: props.clientmodal.status,
                updatedUserId: props.clientmodal.updated_user_id,
                type: props.clientmodal.type
            }
        }else if(!props.clientmodal){
            console.log("inside 2 condition")
            return{
                clientmodal: props.clientmodal
            }
        }else if(props.clientupdates && props.clientupdates !== state.clientupdates){
            // Check user update response
            console.log("inside 3 condition")
            window.scrollTo(0, 0);
            if(props.clientupdates.code === 200){
                console.log("inside 31 condition")
                props.handleCustomerModal(null);
                return{
                    msgContent: null,
                    msgType: null,
                    loading: false,
                    customerId: "",
                    customerName:"",
                    status: "",
                    updatedUserId: "",
                    type: ""
                }
            }else{
                console.log("inside 32 condition")
                return{
                    msgContent: props.userupdates.error,
                    msgType: 'alert error',
                    userupdates: props.userupdates,
                    loading: false,
                    customerId: "",
                    customerName:"",
                    status: "",
                    updatedUserId: "",
                }
            }
        }else{
            console.log("inside 4 condition")
            return null;
        }
    }
    render(){
        console.log(this.state)
        return(
            <div className={this.state.clientmodal ? 'modal' : 'modal closed'}>
                <div className="modal-box" ref={this.setModalRef}>
                <div className="card">
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                {this.state.type === "add" ? (
                                <div className="card-header">
                                    <i className="fa fa-user-plus"></i> Add Customer
                                </div>
                                ):(
                                <div className="card-header">
                                    <i className="fa fa-edit"></i> Edit Customer
                                </div>
                                )}
                                <div className="card-body">
                                    {this.state.msgContent &&
                                    <div className={this.state.msgType} role="alert">
                                        {this.state.msgContent}
                                    </div>
                                    }
                                    {
                                        this.state.type === "add" &&
                                        <div className="form-group wrap">
                                        <div className="col-full">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                </div>
                                                <input 
                                                    onChange={this.handleInput} 
                                                    value={this.state.customerId} 
                                                    name="customerId" 
                                                    className="form-control form-control-lg" 
                                                    placeholder="Customer Id" 
                                                    type="text" />
                                            </div>
                                        </div>
                                        </div>
                                    }
                                    <div className="form-group wrap">
                                        <div className="col-full">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                </div>
                                                <input 
                                                    onChange={this.handleInput} 
                                                    value={this.state.customerName} 
                                                    name="customerName" 
                                                    className="form-control form-control-lg" 
                                                    placeholder="Customer Name" 
                                                    type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group wrap">
                                        <div className="col-full">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-info-circle"></i></span>
                                                </div>
                                                <select onChange={this.handleInput} 
                                                    name="status" 
                                                    value={this.state.status}
                                                    className="form-control form-control-lg">
                                                        <option value="">Select Status</option>
                                                        <option value={0} key={0}>無効</option>
                                                        <option value={1} key={1}>有効</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                {this.state.loading ?(
                                    <button type="button" className="btn btn-success loading" disabled><i className="fas fa-sync-alt fa-spin"></i></button>
                                ):(
                                    <span>
                                        <button type="submit" className="btn btn-success"><i className="far fa-dot-circle"></i> Submit</button>
                                        <button type="button" className="btn btn-danger" onClick={this.closeModal}><i className="fa fa-times"></i> Close</button>
                                    </span>
                                )}
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (globalState) => {
    return {
        clientmodal: globalState.clientmodal,
        clientupdates: globalState.clientupdates
    };
};
export default connect(mapStateToProps, {handleCustomerModal, updateClient, addClient})(ClientModal);