import SidebarLayout from './Sidebar';
import Circle from './Circle';
import ProfileUpcoming from './ProfileUpcoming'
import ProfilePast from './ProfilePast'

const Profile = ({user}) => {

    return (    
        <SidebarLayout>
            <div className="profile_wrapper">
                <div className="user_details">
                    <div className="profile_header">
                        Details
                    </div>
                    <div className="detail_content_profile">
                        <Circle letter="N"/>
                        <div className="profile_rem_content">
                            <div className="profile_name">
                                User Name
                            </div>
                            <div className="profile_other">
                                <div className="other_stuff">
                                    <span className="label">Designation: </span>
                                    <span className="other_content">Student</span>
                                </div>
                                <div className="other_stuff">
                                    <span className="label">Location: </span>
                                    <span className="other_content">Delhi, India </span>
                                </div>
                                <div className="other_stuff">
                                    <span className="label">Organization: </span>
                                    <span className="other_content">NIT, Delhi </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_upcoming">
                    <div className="profile_header">
                        Upcoming Events
                    </div>
                    <ProfileUpcoming />
                </div>
                <div className="profile_past">
                    <div className="profile_header">
                        Past Event
                    </div>
                    <ProfilePast />
                </div>
            </div>
        </SidebarLayout>
    )
}

export default Profile;