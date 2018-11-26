/**
 * Created by Rajesh on 11/26/18.
 */

import React, {Component} from 'react';

class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className="light center-aligned">
                    Error 404
                </h1>
                <h4 className="center-aligned">
                    Page Not Found
                </h4>
            </div>
        )
    }

}

export default NotFound;