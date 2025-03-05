test("GET to /api/v1/status should return to 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); // Alterado para HTTP
  expect(response.status).toBe(200);

  const responseBody = await response.json();
 

  const parsedUpdateAt = new Date (responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt)

  expect(responseBody.dependencies.database.version).toEqual("16.8")
  expect(responseBody.dependencies.database.max_connections).toEqual(901)
  expect(responseBody.dependencies.database.opened_connections).toEqual(1)

});
