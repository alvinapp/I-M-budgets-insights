import React, { useState } from "react";
import { FiCheckCircle, FiPlus, FiTag, FiX } from "react-icons/fi";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useQuery } from "react-query";

import useTransactionStore from "client/store/transactionStore";
import { applyAsterix, checkNAN, dateFormat } from "client/utils/Formatters";
import useUserStore from "client/store/userStore";
import { getCategories, updateCategory } from "client/api/categories";
import { showCustomToast } from "client/utils/Toast";
import { IConfig, useConfigurationStore } from "client/store/configuration";

import TransactionAmountView from "../../components/budget/TransactionAmountView";
import { TextInput, TextInputWithPopup } from "../../components/Input";
import MainButton from "../../components/MainButton";

import ShowCategories from "../../components/budget/ShowCategory";
import ActionButton from "../ActionButton";
import EditCategoryCard from "./EditCategoryCard";
import MerchantEditCard from "./MerchantCategoryCard";
import AccountEditCard from "./AccountEditCard";
import useCategoriesStore from "client/store/categoriesStore";

const EditCategory = () => {
  const editCategoryStore = useTransactionStore((state: any) => state);
  const categoryData = editCategoryStore.uncategorizedTransaction;
  const transactedAt = new Date(categoryData?.transacted_at);
  const userStore = useUserStore((state: any) => state);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const categoriesStore = useCategoriesStore((state: any) => state);
  const { data: fetchedCategories } = useQuery(
    "categories",
    () =>
      getCategories({ configuration: configuration }).then((result) => {
        categoriesStore.setCategories(result);
      }),
    {
      refetchOnWindowFocus: false,
    }
  );
  const config = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const { isFetching: updatingCategory, refetch: categoryUpdate } = useQuery(
    "update-category",
    () =>
      updateCategory({
        configuration: config,
        data: {
          category: editCategoryStore.category?.name,
          transaction_id: editCategoryStore.uncategorizedTransaction?.id,
          notes: editCategoryStore.note,
        },
      }).then((result) => {
        if (result.errors) {
          showCustomToast({
            message:
              "Cannot update category at this moment, please try again after sometime",
          });
        } else {
          editCategoryStore.setCategory(result?.category);
          editCategoryStore.setOpenEditCategorySheet(false);
          showCustomToast({ message: "Category updated" });
        }
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  return (
    <div className="flex flex-col mt-3 mb-6 mx-4">
      <TransactionAmountView
        amount={categoryData?.amount}
        transactedAt={dateFormat(transactedAt)}
      />
      <div className="mt-7">
        <EditCategoryCard
          label="Transaction category"
          categoryName={categoryData.category?.name}
          onClick={() => {
            editCategoryStore.setDisplayCategoriesSheet(true);
          }}
        />
      </div>
      <div className="mt-3">
        <AccountEditCard
          label="Account"
          type={userStore.user?.external_linked_accounts[0].type}
          accountNumber={
            userStore.user.external_linked_accounts.length > 0
              ? `${checkNAN(254720000000)}`
              : ""
          }
        />
      </div>
      <div className="mt-3">
        <MerchantEditCard
          label="Merchant"
          merchant={
            editCategoryStore.receipient ? editCategoryStore.receipient : ""
          }
        />
      </div>
      <div className="mt-3 rounded shadow-card pt-4">
        <div
          className={`font-custom font-semibold text-xs tracking-subtitle mb-2 text-skin-base ml-3.5`}
        >
          Note
        </div>
        <textarea
          rows={6}
          placeholder="Optional"
          className="w-full focus:border-none focus:outline-none focus-visible:outline-none focus:ring-0 border-none outline-none"
          onChange={(e) => editCategoryStore.setNote(e.target.value)}
        />
      </div>
      {editCategoryStore.note.length > 1 ? (
        <div className="mt-3">
          <MainButton
            loading={updatingCategory}
            title="Save"
            click={() => {
              if (Object.keys(editCategoryStore.category).length === 0) {
                showCustomToast({ message: "Please assign a category" });
              } else {
                categoryUpdate();
                editCategoryStore.setReloadCategories(!editCategoryStore.reloadcategories);
              }
            }}
          />
        </div>
      ) : null}
      <div className="mt-3">
        <ActionButton
          title="Close"
          bgColor="bg-[#f2f2f2]"
          titleColor="text-skin-base"
          click={() => {
            editCategoryStore.setDisplayCategoriesSheet(false);
          }}
        />
      </div>
      <BottomSheet
        className="backdrop-blur-bottomSheet"
        onDismiss={() => {
          editCategoryStore.setDisplayCategoriesSheet(false);
          editCategoryStore.setReloadCategories(!editCategoryStore.reloadcategories);
        }}
        open={editCategoryStore.displayCategoriesSheet}
        style={{
          borderRadius: 24,
        }}
        children={<ShowCategories />}
        defaultSnap={300}
      ></BottomSheet>
    </div>
  );
};

export default EditCategory;
