import { Plan } from '../plan';

export const PLANS: Plan[] = [
  { id: '1', name: 'Essentials', standardFeatures: [ '1', '3'], customFeatures: [] },
  { id: '2', name: 'Premier', standardFeatures: [ '1', '2', '3', '4' ], customFeatures: [] },
  { id: '3', name: 'Ultimate', standardFeatures: ['2', '3', '4', '5' ], customFeatures: [ '1'] },
];
