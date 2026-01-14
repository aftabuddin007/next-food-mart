'use client';

import { formatDistanceToNow } from 'date-fns';

const FeedbackCard = ({ feedback, onEdit, onDelete }) => {
  const { message, date } = feedback;

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-gray-700 mb-3">{message}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(feedback)}
            className="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(feedback._id)}
            className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
