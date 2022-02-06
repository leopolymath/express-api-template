import { NextFunction, Request, Response } from 'express';
import PersonService from '@/services/person.service';

class PersonController {
  private personService = new PersonService();

  public getPerson = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const person = await this.personService.getPerson();

      res.status(200).json(person);
    } catch (error) {
      next(error);
    }
  };
}

export default PersonController;
