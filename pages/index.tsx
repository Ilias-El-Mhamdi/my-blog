import Layout from '../components/Layout';
import { Introduction } from '../components/index/Introduction';
import { Bookshelf } from '../components/index/Bookshelf';


const IndexPage = () => (
  <Layout>
    <Introduction />
    <Bookshelf />
  </Layout>
);

export default IndexPage;
