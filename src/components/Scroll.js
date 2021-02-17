import React from 'react';


const Scroll = (props) => {
     return (
        <div style = {{overflowY: 'scroll', border: '5px solid black', heigt:'100px'}} >
            {props.children}
        </div>
    );
};





export default Scroll;