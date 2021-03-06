import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import 'react-day-picker/lib/style.css';
import {auth} from '../redux/actions/user';
import Layout from '../components/Layout'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function MyApp({Component, pageProps}) {
/*   
const dispatch = useDispatch();

  useEffect(() => {
    console.log('qqq');
    const token = localStorage.getItem('jwt');
    if (token) {
      dispatch(auth(token));
    }
  }, [auth]); */

  return (
    <Provider store={store}>
      <Head>
      <script src="https://kit.fontawesome.com/7aecc2e880.js"></script>
      <title>
            Bilisimtoplulugu.org - İstanbul Bilişim Topluluğu, Bilişim
            Etkinlikleri
        </title>
      </Head>
      <Header />
      <Layout>
      <Component {...pageProps} />
      </Layout>
      <Footer />
    </Provider>
  );
}
