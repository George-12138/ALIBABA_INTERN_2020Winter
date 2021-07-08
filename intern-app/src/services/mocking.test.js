import { Mocking } from "./mocking";
test("mock data", (done)=>{
  const mockData = new Mocking();
  mockData.getData().then(res => {
    expect(res).toMatch(/\d/);
    done();
  });
});
