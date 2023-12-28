// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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

export default function handler(req, res) {
  res.status(200).json(masterArtist)
}
