import Badge from '@/components/Badge';
import { TextPostData } from '@/data/posts'


export default function TextPost({body, title, tag}: TextPostData) {
  return (
    <div className='post-container flex-col'>
      <h3 className='my-5 text-3xl font-bold'>{title}</h3>
      <div className='flex pb-4'>
        {body}
      </div>
      <Badge tag={tag}/>
    </div>
  );
}
