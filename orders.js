// orders.js
const orders = [
    {
      id: 1,
      crust: "Hand",
      toppings: ["pepperoni", "green pepper"],
      instructions: "extra cheese"
    },
    {
      id: 2,
      crust: "Thin",
      toppings: ["Black Olives", "green pepper"],
      instructions: "half green peppers"
    }
  ]
  
  export const getOrders = () => {
    const orderData = orders.map(order => ({...order}))
    return orderData
  }

  const getNewOrderId = () => {
    let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
  }
  
  console.log(orders)

  export const addNewOrder = (order) => {
    const newId = getNewOrderId()
    order.id = newId
    orders.push(order)
    console.log(orders)
    orders.sort((a, b) => a.id - b.id)
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }