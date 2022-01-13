const Product = ({makeupObj}) => {
const renderMakeup = () => {
  console.log(makeupObj)
}

  return <div>
   <h4> {makeupObj.name}</h4>
   <img src = {makeupObj.image_link} alt = {makeupObj.name} />
   <h5>{makeupObj.brand}</h5>
  </div>;
};
export default Product;
