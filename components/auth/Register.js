import React, { Component } from 'react'
import  {View , Button , TextInput} from 'react-native';

export class Register extends Component {
    constructor(props){

        super(props);

        this.state = {
            email: '',
            password:'',
            name:''
        }
//hh
        
    this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){


    }

    render() {
    return (
      <View>
<TextInput placeholder='name'  
onChangeText={(name) => this.setState({name})} 

/>


<TextInput placeholder='email'  
onChangeText={(name) => this.setState({email})} 

/>

<TextInput placeholder='password' 
secureTextEntry= {true}
onChangeText={(name) => this.setState({password})} 

/>

<Button 
    onPress={() => this.onSignUp()}
    title="Sign Up"
/>
      </View>
    )
  }
}

export default Register