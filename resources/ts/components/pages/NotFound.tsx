import { FC } from "react";
import { Container, Paper } from "@mui/material";

export const NotFound: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Paper sx={{ p: 2 }}>ページが見つかりませんでした。</Paper>
    </Container>
  );
};
