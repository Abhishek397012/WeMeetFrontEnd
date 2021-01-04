import { Fragment } from "react"
import Default from './images/default.jpg'
import {isAuthenticated} from '../Hardik/LogIn/apiLogin'
import {Link} from 'react-router-dom'
const UpcomingDisplay = ({setDefault, wemeet}) => {

    const {user} = isAuthenticated();

    const showDefault = () => (
        <div className="upcoming_content" style={{textAlign: "center", fontSize: "30px", paddingTop: "50px"}}>
            Default Event
        </div>
    )

    return ( 
        <Fragment>
            {console.log(wemeet)}
            {console.log(setDefault)}
            {
                setDefault && (
                    <div className="upcoming_wrapper">
                        {showDefault()}
                    </div>
                )
            }
            {
                setDefault===false   && (
                    <div className="upcoming_wrapper">
                        <div className="row" style={{width: "100%", margin: "0.5em"}}>
                            <div className="col-3 upcoming_left">
                                <img src={Default} alt="default img" style={{width: "100%"}}/>
                            </div>
                            <div className="col-9 upcoming_right">
                                <div className="upcoming_right_up" style={{marginTop: "2em"}}>
                                    <span className="upcoming_label" >Title: </span> 
                                    <span className="upcoming_content_">{wemeet && wemeet.title}</span>
                                    <br/>
                                    <br/>
                                    <span className="upcoming_label">Description: </span> 
                                    <span className="upcoming_content_">{wemeet && wemeet.description}</span>
                                </div>
                                <div className="upcoming_right_down">
                                    <div className="urdn">
                                        <span className="upcoming_label">Host Name: </span>
                                        <span className="upcoming_content_">{user.name}</span>
                                    </div>
                                    <Link to={`/wemeets/${wemeet && wemeet._id}/summary`} >
                                        <button className="btn btn-light">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>   
    )
}

export default UpcomingDisplay;