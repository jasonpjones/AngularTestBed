import { Entity } from '../shared/entity';

export interface Contact extends Entity {
  firstName: string;
  lastName: string;
  birthDate: Date;
}

export interface ContactDisplay extends Contact {
  displayName: string;
}