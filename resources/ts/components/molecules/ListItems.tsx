import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import HelpIcon from "@mui/icons-material/Help";
import StarIcon from "@mui/icons-material/Star";
import ListIcon from "@mui/icons-material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
// import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from "@mui/icons-material/Logout";

export const mainListItems = (
  <>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="ホーム" />
      </ListItemButton>
    </Link>
    <Link to="/new">
      <ListItemButton>
        <ListItemIcon>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText primary="新規作成" />
      </ListItemButton>
    </Link>
    <Link to="/manage">
      <ListItemButton>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="投稿管理" />
      </ListItemButton>
    </Link>
    <Link to="/loadmaps">
      <ListItemButton>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="検索" />
      </ListItemButton>
    </Link>
    <Link to="/favorites">
      <ListItemButton>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="お気に入り" />
      </ListItemButton>
    </Link>
  </>
);

export const secondaryListItems = (
  <>
    <Link to="/help">
      <ListItemButton>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="ヘルプ" />
      </ListItemButton>
    </Link>
    <Link to="/settings">
      <ListItemButton>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="設定" />
      </ListItemButton>
    </Link>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="ログアウト" />
      </ListItemButton>
    </Link>
  </>
);
