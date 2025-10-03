require('dotenv').config()

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      API_URL: process.env.API_URL || 'https://goofy-ritchie-dd0c3d.netlify.app',
      AMPLITUDE_API_KEY: process.env.AMPLITUDE_API_KEY || 'c53c4e54414340dc1e6feeb7fd95293c',
    },
  }
}
