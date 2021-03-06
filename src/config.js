// process.env.api_url comes from rollup.config.js line 30,31
const server_ip = 'http://localhost:5000';
const www_ip = 'https://www.hopyshopy.com';
const api_url =
    process.env.NODE_ENV === 'production'
        ? server_ip
        : process.env.api_url || server_ip;

const host =
    process.env.NODE_ENV === 'production'
        ? www_ip
        : process.env.api_url || www_ip;

const tokenExpiry = 60 * 60 * 24 * 365; // Login validity in seconds
const ANALYTICS_TRACKING_ID = 'UA-49421899-5';

export { tokenExpiry, api_url, host, ANALYTICS_TRACKING_ID };
