import React from 'react';

function HomeTile(props) {

    function onHover(e) {
        e.target.src = props.hoverImage
    }

    function offHover(e) {
        e.target.src = props.image
    }

    function clickImage() {
        console.log(props.title + " clicked")
    }

    return <div 
    className="tileDiv">
        <img 
        className={"tile-image"} 
        alt={props.title} 
        onMouseEnter={onHover}
        onMouseLeave={offHover}
        onClick={clickImage}
        src={props.image}
        />
    </div>;
}

export default HomeTile;