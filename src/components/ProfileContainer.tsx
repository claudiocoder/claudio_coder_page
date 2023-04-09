import React from 'react'
import Image from 'next/image'
import { _roboto, _khula } from '@/utils/fonts'
import SocialNetwork from './SocialNetworkContainer'
import profileImage from '../assets/profile.jpg'

const ProfileContainer = () => {
    return (
        <>
            <div className="flex w-full h-screen flex-col items-center justify-center">
                <Image
                    className="rounded-full drop-shadow-xl m-3 border-2 border-gray-200"
                    src={profileImage}
                    title="Claudio Coder Profile"
                    alt="ProfileImage"
                    width={200}
                />
                <h1 className={`${_roboto.className} text-xl font-bold mb-1`}>
                    Hi, my name is Claudio!
                </h1>
                <h2 className={`${_khula.className} text-base mb-5`}>
                    Software Developer
                </h2>
                <SocialNetwork></SocialNetwork>
            </div>
        </>
    )
}

export default ProfileContainer
