import React, { Fragment } from "react";
import { Jumbotron, Container, Media, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Fragment>
      <Jumbotron fluid className='aboutBanner'>
        <Container>
          <h1>About Our App</h1>
        </Container>
      </Jumbotron>
      <Container>
        
        <p className="lead about-blurb">
          We have all been there. With a group of friends, starving, but no one
          can make a decision. Should we get Thai? or pizza? STFU & EAT acts as
          your trigger man, providing a random restaurant recommendation for
          those hangry moments.
          <br />
          <br />
          All local St. Louis CITY restaurants that are under $25 for one
          person, chains excluded. The best part? Great food and no obligation
          to go to the place suggested by your friend of a friend of a friend.
          You get the idea.
        </p>

        <h4 className='lead'>Meet Our Authors</h4>
        <br />
        <Row>
          <Col sm={1} md={6}>
            <Media>
              <img
                className='mr-3 media-thumbnail'
                src={require("../../images/mariah_lightfoot_thumbnail.jpg")}
                alt='Generic placeholder'
              />
              <Media.Body>
                <h5>Mariah Lightfoot | Backend Developer</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            <br />
            <br />
          </Col>
          <Col sm={1} md={6}>
            <Media>
              <img
                className='mr-3 media-thumbnail'
                src={require("../../images/danielle_spencer_thumbnail.jpg")}
                alt='Generic placeholder'
              />
              <Media.Body>
                <h5>Danielle Spencer | Frontend Developer</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
