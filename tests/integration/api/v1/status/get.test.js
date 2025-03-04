test("GET to /api/v1/status should return to 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); // Alterado para HTTP
  expect(response.status).toBe(200);
});
