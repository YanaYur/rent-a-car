import CarsService from "../../services/cars.service";

const DAY_TIME = 1000 * 60 * 60 * 24;

describe("when user choose all params", () => {
  test("should return all availabel cars for choosen params", async () => {
    {
      // Arrange
      const params = {
        from: new Date(),
        to: new Date(Date.now() + DAY_TIME * 2),
        location: { label: "location", value: "bcn" },
      };
      const daysDiff = 2;

      // Act
      const res = await CarsService.getAvailableCars(params);

      // Assert
      expect(res).toBeDefined();
      expect(res.total).toBeDefined();
      expect(res.results).toBeDefined();

      expect(res.results).toHaveLength(17);

      for (const car of res.results) {
        expect(car.totalPrice).toBeDefined();
        expect(car.totalPrice).toEqual(car.price * daysDiff);
      }
    }
  });
});
