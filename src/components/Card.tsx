import React from "react";
import NumberFormat from "react-number-format";
import { Icon } from "@material-ui/core";

import { Currency, CurrentPrices } from "../store/types";

interface Props {
  onRemoveClick: () => void;
  currency: Currency;
  currentPrices: CurrentPrices;
  input: string;
  isDisplayed: boolean;
}

const Card: React.FC<Props> = ({
  onRemoveClick,
  currency,
  currentPrices,
  input,
  isDisplayed,
}) => {
  const currencyPrice = currentPrices[currency.id];

  const getCalculatedValue = () => {
    let inputValue;
    !input || input === "."
      ? (inputValue = 0)
      : (inputValue = parseFloat(input));
    if (currencyPrice) {
      return currencyPrice * inputValue;
    }
  };
  const calculatedValue = getCalculatedValue();

  const getCurrencySymbol = () => {
    if (currency.id === "EUR") {
      return "€ ";
    }
    if (currency.id === "USD") {
      return "$ ";
    }
    if (currency.id === "GBP") {
      return "£ ";
    }
  };
  const currencySymbol = getCurrencySymbol();

  return (
    <>
      {isDisplayed && (
        <div className="Card">
          <h2>{currency.label} </h2>
          <h2>
            <NumberFormat
              value={calculatedValue}
              displayType={"text"}
              decimalScale={2}
              thousandSeparator={true}
              prefix={currencySymbol}
            />
          </h2>
          <Icon className="close-icon" onClick={onRemoveClick}>
            close
          </Icon>
        </div>
      )}
    </>
  );
};

export default Card;
