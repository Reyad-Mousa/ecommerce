import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductListItems = ({ item, id }) => {
  return (
    <Link
      key={id}
      href={`/product-details/${item?.id}`}
      className="  rounded-lg  shadow-sm shadow-gray-400 border border-transparent hover:border hover:border-gray-900 "
    >
      <Image
        alt="image"
        src={item?.attributes?.image?.data?.attributes?.url}
        width={400}
        height={300}
        className=" md:h-48 sm:h-28 rounded-md object-cover"
      />

      <div className="mt-2 px-2 pb-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">
              $ {item?.attributes?.price}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium line-clamp-2">
              {item?.attributes?.title}
            </dd>
          </div>
          <div>
            <dt className="sr-only">aa</dt>

            <dd className="font-medium line-clamp-2 flex text-gray-500 text-sm  ">
              <List className="mr-1 " size={20} />
              {item?.attributes?.catagory}
            </dd>
          </div>
        </dl>
      </div>
    </Link>
  );
};

export default ProductListItems;
