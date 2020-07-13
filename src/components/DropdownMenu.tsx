import React from "react";
import { Icon } from "@material-ui/core";
import {
  Divider,
  FormControlLabel,
  Grid,
  Menu,
  MenuItem,
  Checkbox,
  Typography,
} from "@material-ui/core/";

import { Currency, CardDisplayStatus, CurrencyType } from "../store/types";

interface Props {
  anchorEl: HTMLElement | null;
  currencyList: Currency[];
  cardDisplayStatus: CardDisplayStatus;
  onDropdownMenuClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDisplayCardToggle: (currency: CurrencyType) => void;
}

const DropdownMenu: React.FC<Props> = ({
  anchorEl,
  currencyList,
  cardDisplayStatus,
  onDropdownMenuClose,
  onDisplayCardToggle,
}) => {
  return (
    <div className="DropdownMenu">
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onDropdownMenuClose}
      >
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ padding: 15 }}
        >
          <Grid>
            <Typography>
              <b>Currency choices:</b>
            </Typography>
          </Grid>
          <Grid>
            <Icon className="close-icon" onClick={onDropdownMenuClose}>
              close
            </Icon>
          </Grid>
        </Grid>
        <Divider light />
        {currencyList.map((currency) => {
          return (
            <MenuItem key={currency.id} disableRipple>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={cardDisplayStatus[currency.id]}
                    onChange={() => onDisplayCardToggle(currency.id)}
                    value={currency}
                    disableRipple
                  />
                }
                label={`${currency.label} (${currency.name})`}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
