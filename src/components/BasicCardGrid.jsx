import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const CardWrapper = styled.section``;

const H1 = styled.h1``;

const Text = styled.p``;

const Card = styled.article`
  background: white;
  color: black;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;

  container-type: inline-size;
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

  @container (width > 45ch) {
    grid-template-columns: auto minmax(25ch, 1fr);
  }
`;

const CardTitle = styled.h3`
  margin-top: 8px;
`;

const CardText = styled.p`
  margin: 0;
  color: #555;
`;

export default function BasicCardGrid() {
  return (
    <Wrapper>
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
