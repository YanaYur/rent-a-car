import carsReducer from "../../state/reducers/cars.reducers";
import { setAvailableCars, setParams } from "../../state/actions/cars.actions";

describe("when action that updates car list state is called in reducer", () => {
  test("should update car list and return it updated", async () => {
    {
      // Arrange
      const payload = "test";

      // Act
      const res = carsReducer(null, setAvailableCars(payload));

      // Assert
      expect(res).toBeDefined();
      expect(res.carList).toBeDefined();
      expect(res.carList).toEqual(payload);
    }
  });
});

describe("when action that updates search params state is called in reducer", () => {
  test("should update search params and return it updated", async () => {
    {
      // Arrange
      const payload = "test";

      // Act
      const res = carsReducer(null, setParams(payload));

      // Assert
      expect(res).toBeDefined();
      expect(res.params).toBeDefined();
      expect(res.params).toEqual(payload);
    }
  });
});
