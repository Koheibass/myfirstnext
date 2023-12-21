import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HelloWorld } from '../components/HelloWorld'
import { Link } from 'next/link'
import React from 'react'

const masterArtists = [
  { name: 'バッハ', image: '/bach.jpg' },
  { name: 'ベートーベン', image: '/beethoven.jpg' },
  { name: 'モーツァルト', image: '/mozart.jpg' },
  { name: 'ショパン', image: '/chopin.jpg' },
  { name: 'リスト', image: '/liszt.jpg' },
  { name: 'シューベルト', image: '/schubert.jpg' },
]

export default function Home() {
  const [artists, setArtists] = React.useState([])
  const handleClickButton = () => {
    alert('こんにちは！')
    setArtists(masterArtists)
  }

  return (
    <main>
      <HelloWorld>
        はろー！
      </HelloWorld>

      <HelloWorld>
        どうもどうも！
      </HelloWorld>

      <HelloWorld >よろしくね！</HelloWorld>

      <div>
        hoge
        <a href="/welcome">welcome?</a>
      </div>

      <button className='border rounded px-2 py-1 hover:bg-blue-200' type="button" onClick={() => handleClickButton()}>
        こんにちは！
      </button>

      {
        artists.map((artists) => {
          return (
            <div key={artists.name}>
              <div>{artists.name}</div>
            </div>

          )
        })
      }
    </main>
  )
}
