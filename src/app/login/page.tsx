"use client"

import React, { useState, useEffect } from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import { gapi } from 'gapi-script'

export default function LoginPage() {

    const clientId = "651929140953-lib5roq3u8iubb8af43bhgkeen0mrtmn.apps.googleusercontent.com"

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clentId:clientId,
                scrope: ''
            })
        }
        gapi.load("client:auth2", initClient)
    },[])

    const onSuccess = (res) => {
        setProfile(res.profileObj)
        console.log('success', res)
    }

    const onFailure = (res) => {
        console.log('failed', res)
    }

    const logOut = () => {
        setProfile(null);
    }

    return (
        <div className='bg-purple-600 min-h-screen flex flex-col items-center justify-center text-white'>
            <h2>Google Login</h2>
            <br/><br/>
            {profile? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged In</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    <br/>
                    <br/>
                    <GoogleLogout 
                        clientId={clientId} 
                        buttonText="Log out" 
                        onLogoutSuccess={logOut}
                    />
                </div>
            ) : (
                <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
            )}
        </div>     
  )
}
