/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [ 'books.google.com', 'lh3.googleusercontent.com' ]
  }
};

// remotePatterns: [
//   {
//     protocol: 'https', // Required: Protocol (http or https)
//     hostname: 'books.google.com', // Required: Domain name
//     port: '', // Optional: Port number (defaults to '')
//   }
// ]

export default nextConfig;
