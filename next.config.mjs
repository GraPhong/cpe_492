/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config();

const nextConfig = {
    env: {
        CLIENT_ID: process.env.CLIENT_ID,
    },
};

export default nextConfig;
