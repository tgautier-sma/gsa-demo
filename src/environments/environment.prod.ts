export const environment = {
  production: true,
  appVersion: require('../../package.json').version,
  appDependencies: require('../../package.json').dependencies,
  server: 'https://api-gsa-v4.herokuapp.com',
  mapbox: {
    accessToken: 'pk.eyJ1IjoidGdhdXRpZXIiLCJhIjoiY2t5eXBxZmthMDFoMjJ1azQ2bzdqNjg5aiJ9.JlxVT_17ky6yKSohtKseig'
  },
  sign: {
    server: 'https://ds-users.herokuapp.com'
  }
};
