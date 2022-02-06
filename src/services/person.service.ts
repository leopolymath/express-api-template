import { Person } from '@/interfaces/types';

const person: Person = {
  id: '1',
  name: 'Leo',
};

class PersonService {
  public async getPerson(): Promise<Person> {
    return person;
  }
}

export default PersonService;
