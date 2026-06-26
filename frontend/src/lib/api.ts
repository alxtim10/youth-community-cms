// src/lib/api.ts

// export const API_URL = "https://simuda.duckdns.org/api";
export const API_URL = "http://127.0.0.1:3000/api";

export async function getDashboard() {
  const res = await fetch(`${API_URL}/dashboard/`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getMonthlyAttendance(
  year?: string,
  month?: string
) {
  const params =
    new URLSearchParams();

  if (year) {
    params.append("year", year);
  }

  if (month) {
    params.append("month", month);
  }

  const res = await fetch(
    `${API_URL}/analytics/monthly-attendance/?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch monthly attendance"
    );
  }

  return res.json();
}

export async function getMembers(search = "", page = 1) {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  params.append("page", String(page));

  const res = await fetch(`${API_URL}/members/?${params.toString()}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getFellowships(search = "", page = 1) {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  params.append("page", String(page));

  const res = await fetch(`${API_URL}/fellowships/?${params.toString()}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getFiles(search = "") {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  const res = await fetch(`${API_URL}/files/?${params.toString()}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function createFellowship(data: any) {
  const res = await fetch(`${API_URL}/fellowships/`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getFellowship(id: string) {
  const res = await fetch(`${API_URL}/fellowships/${id}/`, {
    cache: "no-store",
  });

  return res.json();
}

export async function updateFellowship(id: string, data: any) {
  const res = await fetch(`${API_URL}/fellowships/${id}/`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteFellowship(id: number) {
  const res = await fetch(`${API_URL}/fellowships/${id}/`, {
    method: "DELETE",
  });

  return res;
}

// src/lib/api.ts

export async function getAttendanceTrend(year?: string, month?: string) {
  const params = new URLSearchParams();

  if (year) {
    params.append("year", year);
  }

  if (month) {
    params.append("month", month);
  }

  const res = await fetch(
    `${API_URL}/analytics/attendance-trend/?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  return res.json();
}

export async function getFellowshipCount(year?: string, month?: string) {
  const params = new URLSearchParams();

  if (year) {
    params.append("year", year);
  }

  if (month) {
    params.append("month", month);
  }

  const res = await fetch(
    `${API_URL}/analytics/fellowship-count/?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  return res.json();
}

// src/lib/api.ts

export async function createMember(data: any) {
  const res = await fetch(`${API_URL}/members/`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getMember(id: string) {
  const res = await fetch(`${API_URL}/members/${id}/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();

    console.error(text);

    throw new Error("API Error");
  }

  return res.json();
}

export async function updateMember(id: string, data: any) {
  const res = await fetch(`${API_URL}/members/${id}/`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteMember(id: number) {
  return fetch(`${API_URL}/members/${id}/`, {
    method: "DELETE",
  });
}

// src/lib/api.ts

export async function createFile(data: any) {
  const res = await fetch(`${API_URL}/files/`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getFile(id: string) {
  const res = await fetch(`${API_URL}/files/${id}/`, {
    cache: "no-store",
  });

  return res.json();
}

export async function updateFile(id: string, data: any) {
  const res = await fetch(`${API_URL}/files/${id}/`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteFile(id: number) {
  return fetch(`${API_URL}/files/${id}/`, {
    method: "DELETE",
  });
}

// src/lib/api.ts

export async function getAllFellowships() {
  const res = await fetch(
    `${API_URL}/fellowships/?page_size=1000`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getUpcomingFellowship() {
  const res = await fetch(
    `${API_URL}/fellowships/?ordering=-date&page_size=1`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch upcoming fellowship"
    );
  }

  return res.json();
}
