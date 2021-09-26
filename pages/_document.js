import React from 'react';
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
                        name="Conrad Architect"
                        content="JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property."
                    />
                    <meta
                        name="description"
                        content="JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property."
                    />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Conrad Architect' />
                    <meta property='og:description' content='JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property.' />
                    <meta property='og:site_name' content='Conrad Architect' />

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-R2MD4BEPKQ"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-R2MD4BEPKQ', {
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
