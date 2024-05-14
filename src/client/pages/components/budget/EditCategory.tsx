import React, { useState } from "react";
import { FiCheckCircle, FiPlus, FiTag, FiX } from "react-icons/fi";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useQuery } from "react-query";

import useTransactionStore from "client/store/transactionStore";
import { applyAsterix, dateFormat } from "client/utils/Formatters";
import useUserStore from "client/store/userStore";
import { updateCategory } from "client/api/categories";
import { showCustomToast } from "client/utils/Toast";
import { IConfig, useConfigurationStore } from "client/store/configuration";

import TransactionAmountView from "../../components/budget/TransactionAmountView";
import { TextInput, TextInputWithPopup } from "../../components/Input";
import MainButton from "../../components/MainButton";

import ShowCategories from "../../components/budget/ShowCategory";

const EditCategory = () => {
  const editCategoryStore = useTransactionStore((state: any) => state);
  const categoryData = editCategoryStore.uncategorizedTransaction;
  const transactedAt = new Date(categoryData?.transacted_at);
  const userStore = useUserStore((state: any) => state);
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
      <div
        className="flex flex-row justify-start mb-4"
        onClick={() => editCategoryStore.setOpenEditCategorySheet(false)}
      >
        <FiX size="1.5rem" color="#6f89a5" />
      </div>
      <TransactionAmountView
        amount={categoryData?.amount}
        transactedAt={dateFormat(transactedAt)}
      />
      <div className="mt-7">
        <TextInputWithPopup
          placeHolder="Assign a category"
          label="Transaction category"
          value={
            editCategoryStore.category ? editCategoryStore.category.name : ""
          }
          leadingIcon={<FiPlus size="1.375rem" />}
          hasValue={!!editCategoryStore.category?.name}
          onClick={() => {
            editCategoryStore.setDisplayCategoriesSheet(true);
          }}
          addValue={(e) => e}
          clearInput={() => editCategoryStore.setCategory({})}
        />
      </div>
      <div className="mt-4">
        <TextInput
          placeHolder=""
          label="Account"
          hasValue={false}
          value={
            userStore.user.external_linked_accounts.length > 0
              ? `${
                  userStore.user?.external_linked_accounts[0].type
                } ${applyAsterix({
                  str: `${userStore.user?.external_linked_accounts[0].account_number}`,
                  mask: "*",
                  n: 1,
                })}`
              : ""
          }
          leadingIcon={<FiCheckCircle size="1.375rem" />}
          addValue={(e) => {}}
          clearInput={() => {}}
          onClick={() => {}}
        />
      </div>
      <div className="mt-4">
        <TextInput
          placeHolder=""
          hasValue={false}
          label="Payment recipient"
          value={
            editCategoryStore.receipient ? editCategoryStore.receipient : ""
          }
          leadingIcon={<FiTag size="1.375rem" />}
          addValue={(e) => {
            editCategoryStore.setRecepient(e);
          }}
          clearInput={() => {
            editCategoryStore.setRecepient("");
          }}
          onClick={() => {}}
        />
      </div>
      <div className="mt-4">
        <div
          className={`font-poppins font-medium text-xs tracking-subtitle mb-2 text-skin-base`}
        >
          Note
        </div>
        <textarea
          rows={8}
          placeholder="(optional)"
          className="border-skin-base w-full border rounded mb-3 focus:border-skin-base"
          onChange={(e) => editCategoryStore.setNote(e.target.value)}
        />
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
                }
              }}
            />
          </div>
        ) : null}
      </div>
      <BottomSheet
        className="backdrop-blur-bottomSheet"
        onDismiss={() => {
          editCategoryStore.setDisplayCategoriesSheet(false);
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
