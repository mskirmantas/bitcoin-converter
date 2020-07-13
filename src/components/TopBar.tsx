import React from "react";
import { Button, Icon } from "@material-ui/core/";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

interface Props {
  input: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDropdownMenuButtonToggle: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  onClearInputClick: () => void;
}

const TopBar: React.FC<Props> = ({
  input,
  onInputChange,
  onDropdownMenuButtonToggle,
  onClearInputClick,
}) => {
  return (
    <div className="TopBar">
      <div className="input-field">
        <h2>BTC </h2>
        <input
          type="text"
          placeholder="Enter Bitcoin amount"
          onChange={onInputChange}
          value={input}
        />
        {input ? (
          <Icon className="clear-icon" onClick={onClearInputClick}>
            close
          </Icon>
        ) : (
          <div className="empty-icon" />
        )}
      </div>
      <Button onClick={onDropdownMenuButtonToggle}>
        <MonetizationOnOutlinedIcon fontSize="large" />
      </Button>
    </div>
  );
};

export default TopBar;
