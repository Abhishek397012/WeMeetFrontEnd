import WeMeetsCard from "./WeMeetsDetails";
import './styles.css'

const ProfileUpcoming = () =>{
    return (
        <div className="upcoming_profile_content">
            <WeMeetsCard
                createdon="Sat 20 Dec 2020"
                status="Upcoming"
                host="191210037 Community"
                title="Backend Discussion"
                meetingtime="12:00 PM - 1:00 PM IST"
            />
            <WeMeetsCard
                createdon="Sat 20 Dec 2020"
                status="Upcoming"
                host="191210037 Community"
                title="Backend Discussion"
                meetingtime="12:00 PM - 1:00 PM IST"
            />
            <WeMeetsCard
                createdon="Sat 20 Dec 2020"
                status="Upcoming"
                host="191210037 Community"
                title="Backend Discussion"
                meetingtime="12:00 PM - 1:00 PM IST"
            />

        </div>
    )
} 

export default ProfileUpcoming