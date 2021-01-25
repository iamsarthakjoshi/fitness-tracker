import { Application } from 'express';
import supertest from 'supertest';
import app from './../app';

const getRequest = (api_app: string | Application) => supertest(api_app);

it('expect to get pong status', async () => {
  const request = await getRequest(app).get(`/ping`);
  expect(request.status).toBe(200);
  expect(request.body).toBeDefined();
  expect(request.body.message).toBe('pong');
});
