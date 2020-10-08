/*
export function someMutation (state) {
}
*/
export function addItem (state, data) {
  state.items.push(data)
}

export function addPurchase (state, data) {
  state.purchases.push(data)
}

export function addSale (state, data) {
  state.sales.push(data)
}

export function addNotification (state, data) {
  state.notifications.push(data)
}
