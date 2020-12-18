const UpcomingDisplay = ({setDefault}) => {

    const showDefault = () => (
        <div className="upcoming_content">
            Default Event
        </div>
    )

    return (    
        <div className="upcoming_wrapper">
            {setDefault && showDefault()}
        </div>
    )
}

export default UpcomingDisplay;