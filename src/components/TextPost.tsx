import Badge from '@/components/Badge';

type Props = {
  title: string,
  body: string,
  tag: tag,
}

export default function TextPost({body, title, tag}: Props) {
  return <div className='text-box flex-col'>
    <h3 className='my-5 text-3xl font-bold'>{title}</h3>
    <div>{body}</div>
    <hr className='my-3'/>
    <Badge tag={tag}/>
  </div>
}