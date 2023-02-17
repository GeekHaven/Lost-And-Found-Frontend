import Head from "next/head";
export default function SEO({ title, desc, img }) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta name="theme-color" content="#ffffff" />
            <meta name="title" content={title} />
            <meta name="description" content={desc} />
            <link rel="manifest" href="/manifest.json" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" itemProp="image" content={img} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content={img} />
        </Head>
    );
}
