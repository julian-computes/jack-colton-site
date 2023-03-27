type Props = {
  title: string;
  url: string;
  description: string;
};

export default function VideoPost({ title, url, description }: Props) {
  return (
    <div className="text-box">
      <h3 className="text-3xl font-bold">title</h3>
      <iframe
        width="90%"
        height="500"
        src={url}
        allowFullScreen
        title={title}
      />
      <div>{description}</div>
    </div>
  );
}
