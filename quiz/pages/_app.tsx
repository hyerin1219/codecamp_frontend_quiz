// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/commons/layout'
import ApolloSetting from '../src/components/commons/apollo'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/components/commons/styles/globalStyles' 

export default function App({ Component }: AppProps): JSX.Element {

 

  return (
    <div>
      <div>==== 여기는 app.js 입니다용 =====</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles}/>
          <Layout>
              <Component/>
          </Layout>
        </>
      </ApolloSetting>
      <div>==== 여기는 app.js 입니다용 =====</div>
    </div>
    
  )
  
}
