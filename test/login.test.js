const request = require("supertest");
const app = require("../src/app");

let server;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll((done) => {
  server.close(done);
});

describe("Testing POST /login", () => {
  test("should return 200 code", async () => {
    const response = await request(app).post("/login").send({
      username: "0897822001",
      password: "Guelupa.1",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });
  test(`should return message "Login successful"`, async () => {
    const response = await request(app).post("/login").send({
      username: "0897822001",
      password: "Guelupa.1",
    });
    expect(response.body.message).toBe("Login successful");
  });
});
