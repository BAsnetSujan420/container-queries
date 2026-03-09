import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;

  @media (width > 760px) {
    grid-template-columns: 1fr 300px;
  }
`;

const CardWrapper = styled.section`
  display: grid;
  gap: 1rem;
`;

const Content = styled.section``;

const H1 = styled.h1``;

const Text = styled.p``;

const Card = styled.article`
  background: white;
  color: black;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);

  container: cards / inline-size;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
  padding-top: 8px;
  display: grid;
  gap: 1rem;

  @container cards (width > 45ch) {
    grid-template-columns: auto minmax(25ch, 1fr);
  }
`;

const CardTitle = styled.h3`
  margin-top: 8px;
  font-size: clamp(1.5rem, 7cqi, 2rem);
`;

const CardText = styled.p`
  margin: 0;
  color: #555;
`;

export default function BasicCardGrid() {
  return (
    <Wrapper>
      <Content>
        <H1>Media queries and container queries</H1>
        <Text>
          The morning air carried a quiet stillness as the sun slowly pushed
          through the clouds, casting soft light across the rooftops and empty
          streets. Somewhere in the distance, a dog barked and a bicycle rolled
          past, its wheels echoing faintly against the pavement.
        </Text>
        <Text>
          Moments like this felt suspended in time, where the world seemed to
          pause just long enough for people to notice the small details—the
          rustling of leaves, the warmth of sunlight, and the calm rhythm of an
          ordinary day beginning.
        </Text>
        <Card>
          <CardTitle>Main Card</CardTitle>
          <CardBody>
            <CardImage src="https://picsum.photos/400/300?0" />
            <CardText>
              Dawn unfolded like a quiet poem, spilling amber light across the
              sleeping earth as the sky softened from indigo to gold. The breeze
              wandered gently through the trees, carrying the faint perfume of
              damp soil and blooming petals.
            </CardText>
          </CardBody>
        </Card>
      </Content>
      <CardWrapper>
        <Card>
          <CardTitle>Card 1</CardTitle>
          <CardBody>
            <CardImage src="https://picsum.photos/400/300?1" />
            <CardText>
              Beautiful mountain landscape with peaceful scenery.
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardTitle>Card 2</CardTitle>
          <CardBody>
            <CardImage src="https://picsum.photos/400/300?2" />
            <CardText>A quiet path through a green forest.</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardTitle>Card 3</CardTitle>
          <CardBody>
            <CardImage src="https://picsum.photos/400/300?3" />
            <CardText>Calm ocean view during a warm sunset.</CardText>
          </CardBody>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
}
