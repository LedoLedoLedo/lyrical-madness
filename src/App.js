import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
// import Search from "./components/Search";

function App() {
  // const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [songId, setSongId] = useState();
  const [lyrics, setLyrics] = useState();
  const parser = new DOMParser();
  let test;
  // const [lyrics, setLyrics] = useState("");
  // const [headerImage, setHeaderImage] = useState("");

  function searchLyrics() {
    // if (artist === "" || song === "") {
    //   return;
    // }

    if (song === "") {
      return;
    }

    const axios = require("axios");

    const options = {
      method: "GET",
      url: `https://genius-song-lyrics1.p.rapidapi.com/search/multi?q=${song}`,
      headers: {
        "X-RapidAPI-Key": "e572746ec7msh9ecd23d8754d33ap1074b6jsnc56df0291611",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        // console.log(response.data.response.sections[0].hits[0].result);
        const artistInfo = response.data.response.sections[0].hits[0].result;
        // setArtist(response.data.response.sections[0].hits[0].result);
        // console.log(response);
        // console.log(song);
        // console.log(artistInfo);
        // setHeaderImage(artistInfo.header_image_url);
        // console.log(artistInfo.id);
        setSongId(artistInfo.id);
        console.log(songId);
        // console.log(artistInfo.header_image_url);
      })
      .catch(function (error) {
        console.error(error);
      });
    const options2 = {
      method: "GET",
      url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${songId}/lyrics`,
      headers: {
        "X-RapidAPI-Key": "e572746ec7msh9ecd23d8754d33ap1074b6jsnc56df0291611",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    axios
      .request(options2)
      .then(function (response) {
        console.log(response);
        // console.log(response.data.response.lyrics.lyrics.body.html);
        setLyrics(response.data.response.lyrics.lyrics.body.html);
        test = parser.parseFromString(lyrics, "text/html");
        console.log(test);
      })
      .catch(function (error) {
        console.error(error);
      });
    // const axios = require("axios");
  }

  // axios.request(options).then(function (response) {
  // 	console.log(response.data);
  // }).catch(function (error) {
  // 	console.error(error);
  // })};
  // axios.get(
  // `https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
  //             console.log(res.data.lyrics);
  //             setLyrics(res.data.lyrics);
  //         })
  // axios
  //   .get(
  //     `https://www.stands4.com/services/v2/lyrics.php?uid=10886&tokenid=3ea9O1JPBuLzzz6b&term=${song}&artist=${artist}`,
  // {

  //   headers: {
  //     "sec-fetch-mode":"cors",
  //     "sec-fetch-site":"cross-site",
  //     "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  //   },
  // }
  // )
  //     .then((res) => {
  //       console.log(res.data.lyrics);
  //       setLyrics(res.data.lyrics);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  //https://api.lyrics.ovh/v1/artist/title

  return (
    <div className="App">
      <h1> What did they say ? </h1>
      <input
        className="inp"
        type="text"
        placeholder="song name"
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />
      {/* <input
        className="inp"
        type="text"
        placeholder="Song name"
        onChange={(e) => {
          setSong(e.target.value);
        }}
      /> */}
      <button className="btn" onClick={() => searchLyrics()}>
        Search{" "}
      </button>
      <hr />

      {/* {lyrics} */}
      <br />
      <h1>Parsed: </h1>

      {/* <div id="document"> {test}</div> */}
      <div dangerouslySetInnerHTML={{ __html: lyrics }} />
      {/* <pre>{artist}</pre> */}
      {/* <img src={require(`${headerImage}`)} alt='artist logo' /> */}
    </div>
  );
}

export default App;
