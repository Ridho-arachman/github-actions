// tests/app.test.js
const request = require("supertest");
const app = require("../src/app");

let server; // Untuk menyimpan instance server jika diperlukan

beforeAll(() => {
  server = app.listen(4000); // Jalankan server di port pengujian
});

afterAll((done) => {
  server.close(done); // Tutup server setelah semua tes selesai
});

describe("Test Express.js routes", () => {
  test('GET / should return "Hello, World!"', async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hello, World!" });
  });

  test("POST /echo should echo back the data sent", async () => {
    const payload = { name: "John Doe" };
    const response = await request(app).post("/echo").send(payload);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ data: payload });
  });
});
