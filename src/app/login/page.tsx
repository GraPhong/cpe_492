"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {GoogleLogin} from 'react-google-login'
import { gapi } from 'gapi-script'

export default function LoginPage() {

    const clientId = process.env.CLIENT_ID

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
        console.log('success', res)
    }

    const onFailure = (res) => {
        console.log('failed', res)
    }
  return (
    <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
    />
        
  )
}
