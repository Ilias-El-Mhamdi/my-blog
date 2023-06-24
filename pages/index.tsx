import Layout from '../components/Layout';
import { Introduction } from '../components/index/introduction/Introduction';
import { Bookshelf } from '../components/index/bookshelf/Bookshelf';


const IndexPage = () => (
  <Layout>
    <Introduction />
    <Bookshelf />
  </Layout>
);

export default IndexPage;
