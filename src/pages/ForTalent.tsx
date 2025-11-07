// import { motion } from 'framer-motion';
// import { ArrowRight, Users, Star, Globe, Clock, Award, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const ForTalent = () => {
//   const benefits = [
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Global Opportunities",
//       description: "Remote and international roles with world-leading companies."
//     },
//     {
//       icon: <Star className="w-6 h-6" />,
//       title: "Skill Validation",
//       description: "Showcase your expertise with verified skills and recognized certifications."
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Career Growth",
//       description: "Get tailored recommendations, upskill with our resources, and grow your career faster."
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "Flexible Work",
//       description: "Choose between full-time, contract, or part-time opportunities that fit your lifestyle."
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Competitive Rates",
//       description: "Earn competitive compensation for your skills and experience level."
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Quality Matches",
//       description: "Get matched with companies that value your specific skill set and experience."
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Active Companies" },
//     { number: "10,000+", label: "Successful Placements" },
//     { number: "95%", label: "Satisfaction Rate" },
//     { number: "150+", label: "Countries Served" }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//            <div className="text-center">
//              <motion.h1 
//                className="text-4xl md:text-6xl font-cosmic font-bold bg-gradient-nebula bg-clip-text text-transparent mb-6"
//                initial={{ opacity: 0, y: 20 }}
//                animate={{ opacity: 1, y: 0 }}
//                transition={{ duration: 0.8 }}
//              >
//                Your Next Big Career Move Starts Here
//              </motion.h1>
            
//              <motion.p 
//                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Join the most selective network of AI & tech professionals. Be discovered by top companies actively searching for your unique skills. 
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <Button 
//                 variant="cosmic" 
//                 size="lg"
//                 asChild
//                 className="group"
//               >
//                 <a href="/join-as-talent">
//                   Join as Talent
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section> 
    

//       {/* Stats Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 className="text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <div className="text-3xl md:text-4xl font-cosmic font-bold text-primary mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-muted-foreground">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-cosmic font-bold text-foreground mb-4">
//               Why Choose Our Platform?
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               We connect exceptional talent with extraordinary opportunities
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Card className="cosmic-card h-full hover:scale-105 transition-transform duration-300">
//                   <CardHeader>
//                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
//                       <div className="text-primary">
//                         {benefit.icon}
//                       </div>
//                     </div>
//                     <CardTitle>{benefit.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground">{benefit.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-cosmic font-bold text-foreground mb-4">
//               How It Works
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Four simple steps to unlock your career potential
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Apply",
//                 description: "Fill out our simple application form with your skills and experience"
//               },
//               {
//                 step: "02",
//                 title: "Get Evaluated",
//                 description: "Our team will review your profile and may contact you for further evaluation"
//               },
//               {
//                 step: "03",
//                 title: "Get Matched",
//                 description: "We'll connect you with companies looking for your specific skill set"
//               }
//             ].map((step, index) => (
//               <motion.div
//                 key={step.step}
//                 className="text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//               >
//                 <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6">
//                   <span className="text-2xl font-bold text-white">{step.step}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
//                 <p className="text-muted-foreground">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-cosmic font-bold text-foreground mb-6">
//               Ready to Take the Next Step?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Join thousands of talented professionals who have found their dream opportunities through our platform.
//             </p>
//             <Button 
//               variant="cosmic" 
//               size="lg"
//               asChild
//               className="group"
//             >
//               <a href="/join-as-talent">
//                 Join as Talent
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ForTalent;


import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, Globe, Clock, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const ForTalent = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, title: t('forTalent.benefits.global.title'), description: t('forTalent.benefits.global.description') },
    { icon: <Star className="w-6 h-6" />, title: t('forTalent.benefits.skill.title'), description: t('forTalent.benefits.skill.description') },
    { icon: <TrendingUp className="w-6 h-6" />, title: t('forTalent.benefits.growth.title'), description: t('forTalent.benefits.growth.description') },
    { icon: <Clock className="w-6 h-6" />, title: t('forTalent.benefits.flexibility.title'), description: t('forTalent.benefits.flexibility.description') },
    { icon: <Award className="w-6 h-6" />, title: t('forTalent.benefits.rate.title'), description: t('forTalent.benefits.rate.description') },
    { icon: <Users className="w-6 h-6" />, title: t('forTalent.benefits.match.title'), description: t('forTalent.benefits.match.description') }
  ];

  const stats = [
    { number: "500+", label: t('forTalent.stats.companies') },
    { number: "10,000+", label: t('forTalent.stats.placements') },
    { number: "95%", label: t('forTalent.stats.satisfaction') },
    { number: "150+", label: t('forTalent.stats.countries') }
  ];

  const steps = [
    { step: "01", title: t('forTalent.howItWorks.steps.apply.title'), description: t('forTalent.howItWorks.steps.apply.description') },
    { step: "02", title: t('forTalent.howItWorks.steps.evaluate.title'), description: t('forTalent.howItWorks.steps.evaluate.description') },
    { step: "03", title: t('forTalent.howItWorks.steps.match.title'), description: t('forTalent.howItWorks.steps.match.description') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-cosmic font-bold bg-gradient-nebula bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('forTalent.hero.title')}
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('forTalent.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="cosmic" size="lg" asChild className="group">
              <a href="/join-as-talent">
                {t('forTalent.hero.button')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-cosmic font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cosmic font-bold text-foreground mb-4">
            {t('forTalent.benefitsSection.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('forTalent.benefitsSection.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="cosmic-card h-full hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cosmic font-bold text-foreground mb-4">
            {t('forTalent.howItWorks.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('forTalent.howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-cosmic font-bold text-foreground mb-6">
              {t('forTalent.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('forTalent.cta.subtitle')}
            </p>
            <Button variant="cosmic" size="lg" asChild className="group">
              <a href="/join-as-talent">
                {t('forTalent.cta.button')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForTalent;
