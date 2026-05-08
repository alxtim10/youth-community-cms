"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { createMember, updateMember } from "@/lib/api";

const schema = z.object({
  name: z.string().min(1),

  address: z.string(),

  gender: z.string(),

  phone: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function MembersForm({ initialData, memberId }: any) {
  const router = useRouter();

  const isEdit = !!memberId;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: initialData || {
      gender: "M",
    },
  });

  async function onSubmit(values: FormData) {
    try {
      if (isEdit) {
        await updateMember(memberId, values);

        toast.success("Member updated");
      } else {
        await createMember(values);

        toast.success("Member created");
      }

      router.push("/members");

      router.refresh();
    } catch (err) {
      toast.error("Something went wrong");

      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField label="Name" register={register("name")} />
        <InputField label="Address" register={register("address")} />
        <InputField label="Phone" register={register("phone")} />
        <SelectField label="Gender" register={register("gender")} />
      </div>
      <button
        disabled={isSubmitting}
        className="px-6 py-3 rounded-2xl bg-slate-900 text-white"
      >
        {isEdit ? "Update Member" : "Create Member"}
      </button>
    </form>
  );
}

function InputField({
  label,
  register,
  type = "text",
  autoFocus = false,
}: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        autoFocus={autoFocus}
        {...register}
        className="w-full rounded-2xl border bg-white px-4 py-3"
      />
    </div>
  );
}

function SelectField({ label, register }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <select
        {...register}
        className="w-full rounded-2xl border bg-white px-4 py-3"
      >
        <option value="M">Male</option>

        <option value="F">Female</option>
      </select>
    </div>
  );
}
