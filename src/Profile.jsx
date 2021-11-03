import React from "react";
import Profileimg from "./Profileimg.png";
import PropTypes from 'prop-types';


const Profile = (props) =>{
    
    const {name , bio, profession, children } = props;
    return(
        <p style={{color: "gray", display: "flex"}}>
        {props.children} <br/> {props.name} <br/> {props.bio} <br/> {props.profession}
        </p>
    )
};

Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
    
};
Profile.defaultProps = {
    name: "Mahmoud",
    bio: "qweasd",
    profession: 'web developer'
};



export default Profile; 