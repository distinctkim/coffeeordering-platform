import { Construct } from 'constructs';
import { TerraformStack } from 'cdktf';
import { HashicupsOrder } from '@hashicorp/terraform-cdk-hashicups';

export class Order extends Construct {
  constructor(scope: Construct, id: string, orderItems: { [key: string]: number }) {
    super(scope, id);

    new HashicupsOrder(this, 'Order', {
      orderItems: Object.entries(orderItems).map(([item, quantity]) => ({
        name: item,
        quantity: quantity,
      })),
    });
  }
}