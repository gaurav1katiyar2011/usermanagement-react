import React, {Component} from 'react';
import {handleModal} from "../Actions/Global";
import {updateUser} from '../Actions/Update';
import {addUser} from '../Actions/Create';
import {connect} from "react-redux";

class UserModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            usermodal: null,
            loading: false,
            msgContent: null,
            msgType: null,
            userId:"",
            username: "",
            email: "",
            group: "",
            password:"",
            type: "edit",
            userupdates: props.userupdates
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
            this.props.handleModal(null);
        }
    }
    closeModal(){
        this.setState({msgContent: null, msgType: null, loading: false})
        this.props.handleModal(null);
    }
    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value.replace(/(<([^>]+)>)/ig,"")});
    }
    handleSubmit(e) {
        e.preventDefault();
        const { username, email, group,password,userId } = this.state;

        if(!username){
            this.setState({msgContent: 'Please enter User Name', msgType: 'alert error'})
        }else if(!email){
            this.setState({msgContent: 'Please provide email address', msgType: 'alert error'})
        }else if(!group){
            this.setState({msgContent: 'Please select group', msgType: 'alert error'})
        }else if(!password){
            this.setState({msgContent: 'Please enter password', msgType: 'alert error'})
        }else{
            this.setState({loading: true}, function(){
                if(this.state.type === "add"){
                    console.log({userId:userId,username, email, password,groupId:group})
                    this.props.addUser({userId:userId,username, email, password,groupId:group});
                }else{
                    this.props.updateUser(this.state.usermodal.user_id, {username, email, groupId:group,password});
                }
            })
        }
    }
    componentDidMount(){
        document.addEventListener('mousedown', this.modalClickOutside);
    }
    static getDerivedStateFromProps(props, state) {
        console.log(state);
        console.log(props)
        // check modal open/close
        if(props.usermodal && props.usermodal !== state.usermodal){
            return{
                usermodal: props.usermodal,
                username: props.usermodal.username,
                email: props.usermodal.email,
                group: props.usermodal.group.id,
                password: props.usermodal.password,
                type: props.usermodal.type
            }
        }else if(!props.usermodal){
            return{
                usermodal: props.usermodal
            }
        }else if(props.userupdates && props.userupdates !== state.userupdates){
            // Check user update response
            window.scrollTo(0, 0);
            if(props.userupdates.code === 200){
                props.handleModal(null);
                return{
                    msgContent: null,
                    msgType: null,
                    loading: false,
                    username: "",
                    userId:"",
                    email: "",
                    group: "",
                    password:"",
                    type: ""
                }
            }else{
                return{
                    msgContent: props.userupdates.error,
                    msgType: 'alert error',
                    userupdates: props.userupdates,
                    loading: false
                }
            }
        }else{
            return null;
        }
    }
    render(){
        const groups = this.props.groups;
        return(
            <div className={this.state.usermodal ? 'modal' : 'modal closed'}>
                <div className="modal-box" ref={this.setModalRef}>
                <div className="card">
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                {this.state.type === "add" ? (
                                <div className="card-header">
                                    <i className="fa fa-user-plus"></i> Add User
                                </div>
                                ):(
                                <div className="card-header">
                                    <i className="fa fa-edit"></i> Edit User
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
                                                    value={this.state.userId} 
                                                    name="userId" 
                                                    className="form-control form-control-lg" 
                                                    placeholder="User Id" 
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
                                                    value={this.state.username} 
                                                    name="username" 
                                                    className="form-control form-control-lg" 
                                                    placeholder="User Name" 
                                                    type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group wrap">
                                        <div className="col-full">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                                </div>
                                                <input 
                                                    onChange={this.handleInput} 
                                                    value={this.state.email} 
                                                    name="email" 
                                                    className="form-control form-control-lg" 
                                                    placeholder="Email" 
                                                    type="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group wrap">
                                        <div className="col-full">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input 
                                                    onChange={this.handleInput} 
                                                    value={this.state.password} 
                                                    name="password" 
                                                    className="form-control form-control-lg" 
                                                    placeholder="Password" 
                                                    type="password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group wrap">
                                        <div className="col-full">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-users"></i></span>
                                                </div>
                                                <select onChange={this.handleInput} 
                                                name="group" 
                                                value={this.state.group}
                                                className="form-control form-control-lg">
                                                    <option value="">Select Group</option>
                                                    {groups.map((group)=>
                                                    <option value={group.id} key={group.id}>{group.name}</option>
                                                    )}
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
        usermodal: globalState.usermodal,
        groups: globalState.groups,
        userupdates: globalState.userupdates
    };
};
export default connect(mapStateToProps, {handleModal, updateUser, addUser})(UserModal);