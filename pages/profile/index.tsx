import React from 'react';
import Layout from '../../components/Layout';
import PageTopSide from '../../components/PageTopSide';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CustomCard from '../../components/CustomCard';

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
  .eventCard img {
    border-radius: 5px;
    box-shadow: 0 0px 20px rgba(169, 169, 169, 0.4);
  }
.eventCard{
  transition: all 0.3s ease;
}
  .eventCard:hover{
    transform:scale(1.03);
    transition: all 0.3s ease;
  }



  @media (max-width: 576px) {
    .userImage {
      width: 120px;
    }
  }
  @media (max-width:768px){
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
  return (
    <Layout>
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
                          <img src="/assets/images/berkaydogukan.jpg" />
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
                            Berkay Doğukan Urhan
                            </span>
                          <span className="userMail">
                            mail@dogukanurhan.com
                            </span>
                        </div>
                      </Col>
                    </Row>
                    <div className="editProfile">
                      <Link href="profile/edit">
                        <a>
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </a>
                      </Link>
                    </div>
                  </Col>
                  <Col xs={12} className="segment">
                    <h3>Son Etkinlikler</h3>
                    <Row className="latestEvents">
                      <Col xs={6} md={3}>
                        <div className="eventCard">
                          <img src="/assets/images/image1.png" />
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                        <div className="eventCard">
                          <img src="/assets/images/image1.png" />
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                        <div className="eventCard">
                          <img src="/assets/images/image1.png" />
                        </div>
                      </Col>
                      <Col xs={6} md={3}>
                        <div className="eventCard">
                          <img src="/assets/images/image1.png" />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

              </CustomCard>
            </Col>
          </Row>
        </Container>
      </MainArea>
    </Layout>
  );
}
