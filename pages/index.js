import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HelloWorld } from '../components/HelloWorld'
import { Link } from 'next/link'
import React from 'react'
import { useState } from "react";

export default function Home() {
  const masterArtist = [
    { name: 'バッハ', era: 'Baroque' },
    { name: 'ヴィヴァルディ', era: 'Baroque' },
    { name: 'ヘンデル', era: 'Baroque' },
    { name: 'ベートーベン', era: 'Classical' },
    { name: 'モーツァルト', era: 'Classical' },
    { name: 'ショパン', era: 'Romantic' },
    { name: 'リスト', era: 'Romantic' },
    { name: 'シューベルト', era: 'Classical' },
  ];

  const [showmasterArtist, setmasterArtist] = React.useState(masterArtist);
  const [inputValue, setInputValue] = useState();

  const eras = Array.from(new Set(masterArtist.map((artist) => artist.era)));

  const selectera = (era) => {
    if (era === "all") {
      setmasterArtist(masterArtist);
    } else {
      const selectedmasterArtist = masterArtist.filter((artist) => artist.era === era);
      setmasterArtist(selectedmasterArtist);
    }
  };

  const search = (value) => {
    if (value !== "") {
      const serchedmasterArtist = masterArtist.filter(
        (artist) =>
          Object.values(artist).filter(
            (item) =>
              item !== undefined &&
              item !== null &&
              item.toUpperCase().indexOf(value.toUpperCase()) !== -1
          ).length > 0
      );
      setmasterArtist(serchedmasterArtist);
      return;
    }

    setmasterArtist(masterArtist);
    return;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  return (
    <div className="Home">
      <h1>クラシック作曲家の時代検索</h1>

      { }
      <div>
        <h2>時代区分(era)</h2>
        <button onClick={() => selectera("all")}>All</button>
        {eras.map((era) => (
          <button onClick={() => selectera(era)}>{era}</button>
        ))}
      </div>

      { }
      <div>
        <h4>Search</h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>

      { }
      {showmasterArtist.map((artist, index) => {
        return (
          <div key={artist.name}>
            <p>
              {index + 1}. {artist.name}
            </p>
            <p>era : {artist.era}</p>
          </div>
        );
      })}
    </div>
  );
}
