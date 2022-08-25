import Layout from "../components/Layout"
import Head from "next/head"

export default function cookies() {

    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Cookie Policy | idiomary</title>
            </Head>
            <main className="bg-politicas">
                <h1 className="mt-3">Cookie Policy</h1>
                <h3>Do we use &apos;cookies&apos;?</h3>
                <p>Yes. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser (if you allow them) that enables the site&apos;s or service provider&apos;s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember your progress in terms of lessons. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

                <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since the browser are a little different, look at your browser&apos;s help menu to learn the correct way to modify your cookies.</p>

                <h3>What happens if you turn cookies off?</h3>
                <p>If you turn cookies off, some features will be disabled. Some of the features that make your site experience more efficient may not function properly.</p>

                <h3>Google</h3>
                <p>We use Google AdSense Advertising on our website to provide a positive experience for users. Google&apos;s advertising The requirements can be summed up by <a className="text-info font-weight-bold" onClick={()=> window.open("https://support.google.com/adwordspolicy/answer/1316548?hl=en")}  
                    >Google&apos;s Advertising Principles.</a></p>

                <p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>

                <p>We, along with third-party vendors such as Google, use first-party cookies and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website. Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt-Out page or by using the Google Analytics Opt-Out Browser add-on.</p>

            </main>
        </Layout>
    )
}
