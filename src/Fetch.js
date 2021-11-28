// const {google} = require('googleapis')
// const keys = require('../keys.json')


// const client = new google.auth.JWT(
//     keys.client_email, 
//     null,
//     keys.private_key,
//     ['https://www.googleapis.com/auth/spreadsheets']
// )

// client.authorize(function(err, tokens){
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log('success')
//         gsrun(client)
//     }
// })

// async function gsrun(cl){
    
//     const gsapi = google.sheets({version:'v4', auth: cl })

//     const opt = {
//         spreadsheetId : '1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek',
//         range: 'Sheet1!A2:C13'
//     }

//     let data = await gsapi.spreadsheets.values.get(opt);
//     console.log(data.data.values)
// }


// import React, { useEffect, useState, Fragment } from "react";
// import Tabletop from "tabletop";

// function Fetch() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     Tabletop.init({
//       key: "1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek",
//       simpleSheet: true
//     })
//       .then((data) => setData(data))
//       .catch((err) => console.warn(err));
//   }, []);

//   return (
//     <>
//       <h1>data from google sheets</h1>
//       <ul>
//         {data.map((item, i) => (
//           <Fragment key={i}>
//             <li>URL -- {item.URL}</li>
//             <li>Email - {item.email}</li>
//             <li>Token - {item.token}</li>
//             <br />
//           </Fragment>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Fetch;