import React from 'react';

const ProfileSection = (props) => {
    const {title, subtitle, text, identifier } = props
    return (
        <>
            <section className="profile-section p-3 p-lg-5 d-flex align-items-center" id={identifier} data-testid={`content-${identifier}`}>
                <div className="w-100">
                    <h2 className="mb-5">{title}</h2>
                    <h5 className="mb-5">{subtitle}</h5>
                    <p className="display-linebreak">{text}</p>
                </div>
            </section>

            <hr className="m-0"></hr>
        </>
    )
}

export default ProfileSection;