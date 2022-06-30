const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? `http://localhost:3000` : `https://kind-sand-0abdc0b10.1.azurestaticapps.net`