import { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Container,
  Stack,
  Paper,
  Card,
  Typography,
  Avatar,
} from "@mui/material";

export const Tag = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const LoadmapDetail: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
          e-typingでWPM400(Professor)に到達するまでにやったこと
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <Avatar alt="selenium" src="" sx={{ mr: 1 }} />
          ばなめい
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Tag>タイピング</Tag>
        </Stack>
        <p>
          タイピング速度向上の為の練習法をステップバイステップ形式で紹介します。
        </p>
        <Card sx={{ px: 2, py: 3, mb: 2 }}>
          <Typography component="h3" variant="h6">
            【STEP1】タッチタイピングを身に付ける
          </Typography>
          <p>
            まずはキーボードを見ずにタイピング出来るように、キーの配置と指使いを覚えます。
          </p>
        </Card>
        <Card sx={{ px: 2, py: 3, mb: 2 }}>
          <Typography component="h3" variant="h6">
            【STEP2】目で見た文字を脳内でローマ字に変換するスピードを上げる
          </Typography>
          <p></p>
        </Card>
        <Card sx={{ px: 2, py: 3, mb: 2 }}>
          <Typography component="h3" variant="h6">
            【STEP3】後ろに続く文章を常に意識する
          </Typography>
          <p></p>
        </Card>
        <Card sx={{ px: 2, py: 3, mb: 2 }}>
          <Typography component="h3" variant="h6">
            【STEP4】効率の良いキー入力を身に付ける
          </Typography> <p>
            「ん」の入力を[xn]とすると、ミスタイプの数がかなり減ると思います。
          </p>
        </Card>
      </Paper>
    </Container>
  );
};
