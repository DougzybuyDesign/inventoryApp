
import {Form,Button,Table} from "react-bootstrap";
import { useState ,createRef} from "react";

export default function AddProduct() {
  // add Product handler method
  //Type of data{stateData, stateUpdateFunction}=useState(initialData)
let initialValue = []
const [product,setProduct]=useState(initialValue);
const formData = createRef ();
const add = (event) => {
event.preventDefault();
//console.log(event);

const newProduct = {
product__name:formData.current.product__name.value,
price:formData.current.price.value,
qty:formData.current.qty.value,
}
//console.log(newProduct);
//add a new product to inside products array
setProduct([...product, newProduct]);
  }

  return (
  

    <div>
   <Form onSubmit={add} ref={formData}>
  <Form.Group controlId="formBasicProductName">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter product name" name="product__name" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPrice">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Price in Pounds" name="price"/>
  </Form.Group>
  
  <Form.Group controlId="formBasicQuantity">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="How many:qty" name="qty" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Add to inventory
  </Button>
</Form>
<Table striped bordered hover variant="dark">
  <thead>
  <tr>
                    <th>Index</th>
                    <th>Product Name:</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.product_name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                
  </tr>
      )
    })
  }
  </tbody>
</Table>
    </div>
  )
}