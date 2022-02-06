import request from 'supertest';
import App from '@/app';
import V1Route from '@routes/v1/v1.route';

const leo = {
  id: '2',
  name: 'Leo',
};

jest.mock('@/services/person.service', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getPerson: jest.fn(() => leo),
    };
  });
});

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing v1/', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const route = new V1Route();
      const app = new App([route]);

      return request(app.getServer()).get('/status').expect(200);
    });
  });

  describe('[GET] /status', () => {
    it('response statusCode 200', () => {
      const route = new V1Route();
      const app = new App([route]);

      return request(app.getServer()).get('/status').expect(200).expect({ status: 'OK' });
    });
  });

  describe('[GET] /person', () => {
    it('response statusCode 200', () => {
      const route = new V1Route();
      const app = new App([route]);
      return request(app.getServer()).get('/person').expect(200).expect(leo);
    });
  });
});
