import React from 'react'
import { useState } from "react"

export default function Home() {
  const [masterArtist, setMasterArtist] = React.useState([]);
  const [inputValue, setInputValue] = useState();
  const eras = ['all', ...Array.from(new Set(masterArtist.map((artist) => artist.era)))];

  React.useEffect(() => {
    const initMasterArtist = async () => {
      const response = await fetch('/api/hello')
      if (response.ok) {
        const json = await response.json()
        setMasterArtist(json)
      }
    }
    initMasterArtist()
  }, [])

  const selectEra = (era) => {
    const selectedMasterArtist = era === 'all' ? masterArtist : masterArtist.filter((artist) => artist.era === era);
    setMasterArtist(selectedMasterArtist);
  };

  const search = (value) => {
    if (value !== "") {
      const serchedMasterArtist = masterArtist.filter(
        (artist) =>
          Object.values(artist).filter(
            (item) =>
              item !== undefined &&
              item !== null &&
              item.toUpperCase().indexOf(value.toUpperCase()) !== -1
          ).length > 0
      );
      setMasterArtist(serchedMasterArtist);
      return;
    }

    setMasterArtist(masterArtist);
    return;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  return (
    <div className="Home">
      <h1 className='text-lg mt-2 mx-2 font-medium'>クラシック作曲家の時代別検索</h1>

      <div>
        <h2 className='my-2 mx-2'>時代区分(era)</h2>
        {eras.map((era) => (
          <button key={era} className={`capitalize border-2 rounded px-2 py-1 mx-1 hover:bg-blue-200 ${era === 'all' ? 'border-red-400' : 'border-teal-400'}`} onClick={() => selectEra(era)}>{era}</button>
        ))}
      </div>

      <div>
        <h4 className='my-2 mx-2'>Search</h4>
        <input className='mx-2 mb-2' type="text" value={inputValue} onChange={handleInputChange} />
      </div>

      {masterArtist.map((artist, index) => {
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
