import React, { useState } from "react";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps
} from "@mui/material/TextField/TextField";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type TextFieldProps =
  | StandardTextFieldProps
  | FilledTextFieldProps
  | OutlinedTextFieldProps;

type PasswordFieldProps = Omit<TextFieldProps, "InputProps" | "type">;

export const PasswordField = React.memo(
  (props: PasswordFieldProps): JSX.Element => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };

    return (
      <TextField
        InputProps={
          {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          } as TextFieldProps["InputProps"]
        }
        type={showPassword ? "text" : "password"}
        {...props}
      />
    );
  }
);

PasswordField.displayName = "PasswordField";
