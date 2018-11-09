import React from 'react';

const ResourceItem = (props) => (
    
    <div className="resource__item">
        <div className="resource__img">
        <a href={props.resUrl}><img className="img-responsive center-block" src={props.url} alt="image"/></a>
        </div>
        <a href={props.resUrl}><h4 className="text-center">{props.title}</h4></a>
        <p className="resource__description">
           {props.description}
        </p>
    </div>
)

export default ResourceItem;

