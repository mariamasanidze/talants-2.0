// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Star, Briefcase, MapPin, DollarSign, Unlock } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Talent } from '@/types';


// interface TalentCardProps {
//   talent: Talent;
//   index?: number;
// }

// export const TalentCard = ({ talent, index = 0 }: TalentCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <Card className="cosmic-card group hover:shadow-glow transition-all duration-300">
//         <CardContent className="p-6">
//           {/* Header */}
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="text-lg font-semibold text-foreground">
//                 {talent.candidateNumber}
//               </h3>
//               <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                 <Briefcase className="w-4 h-4" />
//                 <span>{talent.seniority} • {talent.yearsExperience} years</span>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="flex items-center gap-1 text-primary font-semibold">
//                 <Star className="w-4 h-4 fill-current" />
//                 <span>{talent.testScores.overall}/100</span>
//               </div>
//               <Badge 
//                 variant={talent.availability === 'Available' ? 'default' : 'secondary'}
//                 className="text-xs mt-1"
//               >
//                 {talent.availability}
//               </Badge>
//             </div>
//           </div>

//           {/* Skills with Proficiency */}
//           <div className="mb-4">
//             <div className="flex flex-wrap gap-1">
//               {talent.skills.slice(0, 4).map((skill, skillIndex) => {
//                 if (typeof skill === 'string') {
//                   return (
//                     <Badge key={skill} variant="secondary" className="text-xs">
//                       {skill}
//                     </Badge>
//                   );
//                 }
//                 return (
//                   <Badge key={skill.name || skillIndex} variant="secondary" className="text-xs">
//                     {skill.name} ({skill.proficiency})
//                   </Badge>
//                 );
//               })}
//               {talent.skills.length > 4 && (
//                 <Badge variant="outline" className="text-xs">
//                   +{talent.skills.length - 4} more
//                 </Badge>
//               )}
//             </div>
//           </div>

//           {/* Industry & Work Type */}
//           {(talent.industry || talent.workType) && (
//             <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
//               <div className="flex flex-wrap gap-1">
//                 {talent.industry?.slice(0, 2).map((ind) => (
//                   <Badge key={ind} variant="outline" className="text-xs">
//                     {ind}
//                   </Badge>
//                 ))}
//               </div>
//               {talent.workType && <span className="text-xs">{talent.workType}</span>}
//             </div>
//           )}

//           {/* Location & Salary */}
//           <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
//             <div className="flex items-center gap-1">
//               <MapPin className="w-4 h-4" />
//               <span>{talent.location}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <DollarSign className="w-4 h-4" />
//               <span>
//                 ${talent.salaryRange.min}k-${talent.salaryRange.max}k
//               </span>
//             </div>
//           </div>

//           {/* Last Project */}
//           <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//             <strong>Recent:</strong> {talent.lastProject}
//           </p>

//           {/* Action Buttons */}
//           <div className="flex gap-2">
//             <Button asChild variant="outline" className="flex-1">
//               <Link to={`/talent/${talent.id}`}>
//                 View Profile
//               </Link>
//             </Button>
//             <Button variant="cosmic" className="flex-1">
//               Shortlist
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

//before mock data


import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Talent } from "@/types";

interface TalentCardProps {
  talent: Talent;
  index: number;
}

export const TalentCard = ({ talent, index }: TalentCardProps) => {
  const [shortlisted, setShortlisted] = useState<boolean>(() => {
    const saved = JSON.parse(localStorage.getItem("shortlistedTalents") || "[]");
    return saved.some((t: Talent) => t.id === talent.id);
  });

  const handleShortlist = () => {
    const saved = JSON.parse(localStorage.getItem("shortlistedTalents") || "[]");

    if (!shortlisted) {
      const updated = [...saved, talent];
      localStorage.setItem("shortlistedTalents", JSON.stringify(updated));
      setShortlisted(true);
    } else {
      const updated = saved.filter((t: Talent) => t.id !== talent.id);
      localStorage.setItem("shortlistedTalents", JSON.stringify(updated));
      setShortlisted(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card
        className="
          !bg-gradient-to-br !from-[#0F172A] !to-[#1E293B] 
          !border !border-slate-700 
          hover:!border-blue-400 
          !text-white 
          !shadow-md hover:!shadow-blue-500/20 
          transition-all duration-300 rounded-2xl
        "
      >
        <CardContent className="p-6 space-y-4">
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
              {talent.skills.slice(0, 4).map((s, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-blue-200 border-blue-600/40 bg-blue-900/30 hover:bg-blue-800/40 transition"
                >
                  {typeof s === "string" ? s : s.name}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center pt-4">
            <span className="text-sm font-semibold text-blue-400">
              ${talent.salaryRange.min.toLocaleString()} – ${talent.salaryRange.max.toLocaleString()}
            </span>

            <Button
              size="sm"
              onClick={handleShortlist}
              className={`px-4 py-1 text-sm font-semibold rounded-md shadow-md transition-all duration-300 
                ${shortlisted
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white"
                  : "bg-gradient-to-r from-[#1E40AF] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3B82F6] text-white"
                }`}
            >
              {shortlisted ? "Shortlisted" : "Shortlist"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
