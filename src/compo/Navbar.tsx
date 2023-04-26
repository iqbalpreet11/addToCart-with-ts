
import {Container,Button ,Nav,Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs';
import { useShoppingCart } from "../context/ShoppingCartContext"


const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
            <Nav.Link to='/' as={NavLink} >
                Home
            </Nav.Link>
            <Nav.Link to='/store' as={NavLink} >
                Store
            </Nav.Link>
            <Nav.Link to='/about' as={NavLink} >
                About
            </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
            <Button variant='outline-primary' 
            onClick={openCart}>
            <BsCart4 style={{width: '2rem' , height:'2rem' , position:'relative'}} />
          
            
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{color:'white', width:'1.5rem', height:'1.5rem', marginLeft:"-16px" ,marginBottom:"-25px"}} >{cartQuantity}</div>
            </Button>)}
        </Container>
    </NavbarBs>
  )
}

export default Navbar