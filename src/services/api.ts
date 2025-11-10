

// import axios from "axios";
// import {
//   Talent,
//   Company,
//   APIResponse,
//   TalentFilters,
//   DashboardStats,
//   TestResult,
//   JobOffer,
// } from "@/types";

// // =================================================================
// // REAL BACKEND API SERVICE - AXIOS INSTANCE
// // =================================================================

// export const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Automatically attach token if it exists
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // =================================================================
// // AUTHENTICATION FUNCTIONS
// // =================================================================

// export const loginUser = async (email: string, password: string) => {
//   const response = await API.post<{ access: string; refresh: string }>(
//     "/users/login/",
//     { email, password }
//   );
//   return response.data;
// };

// export const signupUser = async (userData: any) => {
//   const response = await API.post("/users/signup/", userData);
//   return response.data;
// };

// export const fetchUserProfile = async () => {
//   const response = await API.get("/users/me/");
//   return response.data;
// };

// // =================================================================
// // MOCK DATA (for development fallback, if needed)
// // =================================================================

// export const mockTalents: Talent[] = [
//   {
//     id: "1",
//     candidateNumber: "2938",
//     skills: ["React", "TypeScript", "Node.js", "Python", "AI/ML"],
//     seniority: "Senior" as const,
//     yearsExperience: 6,
//     location: "Remote",
//     availability: "Available",
//     lastProject: "AI-powered e-commerce recommendation engine",
//     testScores: { overall: 92, technical: 95, communication: 88 },
//     salaryRange: { min: 80000, max: 120000, currency: "USD" },
//     locked: {
//       name: "Sarah Chen",
//       photo: "/api/placeholder/150/150",
//       email: "sarah.chen@email.com",
//       portfolio: "https://sarahchen.dev",
//       fullTestReports: {},
//       detailedProjects: [],
//     },
//   },
//   {
//     id: "2",
//     candidateNumber: "4712",
//     skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "MLOps"],
//     seniority: "Senior" as const,
//     yearsExperience: 8,
//     location: "USA/Remote",
//     availability: "Available in 2 weeks",
//     lastProject: "Computer vision system for autonomous vehicles",
//     testScores: { overall: 96, technical: 98, communication: 94 },
//     salaryRange: { min: 100000, max: 150000, currency: "USD" },
//     locked: {
//       name: "Alex Rodriguez",
//       photo: "/api/placeholder/150/150",
//       email: "alex.rodriguez@email.com",
//       portfolio: "https://alexml.com",
//       fullTestReports: {},
//       detailedProjects: [],
//     },
//   },
//   {
//     id: "3",
//     candidateNumber: "1847",
//     skills: ["Vue.js", "Laravel", "AWS", "Docker", "Microservices"],
//     seniority: "Mid-Level" as const,
//     yearsExperience: 4,
//     location: "Europe/Remote",
//     availability: "Available",
//     lastProject: "Cloud-native microservices architecture for fintech",
//     testScores: { overall: 87, technical: 89, communication: 85 },
//     salaryRange: { min: 60000, max: 85000, currency: "EUR" },
//     locked: {
//       name: "Elena Kowalski",
//       photo: "/api/placeholder/150/150",
//       email: "elena.kowalski@email.com",
//       portfolio: "https://elenadev.io",
//       fullTestReports: {},
//       detailedProjects: [],
//     },
//   },
// ];

// // =================================================================
// // FALLBACK MOCK ENDPOINTS (only used when backend is unavailable)
// // =================================================================

// export const fetchTalents = async (
//   filters: Partial<TalentFilters> = {}
// ): Promise<APIResponse<Talent[]>> => {
//   await new Promise((resolve) => setTimeout(resolve, 800));

//   let filteredTalents = [...mockTalents];
//   if (filters.skills) {
//     const skillsArray = filters.skills.toLowerCase().split(",").map((s) => s.trim());
//     filteredTalents = filteredTalents.filter((t) =>
//       skillsArray.some((skill) =>
//         t.skills.some((ts) => ts.toLowerCase().includes(skill))
//       )
//     );
//   }

//   if (filters.seniority && filters.seniority !== "any") {
//     filteredTalents = filteredTalents.filter(
//       (t) => t.seniority.toLowerCase() === filters.seniority?.toLowerCase()
//     );
//   }

//   if (filters.location && filters.location !== "any") {
//     filteredTalents = filteredTalents.filter((t) =>
//       t.location.toLowerCase().includes(filters.location?.toLowerCase() || "")
//     );
//   }

//   return {
//     data: filteredTalents,
//     total: filteredTalents.length,
//     page: 1,
//     totalPages: 1,
//     success: true,
//   };
// };

// // =================================================================
// // TEMP FIX - RESTORE mockStats SO SITE CAN LOAD
// // =================================================================
// export const mockStats = {
//   talents: 52340,
//   hires: 8925,
//   companies: 1250,
//   satisfaction: 98,
// };

// // =================================================================
// // FETCH TALENT BY ID
// // =================================================================
// export const fetchTalentById = async (id: string) => {
//   await new Promise((resolve) => setTimeout(resolve, 500));

//   const talent = mockTalents.find((t) => t.id === id);
//   if (!talent) throw new Error("Talent not found");

//   return talent;
// };


// export default API;


// //code that works ends here



import axios from "axios";
export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const fetchTalents = async (filters: any) => {
  return API.get('/talents/', { params: filters });
};


// ============================================================================
// RESPONSE INTERCEPTOR — TOKEN REFRESH + ERROR HANDLING
// ============================================================================
let isRefreshing = false;
let failedQueue: Array<{ resolve: any; reject: any }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If unauthorized (401), try refreshing token
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return API(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem("refresh");
      if (!refreshToken) {
        console.warn("No refresh token found. Logging out.");
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
       const response = await axios.post<{ access: string; refresh?: string }>(
  `${API.defaults.baseURL}/auth/refresh/`,
  { refresh: refreshToken }
);

const newAccessToken = response.data.access;

        localStorage.setItem("access", newAccessToken);

        processQueue(null, newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default API;