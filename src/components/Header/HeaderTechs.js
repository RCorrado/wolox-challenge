import React from 'react';

//Styles
import '../../sass/_sizes.scss';
import '../../sass/_colors.scss';
import '../../sass/_boxModel.scss';
import Span from '../Texts/Span';

const HeaderTechs = (props) => {
    return(
        <div className={ `p-em5 background-green` }
            style={{ justifyContent: 'flex-end' }}    
        >
            {   props.techs.length > 0
                    ?   <Span fontSize={ 11 }
                            align='center'
                            className='white'
                            text={ `Favoritos: ${props.techs.length}` } />
                    :   null    }
        </div>
    );
};

export default HeaderTechs;