import Link from 'next/link'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1  className='text-red-800' >Hi, I&apos; Ilias El-Mhamdi. This blog exists to organize my LinkedIn articles for easy access. (This is a first draft, still in progress) 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
