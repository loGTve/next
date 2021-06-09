import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import Index from "./index";
import Info from "./info";

type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document