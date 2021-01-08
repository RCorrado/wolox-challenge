import React, { useEffect, useState } from 'react';

const Checkbox = (props) => {
    //State
    const[checked, setCheck] = useState(false);

    //Effect al cambiar value del checkbox
    useEffect(() => {
        if(checked) props.event(filteredList => [...filteredList, props.text]);
        else props.event(filteredList => filteredList.filter(filter => filter !== props.text));
    }, [checked]);
 
    return(
        <label>
            { props.text }
            <input type='checkbox'
                checked={ checked }
                onChange={ e => setCheck(!checked) }/>
        </label>
    );
};

export default Checkbox;