"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { resetPasswordSchema } from "@/schemas/authSchema";
import Spinner from "../ui/spinner";
import useResetPassword from "@/hooks/auth/useResetPassword";
import FormPassword from "../forms-fields/FormPassword";
import { setFormErrors } from "@/utils/handleApiError";

export default function ResetPasswordForm() {
  const { mutate, isPending } = useResetPassword();

  const form = useForm<resetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  function onSubmit(values: resetPasswordSchema) {
    mutate(values, {
      onError: (err) => {
        setFormErrors(form, err);
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormPassword<resetPasswordSchema>
          control={form.control}
          name="newPassword"
          placeholder="كلمة المرور"
          autoComplete="new-password"
          className="h-13"
        />

        <Button
          disabled={isPending}
          className="w-full text-white py-2 transition rounded-2xl">
          {isPending ? <Spinner /> : "استعادة كلمة المرور"}
        </Button>
      </form>
    </Form>
  );
}
