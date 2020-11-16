import React, { useState, useEffect } from 'react';
import "./profilePage.css"
import Sidebar from './sidebar/Sidebar';
import profileService from '../../services/profileService';
import Loading from '../shared/Loading';
import ProfileContent from './profileContent/ProfileContent';
import Alert from '../shared/Alert';

const ProfilePage = () => {

    const [profileData, setProfileData] = useState(null);
    const [isLoadingProfileData, setIsloadingProfileData] = useState(false);
    const [errorLoadingProfileData, setErrorLoadingProfileData] = useState(false);

    const fetchProfileData = async () => {
        try {
            setIsloadingProfileData(true);

            let response = await profileService.getProfileData();
            setProfileData(response);
            setErrorLoadingProfileData(false);
            setIsloadingProfileData(false);
        }
        catch (err) {
            //Could display in toast
            console.error(err);
            setErrorLoadingProfileData(true);
            setIsloadingProfileData(false);
        }
    }

    useEffect(() => {
        fetchProfileData();
    }, [])

    if (errorLoadingProfileData)
    return <Alert text="Unable to retrieve profile data" />;

    if(!profileData || isLoadingProfileData)
        return <Loading />;



    return (
        <>
            <Sidebar sections={profileData.sections}/>
            <div className="container-fluid p-0">
                <ProfileContent profileData={profileData} />
            </div>
        </>
    )
}

export default ProfilePage;