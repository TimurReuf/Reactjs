import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <div className={s.img}>
                    <img src={'https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'}/>
                </div>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo