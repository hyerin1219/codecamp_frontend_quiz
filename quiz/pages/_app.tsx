// import '@/styles/globals.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Layout from '../src/components/commons/layout/layout'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/components/commons/styles/globalStyles'

export default function App({ Component}:AppProps):JSX.Element {

  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아 온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  })

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles}/> 
      <Layout>
        <Component/>
      </Layout>
        
    </ApolloProvider>
    
  )
  
}