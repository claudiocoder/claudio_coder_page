import type { AppProps } from 'next/app'
import { _roboto } from '@/utils/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
    return <Component className={_roboto.className} {...pageProps} />
}
