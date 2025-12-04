'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight, Award, Users, Target, Eye, Heart, Lightbulb, Shield, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'What we do', href: '/services' },
        { name: 'Strategy & Governance', href: '/services#strategy-&-governance' },
        { name: 'Data Platform Build', href: '/services#data-platform-build' },
        { name: 'Analytics & BI', href: '/services#analytics-&-bi' },
        { name: 'MLOps & AI', href: '/services#mlops-&-ai' },
        { name: 'Managed Services', href: '/services#managed-services' },
        { name: 'Enterprise Training', href: '/services#enterprise-training' }
      ]
    },
    {
      name: 'Training',
      href: '/training',
      dropdown: [
        { name: 'Ripotek Academy', href: '/training' },
        { name: 'All Programs', href: '/training#our-programs' },
        { name: 'Power BI Analyst', href: '/training#power-bi-analyst' },
        { name: 'Azure Data Engineer', href: '/training#azure-data-engineer' },
        { name: 'Databricks Engineer', href: '/training#databricks-engineer' },
        { name: 'AI Engineer', href: '/training#ai-engineer' },
        { name: 'BI Analyst', href: '/training#business-intelligence-analyst' },
        { name: 'Prompt Engineering', href: '/training#prompt-engineering' },
        { name: 'Python for Data', href: '/training#python-for-data' },
        { name: 'ADF Masterclass', href: '/training#azure-data-factory-masterclass' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' }
  ];

  const coreValues = [
    { icon: Target, title: 'Excellence', description: 'We deliver enterprise-grade solutions that exceed expectations and drive measurable business outcomes.' },
    { icon: Users, title: 'Partnership', description: 'Your success is our success. We work as an extension of your team, not just a vendor.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of the curve, bringing cutting-edge technologies and proven best practices.' },
    { icon: Heart, title: 'Empowerment', description: 'Knowledge transfer is built into everything we do. We equip your teams for long-term success.' }
  ];

  const leadershipTeam = [
    {
      name: 'Prince Andrew',
      role: 'Chief Executive Officer & Founder',
      image: '/tams-andrew.png',
      bio: 'When Prince Andrew arrived in Canada from Nigeria in 2010, he carried little more than determination and a belief that education could change the trajectory of a life. That belief guided him through a Master of Science in Applied Mathematics at the University of Regina and into a 12-year journey designing enterprise data systems across the energy, finance, and public sectors.\n\nIn 2023, he founded Ripotek Technologies with a simple but powerful vision: to make advanced data and AI skills accessible, practical, and transformative for both businesses and people. Since then, Ripotek has delivered more than $12M in measurable client value, while Prince has personally trained over 2,000 data professionals, helping achieve an 85% job placement rate.\n\nWhat sets Prince apart is his remarkable ability to take complex technical ideas and make them feel simple, clear, and achievable. It\'s a gift that has made Ripotek\'s training programs among the most sought-after in the industry—blending real-world expertise with an approachable, empowering teaching style.\n\nToday, Prince leads Ripotek with the same mindset he began with: that knowledge is a catalyst, opportunity is a responsibility, and the next generation of data leaders deserve both.'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&crop=faces',
      bio: 'Sarah Chen is a technical leader in enterprise data transformation with over 15 years of experience designing and implementing data platforms for Fortune 500 companies across Energy, Financial Services, and Public Sector industries. Before joining Ripotek as CTO, Sarah led data architecture initiatives at major consulting firms, specializing in Azure modernization and governed self-service BI.\n\nShe holds multiple certifications including Azure Solutions Architect Expert, TOGAF 9.2, and Databricks Certified Data Engineer. Sarah is passionate about empowering organizations to unlock the full potential of their data while building sustainable, scalable platforms that drive measurable business outcomes.\n\nAs CTO at Ripotek, Sarah leads all technical delivery, ensuring solutions follow industry best practices while meeting specific business requirements. She maintains Ripotek\'s commitment to technical excellence and knowledge transfer, developing the next generation of data professionals.'
    },
    {
      name: 'Priya Sharma',
      role: 'VP of AI & Innovation',
      image: '/priya-sharma.png',
      bio: 'Dr. Priya Sharma holds a PhD in Machine Learning from the University of Toronto and has over 10 years of experience applying AI and ML to solve complex business problems. She has led MLOps transformations for major financial institutions, implementing production-grade ML systems that process billions of transactions.\n\nPriya specializes in Azure AI services, MLOps architecture, and responsible AI practices. She holds certifications as an Azure AI Engineer and AWS Machine Learning Specialty practitioner. Her research has been published in leading AI conferences and she is a frequent speaker at data science events.\n\nAt Ripotek, Priya drives innovation in AI/ML solutions, helping clients move from experimental models to production-grade systems. She also leads Ripotek\'s AI Engineer training program, preparing students for careers in this rapidly evolving field.'
    },
    {
      name: 'David Thompson',
      role: 'VP of Training & Education',
      image: '/james-patterson.png',
      bio: 'David Thompson is a passionate educator and big data expert with 10 years of experience in Apache Spark, Databricks, and distributed data processing. He has trained over 2,000 students in data engineering technologies and maintains an impressive 85% job placement rate for Ripotek Academy graduates.\n\nDavid is a Databricks Certified Data Engineer and has contributed to open-source projects in the Apache Spark ecosystem. His expertise includes Delta Lake, structured streaming, and performance optimization for large-scale data pipelines. He is also proficient in Scala, Python, and SQL.\n\nAt Ripotek, David oversees all training programs, ensuring curriculum remains current with industry demands. His teaching philosophy emphasizes hands-on learning, real-world scenarios, and continuous support for students as they transition into data careers.'
    }
  ];

  const businessConsultants = [
    {
      name: 'Michael Rodriguez',
      role: 'Business Intelligence Analyst',
      image: '/michael-rodriguez.png',
      imagePosition: 'object-[center_15%]',
      bio: 'Michael Rodriguez is a Business Intelligence Analyst with 8 years of experience transforming raw data into actionable insights for Fortune 500 companies. He specializes in Power BI, Tableau, and SQL Server, delivering enterprise BI solutions that drive strategic decision-making.\n\nMichael has designed and implemented over 50 dashboards and reporting solutions across retail, healthcare, and financial services industries. His expertise includes data modeling, DAX optimization, and creating self-service analytics platforms that empower business users.\n\nAt Ripotek, Michael leads BI consulting engagements, helping clients modernize their analytics infrastructure and establish data-driven cultures. He is known for his ability to translate complex business requirements into elegant, user-friendly visualizations.'
    },
    {
      name: 'Sophia Kim',
      role: 'Data Engineer',
      image: '/sophia-kim.png',
      imagePosition: 'object-[center_20%]',
      bio: 'Sophia Kim is a Data Engineer with deep expertise in building scalable data pipelines and modern data platforms. With 10 years of experience across Azure, AWS, and GCP, she has architected solutions processing billions of events daily for major enterprises.\n\nSophia specializes in Azure Data Factory, Databricks, and Apache Spark, with proven success in migrating legacy ETL systems to cloud-native architectures. She holds certifications as an Azure Data Engineer Associate and Databricks Certified Data Engineer Professional.\n\nAt Ripotek, Sophia leads data engineering projects, designing robust, performant pipelines that enable real-time analytics and machine learning initiatives. Her passion for automation and DevOps practices ensures solutions are maintainable and production-ready.'
    },
    {
      name: 'Jordan Matthews',
      role: 'Power BI Developer',
      image: '/jordan-matthews.png',
      imagePosition: 'object-[center_20%]',
      bio: 'Jordan Matthews is a Power BI specialist with 7 years focused exclusively on Microsoft\'s analytics platform. He has built comprehensive BI solutions for over 30 organizations, from startups to multinational corporations, consistently delivering high-impact visualizations and data models.\n\nJordan is a Microsoft Certified: Power BI Data Analyst Associate and holds advanced certifications in DAX and data modeling. His expertise extends to Power Query, dataflows, and integrating Power BI with Azure services for enterprise-scale deployments.\n\nAt Ripotek, Jordan drives Power BI best practices, mentors junior developers, and ensures clients leverage the full capabilities of the platform—from embedded analytics to paginated reports and AI-powered insights.'
    },
    {
      name: 'Aisha Patel',
      role: 'AI/Machine Learning Engineer',
      image: '/aisha-patel.png',
      imagePosition: 'object-[center_5%]',
      imageScale: 'scale-125',
      bio: 'Dr. Aisha Patel is an AI/ML Engineer with a PhD in Computer Science from Stanford University and 9 years of experience deploying production machine learning systems. She has led AI initiatives for technology companies and research institutions, focusing on NLP, computer vision, and predictive analytics.\n\nAisha specializes in Azure Machine Learning, MLOps, and responsible AI practices. She has published research in leading conferences and holds patents in machine learning optimization techniques. Her work spans recommendation systems, fraud detection, and automated decision-making platforms.\n\nAt Ripotek, Aisha helps clients transition from experimental models to scalable AI solutions. She champions ethical AI development and ensures models are explainable, fair, and aligned with business objectives while maintaining technical excellence.'
    }
  ];

  const instructors = [
    {
      name: 'Marcus Johnson',
      role: 'Power BI Instructor',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop&crop=faces',
      bio: 'Marcus Johnson is Ripotek Academy\'s lead Power BI instructor with 12 years of analytics experience and 6 years teaching data visualization. He has trained over 1,500 students, maintaining a 95% satisfaction rate and helping hundreds transition into BI analyst roles.\n\nMarcus holds Microsoft Certified Trainer (MCT) status and is a Power BI Data Analyst Associate. His teaching style combines real-world case studies with hands-on projects, ensuring students build portfolio-ready work while mastering DAX, Power Query, and data modeling.\n\nAt Ripotek Academy, Marcus designed the comprehensive Power BI curriculum that covers everything from fundamentals to advanced topics like row-level security, incremental refresh, and deployment pipelines. His students consistently praise his clarity, patience, and industry insights.'
    },
    {
      name: 'Dr. Leila Rahman',
      role: 'AI/Machine Learning Expert',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=800&fit=crop&crop=faces',
      bio: 'Dr. Leila Rahman brings 15 years of AI research and industry experience to Ripotek Academy. With a PhD in Machine Learning from MIT, she has published over 40 papers and worked with leading tech companies on cutting-edge AI initiatives before transitioning to education.\n\nLeila specializes in teaching deep learning, natural language processing, and MLOps using Python, TensorFlow, PyTorch, and Azure ML. She has trained data scientists at Google, Amazon, and Microsoft, and now brings that world-class expertise to Ripotek students.\n\nAt Ripotek Academy, Leila leads the AI Engineer program, guiding students through the complete ML lifecycle—from problem formulation to model deployment. Her approachable teaching demystifies complex algorithms and empowers students to build production-grade AI solutions.'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Cloud Solutions Specialist',
      image: '/carlos-mendoza.png',
      bio: 'Carlos Mendoza is a cloud architecture expert with 14 years of experience and a passion for teaching Azure technologies. As a Microsoft Certified Trainer and Azure Solutions Architect Expert, he has delivered training to over 2,000 professionals across North America.\n\nCarlos specializes in Azure data services including Synapse Analytics, Data Factory, Databricks, and Microsoft Fabric. His industry background spans financial services, healthcare, and energy sectors, providing students with relevant, real-world context for cloud solutions.\n\nAt Ripotek Academy, Carlos teaches cloud data engineering and Azure fundamentals, preparing students for industry certifications while building practical skills. His hands-on labs and migration scenarios give students confidence to architect enterprise-scale cloud solutions.'
    },
    {
      name: 'Nina Kowalski',
      role: 'Programming Instructor',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop&crop=faces',
      bio: 'Nina Kowalski is a software engineer turned educator with 10 years of development experience and 5 years teaching programming fundamentals. She has worked at startups and Fortune 500 companies, writing production code in Python, SQL, R, and JavaScript.\n\nNina holds a Computer Science degree from the University of Waterloo and multiple programming certifications. Her teaching philosophy emphasizes clean code, debugging skills, and computational thinking—foundational skills that transcend any single language or framework.\n\nAt Ripotek Academy, Nina teaches Python for Data, SQL fundamentals, and programming best practices. Her structured curriculum takes complete beginners to job-ready programmers through a carefully scaffolded learning path with abundant practice exercises and code reviews.'
    }
  ];

  const industries = [
    { name: 'Energy & Utilities', icon: '⚡', description: 'Real-time operations, predictive maintenance, regulatory compliance' },
    { name: 'Financial Services', icon: '💰', description: 'Risk analytics, fraud detection, regulatory reporting' },
    { name: 'Public Sector', icon: '🏛️', description: 'Citizen services, policy analytics, cross-agency data sharing' },
    { name: 'Healthcare', icon: '🏥', description: 'Patient outcomes, operational efficiency, research analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="w-full px-4 lg:px-8">
          <div className="flex items-center h-20">
            {/* Logo - Far Left */}
            <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition shrink-0">
              <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg" />
              <div>
                <div className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent leading-none">Ripotek</div>
              </div>
            </a>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors flex items-center gap-1 py-2 text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl py-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Let's Talk Button - Far Right */}
            <a href="/contact" className="hidden lg:block bg-teal-600 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl whitespace-nowrap text-sm xl:text-base shrink-0">Let's Talk</a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 ml-auto">
              {mobileMenuOpen ? <X className="w-7 h-7 text-gray-900 stroke-[2.5]" /> : <Menu className="w-7 h-7 text-gray-900 stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block text-gray-700 hover:text-teal-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Company/Team Theme */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Layered Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900"></div>

          {/* Video Background - Team/Collaboration themed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-an-office-4933-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-45482-large.mp4" type="video/mp4" />
          </video>

          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'gridFlow 20s linear infinite'
          }}></div>

          {/* Floating gradient orbs - Company colors */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-10 left-10 md:left-20 w-64 md:w-80 h-64 md:h-80 bg-blue-500 rounded-full blur-3xl opacity-25 animate-pulse"></div>
            <div className="absolute top-10 right-10 md:right-20 w-72 md:w-96 h-72 md:h-96 bg-teal-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[400px] h-80 md:h-[400px] bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

            {/* Floating icons representing company values */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '0s' }}>
              <Users className="w-6 h-6 text-blue-400/40" />
            </div>
            <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-teal-400/40 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
              <Target className="w-6 h-6 text-teal-400/50" />
            </div>
            <div className="absolute top-1/3 left-1/3 w-14 h-14 border border-cyan-400/20 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
              <Heart className="w-7 h-7 text-cyan-400/30" />
            </div>
            <div className="hidden md:flex absolute top-1/5 right-1/3 w-10 h-10 border-2 border-purple-400/30 rounded-full animate-float items-center justify-center" style={{ animationDelay: '2s' }}>
              <Award className="w-5 h-5 text-purple-400/40" />
            </div>
          </div>

          {/* Subtle scanline effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)'
          }}></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-30">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
            <span className="block">About </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Ripotek Technologies</span>
          </h1>
          <p className="text-xl text-gray-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Founded in March 2023 in Calgary, Alberta, we're built on a vision to empower organizations through data-driven transformation and world-class training.
          </p>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(5deg); }
            50% { transform: translateY(-8px) rotate(-5deg); }
            75% { transform: translateY(-18px) rotate(3deg); }
          }

          @keyframes gridFlow {
            0% { transform: translateY(0); }
            100% { transform: translateY(60px); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
            animation-fill-mode: both;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Story</span>
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              Ripotek Technologies Inc. emerged from a passion for solving complex data challenges and a commitment to bridging the skills gap in the rapidly evolving fields of data engineering, business intelligence, and artificial intelligence.
            </p>
            <p className="mb-6">
              With decades of combined experience across Energy, Financial Services, and Public Sector industries, our founding team recognized the need for a consulting firm that could not only deliver technical excellence but also transfer knowledge effectively.
            </p>
            <p>
              Today, we serve enterprise clients across North America, providing end-to-end consulting services from strategy to implementation, while simultaneously running comprehensive training programs that prepare the next generation of data professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine">
              <Eye className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gray-900">Our </span>
                <span className="text-teal-600">Vision</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading data consulting and training organization in Western Canada, recognized for transforming how enterprises leverage data and for developing world-class data professionals who shape the industry's future.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine">
              <Target className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gray-900">Our </span>
                <span className="text-teal-600">Mission</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower organizations and individuals with cutting-edge data solutions and training that drive measurable business value. We are committed to delivering excellence through innovation, expertise, and a client-first approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="text-gray-900">Our Core </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">The principles that guide everything we do</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="text-center hover-lift card-shine bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gray-900">Industries We </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Serve</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover-lift card-shine text-center">
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Meet the Team Introduction */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Meet the </span>
              <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Behind every successful project and every trained professional is a team of dedicated experts who live and breathe data. From our leadership guiding strategic vision to our consultants solving complex challenges and our instructors empowering the next generation—each person brings unique expertise, passion, and a commitment to excellence.
            </p>
          </div>

          {/* Leadership & Executive */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gray-900">Leadership & </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Executive</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Our leadership team brings decades of combined experience in data engineering, AI, and enterprise transformation across Energy, Financial Services, and Public Sector industries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-gray-200 group-hover:ring-teal-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105 ${member.name === 'Priya Sharma' ? 'object-[center_20%]' : ''}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={idx < 3}
                  />
                  {/* Bold overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Name overlay on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                    <p className="text-teal-300 text-xs font-medium">{member.role}</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base group-hover:text-teal-600 transition-colors">{member.name}</h3>
                {/* For CEO, show simplified title */}
                {idx === 0 ? (
                  <p className="text-teal-600 text-xs md:text-sm font-semibold leading-snug">CEO & Founder</p>
                ) : (
                  <p className="text-gray-600 text-xs md:text-sm leading-snug">{member.role}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bio Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl my-8 animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-5 gap-8 p-8">
                {/* Left Column - Image */}
                <div className="md:col-span-2">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg sticky top-8">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Right Column - Bio */}
                <div className="md:col-span-3">
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
                      {selectedMember.role}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {selectedMember.name}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {selectedMember.bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Business Consultants Section */}
        <div className="max-w-7xl mx-auto mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gray-900">Business </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Consultants</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Our consulting team delivers enterprise-grade solutions across data engineering, business intelligence, and AI—combining deep technical expertise with industry best practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessConsultants.map((member, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-gray-200 group-hover:ring-teal-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.imagePosition || 'object-top'} ${member.imageScale || ''} transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Bold overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Name overlay on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                    <p className="text-teal-300 text-xs font-medium">{member.role}</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base group-hover:text-teal-600 transition-colors">{member.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-snug">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors Section */}
        <div className="max-w-7xl mx-auto mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gray-900">Academy </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Instructors</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Learn from world-class instructors who combine years of industry experience with a passion for teaching—delivering hands-on, career-focused training that gets results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((member, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-gray-200 group-hover:ring-teal-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Bold overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Name overlay on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                    <p className="text-teal-300 text-xs font-medium">{member.role}</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base group-hover:text-teal-600 transition-colors">{member.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-snug">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 200ms ease-out;
          }
          .animate-scaleIn {
            animation: scaleIn 300ms ease-out;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking for consulting expertise or want to launch your data career, we'd love to connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold hover-lift">
              Get In Touch
            </a>
            <a href="/careers" className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg font-semibold hover-lift">
              View Careers
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/favicon.svg" alt="Ripotek logo" width={40} height={40} className="w-10 h-10 rounded-lg" />
                <div className="min-w-0">
                  <span className="font-extrabold text-xl md:text-2xl tracking-tight leading-tight block text-left truncate pb-px">Ripotek Technologies Inc.</span>
                  <span className="text-white text-[8px] md:text-[10px] italic font-normal leading-none mt-0.5 block text-left">Design. Engineer. Deliver.</span>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                Enterprise data consulting and training services. Empowering organizations with governed self-service BI, Azure modernization, and industry-leading expertise.
              </p>
              <div className="mt-6 space-y-3 text-gray-300 text-base">
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-gray-300" /> Calgary, Alberta, Canada</div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-300" /> info@ripotek.com</div>
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-gray-300" /> +1 587-259-0033</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/services#data-platform-build" className="text-gray-300 hover:text-teal-400 transition">Data Engineering</a></li>
                <li><a href="/services#analytics-&-bi" className="text-gray-300 hover:text-teal-400 transition">Analytics & BI</a></li>
                <li><a href="/services#mlops-&-ai" className="text-gray-300 hover:text-teal-400 transition">AI & MLOps</a></li>
                <li><a href="/services#managed-services" className="text-gray-300 hover:text-teal-400 transition">Managed Services</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-lg">Training</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/training#power-bi-analyst" className="text-gray-300 hover:text-teal-400 transition">Power BI Analyst</a></li>
                <li><a href="/training#azure-data-engineer" className="text-gray-300 hover:text-teal-400 transition">Azure Data Engineer</a></li>
                <li><a href="/training#databricks-engineer" className="text-gray-300 hover:text-teal-400 transition">Databricks Engineer</a></li>
                <li><a href="/training#ai-engineer" className="text-gray-300 hover:text-teal-400 transition">AI Engineer</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-base">
                <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition">About Us</a></li>
                <li><a href="/case-studies" className="text-gray-300 hover:text-teal-400 transition">Case Studies</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-teal-400 transition">Blog</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-teal-400 transition">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <p className="text-gray-300 text-base">© 2023-2025 Ripotek Technologies Inc. All rights reserved.</p>
              <div className="flex gap-6 text-base text-gray-300">
                <a href="/privacy-policy" className="hover:text-teal-400 transition">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-teal-400 transition">Terms of Service</a>
                <a href="/refund-policy" className="hover:text-teal-400 transition">Refund Policy</a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 pt-6 border-t border-gray-800">
              <a href="https://linkedin.com/company/ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/Ripotek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Twitter">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@ripotekacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/ripotekdata" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/ripotek-technologies" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition" aria-label="GitHub">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
