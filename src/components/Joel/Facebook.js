import React, { Component } from "react";
import FacebookLoginBtn from "react-facebook-login";

export default class LoginFacebook extends Component {
    state = {
        auth: false,
        name: '',
        picture: ''
    }

    componentClicked = ()=>{
        console.log('Facebook btn clicked');
    }

    responseFacebook = (response) => {
        console.log(response);
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url,
        })
    }

    render(){
        let facebookData;

        this.state.auth ?
            facebookData = (
                <div>
                    <img src={this.state.picture} alt={this.state.name} />
		            <h3>Welcome {this.state.name}</h3>
                </div>
            ):
            facebookData = (
            <FacebookLoginBtn 
                appId=""
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
        
        return(
            <>
                {facebookData}
            </>
        );
    }
}