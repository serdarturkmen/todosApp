import {Author} from '../user/author.model';

export class Todos {
  constructor(public id?: string, public title?: string, public description?: string, public status?: string, public author?: Author) {
  }
}
