#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { QuoteApiStack } from '../lib';

const app = new cdk.App();
new QuoteApiStack(app, 'QuoteApiStack');
