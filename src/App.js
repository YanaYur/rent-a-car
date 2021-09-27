import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Title from "./components/Title/Title";
import List from "./components/List/List";
import CarsService from "./services/cars.service";
import { useSelector, useDispatch } from "react-redux";
import { carsSelector, paramsSelector } from "./state/selectors/selectors";
import { setAvailableCars, setParams } from "./state/actions/cars.actions";

const App = () => {
  const dispatch = useDispatch();

  const availableCars = useSelector(carsSelector);
  const selectedParams = useSelector(paramsSelector);

  const [error, setError] = useState(null);

  const paramsHandler = async (params) => {
    debugger;
    dispatch(setParams(params));
    debugger;
    const availableCars = await CarsService.getAvailableCars({
      from: params.from,
      to: params.to,
      location: params.location.value,
    });
    debugger;
    dispatch(setAvailableCars(availableCars));
    debugger;
  };

  return (
    <div className="app">
      <div className="app-box app-box-image">
        <Header />
        <Title />
        <Search params={selectedParams} onSubmit={paramsHandler} />
      </div>
      {availableCars && (
        <div className="app-box">
          <List data={availableCars} />
        </div>
      )}
      <div className="app-footer"></div>
    </div>
  );
};

export default App;
