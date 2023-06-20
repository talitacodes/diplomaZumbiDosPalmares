import React from "react";
import './Title.css';
const Title = (props) => {
    return(
      <div className="Title">
        <div>
          <h1>{props.title}</h1>
        </div>
        <hr/>
      </div>
     
    );
};

export default Title;