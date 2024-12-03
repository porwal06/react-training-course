import {useParams} from 'react-router-dom'
function ProductDetailPage() {
    const param = useParams();
    return <>
    <h2>Product detial page - "{param.productId}"</h2>
    </>
}

export default ProductDetailPage;