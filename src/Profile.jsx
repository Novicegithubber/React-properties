import React from "react";
import Profileimg from "./Profileimg.png"


const Profile = (props) =>{
    
    const {name , bio, profession, children } = props;
    return(
        <p>
        {props.children} <br/> {props.name} <br/> {props.bio} <br/> {props.profession}
        </p>
    )
};

Profile.defaultProps = {
    name: "Mahmoud",
    bio: "qweasd",
    profession: 'web developer'
}



export default Profile; 