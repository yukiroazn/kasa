import React, { useState } from "react";
import "./AppartementDescription.css"

export function AppartementDescription(props) {
const [isContentVisible, setIsContentVisible] = useState(false);
const showContent = () => {setIsContentVisible(!isContentVisible);
};

return (
<div className='appartementdescription'>

<p className='descriptionheader' onClick={showContent}>
<span>{props.title}</span>
<i className={`fa-solid fa-chevron-${isContentVisible ? 'up' : 'down'} arrowup`}></i>
</p>

{isContentVisible && (<p className='descriptioncontent'>{props.content}</p>)}

</div>
);
}
