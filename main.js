// main.js
import {getOrders, addNewOrder} from './orders.js'

document.getElementById("app").innerHTML = `
<h1>Peanut's Pizza Parlor</h1>
<div>
  <h3>Please make your pizza</h3>
  <div class="pizzaForm">
    <div class="crust">
      <h4>Pick your crust</h4>
      <label for="thinCrust">Thin</label>
      <input id="thinCrust" name="crust" type="radio" value="Thin" />
      <label for="handTossedCrust">Hand Tossed</label>
      <input id="handTossedCrust" name="crust" type="radio" value="HandTossed" />
      <label for="handTossedCrust">Stuffed</label>
      <input id="stuffed" name="crust" type="radio" value="Stuffed" />
      </div>
      <div class="toppings">
        <p>Pick your Toppings (Select all that apply)</p>
        <ul>
          <li>
            <input id="pepperoni" name="toppings" type="checkbox" value="pepperoni" />
            <label for="pepperoni">Pepperoni</label>
          </li>
          <li>
            <input id="Sausage" name="toppings" type="checkbox" value="Sausage" />
            <label for="Sausage">Sausage</label>
          </li>
          <li>
            <input id="Black Olives" name="toppings" type="checkbox" value="Black Olives" />
            <label for="Black Olives">Black Olives</label>
          </li>
          <li>
            <input id="Green Peppers" name="toppings" type="checkbox" value="Green Peppers" />
            <label for="Green Peppers">Green Peppers</label>
          </li>
          <li>
            <input id="Onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
          </li>
        </ul>
    </div>
    <div class="extras">
      <label for="specialInstructions">Notes/Special Instructions</label>
      <div>
        <textarea id="specialInstructions"></textArea>
      </div>
    </div>
    <div>
      <button id="submitOrder">Order Pizza</button>
    </div>
  </div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders()
  let orderData = ''
  for (const order of orders) {
    orderData += 
        `<div class = "orders">
            Order #${order.id}<br>
            <ul>
                <li>Crust: ${order.crust}</li>
                <li>Toppings: ${order.toppings}</li>
                <li>Instructions: ${order.instructions}</li>
            </ul>
        </div>`
  }
  orderData += '</div>'
  document.getElementById("orders").innerHTML = orderData
};

displayOrders()

document.addEventListener("click", (event) => {
  if (event.target.id === "submitOrder") {
      let toppingsArray = []
      let crust = document.querySelector("input[name=crust]:checked")?.value
      const toppingsElements = document.querySelectorAll("input[name=toppings]:checked");
      toppingsElements.forEach(toppingElement=> {toppingsArray.push(toppingElement.value)});
      let specialInstructions = document.getElementById('specialInstructions')?.value
      let newOrder = {
          id: "",
          crust: crust, 
          toppings: toppingsArray,
          instructions: specialInstructions
      }
      console.log(newOrder)
      addNewOrder(newOrder)
  }
})

document.addEventListener("stateChanged", event => {displayOrders()})