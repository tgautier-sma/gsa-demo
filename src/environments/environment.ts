// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
