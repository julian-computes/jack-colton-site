type Props = {
  tag: tag
}

export default function Badge({tag}: Props) {
  return <div>
    <span
      className='font-light text-sm'>{tag}</span>
  </div>
}