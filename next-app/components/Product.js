const Product = (props) => {
    const {product } = props;
    return (
      
            <div class="card mb-3" >
                 <h3 class="card-header">{product.name}</h3>
                <div class="card-body">
                    
                <img  src={product.images[0].sourceUrl} alt="Card image"/>
               
                    <h6 class="card-subtitle text-muted">{product.price}</h6>
                    <a href="" className="btn btn-secondary"> View</a>
                </div>
            </div>

    );
}

export default Product;