import notify from '../../assets/imges/notificationbing.svg'
import userImage from '../../assets/imges/profile-image.png'
import Headeruserdropdown from './Headeruserdropdown';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "./Headeruserdetails.css";
import { useState } from 'react';


const Headeruserdetails = () => {
    const [isVisible, setisVisible] = useState(false)
    const handleToogle = () => {
        setisVisible(!isVisible)
    }
    
    return(
        <>
            <div className="notification-icon">
                <img src={notify} alt="notification-icon" />
            </div>
            <div className="profile-block">
                <Button onClick={handleToogle}><img src={userImage} alt="user-image" /><span>Blaise L</span><FontAwesomeIcon icon={faAngleDown} /></Button>
                <Headeruserdropdown isVisible={isVisible}/>
            </div>
        </>
    )
}

export default Headeruserdetails;