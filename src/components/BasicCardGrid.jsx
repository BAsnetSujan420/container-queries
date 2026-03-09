import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const CardWrapper = styled.section``;

const H1 = styled.h1``;

const Card = styled.article`
  background: white;
  color: black;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
  padding-top: 8px;
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
