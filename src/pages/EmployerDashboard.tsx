// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { 
//   Users, 
//   UserCheck, 
//   Calendar, 
//   Briefcase, 
//   Plus,
//   Search,
//   Filter,
//   MoreVertical,
//   Star,
//   MessageSquare,
//   Settings,
//   Bell,
//   TrendingUp,
//   Eye,
//   Download,
//   Building,
//   Heart,
//   Mail
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Progress } from '@/components/ui/progress';
// import { Input } from '@/components/ui/input';
// import JobManager from '@/components/employer/JobManager';
// import ShortlistManager from '@/components/employer/ShortlistManager';

// const EmployerDashboard = () => {
//   const [company] = useState({
//     name: 'TechCorp Inc.',
//     logo: '',
//     plan: 'Professional'
//   });

//   const [stats] = useState({
//     activeJobs: 12,
//     candidates: 156,
//     interviews: 8,
//     hires: 42
//   });

//   const [activeJobs] = useState([
//     {
//       id: 1,
//       title: 'Senior React Developer',
//       department: 'Engineering',
//       applicants: 34,
//       status: 'active',
//       postedDate: '2024-01-20',
//       priority: 'high'
//     },
//     {
//       id: 2,
//       title: 'AI/ML Engineer',
//       department: 'Data Science',
//       applicants: 28,
//       status: 'active',
//       postedDate: '2024-01-18',
//       priority: 'medium'
//     },
//     {
//       id: 3,
//       title: 'Product Manager',
//       department: 'Product',
//       applicants: 52,
//       status: 'paused',
//       postedDate: '2024-01-15',
//       priority: 'low'
//     }
//   ]);

//   const [recentCandidates] = useState([
//     {
//       id: 1,
//       name: 'Alex Johnson',
//       title: 'Senior AI Engineer',
//       score: 95,
//       status: 'interview',
//       appliedFor: 'AI/ML Engineer',
//       avatar: ''
//     },
//     {
//       id: 2,
//       name: 'Sarah Chen',
//       title: 'React Developer',
//       score: 88,
//       status: 'reviewing',
//       appliedFor: 'Senior React Developer',
//       avatar: ''
//     },
//     {
//       id: 3,
//       name: 'Mike Rodriguez',
//       title: 'Product Manager',
//       score: 92,
//       status: 'shortlisted',
//       appliedFor: 'Product Manager',
//       avatar: ''
//     }
//   ]);

//   const [upcomingInterviews] = useState([
//     {
//       id: 1,
//       candidate: 'Alex Johnson',
//       position: 'AI/ML Engineer',
//       date: 'Today',
//       time: '2:00 PM',
//       type: 'Technical'
//     },
//     {
//       id: 2,
//       candidate: 'Sarah Chen',
//       position: 'Senior React Developer',
//       date: 'Tomorrow',
//       time: '10:00 AM',
//       type: 'Culture Fit'
//     }
//   ]);

//   const [analytics] = useState({
//     applicationTrend: 85,
//     hireRate: 12,
//     timeToHire: 18,
//     candidateScore: 87
//   });

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           className="mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-cosmic font-bold text-foreground">
//                 {company.name} Dashboard
//               </h1>
//               <p className="text-muted-foreground">
//                 Manage your hiring pipeline and track recruitment metrics
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <Badge variant="secondary">{company.plan} Plan</Badge>
//               <Button variant="outline" size="sm">
//                 <Bell className="w-4 h-4 mr-2" />
//                 Notifications
//               </Button>
//               <Button variant="cosmic" size="sm" asChild>
//                 <Link to="/settings">
//                   <Settings className="w-4 h-4 mr-2" />
//                   Settings
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </motion.div>


//         <div className="max-w-4xl mx-auto">
//           <ShortlistManager />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerDashboard;


// before mock data

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Bell, Settings, Users, X } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Talent } from "@/types";

// const EmployerDashboard = () => {
//   const [company] = useState({
//     name: "TechCorp Inc.",
//     logo: "",
//     plan: "Professional",
//   });

//   const [shortlisted, setShortlisted] = useState<Talent[]>([]);

//   // ✅ Load shortlisted talents from localStorage
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("shortlistedTalents") || "[]");
//     setShortlisted(saved);
//   }, []);

//   // ✅ Remove candidate from shortlist
//   const handleRemove = (id: string) => {
//     const updated = shortlisted.filter((t) => t.id !== id);
//     setShortlisted(updated);
//     localStorage.setItem("shortlistedTalents", JSON.stringify(updated));
//   };

//   return (
//     <div className="min-h-screen py-10 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <motion.div
//           className="mb-10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div>
//               <h1 className="text-3xl font-cosmic font-bold text-foreground">
//                 {company.name} Dashboard
//               </h1>
//               <p className="text-muted-foreground">
//                 Manage your shortlisted candidates and recruitment activity
//               </p>
//             </div>

//             <div className="flex items-center gap-4">
//               <Badge variant="secondary">{company.plan} Plan</Badge>
//               <Button variant="outline" size="sm">
//                 <Bell className="w-4 h-4 mr-2" /> Notifications
//               </Button>
//               <Button variant="cosmic" size="sm">
//                 <Settings className="w-4 h-4 mr-2" /> Settings
//               </Button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Shortlisted Candidates */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
//             <Users className="w-5 h-5 text-primary" /> Shortlisted Candidates
//           </h2>

//           {shortlisted.length === 0 ? (
//             <div className="text-center py-20 bg-slate-800/40 rounded-xl border border-slate-700">
//               <p className="text-lg text-muted-foreground">
//                 No shortlisted candidates yet.
//               </p>
//               <p className="text-sm mt-2 text-slate-400">
//                 Go to <span className="text-primary font-semibold">Find Talent</span> to shortlist candidates.
//               </p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 gap-6">
//               {shortlisted.map((talent) => (
//                 <Card
//                   key={talent.id}
//                   className="relative cosmic-card bg-gradient-to-r from-blue-800 to-indigo-600 text-white shadow-lg"
//                 >
//                   {/* Remove Icon */}
//                   <button
//                     onClick={() => handleRemove(talent.id)}
//                     className="absolute top-3 right-3 text-white/70 hover:text-red-400 transition"
//                     title="Remove from shortlist"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>

//                   <CardContent className="p-6">
//                     <h3 className="text-lg font-bold mb-1">
//                       {talent.candidateNumber}
//                     </h3>
//                     <p className="text-sm opacity-90 mb-2">
//                       {talent.seniority} • {talent.yearsExperience} years
//                     </p>
//                     <p className="text-sm opacity-80">{talent.location}</p>
//                     <p className="text-sm opacity-70 mt-2">{talent.lastProject}</p>

//                     <div className="flex flex-wrap gap-2 mt-3">
//                       {talent.skills.slice(0, 3).map((s, i) => (
//                         <Badge key={i} variant="outline">
//                           {typeof s === "string" ? s : s.name}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default EmployerDashboard;


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bell, Settings, Users, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Talent } from "@/types";

const EmployerDashboard = () => {
  const [company] = useState({
    name: "TechCorp Inc.",
    logo: "",
    plan: "Professional",
  });

  const [shortlisted, setShortlisted] = useState<Talent[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("shortlistedTalents") || "[]");
    setShortlisted(saved);
  }, []);

  const handleRemove = (id: string) => {
    const updated = shortlisted.filter((t) => t.id !== id);
    setShortlisted(updated);
    localStorage.setItem("shortlistedTalents", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-cosmic font-bold text-foreground">
                {company.name} Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your shortlisted candidates and recruitment activity
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="secondary">{company.plan} Plan</Badge>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" /> Notifications
              </Button>
              <Button variant="cosmic" size="sm">
                <Settings className="w-4 h-4 mr-2" /> Settings
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Shortlisted Candidates */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Shortlisted Candidates
          </h2>

          {shortlisted.length === 0 ? (
            <div className="text-center py-20 bg-slate-800/40 rounded-xl border border-slate-700">
              <p className="text-lg text-muted-foreground">
                No shortlisted candidates yet.
              </p>
              <p className="text-sm mt-2 text-slate-400">
                Go to <span className="text-primary font-semibold">Find Talent</span> to shortlist candidates.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {shortlisted.map((talent, i) => (
                <motion.div
                  key={talent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card
                    className="
                      relative 
                      bg-gradient-to-br from-[#0F172A] to-[#1E293B]
                      border border-slate-700 hover:border-blue-400
                      text-white shadow-md hover:shadow-blue-500/20
                      transition-all duration-300 rounded-2xl
                    "
                  >
                    {/* Remove button */}
                    <button
                      onClick={() => handleRemove(talent.id)}
                      className="absolute top-3 right-3 text-white/70 hover:text-red-400 transition"
                      title="Remove from shortlist"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <CardContent className="p-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-blue-300">
                          {talent.candidateNumber}
                        </h3>
                        <span className="text-sm text-slate-300">
                          {talent.seniority} • {talent.yearsExperience} yrs
                        </span>
                      </div>

                      <p className="text-sm text-slate-400">{talent.location}</p>

                      <p className="text-sm text-slate-200 leading-relaxed">
                        {talent.lastProject}
                      </p>

                      {Array.isArray(talent.skills) && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {talent.skills.slice(0, 4).map((s, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-blue-200 border-blue-600/40 bg-blue-900/30 hover:bg-blue-800/40 transition"
                            >
                              {typeof s === "string" ? s : s.name}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="pt-3">
                        <span className="text-sm font-semibold text-blue-400">
                          ${talent.salaryRange.min.toLocaleString()} – ${talent.salaryRange.max.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
