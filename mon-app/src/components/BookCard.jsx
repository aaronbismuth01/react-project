export default function BookCard({ book, onToggleFav, onDelete, onEdit }) {
  return (
    <div className="bg-white border border-amber-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
      {book.coverImage ? (
        <img
          src={book.coverImage}
          alt={book.title}
          className="h-40 w-full object-cover"
        />
      ) : (
        <div className="h-40 w-full bg-amber-100 flex items-center justify-center text-amber-400 text-sm">
          No cover
        </div>
      )}

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-stone-900">{book.title}</h3>
        <p className="text-amber-800 text-sm">{book.author}</p>
        {book.description && (
          <p className="text-stone-600 text-xs line-clamp-2">{book.description}</p>
        )}

        <div className="flex items-center justify-between mt-auto pt-2">
          <button
            onClick={() => onToggleFav(book.id)}
            className={`text-xl ${book.isFavorite ? "text-green-700" : "text-amber-300"}`}
          >
            ★
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(book)}
              className="text-xs bg-amber-100 hover:bg-amber-200 text-stone-800 px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book.id)}
              className="text-xs bg-amber-100 hover:bg-amber-200 text-stone-800 px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}