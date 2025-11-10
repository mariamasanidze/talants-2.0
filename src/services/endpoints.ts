


import { API } from "./api";
import { Talent, Company, DashboardStats, TestResult, APIResponse } from "@/types";

// ===============================================================
// AUTH
// ===============================================================
// export const authAPI = {
//   login: (data: { email: string; password: string }) =>
//     API.post<{ access: string; refresh: string }>("/auth/login/", data),

//   refresh: (data: { refresh: string }) => API.post("/auth/refresh/", data),
//   me: () => API.get("/auth/me/"),
//   changePassword: (data: { old_password: string; new_password: string }) =>
//     API.put("/auth/change-password/", data),
// };
export const authAPI = {
  register: (data: { email: string; password: string; first_name?: string; last_name?: string }) =>
  API.post("/api/v1/auth/register/", data),

  login: (data: { email: string; password: string }) =>
    API.post<{ access: string; refresh: string }>("/auth/login/", data),
};


// ===============================================================
// COMPANIES
// ===============================================================
export const companiesAPI = {
  list: () => API.get<APIResponse<Company[]>>("/companies/"),
  create: (data: Partial<Company>) => API.post("/companies/", data),
  retrieve: (id: string | number) => API.get<Company>(`/companies/${id}/`),
  update: (id: string | number, data: Partial<Company>) =>
    API.put(`/companies/${id}/`, data),
  delete: (id: string | number) => API.delete(`/companies/${id}/`),
  dashboard: () => API.get<DashboardStats>("/companies/dashboard/"),
  me: () => API.get<Company>("/companies/me/"),
};

// ===============================================================
// TALENTS
// ===============================================================
export const talentsAPI = {
  list: () => API.get<APIResponse<Talent[]>>("/talents/"),
  create: (data: Partial<Talent>) => API.post("/talents/", data),
  retrieve: (id: string | number) => API.get<Talent>(`/talents/${id}/`),
  update: (id: string | number, data: Partial<Talent>) =>
    API.put(`/talents/${id}/`, data),
  delete: (id: string | number) => API.delete(`/talents/${id}/`),
  unlock: (id: string | number) => API.post(`/talents/${id}/unlock/`),
  myUnlocks: () => API.get("/talents/my_unlocks/"),
  search: (query: string) => API.get(`/talents/search/?q=${query}`),
};

// ===============================================================
// SHORTLIST
// ===============================================================
export const shortlistAPI = {
  list: () => API.get("/shortlist/"),
  create: (data: any) => API.post("/shortlist/", data),
  retrieve: (id: string | number) => API.get(`/shortlist/${id}/`),
  update: (id: string | number, data: any) =>
    API.put(`/shortlist/${id}/`, data),
  delete: (id: string | number) => API.delete(`/shortlist/${id}/`),
};

// ===============================================================
// TESTS
// ===============================================================
export const testsAPI = {
  list: () => API.get<APIResponse<TestResult[]>>("/tests/"),
  create: (data: any) => API.post("/tests/", data),
  retrieve: (id: string | number) => API.get(`/tests/${id}/`),
  update: (id: string | number, data: any) =>
    API.put(`/tests/${id}/`, data),
  delete: (id: string | number) => API.delete(`/tests/${id}/`),
};

// ===============================================================
// CONTACT
// ===============================================================
export const contactAPI = {
  list: () => API.get("/contact/"),
  create: (data: any) => API.post("/contact/", data),
};

// ===============================================================
// ADMIN
// ===============================================================
export const adminAPI = {
  createUser: (data: any) => API.post("/admin/create-user/", data),
  dashboard: () => API.get("/admin/dashboard/"),
};

// ===============================================================
// APPLICATIONS
// ===============================================================
export const applicationsAPI = {
  list: () => API.get("/applications/"),
  create: (data: any) => API.post("/applications/", data),
};

// ===============================================================
// NOTIFICATIONS
// ===============================================================
export const notificationsAPI = {
  list: () => API.get("/notifications/"),
  retrieve: (id: string | number) => API.get(`/notifications/${id}/`),
};

// ===============================================================
// TALENT SEARCH HELPER (used in TalentSearch.tsx)
// ===============================================================


export const fetchTalents = (filters: any) => {
  return API.get<Talent[]>("/talents/", { params: filters });
};

// ===============================================================
// EXPORT ALL
// ===============================================================
export default {
  authAPI,
  companiesAPI,
  talentsAPI,
  shortlistAPI,
  testsAPI,
  contactAPI,
  adminAPI,
  applicationsAPI,
  notificationsAPI,
};
