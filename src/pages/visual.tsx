import PostPage from '@/components/PostPage';

export default function Sound() {
  return PostPage((post) => post.props.tag.includes('visual'));
}
