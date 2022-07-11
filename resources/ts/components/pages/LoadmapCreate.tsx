import { useState, FC } from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export const LoadmapSummaryForm: FC = () => {
  return (
    <>
      <TextField
        id="name"
        label="タイトル"
        required
        variant="outlined"
        name="title"
        sx={{ mb: 2 }}
      />
      <TextField
        id="content"
        multiline
        label="詳細"
        variant="outlined"
        name="desc"
        sx={{ mb: 2 }}
      />
    </>
  );
};

const LoadmapStepForm: FC = () => {
  return <>STEPS</>;
};

type LoadmapSummary = {
  title: string;
  desc: string;
};

const LoadmapCreate: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loadmap, setLoadmap] = useState<LoadmapSummary>({
    title: "",
    desc: "",
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <LoadmapSummaryForm />;
      case 1:
        return <LoadmapStepForm />;
      default:
        throw new Error("ステップが不正です。");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: { xs: 8, sm: 10 } }}>
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          ロードマップ作成
        </Typography>
        <>
          {getStepContent(activeStep)}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {activeStep !== 0 && (
              <Button onClick={handlePrev} sx={{ mt: 3, ml: 1 }}>
                戻る
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 2, ml: 1 }}
            >
              {activeStep === 1 ? "作成" : "次へ"}
            </Button>
          </Box>
        </>
      </Paper>
    </Container>
  );
};
