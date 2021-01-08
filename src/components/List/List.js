import React, { useEffect, useState } from 'react';

const List = (props) => {
    //State
    const[value, setValue] = useState();

    //Effect al actualizar value
    useEffect(() => {
        if(value !== props.textDefault) props.event(value)
        else props.event(null);
    }, [value]);

    return(
        <select onChange={ e => setValue(e.target.value) }>
            <option value={ props.textDefault } selected>{ props.textDefault}</option>
            {   (typeof props.list === 'object' && props.list.length > 0)
                    ?   props.list.map(item => { return <option value={ item.id }>{ item.name }</option> })
                    :   null    }
        </select>
    );
};

export default List;