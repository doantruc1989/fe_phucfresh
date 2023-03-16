
import Layout from './components/Layout'
import NestedLayout from "./components/NestedLayout";
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Homepage from './components/Homepage';
import { CartProvider } from "react-use-cart";
import 'react-toastify/dist/ReactToastify.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 


const Home: NextPageWithLayout = () => {
  return (
    <div >
      <Homepage />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
    </CartProvider>
   )
}

export default Home;
