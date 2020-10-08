/*
export function someGetter (state) {
}
*/
export function nextItemID (state) {
  return Math.max(...state.items.map(item => item.id)) + 1
}

export function nextPurchaseID (state) {
  return Math.max(...state.purchases.map(purchase => purchase.id)) + 1
}

export function nextSaleID (state) {
  return Math.max(...state.sales.map(sale => sale.id)) + 1
}

export function nextNotificationID (state) {
  return Math.max(...state.notifications.map(notification => notification.id)) + 1
}

export function itemsGetter (state) {
  return state.items
}

export function singleItemGetter (state) {
  return (id) => state.items.find(item => item.id === id)
}

export function itemQty (state) {
  return function (itemId) {
    let pQty = 0
    state.purchases.filter(purchase => purchase.item_id === itemId).forEach(element => {
      pQty += element.quantity
    })
    let sQty = 0
    state.sales.filter(sale => sale.item_id === itemId).forEach(element => {
      sQty += element.quantity
    })
    return pQty - sQty
  }
}
export function notificationsGetter (state) {
  return state.notifications
}

export function monthlySales (state) {
  const sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  state.sales.map(sale => {
    const date = new Date(sale.date_time)
    sale[date.getMonth()] += sale.quantity
  })
  console.log(sales)
  return sales
}
