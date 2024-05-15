import React from "react";

import uncategorized from "client/assets/images/uncategorized.svg";
import { Category } from "client/models/Categories";

import { Emoji } from "../../components/Emoji";
type CategoryCardProp = {
  category: Category;
  onClick?: () => void;
};
const CategoryCard = ({ category, onClick }: CategoryCardProp) => {
  const CategoryEmoji = ({ category }: { category: Category }) => {
    if (!category)
      return (
        <div
          className="rounded-full bg-icon_bg/20 w-9 h-9 flex justify-center items-center
      "
        >
          <img src={uncategorized} alt="" />
        </div>
      );

    return (
      <div className="rounded-full w-10 h-10 flex justify-center bg-icon_bg/20 items-center">
        <Emoji symbol={category.emoji} label={category.name} />
      </div>
    );
  };

  return (
    <div className="flex flex-col mb-4" onClick={onClick}>
      <div className="flex flex-row items-center">
        <div className="">
          <CategoryEmoji category={category} />
        </div>
        <div className="font-custom text-sm font-medium text-skin-base text-start text-ellipsis overflow-hidden whitespace-nowrap w-40">
          {category?.name}
        </div>
      </div>
      <div className="flex-grow h-px bg-skin-accent3"></div>
    </div>
  );
};

export default CategoryCard;
