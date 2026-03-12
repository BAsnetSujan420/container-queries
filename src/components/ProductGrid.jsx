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

export default function ProductGrid() {
  return (
    <Layout>
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </Layout>
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
