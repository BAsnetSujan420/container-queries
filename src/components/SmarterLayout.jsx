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

const HeroLayout = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 1080px) {
    grid-template-columns: 44ch 1fr;
    align-items: start;
  }
`;

const Section = styled.section``;

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(min(30ch, 100%), 1fr));

  @media (max-width: 1220px) {
    grid-auto-flow: column;
    grid-auto-columns: minmax(min(30ch, 100%), 1fr);
    grid-template-columns: none;

    overflow-x: auto;
    padding-bottom: 0.5rem;

    scroll-snap-type: x mandatory;

    > * {
      scroll-snap-align: start;
    }
  }
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

  > {
    margin-block-start: 0;
    margin-inline: 1rem;
  }

  > :first-child {
    margin-block-start: 1rem;
  }

  > :last-child {
    margin-block-end: 1rem;
  }
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

export default function StyledFeaturedArticles() {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Main>
          <HeroLayout>
            <Heading>Smart design patterns with styled queries</Heading>

            <Section>
              <SubHeading>Featured Articles</SubHeading>

              <Grid>
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
                    Explore how to create interiors using eco-friendly
                    materials.
                  </CardText>
                  <CardText>
                    <CardLink href="#">Read more about eco design</CardLink>
                  </CardText>
                </Card>
                <Card>
                  <CardTitle>Creating fluid layout</CardTitle>
                  <CardText>
                    Learn to create fluid layouts with new min/max properties.
                  </CardText>
                  <CardText>
                    <CardLink href="#">Read more about fluid layout</CardLink>
                  </CardText>
                </Card>
                <Card>
                  <CardTitle>Frontend Dev with AI</CardTitle>
                  <CardText>
                    Learn to use artificial intelligence as frontend developer.
                  </CardText>
                  <CardText>
                    <CardLink href="#">
                      Read more about frontend AI engineering
                    </CardLink>
                  </CardText>
                </Card>
              </Grid>
            </Section>
          </HeroLayout>
          <Section>
            <SubHeading>Some other content that follows</SubHeading>
            <Grid>
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

              <Card>
                <CardTitle>New Minimalistic Trends</CardTitle>
                <CardText>
                  Follow new minimalism and sustainable trends.
                </CardText>
                <CardText>
                  <CardLink href="#">Read more about minimalism</CardLink>
                </CardText>
              </Card>
            </Grid>
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
