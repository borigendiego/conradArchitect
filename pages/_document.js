import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Conrad Architect</title>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="MBAnalyst"
                        content="Consulting services | Power BI services"
                    />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='MBAnalyst' />
                    <meta property='og:description' content='MBAnalyst | Better Data better dections | Power BI services' />
                    <meta property='og:site_name' content='MBAnalyst' />

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-1DRJQT6GH1`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-1DRJQT6GH1', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
