export default function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#/"
      className="flex flex-col items-center group text-center p-4 gap-y-2 transition hover:bg-purple-50 "
    >
      <img
        className="w-12 h-12 rounded-lg border border-gray-200"
        src={image}
        alt={title}
      />
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight ">
        {title}
      </span>
    </a>
  );
}
