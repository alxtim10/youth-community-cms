"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createFellowship, updateFellowship } from "@/lib/api";
import SelectField from "./fellowship-select-field";

const monthOptions = [
  {
    label: "January",
    value: "January",
  },

  {
    label: "February",
    value: "February",
  },

  {
    label: "March",
    value: "March",
  },

  {
    label: "April",
    value: "April",
  },

  {
    label: "May",
    value: "May",
  },

  {
    label: "June",
    value: "June",
  },

  {
    label: "July",
    value: "July",
  },

  {
    label: "August",
    value: "August",
  },

  {
    label: "September",
    value: "September",
  },

  {
    label: "October",
    value: "October",
  },

  {
    label: "November",
    value: "November",
  },

  {
    label: "December",
    value: "December",
  },
];

const schema = z.object({
  month: z.string(),

  date: z.string(),

  theme: z.string(),

  bible_verse: z.string(),

  objective: z.string(),

  theme_description: z.string(),

  speaker: z.string(),

  speaker_pic: z.string(),

  speaker_status: z.string(),

  mc: z.string(),

  musician: z.string(),

  worship_team_pic: z.string(),

  worship_team_status: z.string(),

  attendance_count: z.number(),
});

type FormData = z.infer<typeof schema>;

export default function FellowshipForm({ initialData, fellowshipId }: any) {
  const router = useRouter();

  const isEdit = !!fellowshipId;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: initialData || {
      speaker_status: "NOT_DONE",
      worship_team_status: "NOT_DONE",
      attendance_count: 0,
    },
  });

  async function onSubmit(values: FormData) {
    console.log(values);
    try {
      if (isEdit) {
        await updateFellowship(fellowshipId, values);
        toast.success("Fellowship updated");
      } else {
        await createFellowship(values);
        toast.success("Fellowship created");
      }

      router.push("/fellowships");

      router.refresh();
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <SelectField
          label="Month"
          register={register("month")}
          options={monthOptions}
        />

        <InputField label="Date" type="date" register={register("date")} />

        <InputField label="Theme" register={register("theme")} />

        <InputField label="Bible Verse" register={register("bible_verse")} />

        <InputField label="Speaker" register={register("speaker")} />

        <InputField label="Speaker PIC" register={register("speaker_pic")} />

        <InputField label="MC" register={register("mc")} />

        <InputField label="Musician" register={register("musician")} />

        <InputField
          label="Worship PIC"
          register={register("worship_team_pic")}
        />

        <InputField
          label="Attendance"
          type="number"
          register={register("attendance_count", {
            valueAsNumber: true,
          })}
          autoFocus={false}
        />
      </div>

      <TextareaField label="Objective" register={register("objective")} />

      <TextareaField
        label="Theme Description"
        register={register("theme_description")}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <SelectField
          label="Speaker Status"
          register={register("speaker_status")}
          options={[
            {
              label: "DONE",
              value: "DONE",
            },

            {
              label: "NOT DONE",
              value: "NOT_DONE",
            },
          ]}
        />

        <SelectField
          label="Worship Status"
          register={register("worship_team_status")}
          options={[
            {
              label: "DONE",
              value: "DONE",
            },

            {
              label: "NOT DONE",
              value: "NOT_DONE",
            },
          ]}
        />
      </div>

      <button
        disabled={isSubmitting}
        className="px-6 py-3 rounded-2xl bg-slate-900 text-white"
      >
        {isEdit ? "Update Fellowship" : "Add Fellowship"}
      </button>
      {errors.theme && (
        <p className="text-sm text-red-500">{errors.theme.message}</p>
      )}
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

function TextareaField({ label, register }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <textarea
        rows={5}
        {...register}
        className="w-full rounded-2xl border bg-white px-4 py-3"
      />
    </div>
  );
}
