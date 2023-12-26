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
      <h1 className='text-lg mt-2 mx-2 font-medium'>クラシック作曲家の時代別検索</h1>

      { }
      <div>
        <h2 className='my-2 mx-2'>時代区分(era)</h2>
        <button className='border-2 rounded px-2 py-1 mx-2 hover:bg-blue-200 border-red-400' onClick={() => selectera("all")}>All</button>
        {eras.map((era) => (
          <button className='border-2 rounded px-2 py-1 mx-1 hover:bg-blue-200 border-teal-400' onClick={() => selectera(era)}>{era}</button>
        ))}
      </div>

      { }
      <div>
        <h4 className='my-2 mx-2'>Search</h4>
        <input className='mx-2 mb-2' type="text" value={inputValue} onChange={handleInputChange} />
      </div>

      { }
      {showmasterArtist.map((artist, index) => {
        return (
          <div className='mx-2 my-1' key={artist.name}>
            <p>
              {index + 1}. {artist.name}
            </p>
            <p className='mx-4'>era : {artist.era}</p>
          </div>
        );
      })}
    </div>
  );
}
