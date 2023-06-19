import PostPage from '@/components/PostPage';

export default function Installation() {
  return PostPage((post) => post.props.tag.includes('installation'));
}
