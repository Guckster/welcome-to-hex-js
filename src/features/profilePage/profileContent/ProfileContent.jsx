import React from 'react';
import ProfileSection from './profileSection/ProfileSection';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const ProfileContent = (props) => {
    const { profileData } = props;

    return (
        <>
            <section className="profile-section p-3 p-lg-5 d-flex align-items-center" id="about"  data-testid="content-about">
                <div className="w-100">
                    <h1 className="mb-0" data-testid="name">{profileData.personalDetails.name.firstName}
                        <span className="textcolor-primary">{profileData.personalDetails.name.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">{profileData.personalDetails.jobTitle} ·
                    <a className="email-link" href="mailto:joseph.guckian@gmail.com" target="_blank" rel="noopener noreferrer">{profileData.personalDetails.email}</a>
                    </div>
                    <p className="lead mb-5">{profileData.personalDetails.shortSummary}</p>
                    <div className="social-icons">
                        <a href={profileData.personalDetails.linkedIn} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                    </div>
                </div>
            </section>

            <hr className="m-0" />
            {profileData.sections.map((section, i) => (
                <ProfileSection key={i} title={section.title} subtitle={section.subtitle} text={section.text} identifier={section.identifier} />
            ))}
        </>
    )

}

export default ProfileContent;