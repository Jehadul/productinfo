
import {useParams} from "react-router-dom";

const ProductDetails = ({data}) => {
    const params = useParams();
    const productDetails = data[params.index_number];
    return (
        <>
        <div>
            <p className="textalign">
            <h3>Product Details Information</h3>
            <b>Category:</b> {productDetails.category}<br/>
            <b>Name:</b> {productDetails.name}<br/>
            <b>Price:</b> BDT {productDetails.price}<br/>
            <b>Description:</b> {productDetails.description}</p>
        </div>
        </>
    )
}

export default ProductDetails;