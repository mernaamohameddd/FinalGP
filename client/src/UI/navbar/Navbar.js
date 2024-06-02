import { useContext } from 'react';
import AuthContext from '../../store/authContext';
import NavItem from './NavItem';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  return (
    
    
    <div style={{overflow:"hidden",backgroundColor:"rosybrown",textAlign:"left",padding:"0.7rem",margin:"0.5rem auto", borderRadius:"10px",width:"1200px"}}>
      <header>
      <h1 style={{textAlign:"center"}}>Shopix</h1>
      <ul>
      <NavItem to="/">Home</NavItem>
      <br />
      <h3>Payment</h3>
      <NavItem to="/transaction/init-transaction">Payment Page</NavItem>
        <br />

        <h3>Feedback</h3>
      <NavItem to="/feedback/addfeedback">Add Feedback</NavItem><br />
      <NavItem to="/feedback/deletefeedback/:feedbackId" >Delete Feedback</NavItem><br />
      <NavItem to="/feedback/retrievefeedback">Retrieve Feedback</NavItem><br />
      <br />

      <h3>Product Exchange</h3>
      <NavItem to="/ProductExchange/items">View Product Exchange</NavItem>
      <br />
      <NavItem to="/ProductExchange/items/additems">Add Product Ex Page</NavItem>
      <br />
      <NavItem to="/ProductExchange/items/deleteitems">Delete Product Exchange</NavItem> 
<br />
      
      <h3>Product Reselling</h3>
        <NavItem to="/products">View Product Reselling</NavItem>
        <br />
        <NavItem to="/products/add">Add Product</NavItem>
        <br />
        <NavItem to="/products/:productId">Delete Product</NavItem>
        <br />
        <NavItem to="/products/:productId">Edit Product</NavItem>
        <br />
        
        <h3>Account</h3>
        {!authContext.token && <NavItem to="/signin">Sign In</NavItem>}
        <br />
        {!authContext.token && <NavItem to="/signup">Sign Up</NavItem>}
      <br />
        
<h3>Interaction</h3>
<NavItem to="/track/:orderId">Tracking Progress</NavItem> 
<br />
<NavItem to="/chatMessage">Chat</NavItem> 
<br />
<NavItem to="/updatePaymentStatus/:orderId">Update Payment Status</NavItem>
<br />
<NavItem to="/confirmDelivery/:orderId">Delivery Confirmation</NavItem>
<br/>
<NavItem to="/itemprogress/updateShippingStatus/:orderId">Update Shipping Status</NavItem> 
<br />



      </ul>
      </header>
    </div>

    
  );
};

export default Navbar;
