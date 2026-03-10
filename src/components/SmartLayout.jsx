import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --clr-primary-600: hsl(22, 60%, 21%);
  --clr-primary-500: hsl(22, 60%, 31%);
  --clr-primary-400: hsl(22, 60%, 41%);
  --clr-primary-300: hsl(22, 60%, 51%);
  --clr-primary-200: hsl(22, 60%, 61%);
}

 html {
    color-scheme: dark light;
    font-family: system-ui;
    line-height: 1.6;
  }

  body {
    font-size: 1.25rem;
    margin: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3 {
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    text-transform: uppercase;
    font-weight: 400;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

`;

const Page = styled.div``;

const Main = styled.main``;

const Section = styled.section``;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(30ch, 100%), 1fr));

  container: grid-auto-fit / inline-size;
`;

const Card = styled.article`
  --padding: 1rem;
  display: grid;
  background: hsl(0 0% 50% / 0.2);
  background-image: linear-gradient(
    to bottom,
    transparent 50%,
    rgb(0 0 0 / 0.3)
  );
  overflow: hidden;
  border-radius: 0.25rem;

  > :not(img) {
    margin-block-start: 0;
    margin-inline: 1rem;
  }

  > :not(img):first-child {
    margin-block-start: 1rem;
  }

  > :not(img):last-child {
    margin-block-end: 1rem;
  }

  &:has(> img) {
    border: 2px solid var(--clr-primary-300);

    @container grid-auto-fit (inline-size > calc(30ch * 2 + 1rem)) {
      grid-column: span 2;

      display: grid;
      grid-template-columns: subgrid;
      gap: 0;

      > img {
        grid-column: 2;
        grid-row: 1/4;
      }
    }

    @container grid-auto-fit (inline-size > calc(30ch * 3 + 2rem)) {
      grid-column: span 1;
      grid-row: span 2;

      > img {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  color: var(--clr-primary-300);
`;

const CardText = styled.p``;

const CardLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition:
    background-size 325ms ease,
    text-decoration 325ms;
  &:hover,
  &:focus-visible {
    color: inherit;
    text-decoration-color: var(--clr-primary-400);
    background-size: 100% 1px;
  }
`;

const Heading = styled.h1``;
const SubHeading = styled.h2``;

export default function FeaturedArticles() {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Main>
          <Heading>Smart design patterns with container queries</Heading>

          <Section>
            <SubHeading>Featured Articles</SubHeading>

            <Grid>
              <Card>
                <CardImage src="https://images.unsplash.com/photo-1523380262778-076eb862d38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=70&w=800" />
                <CardTitle>The Art of Minimalism</CardTitle>
                <CardText>
                  Dive into the art of minimalism in interior design, exploring
                  how less can indeed be more.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about minimalism</CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Color Theory in Interior Design</CardTitle>
                <CardText>
                  Discover the profound impact of color choices on mood and
                  aesthetics in interior design.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about color theory</CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Article title</CardTitle>
                <CardText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about XYZ</CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Maximizing Small Spaces</CardTitle>
                <CardText>
                  Learn creative strategies to maximize small spaces.
                </CardText>
                <CardText>
                  <CardLink href="#">
                    Read more about maximizing spaces
                  </CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Eco-Friendly Interiors</CardTitle>
                <CardText>
                  Explore how to create interiors using eco-friendly materials.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about eco design</CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Art Deco in Modern Homes</CardTitle>
                <CardText>
                  Examine the enduring influence of Art Deco in modern homes.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about Art Deco</CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Incorporating Plants into Your Decor</CardTitle>
                <CardText>
                  Discover how to breathe life into your home with plants.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about plants</CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>The Psychology of Interior Design</CardTitle>
                <CardText>
                  Understand the psychology behind interior design.
                </CardText>
                <CardText>
                  <CardLink href="#">
                    Read more about design psychology
                  </CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Trends in Kitchen Design</CardTitle>
                <CardText>
                  Stay up-to-date with the latest kitchen design trends.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about kitchens</CardLink>
                </CardText>
              </Card>

              <Card>
                <CardTitle>Creating a Home Office That Works</CardTitle>
                <CardText>
                  Create a home office that boosts productivity.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about home offices</CardLink>
                </CardText>
              </Card>
            </Grid>
          </Section>

          <Section>
            <SubHeading>Some other content that follows</SubHeading>

            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              vitae delectus quo labore quidem corrupti ipsam.
            </CardText>

            <CardText>
              Ratione quo, accusantium commodi unde consequatur quidem dolorem
              numquam molestiae officia.
            </CardText>

            <CardText>
              Praesentium quisquam tempora, voluptate animi quos consequatur
              aliquid.
            </CardText>

            <CardText>
              Eos, aperiam consectetur eius sed excepturi pariatur deserunt
              incidunt vel.
            </CardText>
          </Section>
        </Main>
      </Page>
    </>
  );
}
