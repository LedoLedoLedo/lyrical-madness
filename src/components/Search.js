// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// // import Search from "./components/Search";

// const Search = () => {
//   const uid = "10886";
//   const tokenid = "3ea9O1JPBuLzzz6b";
//   const [artist, setArtist] = useState("");
//   const [song, setSong] = useState("");
//   const [lyrics, setLyrics] = useState("");

//   function searchLyrics() {
//     if (artist === "" || song === "") {
//       return (
//         axios
//           // .get(`https://www.stands4.com/services/v2/lyrics.php${artist}/${song}`)
//           .get(
//             `https://www.stands4.com/services/v2/lyrics.php?uid=${uid}&tokenid=${tokenid}&term=${song}&artist=${artist}&format=json`
//           )
//           .then((res) => {
//             console.log(res.data.lyrics);
//             setLyrics(res.data.lyrics);
//           })
//           .catch((e) => {
//             console.log(e);
//           })
//       );
//     }
//   }

//   return (
//     <div className="App">
//       <h1> What did they say ? </h1>
//       <input
//         className="inp"
//         type="text"
//         placeholder="Artist name"
//         onChange={(e) => {
//           setArtist(e.target.value);
//         }}
//       />
//       <input
//         className="inp"
//         type="text"
//         placeholder="Song name"
//         onChange={(e) => {
//           setSong(e.target.value);
//         }}
//       />
//       <button className="btn" onClick={() => searchLyrics()}>
//         Search{" "}
//       </button>
//       <hr />
//       <pre>{lyrics}</pre>
//     </div>
//   );
// };

// export default Search;
