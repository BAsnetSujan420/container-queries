import React from 'react';
import styled from 'styled-components';

export const Container = styled.div``;

export const CardContainer = styled.div``;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  gap: 2rem;
  margin: 0 auto;
  border: 1px solid hsl(278deg 66% 66%);
  padding: 1rem;
`;

export const CardBody = styled.div``;

export const Meta = styled.div``;

export const Notes = styled.div``;

export const LinksContainer = styled.div`
  ul {
    padding: 0;
  }
  ul > li {
    list-style-type: none;
    margin: 0;
    text-align: left;
  }
  a {
    color: hsl(278deg 66% 66%);
  }
`;

export const LinksTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 1rem 0 0.25rem;
  line-height: 1;
`;

export const Time = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const Desc = styled.p`
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1;
  margin-block: 1rem;
`;

const Image = styled.figure`
  margin: 0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 0;
  padding: 0.5rem;
  background-color: hsl(270 70% 40%);
  color: white;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-top: 1rem;
`;

function EpisodeCard() {
  return (
    <Container>
      <CardContainer data-size="0">
        <Card>
          <Image>
            <img src="http://static.libsyn.com/p/assets/9/8/1/c/981c2ef87dd4c9e7/TCP000_thumbnail_v3.png" />
          </Image>
          <CardBody>
            <Meta>
              <Title>Preference Media Queries</Title>
              <Time>15:40</Time>
            </Meta>

            <Notes>
              <Desc>
                In this episode we narrow our focus on user-preference-based
                media queries, which enable you to create personalized
                experiences based on your users custom settings and needs.
              </Desc>
              <LinksContainer>
                <LinksTitle>Links</LinksTitle>
                <ul>
                  <li>
                    Media Queries → <a href="#">http://goo.gle/2MhYfR2</a>
                  </li>
                  <li>
                    Scripting → <a href="#">http://goo.gle/2Mdan5E</a>
                  </li>
                  <li>
                    The 'display-mode' media feature →{' '}
                    <a href="#">http://goo.gle/2NoFr3c</a>
                  </li>
                  <li>
                    Prefers-* Security and Privacy →{' '}
                    <a href="#">http://goo.gle/3kfwUM0</a>
                  </li>
                  <li>
                    CSS Color Adjustment →{' '}
                    <a href="#">http://goo.gle/3qLkduJ</a>
                  </li>
                </ul>
              </LinksContainer>
            </Notes>

            <Button>Download Episode</Button>
          </CardBody>
        </Card>
      </CardContainer>
    </Container>
  );
}

export default EpisodeCard;
