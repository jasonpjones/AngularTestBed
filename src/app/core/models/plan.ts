import { Entity } from '../shared/entity';

export interface Plan extends Entity {
  name: string;
  description?: string;
  standardFeatures: string[];
  customFeatures: string[];
}