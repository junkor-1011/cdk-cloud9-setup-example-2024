import { Stack, type StackProps, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'vpc-for-develop', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.10.0/22'),
      maxAzs: 1,
      natGateways: 1,
    });

    vpc.addFlowLog('FlowLogToS3', {
      destination: ec2.FlowLogDestination.toS3(),
    });
  }
}
