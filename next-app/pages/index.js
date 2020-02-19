import Layout from "../components/Layout";
//import fetch from 'isomorphic-unfetch';;
import client from './../components/ApolloClient';
//import clientConfig from '../client-config';
import Product from '../components/Product';

import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`query{
    products(first:20){
        nodes {
          id
          productId
          averageRating
          slug
          description
          image {
            uri
            title
            srcSet
            sourceUrl
          }
          name
          
          
        }
      }

}`;


/**
 * index
 * @param {*} props 
 */


const Index = ( props ) =>{
  
    const {products} = props ;

    return (
       <Layout>
        <div className="product-container">
        { products.lenght ? (
             products.map( product =><Product key={product.id} product ={product}/>)
         ) : '' }
        </div>
       
       </Layout>
    );
};

Index.getInitialProps = async () => {

    const result = await client.query( { query:PRODUCTS_QUERY})
    return {
        produtcs: result.data.products.nodes
    }
};




export default Index;

// const res = await fetch( `${clientConfig.siteUrl}/getProducts` );
    //  const producsData = await res.json();
    // return {
    //     products:res
    // }