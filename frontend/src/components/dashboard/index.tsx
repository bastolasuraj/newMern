import React, {Component} from "react";
import {RouteComponentProps} from "react-router-dom";

interface Props extends RouteComponentProps {
    title?: String;
}

interface User {
    username: String,
    role: String,
}

// interface State {
//     chartData: any;
//     cardData: any;
//     tableData: Users[];
// }


class Dashboard extends Component<Props> {
componentDidMount() {
    let getAuthFromSession = sessionStorage.getItem('auth')
    if(!getAuthFromSession){
        // @ts-ignore
        this.props.history('/login')
    }
}

    render() {
        // const {cardData, chartData} = this.state
        return (
            <div>

                {/*<Cards title='card1' cardData={cardData}/>*/}
                {/*<Cards title='card2' cardData={cardData}/>*/}
                {/*<Chart chartData={chartData}/>*/}
            </div>
        )
    }
}

export default Dashboard;