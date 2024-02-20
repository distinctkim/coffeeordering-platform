import { App } from 'cdktf';
import { Order } from './order';

const app = new App();

const stack = new TerraformStack(app, 'coffee-ordering');

new Order(stack, 'Order', {
  'latte': 2,
  'espresso': 1,
});

app.synth();