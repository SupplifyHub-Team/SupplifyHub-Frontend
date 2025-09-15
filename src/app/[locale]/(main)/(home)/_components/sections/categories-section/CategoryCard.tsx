import Image from "next/image";

interface categoryCardProps {
  category: ICategory;
}

export default function CategoryCard({ category }: categoryCardProps) {
  return (
    <div className="flex flex-col border hover:border-primary border-primary/20 items-center cursor-pointer justify-center gap-2 py-4  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  h-full text-center">
      {category.imageURL && (
        <Image
          src={category.imageURL}
          alt={category.categoryName}
          width={100}
          height={100}
          className="rounded-full ring-1 ring-gray-300 object-cover w-24 h-24 mb-2"
          sizes="(max-width: 640px) 100px, (max-width: 768px) 100px, 100px"
        />
      )}
      <span className="md:text-lg text-sm font-bold text-gray-800 break-words">
        {category.categoryName}
      </span>
      <p className="flex flex-col items-center gap-1 ">
        <span className="font-bold text-xs md:text-xl text-gray-600">
          {category.numberOfAssociatedSuppliers} +
        </span>
        <span className="text-primary underline font-bold text-xs md:text-sm">
          موردين مرتبطون
        </span>
      </p>
    </div>
  );
}
