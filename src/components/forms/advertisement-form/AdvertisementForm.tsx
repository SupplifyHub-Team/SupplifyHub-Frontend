"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/forms-fields/FormInput";
import { advertisementSchema } from "@/schemas/advertisementSchema";
import FormDropzone from "@/components/forms-fields/form-dropzone/FormDropzone";
import AdvertisementPreview from "@/components/AdvertisementPreview";
import { Button } from "@/components/ui/button";
import usePostAdvertisement from "@/hooks/advertisements/usePostAdvertisement";
import Spinner from "@/components/ui/spinner";
import { setFormErrors } from "@/utils/handleApiError";

export default function AdvertisementForm() {
  const { mutate, isPending, error } = usePostAdvertisement();
  const form = useForm<advertisementSchema>({
    resolver: zodResolver(advertisementSchema),
    defaultValues: {
      Title: "",
      TargetUrl: "",
      ImageFile: undefined,
    },
  });
  function onSubmit(values: advertisementSchema) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
      },
      onError: (err) => {
        setFormErrors(form, err);
      },
    });
  }
  console.log(error);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <fieldset disabled={isPending} className="space-y-6">
              <FormInput
                placeholder="عنوان الإعلان"
                label="عنوان الإعلان"
                name="Title"
                labelClassName="text-lg"
                description="عنوان تسمية من اجل ادارة مسؤلين المنصة"
                control={form.control}
              />

              <FormDropzone
                control={form.control}
                name="ImageFile"
                label="صورة الإعلان (سيتم عرضها في الصفحة الرئيسية)"
                multiple={false}
                accept={{ "image/*": [] }}
              />

              <FormInput
                placeholder="https://example.com"
                label="رابط (اختياري)"
                name="TargetUrl"
                labelClassName="text-lg"
                control={form.control}
                description="عند الضغط على صورة الاعلان سيتم فتح الرابط"
              />

              <Button variant="gradient-indigo" className="w-full">
                {isPending ? <Spinner /> : "طلب نشر الإعلان"}
              </Button>
            </fieldset>

            {/* Preview */}
            <AdvertisementPreview
              imageFile={form.watch("ImageFile")}
              targetUrl={form.watch("TargetUrl")}
              title={form.watch("Title")}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
