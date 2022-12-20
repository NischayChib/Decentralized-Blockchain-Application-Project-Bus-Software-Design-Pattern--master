import { createReducer } from '@reduxjs/toolkit'
import { TokenList } from 'dex-sdk'
import { setTokenList } from './actions'
import { tokens } from '../../constants/tokens'

const initialState: TokenList = {name: "", tokens: tokens };
// {
//   name: 'asdad',
//   tokens: [
    
//     {chainId:56,
//        address:'0xD44FD09d74cd13838F137B590497595d6b3FEeA4',
//        name:'CryptoMines Eternal',
//        decimals: 18,
//        symbol: 'ETERNAL',
//        logoURI:'https://www.google.com/search?q=coinmarketcap&tbm=isch&source=iu&ictx=1&fir=w5efRrq33VU6MM%252CjcnOXisVwrCrMM%252C%252Fg%252F11gk74sk03&vet=1&usg=AI4_-kSlajFwCCqc-JTDmZ42WtS152NM4A&sa=X&sqi=2&ved=2ahUKEwjXnJiD5fn0AhXiqpUCHYLhBCoQ_B16BAg1EAI#imgrc=w5efRrq33VU6MM'
//       },
//       {
//         name: 'Wrapped Ether',
//         address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//         symbol: 'WETH',
//         decimals: 18,
//         chainId: 56,
//         logoURI:
//           'https://dentistcoin.com/_next/static/images/favicon-5314c02323231420211afadb228111be.png'
//       },
    
    
//     ]
// }

// readonly chainId: number;
// readonly address: string;
// readonly name: string;
// readonly decimals: number;
// readonly symbol: string;
// readonly logoURI: string;
export default createReducer<TokenList>(initialState, builder =>
  builder.addCase(setTokenList, (_state, { payload }) => payload)
)
