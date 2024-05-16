import React from "react";

import uncategorized from "client/assets/images/uncategorized.svg";
import { Category } from "client/models/Categories";

import { Emoji } from "../../components/Emoji";
import { FiCheck } from "react-icons/fi";
type CategoryCardProp = {
  category: Category;
  activeCategory?: boolean;
  onClick?: () => void;
};
const CategoryCard = ({
  category,
  onClick,
  activeCategory,
}: CategoryCardProp) => {
  const CategoryEmoji = ({ category }: { category: Category }) => {
    if (!category)
      return (
        <div
          className="rounded-full bg-icon_bg/20 w-8 h-8 flex justify-center items-center
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
    <div className="flex flex-col" onClick={onClick}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <CategoryEmoji category={category} />
            <div className="font-custom text-sm font-medium text-skin-base text-start text-ellipsis overflow-hidden whitespace-nowrap">
              {category?.name}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {activeCategory ? (
            <div className="rounded-full w-8 h-8 flex justify-center items-center bg-skin-primary">
              <FiCheck color="#ffffff" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
