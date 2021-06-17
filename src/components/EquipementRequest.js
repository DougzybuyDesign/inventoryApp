import App from "./App";
import {Form,Button,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,createRef} from "react";



export default function EquipmentRequest() {
return()



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