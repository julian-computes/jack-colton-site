import Posts from '@/data/posts';
import PostPage from '@/components/PostPage';

export default function Sound() {
  return PostPage((post) => post.props.tag === 'visual')
  // return (
  //   <>
  //     <div className='w-2/3'>
  //       {Posts.filter((post) => post.props.tag === 'visual')
  //         .map((post, i) => <div key={i}>{post}</div>)}
  //     </div>
  //   </>
  // )
}