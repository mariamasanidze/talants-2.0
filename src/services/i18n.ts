
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home ',
        findTalent: 'Find Talent',
        forCompanies: 'For Companies',
        forTalent: 'For Talent',
        pricing: 'Pricing',
        contact: 'Contact',
        dashboard: 'Dashboard',
        profile: 'Profile',
        logout: 'Logout'
      },
      hero: {
        title: 'Connecting Global Companies with Top AI & Tech Talent',
        subtitle: 'Hire smarter and faster with verified skills, AI-driven matching, and enterprise-grade security.',
        findTalent: 'Find Talent',
        joinTalent: 'Join as Talent',
        getStarted: 'Get Started'
      },
      whyChoose: {
        title: 'Why Choose Nebula',
        subtitle: 'We combine AI precision with human expertise to help you hire the right talent 3x faster and with confidence.',
      },
      features: {
        database: {
          title: 'Vast Talent Database',
          description: '50,000+ vetted AI & tech professionals ready to deliver on your projects today.'
        },
        testing: {
          title: 'Advanced Testing',
          description: 'We test real skills on real projects - so you only interview top performers.'
        },
        security: {
          title: 'Secure & Compliant',
          description: 'Enterprise-grade security & full GDPR compliance your data stays protected.'
        },
        matching: {
          title: 'Smart matching',
          description: 'AI-powered smart matching - the right talent, the right culture, the right time.'
        }
      },
      howItWorks: {
        title: 'How It',
        highlight: 'Works',
        subtitle: 'A fast, effective hiring process designed for tech-driven teams.',
        steps: {
          step1: {
            title: 'Define Your Needs',
            description: 'Tell us your goals, team culture, and requirements.'
          },
          step2: {
            title: 'AI Matching',
            description: 'Instantly get the best-fit candidates from our vetted talent pool.'
          },
          step3: {
            title: 'Connect & Hire',
            description: 'Interview with confidence and build your team without delays.'
          }
        }
      },
      trusted: {
        title: 'Trusted by Leading Companies',
        subtitle: 'Trusted by Innovators Worldwide – From startups to enterprises, Nebula helps companies scale faster with top AI & tech talent.'
      },
      cta: {
        title: 'Ready to Find Your Perfect Match?',
        subtitle: 'Hire Smarter. Scale Faster. Join thousands of global companies already building stronger teams with Nebula.',
        button1: 'Get Started',
        button2: 'Contact Sales'
      },
      forTalent: {
  hero: {
    title: "Your Next Big Career Move Starts Here",
    subtitle: "Join the most selective network of AI & tech professionals. Be discovered by top companies actively searching for your unique skills.",
    button: "Join as Talent"
  },
  stats: {
    companies: "Active Companies",
    placements: "Successful Placements",
    satisfaction: "Satisfaction Rate",
    countries: "Countries Served"
  },
  benefitsSection: {
    title: "Why Choose Our Platform?",
    subtitle: "We connect exceptional talent with extraordinary opportunities"
  },
  benefits: {
    global: { title: "Global Opportunities", description: "Remote and international roles with world-leading companies." },
    skill: { title: "Skill Validation", description: "Showcase your expertise with verified skills and recognized certifications." },
    growth: { title: "Career Growth", description: "Get tailored recommendations, upskill with our resources, and grow your career faster." },
    flexibility: { title: "Flexible Work", description: "Choose between full-time, contract, or part-time opportunities that fit your lifestyle." },
    rate: { title: "Competitive Rates", description: "Earn competitive compensation for your skills and experience level." },
    match: { title: "Quality Matches", description: "Get matched with companies that value your specific skill set and experience." }
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Four simple steps to unlock your career potential",
    steps: {
      apply: { title: "Apply", description: "Fill out our simple application form with your skills and experience" },
      evaluate: { title: "Get Evaluated", description: "Our team will review your profile and may contact you for further evaluation" },
      match: { title: "Get Matched", description: "We'll connect you with companies looking for your specific skill set" }
    }
  },
  cta: {
    title: "Ready to Take the Next Step?",
    subtitle: "Join thousands of talented professionals who have found their dream opportunities through our platform.",
    button: "Join as Talent"
  }
},


      forCompanies: {
          hireSection: {
    title: {
    part1: 'Hire Bold',
    highlight: 'Hire Brilliant'
  },
  subtitle: 'Meet the minds shaping tomorrow’s technology'
},
        hero: {
          title: { part1: 'Hire', highlight: 'Elite AI & Tech Talent', part2: 'Faster Than Ever' },
          subtitle: 'Connect with pre-screened, top-tier professionals who can drive your innovation forward.'
        },
        benefitsSection: { title: 'The Choice of Global Leaders', subtitle: 'Make the right choice, reach results faster' },
        featuresSection: { part1: 'Everything You Need to', highlight: 'Hire Smart', subtitle: 'Comprehensive tools and services designed for modern hiring teams' },
        cta: { title: 'Ready to Build Your Dream Team?', subtitle: 'Hundreds of companies already trust Nebula - now it’s your turn.' },
        benefits: {
          preScreened: { title: 'Pre-Screened Talent Pool', description: 'Access 50,000+ vetted AI and tech professionals ready to contribute from day one.' },
          skillTesting: { title: 'Advanced Skill Testing', description: 'Comprehensive technical assessments and real-world project evaluations.' },
          secure: { title: 'Secure & Compliant', description: 'Enterprise-grade security with GDPR compliance and data protection.' },
          aiMatching: { title: 'AI-Powered Matching', description: 'Smart algorithms find the perfect fit for your team culture and requirements.' }
        },
        features: {
          talentDatabase: { title: 'Talent Database Access', description: 'Search and filter through our extensive database of pre-screened candidates.' },
          testingPlatform: { title: 'Advanced Testing Platform', description: 'Create custom technical tests and assessments for your specific needs.' },
          accountManager: { title: 'Dedicated Account Manager', description: 'Personal support throughout your hiring journey.' },
          contracts: { title: 'Contract Management', description: 'Streamlined contract creation and e-signature integration.' },
          analytics: { title: 'Analytics Dashboard', description: 'Track hiring metrics and optimize your recruitment process.' },
          support: { title: 'Priority Support', description: '24/7 support with guaranteed response times.' }
        }
      },
       
      stats: {
        talents: 'Talents',
        hires: 'Successful Hires',
        companies: 'Partner Companies',
        satisfaction: 'Satisfaction Rate'
      },
      common: {
        loading: 'Loading...',
        error: 'Something went wrong',
        retry: 'Try Again',
        save: 'Save',
        cancel: 'Cancel',
        submit: 'Submit',
        search: 'Search',
        filter: 'Filter',
        reset: 'Reset'
      }
    }
  },
  
  forCompanies: {
    hero: {
      title: 'Hire Elite AI & Tech Talent Faster Than Ever',
      subtitle: 'Connect with pre-screened, top-tier professionals who can drive your innovation forward.',
      button1: 'Start Hiring Now',
      button2: 'Schedule Demo',
      dashboard: 'Talent Acquisition Dashboard',
      stat1: '50k+ Talents',
      stat2: '98% Match Rate'
    },
   
     stats: {
       successRate: 'Success Rate',
         timeToHire: 'Average Time to Hire',
      costReduction: 'Cost Reduction',
      clientSatisfaction: 'Client Satisfaction'
    },
    benefitsSection: { title: 'The Choice of Global Leaders', subtitle: 'Make the right choice, reach results faster' },
    benefits: {
      preScreened: { title: 'Pre-Screened Talent Pool', description: 'Access 50,000+ vetted AI and tech professionals ready to contribute from day one.' },
      skillTesting: { title: 'Advanced Skill Testing', description: 'Comprehensive technical assessments and real-world project evaluations.' },
      secure: { title: 'Secure & Compliant', description: 'Enterprise-grade security with GDPR compliance and data protection.' },
      aiMatching: { title: 'AI-Powered Matching', description: 'Smart algorithms find the perfect fit for your team culture and requirements.' }
    },
    featuresSection: { title: 'Everything You Need to Hire Smart', subtitle: 'Comprehensive tools and services designed for modern hiring teams.' },
    features: {
      talentDatabase: { title: 'Talent Database Access', description: 'Access and filter through our extensive database of pre-screened candidates.' },
      testingPlatform: { title: 'Advanced Testing Platform', description: 'Create custom technical tests and assessments for your specific needs.' },
      accountManager: { title: 'Dedicated Account Manager', description: 'Personal support throughout your hiring journey.' },
      contracts: { title: 'Contract Management', description: 'Streamlined contract creation and e-signature integration.' },
      analytics: { title: 'Analytics Dashboard', description: 'Track hiring metrics and optimize your recruitment process.' },
      support: { title: 'Priority Support', description: '24/7 support with guaranteed response times.' }
    },
    
    cta: {
      title: 'Ready to Build Your Dream Team?',
      subtitle: 'Hundreds of companies already trust Nebula - now it’s your turn.',
      button1: 'Start Hiring Smarter',
      button2: 'Let’s Talk'
    },
  },


  ka: {
    translation: {
      nav: {
        home: 'მთავარი',
        findTalent: 'ტალანტის მოძებნა',
        forCompanies: 'კომპანიებისთვის',
        forTalent: 'ტალანტებისთვის',
        pricing: 'ფასები',
        contact: 'კონტაქტი',
        dashboard: 'პანელი',
        profile: 'პროფილი',
        logout: 'გასვლა'
      },
      hero: {
        title: 'მსოფლიო დონის ტალანტები გლობალური კომპანიებისთვის',
        subtitle: 'სანდო ტალანტები, AI თულები, გამარტივებული პროცესები',
        findTalent: 'ტალანტის მოძებნა',
        joinTalent: 'რეგისტრაცია ტალანტად',
        getStarted: 'დაწყება'
      },
      whyChoose: {
        title: 'რატომ აირჩიო Nebula',
        subtitle: 'ჩვენ ვაერთიანებთ AI-ის სიზუსტესა და ადამიანურ გამოცდილებას, რომ სწორი ტალანტი იპოვო 3-ჯერ უფრო სწრაფად და თავდაჯერებულად.',
      },
      features: {
        database: {
          title: 'ვრცელი ტალანტების ბაზა',
          description: '50,000-ზე მეტი AI და Tech პროფესიონალი მზად არის დღესვე დაგეხმაროს შენი მიზნის შესრულებაში'
        },
        testing: {
          title: 'დაწინაურებული ტესტირება',
          description: 'ჩვენ ვტესტავთ პრაქტიკულ უნარებს რეალურ პროექტებზე, რომ შენს საქმეზე იმუშაოს მხოლოდ საუკეთესომ.'
        },
        security: {
          title: 'უსაფრთხო და შესაბამისი',
          description: 'საერთაშორისო სტანდარტის უსაფრთხოებადა სრული GDPR შესაბამისობა, ჩვენთან შენი მონაცემები ყოველთვის დაცულია.'
        },
        matching: {
          title: 'ჭკვიანური შერჩევა',
          description: 'AI-ის ჭკვიანური კომბინაცია საუკეთესო ტალანტთან'
        }
      },
      howItWorks: {
        title: 'როგორ',
        highlight: 'მუშაობს',
        subtitle: 'სწრაფი და ეფექტური შერჩევის პროცესი ტექნოლოგიურ გუნდებისთვის.',
        steps: {
          step1: { title: 'მოთხოვნების განსაზღვრა', description: 'მოგვიყევი შენი მიზნების, გუნდის კულტურის და საჭიროებების შესახებ.' },
          step2: { title: 'AI შერჩევა', description: 'მაშინვე მიიღე საუკეთესო კანდიდატები ჩვენი გადამოწმებული ტალანტების ბაზიდან.' },
          step3: { title: 'დაკავშირება და დაქირავება', description: 'დაინიშნე ინტერვიუები თავდაჯერებულად და ააშენე გუნდი ყოველგვარი შეფერხების გარეშე.' }
        }
      },
      trusted: {
        title: 'გლობალური ინოვატორების არჩევანი',
        subtitle: ' გლობალური ინოვატორების არჩევანი - სტარტაპებიდან გიგანტებამდე. ჩვენ ვააძლიერებთ კომპანიებს საუკეთესო AI და Tech ტალანტებით.'
      },
      cta: {
        title: 'გსურს იპოვო იდეალური გუნდის წევრი?',
        subtitle: 'შეუერთდი წამყვან კომპანიებს, რომლებიც გვენდობიან',
        button1: 'დაწყება',
        button2: 'დაგვიკავშირდი'
      },
      forTalent: {
  hero: {
    title: "შენი შემდეგი დიდი კარიერული ნაბიჯი იწყება აქედან",
    subtitle: "შეუერთდი შერჩეულ AI და Tech პროფესიონალთა ქსელს და აღმოგაჩინონ წამყვანმა კომპანიებმა, რომლებიც ეძებენ შენს უნარებს.",
    button: "გაიარე რეგისტრაცია ტალანტად"
  },
  stats: {
    companies: "აქტიური კომპანიები",
    placements: "წარმატებული დასაქმებები",
    satisfaction: "კმაყოფილების დონე",
    countries: "მომსახურებული ქვეყნები"
  },
  benefitsSection: {
    title: "რატომ აირჩიო ჩვენი პლატფორმა?",
    subtitle: "ჩვენ ვაერთიანებთ გამორჩეულ ტალანტებს გამორჩეულ შესაძლებლობებთან"
  },
  benefits: {
    global: { title: "გლობალური შესაძლებლობები", description: "დისტანციური და საერთაშორისო პოზიციები წამყვან კომპანიებში." },
    skill: { title: "უნარების დადასტურება", description: "დაამტკიცე შენი ექსპერტიზა დადასტურებული სერთიფიკატებითა და ტესტირებით." },
    growth: { title: "კარიერული ზრდა", description: "მიიღე რეკომენდაციები და განვითარდი შენი ტემპით." },
    flexibility: { title: "მოქნილი სამუშაო", description: "აირჩიე ფორმატი — სრულ განაკვეთზე, კონტრაქტზე ან ნაწილი დროით." },
    rate: { title: "კონკურენტული ანაზღაურება", description: "მიიღე შენს გამოცდილებასა და უნარებზე მორგებული შემოსავალი." },
    match: { title: "ხარისხიანი შეთავსება", description: "შეგხვდებიან კომპანიები, რომლებსაც სჭირდებათ შენი უნიკალური გამოცდილება." }
  },
  howItWorks: {
    title: "როგორ მუშაობს",
    subtitle: "ოთხი მარტივი ნაბიჯი შენი კარიერული მიზნების მისაღწევად",
    steps: {
      apply: { title: "განაცხადი", description: "შეავსე მარტივი ფორმა შენი უნარებისა და გამოცდილების შესახებ" },
      evaluate: { title: "შეფასება", description: "ჩვენი გუნდი განიხილავს შენს პროფილს და დაგიკავშირდება საჭიროების შემთხვევაში" },
      match: { title: "შეთავსება", description: "შეგაერთებთ კომპანიებთან, რომლებიც ეძებენ შენს უნარებს" }
    }
  },
  cta: {
    title: "მზად ხარ შემდეგი ნაბიჯისთვის?",
    subtitle: "შეუერთდი ათასობით პროფესიონალს, რომლებმაც ჩვენი პლატფორმით იპოვეს თავიანთი ოცნების სამსახური.",
    button: "გაიარე რეგისტრაცია ტალანტად"
  }
},

      forCompanies: {
        hero: {
          title: { part1: 'იპოვე', highlight: 'საუკეთესო AI და Tech ტალანტი', part2: 'რეკორდულ ყველაზე სწრაფად' },
          subtitle: 'ჩვენი პლატფორმა დაგაკავშირებს საუკეთესო პროფესიონალებთან, რომლებსაც შენი იდეების რეალობად ქცევა შეუძლიათ.'
        },
        benefitsSection: { title: 'მსოფლიოს წამყვანი კომპანიების არჩევანი', subtitle: 'აირჩიე მარტივად, მიაღწიე სწრაფად' },
        featuresSection: { part1: 'ყველაფერი, რაც გჭირდება', highlight: 'სწორი კანდიდატის შერჩევისთვის', subtitle: 'ინოვაციური ინსტრუმენტები და სერვისები, რომლებიც დაქირავებას მარტივსა და ეფექტურს ხდის.' },
        cta: { title: 'მზად ხარ შენი ოცნების გუნდის ასაწყობად?', subtitle: 'ჩვენ უკვე ათასობით კომპანია გვენდობა, ახლა შენი დროა!' },
        benefits: {
          preScreened: { title: 'სანდო პროფესიონალების ბაზა', description: 'მიიღე წვდომა ათიათასობით AI და Tech პროფესიონალზე.' },
          skillTesting: { title: 'სწორი შეფასება, სანდო შედეგი', description: 'რეალური შედეგებით დადასტურებული ტექნიკური ცოდნა.' },
          secure: { title: 'დაცული და სანდო პროცესი', description: 'მაქსიმალური უსაფრთხოება - სრული GDPR შესაბამისობა და მონაცემთა დაცვა.' },
          aiMatching: { title: 'ჭკვიანი შერჩევა', description: 'ჩვენი AI ალგორითმი პოულობს არა მხოლოდ პროფესიონალს, არამედ შენს გუნდის შესაფერის პიროვნებას.' }
        },
        features: {
          talentDatabase: { title: 'ყველა ტალანტი ერთ სივრცეში', description: 'მარტივად მოიძიე საჭირო ადამიანები ჩვენი ბაზიდან.' },
          testingPlatform: { title: 'ტესტირების მოქნილი პლატფორმა', description: 'შეაფასე კანდიდატები შენს პირობებზე მორგებული ტესტებით.' },
          accountManager: { title: 'პირადი ექაუნთ მენეჯერი', description: 'ისარგებლე პერსონალური მხარდაჭერით პროცესის განმავლობაში.' },
          contracts: { title: 'კონტრაქტების მართვა', description: 'შექმენი კონტრაქტები წამებში და მოაწერე ელექტრონული ხელმოწერით.' },
          analytics: { title: 'ანალიტიკის პანელი', description: 'გააკონტროლე ყველა მაჩვენებელი და გააუმჯობესე შერჩევის სტრატეგია.' },
          support: { title: 'მხარდაჭერის სერვისი', description: 'ჩვენი გუნდი მუდმივად მზადაა შენს დასამხარებლად.' }
        },
        hireSection: {
  title: {
    part1: 'დაიქირავე თამამად',
    highlight: 'დაიქირავე გონიერი'
  },
  subtitle: 'გაიცანი ადამიანები, რომლებიც ქმნიან ხვალინდელ ტექნოლოგიებს'
},
      },
      stats: {
        talents: 'ტალანტები',
        hires: 'წარმატებული დაქირავება',
        companies: 'პარტნიორი კომპანიები',
        satisfaction: 'კმაყოფილების მაჩვენებელი'
      },
      common: {
        loading: 'იტვირთება...',
        error: 'რაღაც არასწორად მოხდა',
        retry: 'თავიდან სცადე',
        save: 'შენახვა',
        cancel: 'გაუქმება',
        submit: 'გაგზავნა',
        search: 'ძებნა',
        filter: 'ფილტრი',
        reset: 'გადატვირთვა'
      }
    }
  },

  // ru: {
  //   translation: {
  //     nav: {
  //       home: 'Главная',
  //       findTalent: 'Найти Таланты',
  //       forCompanies: 'Для Компаний',
  //       forTalent: 'Для Талантов',
  //       pricing: 'Цены',
  //       contact: 'Контакты',
  //       dashboard: 'Панель',
  //       profile: 'Профиль',
  //       logout: 'Выйти'
  //     },
  //     hero: {
  //       title: 'Соединяем Глобальные Компании с Лучшими AI и Tech Талантами',
  //       subtitle: 'Премиум платформа рекрутинга с продвинутым тестированием и безопасным подбором талантов',
  //       findTalent: 'Найти Таланты',
  //       joinTalent: 'Присоединиться как Талант',
  //       getStarted: 'Начать'
  //     },
  //     features: {
  //       database: { title: 'Обширная База Талантов', description: 'Доступ к 50,000+ предварительно проверенным AI и технологическим профессионалам' },
  //       testing: { title: 'Продвинутое Тестирование', description: 'Комплексная оценка навыков и оценка реальных проектов' },
  //       security: { title: 'Безопасный и Соответствующий', description: 'Соответствие GDPR с мерами безопасности корпоративного уровня' },
  //       matching: { title: 'Умное Сопоставление', description: 'Алгоритм сопоставления на базе ИИ для идеального соответствия талант-компания' }
  //     },
  //     stats: {
  //       talents: 'Таланты',
  //       hires: 'Успешные Найми',
  //       companies: 'Компании-Партнеры',
  //       satisfaction: 'Уровень Удовлетворенности'
  //     },
  //     common: {
  //       loading: 'Загрузка...',
  //       error: 'Что-то пошло не так',
  //       retry: 'Попробовать Снова',
  //       save: 'Сохранить',
  //       cancel: 'Отмена',
  //       submit: 'Отправить',
  //       search: 'Поиск',
  //       filter: 'Фильтр',
  //       reset: 'Сбросить'
  //     }
  //   }
  // }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

