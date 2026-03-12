import styled from 'styled-components';

const products = [
  {
    name: 'Cactus',
    price: '$16.99',
    image:
      'https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-cactus__0935865_PE792997_S5.JPG?f=xs',
  },
  {
    name: 'Succulent',
    price: '$8.99',
    image:
      'https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_PE686835_S5.JPG?f=xs',
  },
  {
    name: 'Monstera',
    price: '$32.99',
    image:
      'https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0614197_PE686822_S5.JPG?f=xs',
  },
  {
    name: 'Palm Plant',
    price: '$24.99',
    image:
      'https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-palm__0797076_PE766755_S5.JPG?f=xs',
  },
  {
    name: 'Potted Ivy',
    price: '$19.99',
    image:
      'https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-hanging-ivy__0898086_PE782558_S5.JPG?f=xs',
  },
  {
    name: 'Hanging Pot',
    price: '$14.99',
    image:
      'https://www.ikea.com/us/en/images/products/kapkrusbaer-hanging-planter-gray-green__0919747_PE789482_S5.JPG?f=xs',
  },
  {
    name: 'Pink Planter',
    price: '$14.99',
    image:
      'https://www.ikea.com/us/en/images/products/graeddaepple-plant-pot-indoor-outdoor-pink-white__0952322_PE804311_S5.JPG?f=xs',
  },
];

const Layout = styled.div`
  font-family: system-ui;
  padding: 2rem 3rem;
  display: grid;
  grid-gap: 4rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const Product = styled.div`
  container-type: inline-size;
`;

const Details = styled.div`
  @container (inline-size > 350px) {
    text-align: left;
  }
`;

const ProductContainer = styled.div`
  h3 {
    font-size: 14px;
    text-transform: uppercase;
    margin: 0.5rem 1rem;
  }

  .price {
    margin: 0 1rem;
    color: white;
    display: block;
  }

  p {
    font-size: 13px;
    color: #ccc;
    margin: 0.5rem 1rem;
  }

  img {
    width: 100%;
  }

  button {
    border: none;
    border-radius: 2px;
    background: hsl(340deg 50% 50%);
    font-weight: 800;
    text-transform: uppercase;
    padding: 0.4rem 0.6rem;
    margin: 1rem auto;
    display: block;
  }

  @container (inline-size < 200px) {
    border: 1px solid hsl(340deg 50% 50%);
    padding: 0.5rem;
    border-radius: 10px;

    display: flex;
    align-items: center;

    h3 {
      width: 90px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0;
    }

    p,
    button {
      display: none;
    }
  }

  @container (inline-size > 350px) {
    display: flex;
    padding: 0.5rem 0 0;
    justify-content: flex-start;

    button {
      margin-left: 1rem;
    }
  }
`;

const FooterContainer = styled.footer`
  background: #1f1f1f;
  color: #fff;
  padding: 3rem 2rem 1.5rem;

  h4,
  h2 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const Brand = styled.div`
  p {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.9rem;
  }

  a:hover {
    color: white;
  }
`;

const Social = styled.div``;

const Icons = styled.div`
  display: flex;
  font-size: 1.4rem;
  justify-content: space-evenly;
  margin-block: 1em;

  a {
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.2);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  font-size: 0.8rem;
  color: #aaa;

  grid-column: 1 / -1;
  border-top: 1px solid;
`;

export default function ProductGrid() {
  return (
    <div>
      <Layout>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </Layout>

      <FooterContainer>
        <FooterContent>
          <Brand>
            <h2>Brooklyn Garden</h2>
            <p>Plants that make your home happier 🌿</p>
          </Brand>

          <Links>
            <h4>Links</h4>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </Links>

          <Social>
            <h4>Follow Us</h4>
            <Icons>
              <a href="#">🐦</a>
              <a href="#">📸</a>
              <a href="#">📘</a>
              <a href="#">▶️</a>
            </Icons>
          </Social>
          <Copyright>
            © {new Date().getFullYear()} Brooklyn Garden. All rights reserved.
          </Copyright>
        </FooterContent>
      </FooterContainer>
    </div>
  );
}

function ProductCard({ image, title, price, small }) {
  return (
    <Product small={small}>
      <ProductContainer>
        <figure>
          <img src={image} />
        </figure>

        <Details>
          <h3>{title}</h3>
          <span className="price">{price}</span>
          <p>
            This plant is a very good one. There is a product description that
            talks about plant care.
          </p>
          <button>Add to Cart</button>
        </Details>
      </ProductContainer>
    </Product>
  );
}
