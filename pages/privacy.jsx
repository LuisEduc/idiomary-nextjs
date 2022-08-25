import Layout from "../components/Layout"
import Head from "next/head"
import Link from "next/link"

export default function privacidad() {

    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Privacy Policy | idiomary</title>
            </Head>
            <main className="bg-politicas">
                <h2 className="mt-3">Privacy Policy</h2>
                <p>This privacy policy explains our practice when collecting, processing and disclosing our data. It sets out the procedure by which we manage the personal information that the inglesxdia.tech service, hereinafter IDIOMARY, collects and receives from you.</p>
                <p>IDIOMARY provides its service in accordance with the terms and conditions of service and this privacy policy. Your privacy is important to us. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used.</p>
                <p><br /><strong>ANONYMOUS DATA WE COLLECT.</strong></p>
                <p>We use non-identifying and aggregate information to track usage and traffic patterns in order to better design our website. When you visit this site, certain types of non-personally identifiable information, such as your IP address, any websites that referred you to us, your browser type and language, and access times, may be collected automatically as part of the operation of the site. We may also collect navigational information, including information about the pages you view, the links you click and other actions taken in connection with the site. This information is used by a third party (Google Analytics) to provide us with statistics about site usage. Google Analytics only has access to completely anonymous data and does not share this data with any other third parties.</p>
                <p><br /><strong>WHAT WE DO NOT COLLECT.</strong></p>
                <p>We do not collect any personally identifiable information (PII) about you unless you voluntarily submit such information to us, for example, by requesting information from us or sending us an email. We do not sell, rent, lease, give away or share information about you with third parties. Cookies are used on this website mainly to analyze our website traffic, to display advertisements or to measure advertising success rates.</p>
                <p><br /><strong>COOKIES.</strong></p>
                <p>Our website uses so-called cookies. Cookies are small files that websites place on your computer while you visit them. The files contain specific information related to the user. Cookies allow us to know how often and how many people use our website and to offer services in a more personalized way. We use session cookies, which temporarily store information for the duration of your visit to our website. Session cookies are automatically deleted at the end of your visit. We also use persistent cookies to store information about users who frequently visit one or more of our sites. The purpose of using these cookies is to provide you with optimal user guidance and also to help us recognize you when you return, so that we can offer you maximum variety and new content. The content of a permanent cookie is limited to an identification number. No names, IP addresses, etc,. are stored, nor do we build individual profiles of your usage behavior. It is possible to use our services without cookies. You can also delete cookies from your computer&apos;s hard drive at any time. In that case, however, you may not be able to benefit from the full potential of the website&apos;s features. You can find more information at
                <Link href={"https://idiomary.tech/cookies"}>
                <a> Cookies</a>
                </Link>.</p>
                <p><br /><strong>CHANGES TO OUR PRIVACY POLICY.</strong></p>
                <p>You may revise this privacy policy at any time. You should visit this page periodically to review our current Privacy Policy so that you will always know what information we collect and how we may use it.</p>
            </main>
        </Layout>
    )
}