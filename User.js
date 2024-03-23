import { useLocation, useParams } from "react-router-dom";

export default function User() {
  let { id, name } = useParams();
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let category = queryParams.get("category");
  let posts = queryParams.get("posts");

  return (
    <div>
      <h1>User Id : {id}</h1>
      <h2>User Name : {name}</h2>
      <h3>Category : {category}</h3>
      <h4>Posts : {posts}</h4>
    </div>
  );
}
