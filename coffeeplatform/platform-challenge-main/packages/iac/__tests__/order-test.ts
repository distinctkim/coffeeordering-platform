import { Order } from '../src/order';

test('Order should be created with the correct order items', () => {
  const order = new Order(null, 'Order', {
    'latte': 2,
    'espresso': 1,
  });

  expect(order).toBeDefined();
});