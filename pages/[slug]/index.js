import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Layout from '../../components/Layout';
import PageTopSide from '../../components/PageTopSide';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CustomCard from '../../components/CustomCard';
import {API_URL} from '../../config';
import {auth} from '../../redux/actions/user';
import {useRouter} from 'next/router';
import getUser from '../../api/user/getUser';
import Head from 'next/head';

const MainArea = styled.div`
  margin: 50px 0;

  .userMail {
    font-size: 15pt;
    opacity: 0.5;
  }
  .userName {
    font-size: 20pt;
  }

  .userImage {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
  .userImageEdit {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #88888852;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 15pt;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .userImageEdit:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
  .editProfile {
    text-align: right;
    position: absolute;
    top: 0;
    right: 15px;
  }
  .editProfile a {
    opacity: 0.5;
    color: #253a4a;
    font-size: 15pt;
    transition: all 0.3s ease;
  }
  .editProfile a:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
  .segment {
    padding-bottom: 40px;
  }
  .segment h3 {
    padding-bottom: 10px;
  }
  .seeAll {
    opacity: 0.5;
    text-decoration: none;
    color: #253a4a;
    transition: all 0.3s ease;
  }
  .seeAll:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
  .eventCard img {
    border-radius: 5px;
    box-shadow: 0 0px 20px rgba(169, 169, 169, 0.4);
  }
  .eventCard {
    transition: all 0.3s ease;
  }
  .eventCard:hover {
    transform: scale(1.03);
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    .userImage {
      width: 120px;
    }
  }
  @media (max-width: 768px) {
    .eventCard:hover {
      transform: unset;
    }
    .latestEvents {
      overflow-x: auto;

      flex-wrap: nowrap;
    }
  }
  .latestEvents > .col-6 {
    display: inline-block;
    float: none;
  }
`;

export default function index() {
  const activeUser = useSelector((state) => state.userReducer);
  const [visitedUserData, setVisitedUserData] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const visitedUsername = router.query.slug;

  /* ABÇ: TEMP AUTH */
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && Array.isArray(activeUser)) {
      dispatch(auth(token));
    }
  }, [auth]);

  useEffect(() => {
    if (!visitedUsername || !activeUser) return;

    if (visitedUsername === activeUser.username) {
      setVisitedUserData(activeUser);
      return;
    }

    getVisitedUserData();
  }, [visitedUsername, activeUser]);

  const getVisitedUserData = async () => {
    try {
      const res = await getUser(visitedUsername);
      setVisitedUserData(res);
    } catch (error) {
      // user || page not found with this name
      router.push('/404');
    }
  };

  const addDefaultSrc = async (e) => {
    e.target.src = '/assets/images/default.png';
  };

  return (
    <div>
      <Head>
        <title>{visitedUserData.name} {visitedUserData.surname} - Bilisimtoplulugu.org - Kullanıcı Hesabı </title>
        <link rel="canonical" href="https://bilisimtoplulugu.org/etkinlikler" />

        {/* <meta
          name="description"
          content="{event.desc}"
        /> */}
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="Etkinlikler" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="/assets/images/socialLogo.png" />
        <meta
          property="og:image:secure_url"
          content="/assets/images/socialLogo.png"
        />
        {/* <meta property="og:title" content={eventData.title+ " - Bilisimtoplulugu.org - Kullanıcı Hesabı"} /> */}
        {/* <meta property="og:description" content="{event.desc}" /> */}
        <meta property="og:url" content="https://bilisimtoplulugu.org/" />
        {/* <meta property="og:site_name" content={eventData.title+ " - Bilisimtoplulugu.org - Kullanıcı Hesabı"}  /> */}

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:title" content={eventData.title+ " - Bilisimtoplulugu.org - Kullanıcı Hesabı"}  /> */}
        {/* <meta name="twitter:description" content="{event.desc}" /> */}
        <meta name="twitter:creator" content="@bilisimtopluluk" />
        <meta name="twitter:image" content="/assets/images/socialLogo.png" />
      </Head>

      <PageTopSide
        responsiveTop="50"
        responsiveHeight="200"
        bgImage="./../assets/images/homeBg.jpg"
        defaultHeight="250"
        title="Hesabım"
        desc=""
      />
      <MainArea>
        <Container>
          <Row>
            <Col xs={12}>
              <CustomCard>
                <Row>
                  <Col xs={12} className="segment">
                    <Row>
                      <Col xs={12} sm={3} md={2}>
                        <div className="userImage">
                          <img
                            onError={addDefaultSrc}
                            src={`${API_URL}/images/${visitedUserData._id}`}
                            alt="profilePhoto"
                          />
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={9}
                        md={10}
                        className="d-flex align-items-center"
                      >
                        <div>
                          <span className="userName">
                            {visitedUserData.name} {visitedUserData.surname}
                          </span>
                          <span className="userMail">
                            {visitedUserData.email}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    {activeUser._id === visitedUserData._id && (
                      <div className="editProfile">
                        <Link
                          href={`/[slug]/duzenle`}
                          as={`/${activeUser.username}/duzenle`}
                          passHref={true}
                        >
                          <a>
                            <i className="fas fa-edit"></i>
                          </a>
                        </Link>
                      </div>
                    )}
                  </Col>
                  <Col xs={12} className="segment">
                    <Row>
                      <Col xs={12} sm={6} className="text-center text-sm-left">
                        <h3>Katıldığı Son Etkinlikler</h3>
                      </Col>
                      <Col
                        xs={12}
                        sm={6}
                        className="text-center mb-4 mb-sm-0 text-sm-right"
                      >
                        <Link href={`/[slug]/etkinlikler`} as={`/${visitedUsername}/etkinlikler`}>
                          <a className="text-decoration-none">
                            <span className="seeAll">Tümünü Gör</span>
                          </a>
                        </Link>
                      </Col>
                    </Row>
                    <Row className="latestEvents">
                      {visitedUserData.joinedEvents &&
                        visitedUserData.joinedEvents.map((event) => (
                          <Col xs={6} md={3} key={event._id}>
                            <Link
                              href={`/etkinlikler/[slug]`}
                              as={`/etkinlikler/${event.seoUrl}`}
                            >
                              <a>
                                <div className="eventCard">
                                  <img
                                    src={`${API_URL}/images/event/${event.seoUrl}.png`}
                                  />
                                </div>
                              </a>
                            </Link>
                          </Col>
                        ))}
                    </Row>
                  </Col>
                </Row>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </MainArea>
    </div>
  );
}
