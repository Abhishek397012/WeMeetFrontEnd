import WeMeetsCard from "./WeMeetsDetails";
import './styles.css'

const ProfilePast = () =>{
    return (
        <div className="upcoming_profile_content">
            <WeMeetsCard
                createdon="Sat 19 Dec 2020"
                status="Completed"
                host="191210037 Community"
                title="We Meet Introduction"
                meetingtime="12:00 PM - 1:00 PM IST"
            />
            <WeMeetsCard
                createdon="Sat 19 Dec 2020"
                status="Completed"
                host="191210037 Community"
                title="We Meet Introduction"
                meetingtime="12:00 PM - 1:00 PM IST"
            />
            <WeMeetsCard
                createdon="Sat 19 Dec 2020"
                status="Completed"
                host="191210037 Community"
                title="We Meet Introduction"
                meetingtime="12:00 PM - 1:00 PM IST"
            />
        </div>
    )
} 

export default ProfilePast