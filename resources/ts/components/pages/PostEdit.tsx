import { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import { PostForm } from "../components/PostForm";
import { Card } from "@mui/material";

export const PostEdit: FC = () => {
  const { id } = useParams();

  const [editData, setEditData] = useState({ name: "", content: "" });

  useEffect(() => {
    getEditData();
  }, []);
  const getEditData = async () => {
    await Axios.post("/api/edit", {
      id: id,
    })
      .then((response) => {
        setEditData(response.data);
      })
      .catch(() => {
        console.log("通信失敗...");
      });
  };

  const updatePost = async () => {
    await Axios.post("/api/update", {
      id: id,
      name: editData.name,
      content: editData.content,
    })
      .then((response) => {
        setEditData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    editData[key] = value;
    let data = Object.assign({}, editData);
    setEditData(data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <h1>タスク編集</h1>
            <Card>
              <PostForm
                data={editData}
                btnFunc={updatePost}
                inputChange={inputChange}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
