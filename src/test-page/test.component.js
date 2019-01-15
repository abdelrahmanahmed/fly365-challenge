import React from 'react';
import Translate from '../components/common/translate.component';

export default class TestComponent extends React.Component {
    
    

    render(){
        return (
            <h1>
                <Translate id='testPage.helloWorld' />
            </h1>
        )
    }
}


