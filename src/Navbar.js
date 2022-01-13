import { NavLink } from 'react-router-dom'

const activeStyleObj = {
  fontWeight: "bolder",
  color: "red"
}

const styleObj = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "black",
  backgroundColor: "rgb(2555, 120, 44)",
  fontWeight: "bold",
  verticalAlign: "center"
}

const Navbar = () => {
  return (
    <div>
    <NavLink
    exact
     to = "/" 
     style = {styleObj}
     activeStyle= {activeStyleObj}
    >HOME
    </NavLink>  
     <NavLink
    exact
     to = "/products" 
     style = {styleObj}
     activeStyle= {activeStyleObj}
    >PRODUCTS</NavLink> 
     <NavLink
    exact
     to = "/products/new" 
     style = {styleObj}
     activeStyle= {activeStyleObj}
    >ADD PRODUCT</NavLink> 
    </div>
  )
}

export default Navbar