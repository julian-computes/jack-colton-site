import Posts from '@/data/posts';

type filterFn = (s: JSX.Element) => boolean;

export default function PostPage(filter: filterFn) {
  return <>
    <div className='w-2/3'>
      {Posts.filter(filter)
        .map((post, i) => <div key={i}>{post}</div>)}
    </div>
  </>
}
