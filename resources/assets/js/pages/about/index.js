/**
 * Created by Rajesh on 11/26/18.
 */


import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className="light center-aligned">
                    About Us
                </h1>
                <h4 className="center-aligned">
                    Let Us Introduce Ourselves
                </h4>
            </div>
        )
    }

}

export default About;
