import { Link } from "react-router-dom";

const PRODUCT_DETAIL = [
    {id: 'p1', title: "Product 1"},
    {id: 'p2', title: "Product 2"},
    {id: 'p3', title: "Product 3"},
    {id: 'p4', title: "Product 4"},
    {id: 'p5', title: "Product 5"},
]
const ProductPage = () => {
    return (
    <>
    <h2>My product page</h2>
    <ul>{
        PRODUCT_DETAIL.map(
            productDetail => <li key={productDetail.id}><Link to={`/product/${productDetail.id}`}>{productDetail.title}</Link></li>
            )
        }
    </ul>
    </>
    );
}
export default ProductPage;