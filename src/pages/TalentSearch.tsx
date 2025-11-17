// import { useState, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import { Users } from 'lucide-react';
// import { fetchTalents } from "@/services/endpoints";
// import { Talent, TalentFilters } from '@/types';
// import { TalentCard } from '@/components/common/TalentCard';
// import { EmptyState } from '@/components/common/EmptyState';
// import { LoadingSpinner } from '@/components/ui/loading-spinner';
// import { SearchFilters } from '@/components/common/SearchFilters';
// import { PageHeader } from '@/components/common/PageHeader';

// const TalentSearch = () => {
//   const { t } = useTranslation();
//   const [talents, setTalents] = useState<Talent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [filters, setFilters] = useState<TalentFilters>({
//     skills: '',
//     seniority: '',
//     location: '',
//     minSalary: '',
//     maxSalary: '',
//     availability: ''
//   });

//   useEffect(() => {
//     loadTalents();
//   }, []);

//   const loadTalents = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await fetchTalents(filters);
// const data = (response.data as any).results || response.data;
// setTalents(data as Talent[]);

//     } catch (error) {
//       console.error('Failed to load talents:', error);
//       setError('Failed to load talents. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   }, [filters]);

//   const handleSearch = useCallback(() => {
//     loadTalents();
//   }, [loadTalents]);

//   const handleFiltersChange = useCallback((newFilters: TalentFilters) => {
//     setFilters(newFilters);
//   }, []);

//   const resetFilters = useCallback(() => {
//     const emptyFilters: TalentFilters = {
//       skills: '',
//       seniority: 'any',
//       location: 'any',
//       minSalary: '',
//       maxSalary: '',
//       availability: 'any'
//     };
//     setFilters(emptyFilters);
//   }, []);

//   return (
//     <div className="min-h-screen page-padding">
//       <div className="cosmic-container">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* <h1 className="text-4xl font-cosmic font-bold text-foreground mb-4">
//             Hire Bold <span className="text-primary text-glow">Hire Brilliant</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//            Meet the minds shaping tomorrow’s technology
//           </p> */}
//      <h1 className="text-4xl font-cosmic font-bold text-foreground mb-4">
//   {t('forCompanies.hireSection.title.part1')}{' '}
//   <span className="text-primary text-glow">{t('forCompanies.hireSection.title.highlight')}</span>
// </h1>

// <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//   {t('forCompanies.hireSection.subtitle')}
// </p>



//         </motion.div>
//         <div className="grid lg:grid-cols-4 gap-8">
       
//           <motion.div
//             className="lg:col-span-1"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <SearchFilters
//               filters={filters}
//               onFiltersChange={handleFiltersChange}
//               onSearch={handleSearch}
//               onReset={resetFilters}
//               isLoading={loading}
//             />
//           </motion.div>

         
//           <div className="lg:col-span-3">
//             {loading ? (
//               <div className="flex justify-center py-12">
//                 <LoadingSpinner size="lg" />
//               </div>
//             ) : error ? (
//               <EmptyState
//                 icon={Users}
//                 title="Error Loading Talents"
//                 description={error}
//                 actionLabel="Try Again"
//                 onAction={loadTalents}
//               />
//             ) : talents.length === 0 ? (
//               <EmptyState
//                 icon={Users}
//                 title="No talents found"
//                 description="Try adjusting your filters or search criteria"
//                 actionLabel="Reset Filters"
//                 onAction={resetFilters}
//               />
//             ) : (
//               <motion.div
//                 className="grid md:grid-cols-2 gap-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {talents.map((talent, index) => (
//                   <TalentCard key={talent.id} talent={talent} index={index} />
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TalentSearch;

// before adding mock data



// import { useState, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { Users } from "lucide-react";
// import { Talent, TalentFilters } from "@/types";
// import { TalentCard } from "@/components/common/TalentCard";
// import { EmptyState } from "@/components/common/EmptyState";
// import { LoadingSpinner } from "@/components/ui/loading-spinner";
// import { SearchFilters } from "@/components/common/SearchFilters";

// // Mock talents (kept as-is)
// const mockTalents: Talent[] = [
//   {
//     id: "1",
//     candidateNumber: "Candidate #2938",
//     skills: [
//       { name: "React", proficiency: "Expert" },
//       { name: "TypeScript", proficiency: "Expert" },
//       { name: "Node.js", proficiency: "Advanced" },
//       { name: "AWS", proficiency: "Advanced" },
//     ],
//     seniority: "Senior",
//     yearsExperience: 7,
//     location: "Remote (EU)",
//     availability: "Available",
//     lastProject:
//       "Led development of a microservices-based payment platform handling 10M+ transactions.",
//     testScores: { overall: 94, technical: 92, communication: 90 },
//     salaryRange: { min: 95000, max: 120000, currency: "$" },
//     industry: ["Fintech", "E-commerce", "SaaS"],
//     workType: "Full-time",
//   },
//   {
//     id: "2",
//     candidateNumber: "Candidate #1847",
//     skills: [
//       { name: "Python", proficiency: "Advanced" },
//       { name: "Django", proficiency: "Intermediate" },
//       { name: "PostgreSQL", proficiency: "Advanced" },
//     ],
//     seniority: "Mid-Level",
//     yearsExperience: 4,
//     location: "Remote (US)",
//     availability: "Available",
//     lastProject:
//       "Built patient data integration system with REST APIs and AI insights.",
//     testScores: { overall: 87, technical: 85, communication: 88 },
//     salaryRange: { min: 70000, max: 90000, currency: "$" },
//     industry: ["Healthcare", "AI", "Cloud"],
//     workType: "Full-time",
//   },
//   {
//     id: "3",
//     candidateNumber: "Candidate #3321",
//     skills: [
//       { name: "Python", proficiency: "Advanced" },
//       { name: "TensorFlow", proficiency: "Advanced" },
//       { name: "Pandas", proficiency: "Advanced" },
//       { name: "NLP", proficiency: "Advanced" },
//     ],
//     seniority: "Senior",
//     yearsExperience: 6,
//     location: "Berlin, Germany",
//     availability: "Busy",
//     lastProject:
//       "Created an NLP model for financial document analysis with 92% accuracy.",
//     testScores: { overall: 91, technical: 93, communication: 89 },
//     salaryRange: { min: 100000, max: 130000, currency: "$" },
//     industry: ["AI", "Finance", "Analytics"],
//     workType: "Full-time",
//   },
// ];

// const TalentSearch = () => {
//   const { t } = useTranslation();
//   const [talents, setTalents] = useState<Talent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filters, setFilters] = useState<TalentFilters>({
//     skills: "",
//     seniority: "",
//     location: "",
//     minSalary: "",
//     maxSalary: "",
//     availability: "",
//   });

//   const loadTalents = useCallback(async () => {
//     setLoading(true);
//     // Simulate request delay; use mock for now
//     await new Promise((r) => setTimeout(r, 400));
//     setTalents(mockTalents);
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     loadTalents();
//   }, [loadTalents]);

//   const handleFiltersChange = (newFilters: TalentFilters) => setFilters(newFilters);
//   const handleSearch = () => loadTalents();
//   const resetFilters = () =>
//     setFilters({
//       skills: "",
//       seniority: "any",
//       location: "any",
//       minSalary: "",
//       maxSalary: "",
//       availability: "any",
//     });


//   return (
//     <div className="min-h-screen page-padding">
//       <div className="cosmic-container">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl font-cosmic font-bold text-foreground mb-4">
//             {t("forCompanies.hireSection.title.part1", "Hire Bold")}{" "}
//             <span className="text-primary text-glow">
//               {t("forCompanies.hireSection.title.highlight", "Hire Brilliant")}
//             </span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             {t(
//               "forCompanies.hireSection.subtitle",
//               "Meet the minds shaping tomorrow’s technology"
//             )}
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Filters */}
//           <motion.div
//             className="lg:col-span-1"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <SearchFilters
//               filters={filters}
//               onFiltersChange={handleFiltersChange}
//               onSearch={handleSearch}
//               onReset={resetFilters}
//               isLoading={loading}
//             />
//           </motion.div>

//           {/* Results */}
//           <div className="lg:col-span-3">
//             {loading ? (
//               <div className="flex justify-center py-12">
//                 <LoadingSpinner size="lg" />
//               </div>
//             ) : talents.length === 0 ? (
//               <EmptyState
//                 icon={Users}
//                 title="No talents found"
//                 description="Try adjusting your filters or search criteria"
//                 actionLabel="Reset Filters"
//                 onAction={resetFilters}
//               />
//             ) : (
//               <motion.div
//                 className="grid md:grid-cols-2 gap-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {talents.map((talent, index) => (
//                   <TalentCard key={talent.id} talent={talent} index={index} />
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TalentSearch;



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users } from "lucide-react";
import { Talent, TalentFilters } from "@/types";
import { TalentCard } from "@/components/common/TalentCard";
import { EmptyState } from "@/components/common/EmptyState";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SearchFilters } from "@/components/common/SearchFilters";

// Mock talents (kept as-is)
const mockTalents: Talent[] = [
  {
    id: "1",
    candidateNumber: "Candidate #2938",
    skills: [
      { name: "React", proficiency: "Expert" },
      { name: "TypeScript", proficiency: "Expert" },
      { name: "Node.js", proficiency: "Advanced" },
      { name: "AWS", proficiency: "Advanced" },
    ],
    seniority: "Senior",
    yearsExperience: 7,
    location: "Remote (EU)",
    availability: "Available",
    lastProject:
      "Led development of a microservices-based payment platform handling 10M+ transactions.",
    testScores: { overall: 94, technical: 92, communication: 90 },
    salaryRange: { min: 95000, max: 120000, currency: "$" },
    industry: ["Fintech", "E-commerce", "SaaS"],
    workType: "Full-time",
  },
  {
    id: "2",
    candidateNumber: "Candidate #1847",
    skills: [
      { name: "Python", proficiency: "Advanced" },
      { name: "Django", proficiency: "Intermediate" },
      { name: "PostgreSQL", proficiency: "Advanced" },
    ],
    seniority: "Mid-Level",
    testScores: { overall: 87, technical: 85, communication: 88 },
    yearsExperience: 4,
    location: "Remote (US)",
    availability: "Available",
    lastProject:
      "Built patient data integration system with REST APIs and AI insights.",
    salaryRange: { min: 70000, max: 90000, currency: "$" },
  },
  {
    id: "3",
    candidateNumber: "Candidate #3321",
    skills: [
      { name: "Python", proficiency: "Advanced" },
      { name: "TensorFlow", proficiency: "Advanced" },
      { name: "Pandas", proficiency: "Advanced" },
      { name: "NLP", proficiency: "Advanced" },
    ],
    seniority: "Senior",
    testScores: { overall: 91, technical: 93, communication: 89 },
    yearsExperience: 6,
    location: "Berlin, Germany",
    availability: "Busy",
    lastProject:
      "Created an NLP model for financial document analysis with 92% accuracy.",
    salaryRange: { min: 100000, max: 130000, currency: "$" },
  },
];

const TalentSearch = () => {
  const { t } = useTranslation();

  const [talents, setTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<TalentFilters>({
    skills: "",
    seniority: "any",
    location: "any",
    minSalary: "",
    maxSalary: "",
    availability: "any",
  });

  useEffect(() => {
    setTalents(mockTalents);
    setLoading(false);
  }, []);

  // 🔥 FILTERING FUNCTION (unchanged)
  const applyFilters = () => {
    let filtered = [...mockTalents];

    if (filters.skills.trim()) {
      const text = filters.skills.toLowerCase();
      filtered = filtered.filter((talent) =>
        talent.skills.some((s) =>
          (s.name || "").toLowerCase().includes(text)
        )
      );
    }

    if (filters.seniority !== "any" && filters.seniority !== "") {
      filtered = filtered.filter(
        (talent) => talent.seniority.toLowerCase() === filters.seniority
      );
    }

    if (filters.location !== "any" && filters.location !== "") {
      filtered = filtered.filter((talent) =>
        talent.location.toLowerCase().includes(filters.location)
      );
    }

    if (filters.availability !== "any" && filters.availability !== "") {
      filtered = filtered.filter(
        (talent) =>
          (talent.availability || "").toLowerCase() ===
          filters.availability.toLowerCase()
      );
    }

    if (filters.minSalary) {
      filtered = filtered.filter(
        (talent) => talent.salaryRange.min >= Number(filters.minSalary)
      );
    }

    if (filters.maxSalary) {
      filtered = filtered.filter(
        (talent) => talent.salaryRange.max <= Number(filters.maxSalary)
      );
    }

    setTalents(filtered);
  };

  // 🔥 ENABLE LIVE FILTERING
  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFiltersChange = (newFilters: TalentFilters) => {
    setFilters(newFilters);
  };

  // Press Enter ➜ apply filters
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      applyFilters();
    }
  };

  const resetFilters = () => {
    setFilters({
      skills: "",
      seniority: "any",
      location: "any",
      minSalary: "",
      maxSalary: "",
      availability: "any",
    });
    setTalents(mockTalents);
  };

  return (
    <div className="min-h-screen page-padding">
      <div className="cosmic-container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-cosmic font-bold text-foreground mb-4">
            {t("forCompanies.hireSection.title.part1", "Hire Bold")}{" "}
            <span className="text-primary text-glow">
              {t("forCompanies.hireSection.title.highlight", "Hire Brilliant")}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the minds shaping tomorrow’s technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SearchFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onSearch={applyFilters}
              onReset={resetFilters}
              isLoading={loading}
              onKeyDown={handleKeyDown} 
            />
          </motion.div>

          {/* Results */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : talents.length === 0 ? (
              <EmptyState
                icon={Users}
                title="No talents found"
                description="Try adjusting your filters or search criteria"
                actionLabel="Reset Filters"
                onAction={resetFilters}
              />
            ) : (
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {talents.map((talent, index) => (
                  <TalentCard key={talent.id} talent={talent} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSearch;
