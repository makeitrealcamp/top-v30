import supertest from "supertest";
import { faker } from "@faker-js/faker";

import app from "../../app";

const request = supertest(app);

describe('User controller', () => {
  describe('POST /api/users', () => {

    test('Should return 400 Bad request', async () => {
      // Arrange
      const user = {
        email: faker.internet.email(),
      }
      const expectedResponse = {
        message: 'Missing required fields: email and name'
      }
      // Act
      const response = await request.post('/api/users').send(user)

      // Assert
      expect(response.status).toBe(400)
      expect(response.body).toEqual(expectedResponse)
    })

    test('Should return 201 Created', async () => {
      //Arrange
      const user = {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        name: faker.person.firstName(),
        avatar: faker.image.avatar(),
      }
      //Act
      const response = await request.post('/api/users').send(user)

      //Assert
      expect(response.status).toBe(201)
      expect(response.body).toEqual(user)
    })

  })

  describe('GET /api/users', () => {
    test('Should return 200 OK', async () => {
      //Arrange
      const message = 'users found'
      //Act
      const response = await request.get('/api/users')

      //Assert
      expect(response.status).toBe(200)
      expect(response.body.message).toMatch(message)
    })
  })
})