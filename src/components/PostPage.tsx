import Posts from "@/data/posts";

type filterFn = (s: JSX.Element) => boolean;

export default function PostPage(filter: filterFn) {
  return (
    <>
      {Posts.filter(filter).map((post, i) => (
        <div key={i}>{post}</div>
      ))}
    </>
  );
}
