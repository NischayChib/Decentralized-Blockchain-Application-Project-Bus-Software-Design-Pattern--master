import { InjectedConnector } from '@web3-react/injected-connector'
import { AuthereumConnector } from '@web3-react/authereum-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { CustomNetworkConnector } from './CustomNetworkConnector'
import { ChainId } from 'dex-sdk'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

export const INFURA_PROJECT_ID = '0ebf4dd05d6740f482938b8a80860d13'

export const network = new CustomNetworkConnector({
  urls: {
    [ChainId.MAINNET]: `https://bsc-dataseed1.ninicoin.io/`,
    [ChainId.MATIC]: 'https://bsc-dataseed1.ninicoin.io/',
    [ChainId.MATIC]: 'https://bsc-dataseed1.ninicoin.io/'
  },
  defaultChainId: ChainId.MATIC
})

export const injected = new InjectedConnector({
  supportedChainIds: [1, ChainId.RINKEBY, ChainId.SOKOL, ChainId.MATIC, ChainId.MATIC]
})

export const walletlink = new WalletLinkConnector({
  supportedChainIds: [ChainId.MAINNET, ChainId.RINKEBY, ChainId.MATIC, ChainId.MATIC],
  url: 'https://bsc-dataseed1.ninicoin.io/', // XXX
  appName: 'OutletSwap'  // XXX
})

// xdai only
export const walletConnectXDAI = new WalletConnectConnector({
  rpc: {
    56: 'https://bsc-dataseed1.ninicoin.io/'
  },

  qrcode: true,
  
})

// polygon only
export const walletConnectMATIC = new WalletConnectConnector({
  rpc: {
    56: 'https://bsc-dataseed1.ninicoin.io/'
  },
 
  qrcode: true,
})

// mainnet only
export const authereum = new AuthereumConnector({ chainId: 1 })
