export default function () {
  return {
    items: [{
      id: 1,
      name: 'Yoghurt',
      description: 'this is a frozen yogurt'
    }],
    purchases: [{
      id: 1,
      item_id: 1,
      date_time: '2020-1-10 00:00',
      quantity: 300,
      amount: 500
    }],
    sales: [{
      id: 1,
      item_id: 1,
      date_time: '2020-2-10 00:00',
      quantity: 10,
      amount: 600
    },
    {
      id: 2,
      item_id: 1,
      date_time: '2020-3-10 00:00',
      quantity: 70,
      amount: 600
    },
    {
      id: 3,
      item_id: 1,
      date_time: '2020-4-10 00:00',
      quantity: 60,
      amount: 600
    },
    {
      id: 4,
      item_id: 1,
      date_time: '2020-5-10 00:00',
      quantity: 55,
      amount: 600
    }
    ],
    notifications: [{
      id: 1,
      item_id: 1,
      detail: 'Item is going out of stock',
      qty_remaining: 2,
      date_time: '2020-7-24 00:00'
    }]
  }
}
