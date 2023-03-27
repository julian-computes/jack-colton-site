import Badge from "@/components/Badge";
import Modal from "@/components/Modal";

type Props = {
  title: string;
  body: string;
  tag: tag;
};

export default function TextPost({ body, title, tag }: Props) {
  return (
    <div className="text-box flex-col">
      <h3 className="my-5 text-3xl font-bold">{title}</h3>
      <div className="flex pb-4 mb-4">
        <p>{body}</p>
        <Modal title={title}>
          <p>{body}</p>
        </Modal>
      </div>
      <Badge tag={tag} />
    </div>
  );
}
