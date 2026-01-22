/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
      // inside remotePatterns we can add any number of objects of images that we want to allow to be displayed on our website
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'as2.ftcdn.net',
          port: '',
          pathname: '/**',  //  anything after the hostname 
    
        }
      ]
    }
  };
  
  export default nextConfig;