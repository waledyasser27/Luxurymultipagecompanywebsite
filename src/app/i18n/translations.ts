import { officialEmail, officialPhoneDisplay } from "../config/contact";

export type Language = "en" | "ar";

export const languageStorageKey = "gold-city-language";

export const translations = {
  en: {
    locale: "en-US",
    dir: "ltr",
    brand: {
      name: "Gold City Developments",
      shortName: "Gold City",
      tagline: "Premium real estate development for modern commercial communities",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      reserve: "Reserve Now",
      language: "العربية",
    },
    common: {
      viewProject: "View Project",
      viewSevenB: "View Seven B",
      viewShabrawy: "View Shabrawy",
      contactUs: "Request Info",
      reserveNow: "Reserve a Unit",
      exploreProjects: "Explore Projects",
      discoverMore: "Discover More",
      investmentOpportunity: "Investment Opportunity",
      location: "Location",
      progress: "Progress",
      projectType: "Project Type",
      flagshipProject: "Flagship Project",
      strategicAddress: "Strategic Address",
      backToProjects: "Back to Projects",
      detailsButton: "Details",
      contactSales: "Speak to Sales",
      submit: "Submit Inquiry",
      loading: "Sending...",
      success: "Your inquiry has been prepared successfully.",
      error: "We could not process your request right now. Please try again.",
      whatsappContinue: "Continue on WhatsApp",
      emailDraft: "Open Email Draft",
    },
    home: {
      heroEyebrow: "Gold City Developments | Seven B Mall",
      heroTitle: "Building the Future, Creating Communities",
      heroDescription:
        "Explore Seven B Mall, Gold City Developments' flagship medical investment destination with curated clinics, labs, strong accessibility, and a reservation journey built for serious buyers.",
      heroStats: [
        "Medical hub concept with clinics and lab services",
        "Curated tenant mix for stronger operational clarity",
        "Fast inquiry flow for availability, prices, and reservation steps",
      ],
      numbersTitle: "Gold City in numbers",
      numbersItems: [
        {
          value: "300+",
          label: "Units",
        },
        {
          value: "300M+",
          label: "EGP Investment Volume",
        },
        {
          value: "15+",
          label: "Years Experience",
        },
      ],
      sevenBLabel: "Seven B Mall",
      sevenBSpotlightTitle: "Seven B Mall is our flagship commercial destination.",
      sevenBSpotlightDescription:
        "Designed as a future-ready destination for retail, medical, office, and food concepts, Seven B Mall combines strategic visibility, premium construction quality, and a sales-ready experience for investors seeking immediate momentum.",
      sevenBHighlights: [
        "Mixed-use commercial planning with curated unit mix",
        "Modern facades, basement parking, and efficient circulation",
        "Reservation journey built for quick sales follow-up",
      ],
      secondaryLabel: "Delivered Project",
      secondaryTitle: "El-Shabrawy Mall was the starting point. Seven B Mall is the next evolution.",
      secondaryDescription:
        "El-Shabrawy Mall stands as proof of execution and delivery. Seven B Mall builds on that experience with higher quality, stronger planning, and a more curated tenant mix that reduces repetitive business overlap.",
      credibilityTitle: "Why investors and brands choose Gold City",
      credibilityItems: [
        {
          title: "Developer-Led Vision",
          description:
            "A brand strategy centered on destination quality, tenant value, and sustainable commercial positioning.",
        },
        {
          title: "Growth-Focused Execution",
          description:
            "Every phase is structured around long-term footfall, operational clarity, and market-ready presentation.",
        },
        {
          title: "Premium Presentation",
          description:
            "Luxury-first design language, investor-ready messaging, and refined sales touchpoints across the website.",
        },
      ],
      journeyTitle: "A growth journey built on modern commercial vision",
      journeyDescription:
        "From concept to positioning, Gold City Developments focuses on building destinations that attract brands, serve communities, and unlock strong market confidence.",
      finalCtaTitle: "Ask about available Seven B Mall medical units today.",
      finalCtaDescription:
        "Send your unit preference and budget, then continue directly with our team on WhatsApp for availability and reservation guidance.",
    },
    about: {
      eyebrow: "About Gold City",
      title: "A premium developer building commercial destinations with lasting value.",
      intro:
        "Gold City Developments brings together commercial vision, refined execution, and investor-centered thinking to create projects that perform as brands and places.",
      overviewTitle: "Company Overview",
      overviewBody:
        "The company is positioned as a modern real estate developer focused on mixed-use and commercial assets that combine strong architecture, functional planning, and market relevance.",
      visionTitle: "Vision",
      visionBody:
        "To shape future-ready destinations that elevate investment confidence and enrich the communities around them.",
      missionTitle: "Mission",
      missionBody:
        "To develop premium real estate projects that balance design quality, practical use, and long-term commercial performance.",
      valuesTitle: "Values",
      values: [
        "Strategic thinking rooted in real market demand",
        "Quality-led development standards",
        "Transparent investor communication",
        "Community-aware project planning",
      ],
      growthTitle: "Growth Journey",
      growthSteps: [
        {
          year: "Foundation",
          title: "Positioning a premium development brand",
          description:
            "Gold City began with a clear ambition to develop projects that look premium and perform commercially.",
        },
        {
          year: "Expansion",
          title: "Building a focused portfolio",
          description:
            "The project pipeline grew with destinations that answer modern retail, office, and healthcare needs.",
        },
        {
          year: "Today",
          title: "Leading with Seven B Mall",
          description:
            "The flagship project represents the brand's strongest expression of location strategy, unit diversity, and investment promise.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "Our Developments",
      title: "Seven B Mall leads the portfolio. El-Shabrawy proves delivery.",
      description:
        "Explore the flagship Seven B Mall medical investment opportunity, supported by El-Shabrawy Mall as previous delivered work and proof of execution.",
    },
    contact: {
      eyebrow: "Connect With Gold City",
      title: "Speak with our team about Seven B Mall or the broader portfolio.",
      description:
        "Use the channels below to discuss availability, investment interest, project updates, or partnership opportunities.",
      addressTitle: "Head Office",
      address: "5J9V+8C6, El Shorouk, Cairo Governorate 4933001, Egypt",
      phoneTitle: "Sales & Reservations",
      phone: officialPhoneDisplay,
      emailTitle: "Email",
      email: officialEmail,
      hoursTitle: "Working Hours",
      hours: "Sunday to Thursday | 10:00 AM - 6:00 PM",
      ctaTitle: "Make Seven B Mall your next commercial move.",
      ctaBody:
        "Share your preferred unit type and budget, and our team will help you understand availability, pricing, and reservation steps.",
      mapLabel: "5J9V+8C6, El Shorouk, Cairo Governorate 4933001, Egypt",
    },
    reservation: {
      eyebrow: "Reservation & Inquiry",
      title: "Send a Seven B Mall inquiry",
      genericTitle: "Send a project inquiry",
      description:
        "Tell us what type of unit you are interested in and our team will follow up with availability, next steps, and reservation guidance.",
      genericDescription:
        "Tell us which unit type you are interested in and our team will follow up with availability, pricing, and reservation guidance.",
      fields: {
        fullName: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        specialty: "Specialty",
        unitType: "Unit Type Interest",
        budget: "Budget Range",
        contactMethod: "Preferred Contact Method",
        message: "Message / Notes",
      },
      placeholders: {
        fullName: "Enter your full name",
        phone: "Enter your phone number",
        email: "Enter your email address",
        message: "Tell us about your preferred unit, timing, or any questions",
      },
      options: {
        unitTypes: ["Retail Shop", "Medical Clinic", "Office Unit", "Food & Beverage"],
        specialties: [
          "Dental",
          "Physiotherapy",
          "Cosmetic",
          "Pediatrics",
          "Gynecology",
          "Dermatology",
          "Orthopedics",
          "Internal Medicine",
          "Cardiology",
          "Ophthalmology",
        ],
        budgets: [
          "Below EGP 2M",
          "EGP 2M - 5M",
          "EGP 5M - 10M",
          "Above EGP 10M",
        ],
        contactMethods: ["WhatsApp", "Phone", "Email"],
      },
      validation: {
        required: "This field is required.",
        email: "Please enter a valid email address.",
        phone: "Please enter a valid phone number.",
      },
    },
    projectDetails: {
      overview: "Overview",
      highlights: "Project Highlights",
      categories: "Unit Categories",
      gallery: "Gallery",
      reservation: "Reservation",
      videoNote: "Media-ready layout supports premium images now and future promotional video sections later.",
      flagshipBadge: "Flagship Sales Focus",
    },
  },
  ar: {
    locale: "ar-EG",
    dir: "rtl",
    brand: {
      name: "جولد سيتي للتطوير العقاري",
      shortName: "جولد سيتي",
      tagline: "تطوير عقاري فاخر يصنع وجهات تجارية حديثة للمجتمعات المتنامية",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "المشروعات",
      contact: "تواصل معنا",
      reserve: "احجز الآن",
      language: "English",
    },
    common: {
      viewProject: "عرض المشروع",
      viewSevenB: "عرض Seven B",
      viewShabrawy: "عرض شبراوي",
      contactUs: "اطلب التفاصيل",
      reserveNow: "احجز وحدة",
      exploreProjects: "استكشف المشروعات",
      discoverMore: "اكتشف المزيد",
      investmentOpportunity: "فرصة استثمارية",
      location: "الموقع",
      progress: "نسبة التنفيذ",
      projectType: "نوع المشروع",
      flagshipProject: "المشروع الرئيسي",
      strategicAddress: "موقع استراتيجي",
      backToProjects: "العودة للمشروعات",
      detailsButton: "التفاصيل",
      contactSales: "تحدث مع المبيعات",
      submit: "إرسال الطلب",
      loading: "جارٍ الإرسال...",
      success: "تم تجهيز طلبك بنجاح.",
      error: "تعذر تنفيذ الطلب حاليًا. حاول مرة أخرى.",
      whatsappContinue: "المتابعة عبر واتساب",
      emailDraft: "فتح رسالة البريد",
    },
    home: {
      heroEyebrow: "جولد سيتي للتطوير العقاري | Seven B Mall",
      heroTitle: "نبني المستقبل ونصنع مجتمعات متكاملة",
      heroDescription:
        "اكتشف Seven B Mall، الوجهة الطبية الاستثمارية الرئيسية من جولد سيتي، بتخطيط للعيادات والمعامل وسهولة وصول ورحلة حجز مصممة للمشتري الجاد.",
      heroStats: [
        "مفهوم مركز طبي متكامل بعيادات وخدمات معامل",
        "مزيج أنشطة مدروس لوضوح تشغيلي أقوى",
        "مسار استفسار سريع لمعرفة التوافر والأسعار وخطوات الحجز",
      ],
      numbersTitle: "جولد سيتي في أرقام",
      numbersItems: [
        {
          value: "+300",
          label: "وحدة",
        },
        {
          value: "+300 مليون",
          label: "حجم استثماري",
        },
        {
          value: "+15",
          label: "سنة خبرة",
        },
      ],
      sevenBLabel: "Seven B Mall",
      sevenBSpotlightTitle: "Seven B Mall هو الوجهة التجارية الرئيسية في محفظتنا.",
      sevenBSpotlightDescription:
        "تم تصميم المشروع كوجهة متكاملة للمحال والعيادات والمكاتب والأنشطة الغذائية، مع واجهات حديثة وجودة تنفيذ عالية وتجربة تسويقية جاهزة للمستثمر الباحث عن انطلاقة قوية.",
      sevenBHighlights: [
        "تخطيط تجاري متعدد الاستخدامات مع تنوع مدروس للوحدات",
        "واجهات حديثة وبدروم انتظار وحركة داخلية فعالة",
        "رحلة حجز واستفسار مصممة لمتابعة مبيعات أسرع",
      ],
      secondaryLabel: "مشروع تم تسليمه",
      secondaryTitle: "El-Shabrawy Mall كان نقطة البداية، وSeven B Mall هو التطور التالي.",
      secondaryDescription:
        "يمثل El-Shabrawy Mall دليلًا على التنفيذ والتسليم. ويبني Seven B Mall على هذه الخبرة بجودة أعلى وتخطيط أقوى ومزيج أنشطة أكثر تنظيمًا يقلل تكرار الأنشطة المتشابهة.",
      credibilityTitle: "لماذا يختار المستثمرون والعلامات التجارية جولد سيتي",
      credibilityItems: [
        {
          title: "رؤية تطويرية واضحة",
          description:
            "استراتيجية علامة تجارية تركز على جودة الوجهة وقيمة المستأجر والتموضع التجاري طويل المدى.",
        },
        {
          title: "تنفيذ يدعم النمو",
          description:
            "كل مرحلة يتم بناؤها حول حركة العملاء، ووضوح التشغيل، وطريقة عرض جاهزة للسوق.",
        },
        {
          title: "تقديم فاخر",
          description:
            "لغة بصرية راقية ورسائل استثمارية محكمة ونقاط تواصل مصممة لخدمة المبيعات.",
        },
      ],
      journeyTitle: "رحلة نمو مبنية على رؤية تجارية حديثة",
      journeyDescription:
        "من الفكرة وحتى التموضع، تركز جولد سيتي على تطوير وجهات تجذب العلامات التجارية وتخدم المجتمع وتعزز الثقة الاستثمارية.",
      finalCtaTitle: "استفسر عن الوحدات الطبية المتاحة في Seven B Mall اليوم",
      finalCtaDescription:
        "أرسل نوع الوحدة والميزانية، ثم تابع مباشرة مع فريقنا عبر واتساب لمعرفة التوافر وخطوات الحجز.",
    },
    about: {
      eyebrow: "عن جولد سيتي",
      title: "مطوّر عقاري فاخر يصنع وجهات تجارية ذات قيمة مستدامة.",
      intro:
        "تجمع جولد سيتي للتطوير العقاري بين الرؤية التجارية والتنفيذ الراقي والتفكير الموجه للمستثمر من أجل إنشاء مشروعات تؤدي كعلامات وأماكن في آن واحد.",
      overviewTitle: "نبذة عن الشركة",
      overviewBody:
        "تتموضع الشركة كمطور عقاري حديث يركز على الأصول التجارية والمتعددة الاستخدامات، مع دمج التصميم القوي والتخطيط الوظيفي والملاءمة السوقية.",
      visionTitle: "الرؤية",
      visionBody:
        "تشكيل وجهات جاهزة للمستقبل ترفع الثقة الاستثمارية وتضيف قيمة حقيقية للمجتمعات المحيطة.",
      missionTitle: "الرسالة",
      missionBody:
        "تطوير مشروعات عقارية راقية توازن بين جودة التصميم وكفاءة الاستخدام والأداء التجاري طويل الأجل.",
      valuesTitle: "القيم",
      values: [
        "تفكير استراتيجي مرتبط باحتياجات السوق الفعلية",
        "معايير تطوير تقودها الجودة",
        "تواصل واضح وشفاف مع المستثمر",
        "تخطيط يراعي المجتمع والمستخدم النهائي",
      ],
      growthTitle: "رحلة النمو",
      growthSteps: [
        {
          year: "البداية",
          title: "تأسيس علامة تطويرية متميزة",
          description:
            "بدأت جولد سيتي برؤية واضحة لتقديم مشروعات تبدو فاخرة وتعمل تجاريًا بكفاءة.",
        },
        {
          year: "التوسع",
          title: "بناء محفظة مركزة",
          description:
            "تطورت المحفظة بمشروعات تلبي متطلبات التجزئة والمكاتب والخدمات الطبية الحديثة.",
        },
        {
          year: "اليوم",
          title: "الريادة عبر Seven B Mall",
          description:
            "يمثل المشروع الرئيسي أقوى تجسيد لمعادلة الموقع الاستراتيجي وتنوع الوحدات والوعد الاستثماري.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "مشروعاتنا",
      title: "Seven B Mall يقود المحفظة، وEl-Shabrawy يثبت القدرة على التسليم.",
      description:
        "استكشف فرصة الاستثمار الطبي الرئيسية في Seven B Mall، مع تقديم El-Shabrawy Mall كسابقة أعمال تم تسليمها وتثبت القدرة على التنفيذ.",
    },
    contact: {
      eyebrow: "تواصل مع جولد سيتي",
      title: "تحدث مع فريقنا بخصوص Seven B Mall أو باقي المحفظة.",
      description:
        "استخدم القنوات التالية للاستفسار عن التوافر أو الفرص الاستثمارية أو مستجدات المشروعات أو فرص التعاون.",
      addressTitle: "المكتب الرئيسي",
      address: "5J9V+8C6, El Shorouk, Cairo Governorate 4933001, Egypt",
      phoneTitle: "المبيعات والحجز",
      phone: officialPhoneDisplay,
      emailTitle: "البريد الإلكتروني",
      email: officialEmail,
      hoursTitle: "مواعيد العمل",
      hours: "من الأحد إلى الخميس | 10:00 ص - 6:00 م",
      ctaTitle: "اجعل Seven B Mall خطوتك التجارية القادمة",
      ctaBody:
        "شاركنا نوع الوحدة والميزانية، وسيساعدك فريقنا في معرفة التوافر والأسعار وخطوات الحجز.",
      mapLabel: "5J9V+8C6, El Shorouk, Cairo Governorate 4933001, Egypt",
    },
    reservation: {
      eyebrow: "الحجز والاستفسار",
      title: "أرسل استفسار Seven B Mall",
      genericTitle: "أرسل استفسار عن المشروع",
      description:
        "أخبرنا بنوع الوحدة المطلوبة وسيتابع معك فريقنا لمعرفة التوافر والخطوات التالية للحجز.",
      genericDescription:
        "أخبرنا بنوع الوحدة المطلوبة وسيتابع معك فريقنا لمعرفة التوافر والأسعار وخطوات الحجز.",
      fields: {
        fullName: "الاسم الكامل",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        specialty: "التخصص الطبي",
        unitType: "نوع الوحدة المطلوبة",
        budget: "الميزانية المتوقعة",
        contactMethod: "وسيلة التواصل المفضلة",
        message: "رسالة / ملاحظات",
      },
      placeholders: {
        fullName: "اكتب اسمك الكامل",
        phone: "اكتب رقم هاتفك",
        email: "اكتب بريدك الإلكتروني",
        message: "اكتب نوع الوحدة أو التوقيت المناسب أو أي استفسار",
      },
      options: {
        unitTypes: ["محل تجاري", "عيادة طبية", "وحدة إدارية", "مطاعم ومشروبات"],
        specialties: [
          "أسنان",
          "علاج طبيعي",
          "تجميل",
          "أطفال",
          "نساء وتوليد",
          "جلدية",
          "عظام",
          "باطنة",
          "قلب",
          "عيون",
        ],
        budgets: [
          "أقل من 2 مليون جنيه",
          "من 2 إلى 5 مليون جنيه",
          "من 5 إلى 10 مليون جنيه",
          "أكثر من 10 مليون جنيه",
        ],
        contactMethods: ["واتساب", "هاتف", "بريد إلكتروني"],
      },
      validation: {
        required: "هذا الحقل مطلوب.",
        email: "من فضلك أدخل بريدًا إلكترونيًا صحيحًا.",
        phone: "من فضلك أدخل رقم هاتف صحيحًا.",
      },
    },
    projectDetails: {
      overview: "نظرة عامة",
      highlights: "أبرز المميزات",
      categories: "فئات الوحدات",
      gallery: "المعرض",
      reservation: "الحجز",
      videoNote: "تم تصميم الأقسام لدعم الصور الفاخرة حاليًا وإضافة فيديو ترويجي لاحقًا بسهولة.",
      flagshipBadge: "التركيز البيعي الرئيسي",
    },
  },
} as const;

export type TranslationDictionary = (typeof translations)[Language];
