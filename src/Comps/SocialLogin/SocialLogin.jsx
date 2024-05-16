import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import axios from 'axios';

const SocialLogin = () => {
    const onSuccess = async (response) => {
        console.log(response);
        try {
            // Post the authorization code to your server
            const tokens = await axios.post('http://localhost:3001/auth/google', {
                code: response.code,
            });
            console.log(tokens.data); // Assuming the server responds with tokens
        } catch (error) {
            console.error('Error exchanging authorization code for tokens:', error);
        }
    };

    const onError = (error) => {
        console.error('Google Login Error:', error);
    };

    const { signIn } = useGoogleLogin({
        clientId: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your actual Google client ID
        onSuccess,
        onFailure: onError,
        accessType: 'offline', // Request access token and refresh token
        responseType: 'code', // Request an authorization code
        prompt: 'consent', // Prompt user for consent each time they login
    });

    return (
        <div>
            <button onClick={signIn}>Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;
