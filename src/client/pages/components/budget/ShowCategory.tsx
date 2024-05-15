import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { useQuery } from "react-query";

import useTransactionStore from "client/store/transactionStore";
import { getCategories, updateCategory } from "client/api/categories";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useCategoriesStore from "client/store/categoriesStore";
import { Category } from "client/models/Categories";
import { showCustomToast } from "client/utils/Toast";

import CategoryCard from "../../components/budget/CategoryCard";

const ShowCategories = () => {
  const displayCategories = useTransactionStore((state: any) => state);
  const categoriesStore = useCategoriesStore((state: any) => state);
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;

  return (
    <div className="flex flex-col mx-3.5">
      <div
        className="flex flex-row justify-start mb-4"
        onClick={() => displayCategories.setDisplayCategoriesSheet(false)}
      >
        <FiX size="1.5rem" color="#6f89a5" />
      </div>
      <div className="flex flex-col">
        {categoriesStore.categories && categoriesStore.categories.length > 0
          ? categoriesStore.categories.map(
              (category: Category, index: number) => {
                return (
                  <CategoryCard
                    category={category}
                    key={index}
                    onClick={() => {
                      updateCategory({
                        configuration: config,
                        data: {
                          category: category?.name,
                          transaction_id:
                            displayCategories.uncategorizedTransaction?.id,
                          notes: displayCategories.note,
                        },
                      }).then((result) => {
                        if (result.errors) {
                          showCustomToast({
                            message:
                              "Cannot update category at this moment, please try again after sometime",
                          });
                        } else {
                          displayCategories.setCategory(result?.category);
                          displayCategories.setDisplayCategoriesSheet(false);
                          showCustomToast({ message: "Category updated" });
                        }
                      });
                    }}
                  />
                );
              }
            )
          : null}
      </div>
    </div>
  );
};

export default ShowCategories;