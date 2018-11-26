/**
 * Created by Rajesh on 11/26/18.
 */

import React, {Component} from 'react';

class Landing extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className="light center-aligned">
                    Welcome To Express React Boilerplate
                </h1>
                <h4 className="center-aligned">
                    Profound react implementation while using express as backend
                </h4>
            </div>
        )
    }

}

export default Landing;
