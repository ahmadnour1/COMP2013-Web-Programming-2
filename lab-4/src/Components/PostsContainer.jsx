import PostCard from "./PostCard";

export default function PostsContainer(props) {
  return (
    <div>
      {props.posts.map((item) => {
        return <PostCard key={item.id} title={item.title} body={item.body} />;
      })}
    </div>
  );
}
