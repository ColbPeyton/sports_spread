import React from 'react';

import Choice from '../Choice';

function ChoicePage(){
    return(
        <div className='choice-page'>
            <Choice team={'one'} /> 
            <Choice team={'two'} /> 
            <Choice team={'three'} /> 
        </div>
    );
}


export default ChoicePage;