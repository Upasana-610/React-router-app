import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.production.min";
//a
export const fetchPost = async () => {
  try {
    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return posts.data;
  } catch (error) {
    console.log(error);
  }
};

//to call it from another file
//take useState,useEffect

// let [loading, setLoading] = useState(false);
// let [posts, setPosts] = useState([]);

// //Componet did mount
// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   try {
//     let value = await fetchPost();
//     setPosts(value);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchParticularPost = async (id) => {
  try {
    let posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return posts.data;
  } catch (error) {
    console.log(error);
  }
};

// to call it
// let params = useParams();
// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   try {
//     let value = await fetchParticularPost();
//     setPosts(value);
//   } catch (error) {
//     console.log(error);
//   }
// };
