import WeMeetsCard from "./WeMeetsDetails";
import './styles.css'
import React, {useEffect, useState} from 'react'
import {isAuthenticated} from '../Hardik/LogIn/apiLogin'
import {getUpcoming} from './apiDash'

const ProfileUpcoming = () =>{

    const [upcoming, setUpcoming] = useState([]);

    const {user} = isAuthenticated(); 

    const getUpcomingWemeets = () => {
        getUpcoming(user._id)
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
        
    useEffect(() => {
        getUpcomingWemeets()
    }, [])

    return (
        <div className="upcoming_profile_content">
            <WeMeetsCard
                createdon="Sat 20 Dec 2020"
                status="Upcoming"
                host="191210037 Community"
                title="Backend Discussion"
                meetingtime="12:00 PM - 1:00 PM IST"
                id="12345"
            />
            <WeMeetsCard
                createdon="Sat 20 Dec 2020"
                status="Upcoming"
                host="191210037 Community"
                title="Backend Discussion"
                meetingtime="12:00 PM - 1:00 PM IST"
                id="12345"
            />
            <WeMeetsCard
                createdon="Sat 20 Dec 2020"
                status="Upcoming"
                host="191210037 Community"
                title="Backend Discussion"
                meetingtime="12:00 PM - 1:00 PM IST"
                id="12345"
            />

        </div>
    )
} 

export default ProfileUpcoming