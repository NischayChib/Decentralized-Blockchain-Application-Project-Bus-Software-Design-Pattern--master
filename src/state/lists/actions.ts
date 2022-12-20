import { createAction } from '@reduxjs/toolkit'
import { TokenList } from 'dex-sdk'

export const setTokenList = createAction<TokenList>('setTokenList')
