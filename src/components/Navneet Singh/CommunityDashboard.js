import React, {useState, useEffect} from 'react';
import SidebarLayout from './Sidebar';
import './styles.css'
import ShowUpcoming from './UpcomingDisplay'
import video from './Video/walkthrough.mp4'
import {isAuthenticated} from '../Hardik/LogIn/apiLogin'
import {getLatestUpcoming} from './apiDash'

const CommunityDashboard = (props) => {

    const {user}=isAuthenticated()

    const [upcomingEvent, setUpcomingEvent] = useState({});
    const [error, SetError] = useState(false);
    const [found, setFound] = useState(false);
    const [shown1, setShown1] = useState(false);
    const [shown2, setShown2] = useState(false);


    

    const loadUpcomingWemeet = () =>{
        // Get the information from the database
        getLatestUpcoming(user._id)
            .then(data=>{
                setUpcomingEvent(data.UpcomingWemeet);
                console.log(upcomingEvent)
                if(upcomingEvent){
                    setFound(true);
                }
                else{
                    setFound(false)
                }
            })
            .catch(err=>{
                SetError(err);
                console.log(err);
            })
    }

    useEffect(()=>{
        loadUpcomingWemeet();
    }, [])

    const ShowWalkthrough = () => (
        <video width='400px' height="300px" style={{borderRadius: "10px"}} controls>
            <source src={video} type="video/mp4"/>
        </video>
    )

    const showContent1 = () => (
        <div className="dash_info_content">
            You're on WeMeet's Dashboard. Now you can use this dashboard to stay up-to-date on the status 
            and performance of your future events, meetups or conferences.
        </div>
    )
    const showContent2 = () => (
        <div className="dash_info_content">
           Now you could click on your event name above and add all the remaining details including speakers and 
           sessions. Or you can click "Create WeMeet" on top-right to host a new single or multi-session WeMeet.
        </div>
    )
    
    return (
        <SidebarLayout>
            <div className="dashboard_wrapper">
                <h6 className="dashboard_heading">Upcoming WeMeets</h6> 
                <ShowUpcoming setDefault={!found} wemeet={upcomingEvent}/>
                <div className="dashboard_bottom_wrapper">
                    <div className="dashboard_bottom_content">
                        <div className="row">
                            <div className="col-7 bottom_left" >
                                <h6 className="bottom_heading">WeMeet guides and help</h6>
                                <div className="dash_info">
                                    <div className="dash_info_header">
                                        <button className="btn dash_btn" onClick={()=>setShown1(!shown1)}>Where Am I?</button>
                                    </div>
                                    {
                                        shown1 && showContent1()
                                    } 
                                    <hr style={{backgroundColor: "rgb(67, 66, 71)", marginLeft:"1em"}}/>
                                    <div className="dash_info_header">
                                        <button className="btn dash_btn sec" onClick={()=>setShown2(!shown2)}>What shoud I do next?</button>
                                    </div>
                                    {
                                        shown2 && showContent2()
                                    }
                                </div>
                            </div>
                            <div className="col-5" style={{textAlign: 'center'}}>
                                {ShowWalkthrough()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    )
}

export default CommunityDashboard;