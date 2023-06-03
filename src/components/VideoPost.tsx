import { VideoPostData } from '@/data/posts';
import Badge from '@/components/Badge';

export default function VideoPost({title, url, description, frameClass, tag}: VideoPostData) {

  return (
    <div className='post-container'>
      <h3 className='text-3xl font-bold mb-4'>{title}</h3>
      <iframe
        className={frameClass}
        width='500em'
        height='400em'
        src={url}
        allowFullScreen
        title={title}
      />
      {description !== '' && <div className='py-3'>{description}</div>}
      <Badge tag={tag}/>
    </div>
  );
}
