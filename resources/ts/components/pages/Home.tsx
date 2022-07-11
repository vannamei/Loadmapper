import { FC } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  Button,
  Typography,
  Container,
  Paper,
  Stack,
  Avatar,
} from "@mui/material";

export const Tag = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//-- ToDo: axiosでLaravelのAPIを叩いてデータを取得
//-- 投稿日時降順
const recents = [
  {
    id: 1,
    title: "フロントエンドエンジニアを目指す人の為のロードマップ",
    iconSrc: "",
    author: "伊沢圭＠フリーランスエンジニア",
    tags: ["IT", "プログラミング"],
    created_at: 1,
  },
  {
    id: 2,
    title: "バックエンドエンジニアを目指す人の為のロードマップ",
    iconSrc: "",
    author: "伊沢圭＠フリーランスエンジニア",
    tags: ["IT", "プログラミング"],
    created_at: 2,
  },
  {
    id: 3,
    title: "Webデザイナーを目指す人の為のロードマップ",
    iconSrc: "",
    author: "伊沢圭＠フリーランスエンジニア",
    tags: ["IT", "プログラミング", "デザイン"],
    created_at: 3,
  },
  {
    id: 4,
    title: "TOEIC600点から900点に上げるまでにやったこと",
    iconSrc: "",
    author: "かずち",
    tags: ["語学", "英語", "資格"],
    created_at: 4,
  },
  {
    id: 5,
    title: "e-typingでWPM400(Professor)に到達するまでにやったこと",
    iconSrc: "",
    author: "ばなめい",
    tags: ["タイピング"],
    created_at: 5,
  },
];

const Home: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: { xs: 8, sm: 10 } }}>
      <Typography paragraph>
        Loadmappersは、目標達成までの過程やアドバイスなどを共有出来る学習支援サービスです。
        <br />
        初学者の立場では難しい、効率の良い学習計画を立てる指針として利用いただけます。
      </Typography>
      <Paper
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f7fffc",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{ mb: 2, fontSize: "28px", fontWeight: "bold" }}
        >
          最近の投稿
        </Typography>
        {recents.map((recent) => (
          <Link to={"/loadmaps/" + recent.id} key={recent.id}>
            <Card sx={{ px: 2, py: 3, mb: 2 }}>
              <Typography component="h3" variant="h6" sx={{ mb: 1 }}>
                {recent.title}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 1 }}
              >
                <Avatar alt="selenium" src={recent.iconSrc} sx={{ mr: 1 }} />
                {recent.author}
              </Stack>
              <Stack direction="row" spacing={1}>
                {recent.tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </Stack>
            </Card>
          </Link>
        ))}
        <Button color="primary" variant="contained" href="/loadmaps">
          投稿一覧
        </Button>
      </Paper>
    </Container>
  );
};
