import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./store/reducers";
import * as actions from "./store/actions";
import { currencyList, CardDisplayStatus, CurrencyType } from "./store/types";
import { inputValidator } from "./utils/validation";

import TopBar from "./components/TopBar";
import Card from "./components/Card";
import DropdownMenu from "./components/DropdownMenu";

import "./App.scss";

const App: React.FC = () => {
  const { currentPrices } = useSelector(
    (state: AppState) => state.currentPrices
  );

  const dispatch = useDispatch();

  const [input, setInput] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [cardDisplayStatus, setCardDisplayStatus] = useState<CardDisplayStatus>(
    {
      EUR: true,
      USD: true,
      GBP: true,
    }
  );

  useEffect(() => {
    dispatch(actions.fetchCurrentPricesRequest());
    let int = setInterval(() => {
      dispatch(actions.fetchCurrentPricesRequest());
    }, 60000);
    return () => clearInterval(int);
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputValidator(event.target.value)) {
      setInput(event.target.value.substring(0, 18));
    }
  };

  const handleClearInput = () => {
    setInput("");
  };

  const handleDropdownMenuToggle = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(anchorEl === null ? event.currentTarget : null);
  };

  const handleDisplayCardToggle = (currency: CurrencyType) => {
    setCardDisplayStatus({
      ...cardDisplayStatus,
      [currency]: !cardDisplayStatus[currency],
    });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Bitcoin Converter</h1>
        <h4>* Currency rates are updated every minute</h4>
      </div>
      <div className="converter">
        <TopBar
          input={input}
          onInputChange={handleInputChange}
          onDropdownMenuButtonToggle={handleDropdownMenuToggle}
          onClearInputClick={handleClearInput}
        />
        <DropdownMenu
          anchorEl={anchorEl}
          onDropdownMenuClose={handleDropdownMenuToggle}
          currencyList={currencyList}
          cardDisplayStatus={cardDisplayStatus}
          onDisplayCardToggle={handleDisplayCardToggle}
        />
        {currencyList.map((currency) => {
          return (
            <div key={currency.id}>
              <Card
                onRemoveClick={() => handleDisplayCardToggle(currency.id)}
                currency={currency}
                currentPrices={currentPrices}
                input={input}
                isDisplayed={cardDisplayStatus[currency.id]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
