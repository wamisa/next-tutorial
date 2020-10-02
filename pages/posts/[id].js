import { func } from 'prop-types'
import Layout from '../../components/layout'

export default function Post() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}

export async function getStaticPaths() {
    // id としてとりうる値のリストを返す
}

export async function getStaticProps({ params }) {
    // params.id を使用して、ブログの投稿に必要なデータを取得する
}