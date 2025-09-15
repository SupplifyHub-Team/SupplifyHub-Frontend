"use client";

import { useForm } from "react-hook-form";
import FormInput from "../forms-fields/FormInput";
import FormTextArea from "../forms-fields/FormTextArea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contactSchema";
import { Form } from "../ui/form";
import usePostContact from "@/hooks/usePostContact";
import Spinner from "../ui/spinner";

export default function ContactUsForm() {
  const { mutate, isPending } = usePostContact();

  const form = useForm<contactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      queryText: "",
    },
  });

  const onSubmit = (data: contactSchema) => {
    console.log("Contact form submitted:", data);
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <fieldset disabled={isPending}>
          <div className="grid md:grid-cols-2 gap-6 mb-3">
            <FormInput<contactSchema>
              control={form.control}
              name="name"
              label="الاسم الكامل"
              placeholder="أدخل اسمك الكامل"
            />
            <FormInput<contactSchema>
              control={form.control}
              name="email"
              label="البريد الإلكتروني"
              placeholder="example@email.com"
              type="email"
            />
          </div>

          <FormTextArea<contactSchema>
            control={form.control}
            name="queryText"
            label="نص الرسالة"
            placeholder="اكتب رسالتك هنا..."
            rows={6}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all mt-4">
            {isPending ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                <Send className="w-5 h-5 ml-2" />
                <span>إرسال الرسالة</span>
              </>
            )}
          </Button>
        </fieldset>
      </form>
    </Form>
  );
}
