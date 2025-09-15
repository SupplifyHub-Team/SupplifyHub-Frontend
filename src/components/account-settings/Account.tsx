"use client";
import usePatchSupplierInfo from "@/hooks/supplier-profile/usePatchSupplierInfo";
import usePatchSupplierLogo from "@/hooks/supplier-profile/usePatchSupplierLogo";
import {
  editSupplierInfoSchema,
  editSupplierInfoSchemaInput,
  editSupplierInfoSchemaOutput,
} from "@/schemas/accountSettingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import AccountHeader from "./account-header/AccountHeader";
import AccountContactInfo from "./AccountContactInfo";
import AccountDescription from "./AccountDescription";
import AccountLocations from "./AccountLocations";
import AccountCategories from "./AccountCategories";
import AccountActions from "./AccountActions";
import { useCallback, useEffect, useState } from "react";
import AccountHeaderSkeleton from "./account-header/AccountHeaderSkeleton";
import useGetSupplierProfile from "@/hooks/supplier-profile/useGetSupplierProfile";
import SuggestCategoryInput from "./SuggestCategoryInput";

export default function Account() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const { data: supplier, isPending } = useGetSupplierProfile();
  const { mutate, isPending: isUpdating } = usePatchSupplierInfo();
  const { mutate: patchLogo, isPending: isUploadingLogo } =
    usePatchSupplierLogo();

  const form = useForm<
    editSupplierInfoSchemaInput,
    undefined,
    editSupplierInfoSchemaOutput
  >({
    resolver: zodResolver(editSupplierInfoSchema),
    defaultValues: {
      description: "",
      locations: [],
      logoUrl: null,
      CategoryIds: [],
    },
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    //@ts-expect-error i know this is a string array
    name: "locations",
  });

  const resetFormWithSupplier = useCallback(() => {
    form.reset({
      description: supplier?.data.description ?? "",
      locations: supplier?.data.locations?.filter(Boolean) ?? [],
      logoUrl: supplier?.data.logoURL ?? null,
      CategoryIds: supplier?.data.categories ?? [],
    });
  }, [supplier, form]);

  useEffect(() => {
    if (supplier) resetFormWithSupplier();
  }, [supplier, resetFormWithSupplier]);

  const onSubmit = (values: editSupplierInfoSchemaOutput) => {
    mutate(values, {
      onSuccess() {
        setIsEditMode(false);
        form.reset(values);
      },
    });
  };
  if (!supplier || isPending) {
    return <AccountHeaderSkeleton />;
  }

  return (
    <div className="min-h-screen">
      <div className=" mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-8">
              <div>
                <AccountHeader
                  supplier={supplier.data}
                  isPending={isPending}
                  logoPreview={logoPreview}
                  setLogoPreview={setLogoPreview}
                  patchLogo={patchLogo}
                  isUploadingLogo={isUploadingLogo}
                />
              </div>

              <div>
                <AccountContactInfo
                  supplier={supplier.data}
                  isPending={isPending}
                />
              </div>

              <div>
                <AccountDescription
                  supplier={supplier.data}
                  isPending={isPending}
                  isEditMode={isEditMode}
                />
              </div>

              <div>
                <AccountLocations
                  supplier={supplier.data}
                  isPending={isPending}
                  isEditMode={isEditMode}
                  fields={fields}
                  append={append}
                  remove={remove}
                />
              </div>

              <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
                <AccountCategories
                  isEditMode={isEditMode}
                  isPending={isPending}
                />

                <SuggestCategoryInput />
              </div>

              <div>
                <AccountActions
                  isEditMode={isEditMode}
                  setIsEditMode={setIsEditMode}
                  isUpdating={isUpdating}
                  isPending={isPending}
                  resetFormWithSupplier={resetFormWithSupplier}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
