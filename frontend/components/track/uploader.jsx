// import React from 'react';
// import ReactS3Uploader from 'react-s3-uploader';
//
// const Uploader = () => (
//   <ReactS3Uploader
//     signingUrl="/s3/sign"
//     signingUrlMethod="GET"
//     accept="image/*"
//     signingUrlHeaders={{ additional: headers }}
//     signingUrlQueryParams={{ additional: query-params }}
//     signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
//     uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
//     contentDisposition="auto"
//     scrubFilename={(filename) => filename.replace(/[^\w\d_\-\.]+/ig, '')}
//     server="http://cross-origin-server.com" />
// );
//
//
// Uploader.use('/s3', require('react-s3-uploader/s3router')({
//     bucket: "eden-audio",
//     region: 'us-west-1', //optional
//     signatureVersion: 'v4', //optional (use for some amazon regions: frankfurt and others)
//     headers: {'Access-Control-Allow-Origin': '*'}, // optional
//     ACL: 'private' // this is default
// }));
//
// export default Uploader;
