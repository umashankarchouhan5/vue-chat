import image1 from "../../public/assets/image1.jpg";
import image2 from "../../public/assets/image2.jpg";
import image3 from "../../public/assets/image3.jpg";


const state={messages:[{sendMessage:"hello,How are you?",receiveMessage:"doing fine.."},{sendMessage:"hello,How are you?",receiveMessage:"doing fine.."}],contact:null, contacts: [
    {
      name: "abhinav",
      id: 1,
      imageUrl: image1,
    },
    {
      name: "Riya",
      id: 2,
      imageUrl: image3,
    },
    {
      name: "john",
      id: 3,
      imageUrl: image2
    }],
    isLoggedIn:false,
    isAdminLoggedIn:false,
    countid:4
    
   };


const getters={
    getInput:state=>state.input
};
const mutations={ 
    
    setSendMessage:(state,input)=>{
    state.messages.push({sendMessage:input,receiveMessage:" ....... "})
},
addMessage:(state,message)=>{
  state.messages.push(message)  
},
setContact:(state,contact)=>{
   state.contact=contact;
},
setContacts:(state,contact)=>{
   state.contacts.push(contact);
},
setIsLoggedIn:(state,condition)=>{
  state.isLoggedIn=condition;

},
setIsAdminLoggedIn:(state,condition)=>{
  state.isAdminLoggedIn=condition;
}

}
const actions={
    contactClicked:({commit},contact)=>{
        commit("setContact",contact);
            
},

addGroup:({commit},contact)=>{
 commit("setContacts",contact)
},

sendMessageClick({commit},input){

  
  //message_body.scrollTop=message_body.scrollHeight;
   
  commit("setSendMessage",input);
},

login({commit})
  { 
      commit("setIsLoggedIn",true)
         console.log("inside login")
              
  }, 
  adminLogin({commit}){
     commit("setIsAdminLoggedIn",true)
  } 
}


export default {state,getters,mutations,actions}