import { FC } from "react";
import { Typography } from "@mui/material";

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Vannamei {new Date().getFullYear()}
    </Typography>
  );
};

export const Footer: FC = () => {
  return (
    <footer>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </footer>
  );
};
