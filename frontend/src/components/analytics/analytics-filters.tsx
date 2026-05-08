"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

const months = [
  {
    value: "",
    label: "All Months",
  },

  {
    value: "1",
    label: "January",
  },

  {
    value: "2",
    label: "February",
  },

  {
    value: "3",
    label: "March",
  },

  {
    value: "4",
    label: "April",
  },

  {
    value: "5",
    label: "May",
  },

  {
    value: "6",
    label: "June",
  },

  {
    value: "7",
    label: "July",
  },

  {
    value: "8",
    label: "August",
  },

  {
    value: "9",
    label: "September",
  },

  {
    value: "10",
    label: "October",
  },

  {
    value: "11",
    label: "November",
  },

  {
    value: "12",
    label: "December",
  },
];

export default function AnalyticsFilters() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  function updateParam(
    key: string,
    value: string
  ) {
    const params =
      new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(
      `/analytics?${params.toString()}`
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      <select
        defaultValue={
          searchParams.get("year") ||
          ""
        }
        onChange={(e) =>
          updateParam(
            "year",
            e.target.value
          )
        }
        className="px-4 py-3 rounded-2xl border bg-white shadow-sm"
      >
        <option value="">
          All Years
        </option>

        <option value="2025">
          2025
        </option>

        <option value="2026">
          2026
        </option>

        <option value="2027">
          2027
        </option>
      </select>

      <select
        defaultValue={
          searchParams.get("month") ||
          ""
        }
        onChange={(e) =>
          updateParam(
            "month",
            e.target.value
          )
        }
        className="px-4 py-3 rounded-2xl border bg-white shadow-sm"
      >
        {months.map((month) => (
          <option
            key={month.value}
            value={month.value}
          >
            {month.label}
          </option>
        ))}
      </select>
    </div>
  );
}