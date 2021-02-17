
import React, { Component }  from "react";

class Card extends Component {
    render() {
        return (
            <div className = 'tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
                {/* tc = text-aligned:centre, bg = background, dib = display:inline-block,
                 br = border radius, pa = padding, ma = margin, grow = grow on hover,
                 bw = border width, shadow = box shadow */}
            <h1>{this.props.name}</h1>
            <div>
                <img src = {`https://robohash.org/${this.props.id}?10*10`}  alt = "robots" />
                <div>
                    <p>{this.props.username}</p>
                    <p>{this.props.email}</p>
                </div>
            </div>
           </div> 
        )
    }
}
    

export default Card;