import styled from 'styled-components';

const Page = styled.div`
  --btn-bg: #7fffd0;
  --btn-border: magenta;
  --text: black;

  font-family: system-ui, Roboto;
  padding: 40px;
`;

const CardContainer = styled.div`
  container-type: inline-size;
  container-name: product-card-container;
  width: 100%;
  max-width: 640px;
`;

const Card = styled.div`
  padding: 1rem;
  border: 3px solid var(--btn-bg);
  text-align: center;

  @container (min-width: 200px) {
    padding: 1rem 1rem 2rem;
    border: 5px solid var(--btn-bg);
    text-align: left;
  }

  @container (min-width: 250px) {
    border: 11px solid var(--btn-bg);
  }

  @container product-card-container (min-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Content = styled.div``;

const Title = styled.h3`
  text-transform: uppercase;
  color: magenta;
  font-size: 1rem;

  @container (min-width: 200px) {
    font-size: 1.25rem;
  }

  @container (min-width: 250px) {
    font-size: 1.5rem;
  }
`;

const Price = styled.span`
  display: block;
  margin: 1rem 0;
  font-style: italic;
  color: #00b371;

  @container (min-width: 200px) {
    font-size: 1rem;
  }

  @container (min-width: 250px) {
    font-size: 1.25rem;
  }
`;

const Desc = styled.p`
  display: none;

  @container (min-width: 200px) {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  container-type: inline-size;
  width: 100%;
`;

const CartButton = styled.button`
  background: var(--btn-bg);
  border: 2px dashed var(--btn-border);
  box-shadow: 6px 6px 0 var(--btn-border);
  max-width: 60px;
  height: 3rem;
  border-radius: 10px;

  @container (min-width: 100px) {
    padding: 0 1rem;
    display: grid;
    max-width: 120px;
    grid-template-columns: 1fr 1fr;
  }

  @container (min-width: 220px) {
    max-width: 260px;
    grid-template-columns: 1fr 3fr;
  }
`;

const CartIcon = styled.svg`
  width: 100%;
  height: 100%;
  margin-right: -0.5rem;

  .plus-group > line {
    stroke-width: 20px;
    stroke: var(--text);
    display: none;
  }

  .cart-lines-group > line,
  .cart-group > polyline,
  .cart-group > circle {
    stroke-width: 10px;
    stroke: var(--text);
    fill: none;
  }

  .cart-lines-group {
    display: none;
  }

  @container (min-width: 30px) {
    .cart-lines-group {
      display: block;
    }
  }

  @container (min-width: 220px) {
    .plus-group > line {
      display: block;
    }
  }
`;

const CartText = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-size: 18px;
  line-height: 0;
  padding: 0.25rem;

  .add,
  .to-cart {
    display: none;
  }

  @container (min-width: 100px) {
    .add {
      display: inline-block;
    }
  }

  @container (min-width: 220px) {
    .plus-group,
    .to-cart {
      display: inline-block;
    }
  }
`;

export default function DemoCard() {
  return (
    <Page>
      <CardContainer>
        <Card>
          <Image src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800" />

          <Content>
            <Title>Neon Shapes Onesie</Title>
            <Price>$16.99</Price>

            <Desc>
              The perfect onesie for your millenial baby. Peace, love, shapes
              and bright colors bring this piece to life for all seasons.
            </Desc>

            <ButtonContainer>
              <CartButton>
                <CartIcon viewBox="0 0 320 173">
                  <g className="plus-group">
                    <line x1="278" y1="36" x2="278" y2="124" />
                    <line x1="322" y1="80" x2="234" y2="80" />
                  </g>

                  <g className="cart-lines-group">
                    <line x1="38" y1="68" x2="200" y2="68" />
                    <line x1="83.54" y1="36.2" x2="95.69" y2="99.84" />
                    <line x1="156.23" y1="36.2" x2="144.7" y2="99.84" />
                  </g>

                  <g className="cart-group">
                    <polyline points="44 100 190.95 100 209.44 36 30.77 36 44.48 100" />
                    <polyline points="185 131 51.44 131 44.78 99.91 24.46 5 0 5" />
                    <circle cx="68" cy="152" r="16" />
                    <circle cx="169" cy="152" r="16" />
                  </g>
                </CartIcon>

                <CartText>
                  <span className="add">Add</span>
                  <span className="to-cart"> to cart</span>
                </CartText>
              </CartButton>
            </ButtonContainer>
          </Content>
        </Card>
      </CardContainer>
    </Page>
  );
}
