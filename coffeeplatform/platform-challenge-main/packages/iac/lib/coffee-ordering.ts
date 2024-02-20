import { Construct } from 'constructs';
import { TerraformStack } from 'cdktf';
import { Order } from './order';

export class CoffeeOrdering extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Order(this, 'Order1', {
      'latte': 2,
      'espresso': 1,
    });

    new Order(this, 'Order2', {
      'latte': 1,
      'cappuccino': 2,
    });
  }
}