"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  createFile,
  updateFile,
} from "@/lib/api";

const schema = z.object({
  name: z.string().min(1),

  url: z.string().url(),

  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function FilesForm({
  initialData,
  fileId,
}: any) {
  const router = useRouter();

  const isEdit = !!fileId;

  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting,
    },
  } = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: initialData || {},
  });

  async function onSubmit(
    values: FormData
  ) {
    try {
      if (isEdit) {
        await updateFile(
          fileId,
          values
        );

        toast.success(
          "File updated"
        );
      } else {
        await createFile(
          values
        );

        toast.success(
          "File created"
        );
      }

      router.push("/files");

      router.refresh();
    } catch (err) {
      toast.error(
        "Something went wrong"
      );

      console.error(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <InputField
        label="File Name"
        register={register("name")}
      />

      <InputField
        label="Google Drive / Sheets URL"
        register={register("url")}
      />

      <TextareaField
        label="Description"
        register={register(
          "description"
        )}
      />

      <button
        disabled={isSubmitting}
        className="px-6 py-3 rounded-2xl bg-slate-900 text-white"
      >
        {isEdit
          ? "Update File"
          : "Create File"}
      </button>
    </form>
  );
}

function InputField({
  label,
  register,
}: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        {...register}
        className="w-full rounded-2xl border bg-white px-4 py-3"
      />
    </div>
  );
}

function TextareaField({
  label,
  register,
}: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <textarea
        rows={5}
        {...register}
        className="w-full rounded-2xl border bg-white px-4 py-3"
      />
    </div>
  );
}