import Product from "./Product"


const ProductsList = ({makeup}) => {
  console.log(makeup)
  return (
  
    <div>
    {makeup.map(makeupObj => <Product makeupObj = {makeupObj}/>)}  
    </div>
  )
}
export default ProductsList