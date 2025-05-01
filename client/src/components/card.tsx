import EditIcon from "./icons/edit-icon";
import TrashIcon from "./icons/trash-icon";

export default function Card({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <li className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center gap-2">
            <EditIcon />
            <TrashIcon className="" />
          </div>
        </div>
        <p className="mt-2">{content}</p>
      </div>
    </li>
  );
}
