import React, { useState, useRef, useEffect } from 'react';
import useExpertiseScroll from '../hooks/useExpertiseScroll';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Globe2, 
  Rocket, 
  Megaphone, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft,
  BrainCircuit,
  Building2
} from 'lucide-react';

// The 6 High-Level Traits exactly as specified by user
const traitData = [
  { 
    id: 'teaching', 
    number: '01',
    title: 'Teaching', 
    shortTitle: 'Teaching', 
    icon: GraduationCap, 
    score: 96,
    periodLabel: 'Teaching Period',
    periods: ['August 1997 – December 2004'],
    domain: 'Pedagogy & Faculty Roles',
    subExpertiseHeading: 'The Foundation of a Visionary: Early Teaching & Training Journey',
    subExpertises: [
      {
        organization: 'APTECH',
        role: 'Lab Technician',
        headline: 'The Starting Point',
        description: 'Began at the grassroots level of technical education, ensuring seamless lab operations and hands-on support for students.',
        impact: 'Developed a deep understanding of the practical challenges students face when interacting with technology, fostering a hands-on approach to problem-solving.'
      },
      {
        organization: 'Datapro',
        role: 'Junior Technical Trainer',
        headline: 'Stepping into Instruction',
        description: 'Transitioned from lab support to formal teaching, taking on the responsibility of delivering core technical concepts to eager learners.',
        impact: 'Honed the ability to break down complex technical jargon into accessible, bite-sized lessons for beginners.'
      },
      {
        organization: 'ICSS',
        role: 'Technical Trainer',
        headline: 'Broadening Expertise',
        description: 'Elevated training capabilities by delivering more advanced, structured technical curricula to a wider audience.',
        impact: 'Built a reputation for engaging instructional methods and a strong commitment to student skill development.'
      },
      {
        organization: 'NetGSC',
        role: 'Senior Technical Trainer',
        headline: 'Leadership in Training',
        description: 'Took on a senior role, teaching advanced technologies while mentoring trainers and shaping course delivery.',
        impact: 'Mastered high-level technical instruction and demonstrated early leadership in educational environments.'
      },
      {
        organization: 'Aditya Degree College',
        role: 'Faculty',
        headline: 'Entering Formal Academia',
        description: 'Bridged the gap between dynamic corporate technical training and formal undergraduate education.',
        impact: 'Brought practical, industry-focused teaching methods into the traditional classroom, enriching the academic experience for degree students.'
      },
      {
        organization: 'Aditya Engineering College',
        role: 'Faculty',
        headline: 'Shaping Future Engineers',
        description: 'Instructed at a higher academic tier, preparing engineering students for the rigorous demands of the global tech industry.',
        impact: 'Scaled educational impact through larger cohorts and advanced engineering curricula, laying the groundwork for future educational initiatives and institutional leadership.'
      }
    ]
  },
  { 
    id: 'training', 
    number: '02',
    title: 'Training & Placement', 
    shortTitle: 'Training & Placement', 
    icon: Award, 
    score: 99,
    domain: 'Campus Placements & CoEs',
    subExpertises: [
      {
        organization: 'Technical Hub',
        role: 'Established in 2016',
        logo: '/assets/th_logo.png',
        description: 'Trained and certified 16,000+ students.',
        socialStats: [
          { platform: 'LinkedIn', followers: '24K+' },
          { platform: 'Facebook', followers: '8K+' }
        ],
        image: '/assets/16k+.jpg'
      },
      {
        organization: 'DriveReady Program',
        logo: '/assets/drive-ready-logo.svg',
        description: '7 successful editions. 5,000+ certified across different domains.',
        images: [
          '/assets/certified/1.jpg',
          '/assets/certified/2.jpg',
          '/assets/certified/3.jpg',
          '/assets/certified/4.jpg',
          '/assets/certified/5.jpg',
          '/assets/certified/6.jpg',
          '/assets/certified/7.jpg',
          '/assets/certified/8.jpg',
          '/assets/certified/9.jpg'
        ]
      },
      {
        organization: 'T-Connect',
        description: 'Successfully conducted across 7 editions.',
        socialStats: [
          { platform: 'Visited', followers: '25,000+' }
        ],
        video: 'https://www.youtube-nocookie.com/embed/vpBMPKUCvuY?start=7'
      },
      {
        organization: '20+ CoEs Established',
        centered: true,
        partners: [
          { name: 'Red Hat Academy', logo: '/assets/RHA_Logos_Logo-Red_Hat-Academy-A-Standard-RGB-1024x257.png' },
          { name: 'Splunk', logo: '/assets/Splunk-Logo.png' },
          { name: 'MongoDB University', logo: '/assets/mongodb%20university.png' },
          { name: 'Cisco Networking Academy', logo: '/assets/Cisco_Networking_Academy.svg.webp' },
          { name: 'AWS Academy', logo: '/assets/AWS%20ACADEMY.png' },
          { name: 'Oracle Academy', logo: '/assets/Oracle_Academy_rgb.png' },
          { name: 'Automation Anywhere', logo: '/assets/Automation%20Anywhere.png' }
        ]
      },
      {
        organization: 'Conference Speaker',
        role: 'Cisco and Oracle Academy',
        scrollPartners: false,
        partners: [
          { name: 'Cisco Networking Academy', logo: '/assets/Cisco_Networking_Academy.svg.webp' },
          { name: 'Oracle Academy', logo: '/assets/Oracle_Academy_rgb.png' }
        ],
        images: [
          '/assets/babji%20sir%20speeck/1.jpg',
          '/assets/babji%20sir%20speeck/2.jpg',
          '/assets/babji%20sir%20speeck/3.jpg',
          '/assets/babji%20sir%20speeck/5.jpeg',
          '/assets/babji%20sir%20speeck/6.jpeg'
        ]
      },
      {
        organization: 'Oracle Academy Success Story',
        imageCard: true,
        imageLink: 'https://academy.oracle.com/en/about-success-spotlight-babji-neelam.html',
        image: '/assets/babji%20sir%20speeck/1.jpg',
        imageAlt: 'Babji Neelam speaking at an event',
        imageTitle: 'Oracle Academy',
        imageDescription: 'Bridging the Talent Gap',
        imageLabel: 'Published Article'
      },
      {
        organization: 'Pega University Program',
        showOrganizationWithLogo: true,
        logo: '/assets/pega.png',
        logoSize: 'large',
        logoBlend: 'mix-blend-multiply dark:mix-blend-normal dark:bg-white/10 dark:p-4 dark:rounded-2xl dark:backdrop-blur-sm',
        description: 'Technical Hub is one of only two companies in India partnered with Pega.'
      },
      {
        organization: 'ServiceNow Partner Network',
        showOrganizationWithLogo: true,
        logo: '/partners/sno_partner-network-logo.png',
        logoSize: 'large',
        logoBlend: 'max-h-28 sm:max-h-36 dark:bg-white/10 dark:p-4 dark:rounded-2xl dark:backdrop-blur-sm',
        description: 'Premier academic alliance empowering students with enterprise digital workflows, cloud platform administration, and ServiceNow app development.'
      },
      {
        organization: 'Mile2 Authorized Training Center',
        showOrganizationWithLogo: true,
        logo: '/partners/mile2_authorized_training_center_8x_enhanced.png',
        logoSize: 'large',
        logoBlend: 'max-h-36 sm:max-h-48 dark:bg-white/10 dark:p-4 dark:rounded-2xl dark:backdrop-blur-sm',
        description: 'Global cybersecurity accreditation center delivering certified ethical hacking, digital forensics, and enterprise information defense training.'
      },
      {
        organization: 'Automation Anywhere',
        showOrganizationWithLogo: true,
        logo: '/partners/Automation-Anywhere-Logo-Automation-Anywhere-Control-Room-Edureka.png',
        logoSize: 'large',
        logoBlend: 'max-h-36 sm:max-h-48 dark:bg-white/10 dark:p-4 dark:rounded-2xl dark:backdrop-blur-sm',
        description: 'Robotic Process Automation (RPA) Centre of Excellence training students in cognitive automation, intelligent bot creation, and digital workforce orchestration.'
      },
      {
        organization: 'Red Hat Academy',
        showOrganizationWithLogo: true,
        logo: '/partners/redhat.png',
        logoSize: 'large',
        logoBlend: 'max-h-44 sm:max-h-56 dark:bg-white/10 dark:p-4 dark:rounded-2xl dark:backdrop-blur-sm',
        description: 'Enterprise open-source partner providing comprehensive curricula in enterprise Linux system administration, OpenShift, and containerized architectures.'
      },
      {
        organization: 'OpenAI',
        showOrganizationWithLogo: true,
        logo: '/partners/openai_square.png',
        logoSize: 'large',
        logoBlend: 'max-h-48 sm:max-h-56 dark:invert',
        description: 'Driving frontier Generative AI education, neural prompt engineering, and LLM application development to build industry-ready AI developers.'
      },
      {
        organization: 'Anthropic Claude',
        showOrganizationWithLogo: true,
        logo: '/partners/claude.png',
        logoSize: 'large',
        logoBlend: 'max-h-48 sm:max-h-56 rounded-3xl shadow-md',
        description: 'Collaborating on next-generation AI architectures, model safety, agentic reasoning, and real-world conversational intelligence systems.'
      },
      {
        organization: 'Public AR Show',
        images: ['/assets/ar1.jpeg', '/assets/ar2.jpeg']
      }
    ]
  },
  { 
    id: 'industry', 
    number: '03',
    title: 'IT Industry', 
    shortTitle: 'IT Industry', 
    icon: Globe2, 
    score: 95,
    periodLabel: 'IT Industry Period',
    periods: ['February 2005 – January 2016'],
    domain: 'Global Enterprise Delivery',
    subExpertises: [
      {
        organization: 'IBM',
        showOrganizationWithLogo: true,
        role: 'Java Software Engineer',
        logo: '/assets/ibm_PNG19658.png',
        description: 'Java software engineering focused on finance and fintech applications.'
      },
      {
        organization: 'Wipro Technologies',
        showOrganizationWithLogo: true,
        logo: '/assets/Wipro-Logo.png',
        logoSize: 'large',
        role: 'Project Manager',
        locations: [
          'Australia — Sydney & Brisbane',
          'Switzerland — Zurich & Basel'
        ]
      }
    ]
  },
  { 
    id: 'entrepreneur', 
    number: '04',
    title: 'Entrepreneur', 
    shortTitle: 'Entrepreneur', 
    icon: Rocket, 
    score: 98,
    domain: 'Ventures & Incubators',
    subExpertises: [
      {
        organization: 'Technical Hub',
        role: 'Founder & CEO · 2016',
        logo: '/assets/th_logo.png',
        logoSize: 'large',
        description: 'Technical Hub, established in 2016 by Mr. Babji Neelam, is a dedicated skill development and incubation center that operates as an in-house technical training team. It is designed to bridge the gap between academic learning and modern industry requirements by equipping students with essential coding practices, problem-solving abilities, and hands-on experience. Through robust collaborations with industry-leading vendors, Technical Hub offers comprehensive, certification-aligned programs that ensure trainees are job-ready and highly competitive in the technology sector, serving as a critical launchpad for aspiring engineers to transition seamlessly into the professional workforce.'
      },
      {
        organization: 'Torii Minds',
        logos: [
          { name: 'Torii Minds', src: '/assets/tori-black.svg' },
          { name: 'NCC Limited', src: '/assets/ncc-logo-transparent.png' }
        ],
        role: 'Founder & CEO · Founded 2025 · Backed by NCC',
        description: 'Torii Minds, inspired by the Japanese Torii gate, is a comprehensive tech education platform designed to transform engineering students into industry-ready professionals. Serving as a gateway to tech excellence, the platform bridges the gap between academic learning and modern industry demands through structured coding curriculums, AI integration, and hands-on career-readiness training.',
      },
      {
        organization: 'QQ Media',
        logo: '/assets/qq-media-logo.png',
        hideOrganizationText: true,
        role: 'Mentoring',
        images: ['/assets/QQ%20MEDIA%202.jpeg', '/assets/qq3.jpeg', '/assets/qq4.jpeg', '/assets/qq5.jpeg']
      }
    ]
  },
  { 
    id: 'branding', 
    number: '05',
    title: 'Digital Branding', 
    shortTitle: 'Digital Branding', 
    icon: Megaphone, 
    score: 93,
    domain: 'Brand Identity Systems',
    subExpertises: [
      {
        organization: 'Technical Hub & Torii Minds',
        role: 'Branding',
        description: 'Organic branding for Technical Hub and Torii Minds.',
        socialStats: [
          { platform: 'Technical Hub · LinkedIn', followers: '24K+' },
          { platform: 'Technical Hub · Facebook', followers: '8K+' },
          { platform: 'Torii Minds · LinkedIn', followers: '4K+' }
        ],
        logos: [
          { name: 'Technical Hub', src: '/assets/th_logo.png' },
          { name: 'Torii Minds', src: '/assets/tori-black.svg' }
        ]
      },
      {
        organization: 'NGI Digital Branding',
        showOrganizationWithLogo: true,
        role: 'Digital Branding',
        logos: [
          { name: 'NGI Digital Branding', src: '/assets/NGI.png', size: 'large' },
          { name: 'T@G', src: '/assets/tag.png' }
        ]
      }
    ]
  },
  { 
    id: 'innovation', 
    number: '06',
    title: 'Innovation', 
    shortTitle: 'Innovation', 
    icon: Lightbulb, 
    score: 97,
    domain: 'Applications built under Mr. Babji Neelam',
    subExpertises: [
      {
        organization: 'Myna',
        showOrganizationWithLogo: true,
        logo: '/assets/Myna.png',
        logoSize: 'large',
        description: 'A communication-building app.'
      },
      {
        organization: 'Owl Coder',
        showOrganizationWithLogo: true,
        logo: '/assets/Owl%20Coder%20Gradient%20Mascot%20Logo.png',
        logoSize: 'large',
        description: 'An app to improve coding performance for trainers.'
      },
      {
        organization: 'Maya',
        showOrganizationWithLogo: true,
        logo: '/assets/maya_logo.png',
        logoSize: 'large',
        logoBlend: 'mix-blend-multiply',
        description: 'An app to improve coding performance for trainers.'
      },
      {
        organization: 'T@G',
        showOrganizationWithLogo: true,
        logo: '/assets/tag.png',
        logoSize: 'large',
        description: 'An app to manage digital marketing.'
      },
      {
        organization: 'HiBi',
        showOrganizationWithLogo: true,
        logo: '/assets/hibi-logo.png',
        logoSize: 'large',
        description: 'An HRMS platform.'
      },
      {
        organization: 'mPod',
        showOrganizationWithLogo: true,
        logo: '/assets/mpod_dark_text.png',
        logoSize: 'large',
        description: 'An AI interview platform.'
      },
      {
        organization: 'AptLogic',
        icon: BrainCircuit,
        description: 'An aptitude and logic improvement app.'
      },
      {
        organization: 'BeSafe',
        showOrganizationWithLogo: true,
        logo: '/assets/besafe_logo.png',
        logoSize: 'large',
        role: 'Public Safety & Security AR Application',
        headline: 'Launched by Olympic Medalist PV Sindhu & State Home Minister',
        description: 'An Augmented Reality (AR) application designed to increase public safety, awareness, and security in collaboration with the Vijayawada City Police, SHE Team, and Technical Hub.',
        impact: 'Officially inaugurated on stage by Olympic Champion PV Sindhu alongside the State Home Minister and senior police officials to revolutionize public safety education.',
        imagesFit: 'contain',
        images: [
          '/assets/besafe/besafe (2).jpeg',
          '/assets/besafe/besafe 3.jpeg',
          '/assets/besafe/besafe (3).jpeg',
          '/assets/besafe/besafe.jpeg',
          '/assets/besafe/WhatsApp Image 2026-10-14 at 3.41.27 PM (1).jpeg'
        ]
      },
      {
        organization: 'HRMS for Oman Government',
        icon: Building2,
        role: 'Enterprise Digital Governance Platform',
        headline: 'Launched by Ministry of Labour, Government of Oman',
        description: 'A comprehensive Human Resource Management System (HRMS) developed and implemented for the Government of Oman.',
        impact: 'Delivered an advanced enterprise HRMS solution officially launched in partnership with the Ministry of Labour of the Oman Government.',
        images: [
          '/assets/oman/WhatsApp Image 2026-10-14 at 1.04.45 PM (1).jpeg',
          '/assets/oman/WhatsApp Image 2026-10-14 at 1.04.45 PM (2).jpeg',
          '/assets/oman/WhatsApp Image 2026-10-14 at 1.04.46 PM.jpeg',
          '/assets/oman/WhatsApp Image 2026-10-14 at 3.41.27 PM.jpeg'
        ]
      }
    ]
  }
];

const traits = ['teaching', 'industry', 'entrepreneur', 'training', 'branding', 'innovation']
  .map((id, index) => {
    const trait = traitData.find((item) => item.id === id);
    return { ...trait, number: String(index + 1).padStart(2, '0') };
  });

const expertiseStages = traits.flatMap((trait, traitIndex) => {
  if (trait.subExpertises?.length) {
    return trait.subExpertises.map((subExpertise, subIndex) => ({
      traitIndex,
      subExpertise,
      subIndex,
      subTotal: trait.subExpertises.length
    }));
  }

  return [{ traitIndex, subExpertise: null, subIndex: 0, subTotal: 0 }];
});

const Expertise = () => {
  const containerRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [activeStageIndex]);

  // Mirror of activeStageIndex so the scroll handler never reads a stale value.
  const activeStageIndexRef = useRef(0);
  useEffect(() => {
    activeStageIndexRef.current = activeStageIndex;
  }, [activeStageIndex]);

  const scrollToStage = useExpertiseScroll(
    containerRef, activeStageIndexRef, setActiveStageIndex, expertiseStages.length
  );

  const scrollToTrait = (targetTraitIndex) => {
    const stageIndex = expertiseStages.findIndex((stage) => stage.traitIndex === targetTraitIndex);
    if (stageIndex !== -1) scrollToStage(stageIndex);
  };

  const activeStage = expertiseStages[activeStageIndex];
  const activeTraitIndex = activeStage.traitIndex;
  const activeTrait = traits[activeTraitIndex];
  const MainTraitIcon = activeTrait.icon;
  const ActiveSubExpertiseIcon = activeStage.subExpertise?.icon;

  // Touch swipe support for mobile navigation
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;

    // Detect fast horizontal swipe without interfering with normal vertical scroll
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3 && deltaTime < 450) {
      if (deltaX < 0) {
        scrollToStage(Math.min(expertiseStages.length - 1, activeStageIndexRef.current + 1));
      } else {
        scrollToStage(Math.max(0, activeStageIndexRef.current - 1));
      }
    }
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full scroll-mt-16 sm:scroll-mt-20 min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)]"
    >
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="sticky top-16 sm:top-20 h-[calc(100svh-4rem)] sm:h-[calc(100svh-5rem)] w-full flex flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-8 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300"
      >
        {/* Top Controls Bar */}
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-2 sm:gap-4 pb-2">
          {/* Stage Counter */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span className="text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl neu-sphere-light dark:neu-sphere-dark text-black dark:text-white shadow-neu-light-sm dark:shadow-neu-dark-sm tracking-wider">
              {String(activeStageIndex + 1).padStart(2, '0')}&nbsp;/&nbsp;{expertiseStages.length}
            </span>
          </div>

          {/* Trait Pills - Horizontally scrollable on mobile, flex on desktop */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 px-1 max-w-[calc(100vw-145px)] sm:max-w-none">
            {traits.map((trait, index) => (
              <button
                key={trait.id}
                onClick={() => scrollToTrait(index)}
                aria-pressed={index === activeTraitIndex}
                className={`flex-shrink-0 whitespace-nowrap rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                  index === activeTraitIndex
                    ? 'bg-light-bg dark:bg-dark-bg text-black dark:text-white shadow-neu-light-pressed dark:shadow-neu-dark-pressed scale-[0.98]'
                    : 'bg-light-bg dark:bg-dark-bg text-gray-700 dark:text-gray-300 shadow-neu-light-sm dark:shadow-neu-dark-sm hover:shadow-neu-light-pressed dark:hover:shadow-neu-dark-pressed hover:-translate-y-0.5'
                }`}
              >
                {trait.shortTitle}
              </button>
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => scrollToStage(Math.max(0, activeStageIndex - 1))}
              disabled={activeStageIndex === 0}
              className="p-2 sm:p-2.5 rounded-xl bg-light-bg dark:bg-dark-bg text-black dark:text-white shadow-neu-light-sm dark:shadow-neu-dark-sm active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed hover:-translate-y-0.5 disabled:opacity-30 disabled:pointer-events-none transition-all"
              title="Previous expertise"
              aria-label="Previous expertise"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollToStage(Math.min(expertiseStages.length - 1, activeStageIndex + 1))}
              disabled={activeStageIndex === expertiseStages.length - 1}
              className="p-2 sm:p-2.5 rounded-xl bg-light-bg dark:bg-dark-bg text-black dark:text-white shadow-neu-light-sm dark:shadow-neu-dark-sm active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed hover:-translate-y-0.5 disabled:opacity-30 disabled:pointer-events-none transition-all"
              title="Next expertise"
              aria-label="Next expertise"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="w-full max-w-[1600px] mx-auto grid flex-1 min-h-0 lg:grid-cols-12 gap-4 lg:gap-10 items-stretch py-2 sm:py-3 overflow-hidden">
          {/* Desktop Left Pillar Card */}
          <div className="hidden lg:flex lg:col-span-5 h-full items-center pr-4">
            <motion.div
              key={activeTrait.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeOut' }}
              className="w-full rounded-2xl bg-light-bg dark:bg-dark-bg shadow-neu-light dark:shadow-neu-dark p-6 sm:p-8 space-y-5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-full neu-sphere-light dark:neu-sphere-dark text-black dark:text-white shadow-neu-light-sm dark:shadow-neu-dark-sm">
                  {React.createElement(activeTrait.icon, { size: 24 })}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Main Expertise · Pillar {activeTrait.number} of {traits.length}
                  </span>
                  <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
                    {activeTrait.title}
                  </h2>
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {activeTrait.domain}
              </p>

              {activeTrait.periods?.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {activeTrait.periodLabel}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeTrait.periods.map((period) => (
                      <span key={period} className="inline-block px-3.5 py-1.5 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light-pressed dark:shadow-neu-dark-pressed text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {period}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTrait.subExpertiseHeading && (
                <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">
                  {activeTrait.subExpertiseHeading}
                </p>
              )}

              {activeTrait.id === 'teaching' && (
                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="p-4 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light-pressed dark:shadow-neu-dark-pressed">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Started</span>
                    <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">August 1997 · APTECH, Lab Technician</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column Content - Mobile Scrollable & Adaptive */}
          <motion.div
            key={activeStageIndex}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: 'easeOut' }}
            className="w-full lg:col-span-7 h-full min-h-0 flex flex-col justify-start lg:justify-center overflow-y-auto no-scrollbar"
          >
            {/* Mobile Compact Pillar Header */}
            <div className="lg:hidden flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light-sm dark:shadow-neu-dark-sm mb-2.5 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full neu-sphere-light dark:neu-sphere-dark text-black dark:text-white flex-shrink-0">
                  {React.createElement(activeTrait.icon, { size: 16 })}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block leading-tight">
                    Pillar {activeTrait.number} · {activeTrait.title}
                  </span>
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[210px] sm:max-w-xs leading-tight">
                    {activeTrait.domain}
                  </p>
                </div>
              </div>
              {activeTrait.periods?.length > 0 && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-light-bg dark:bg-dark-bg shadow-neu-light-pressed dark:shadow-neu-dark-pressed text-gray-800 dark:text-gray-200">
                  {activeTrait.periods[0]}
                </span>
              )}
            </div>

            <div className={`flex-1 min-h-0 flex flex-col justify-center py-2 sm:py-6 ${activeStage.subExpertise?.centered ? 'items-center text-center px-1 sm:px-4' : 'pl-1 sm:pl-5 md:pl-8'}`}>
              {activeStage.subExpertise && (
                <div className="space-y-3 sm:space-y-4 w-full">
                    {ActiveSubExpertiseIcon && (
                      <div className="inline-flex p-3 sm:p-4 rounded-full neu-sphere-light dark:neu-sphere-dark shadow-neu-light-sm dark:shadow-neu-dark-sm mb-1 sm:mb-2 text-black dark:text-white">
                        <ActiveSubExpertiseIcon size={32} className="sm:w-9 sm:h-9" strokeWidth={1.75} />
                      </div>
                    )}
                    {activeStage.subExpertise.logo && (
                      <img
                        src={activeStage.subExpertise.logo}
                        alt={`${activeStage.subExpertise.organization} logo`}
                        className={activeStage.subExpertise.logoSize === 'large'
                          ? `h-32 sm:h-48 lg:h-64 w-auto max-w-full object-contain ${activeStage.subExpertise.centered ? 'object-center mx-auto' : 'object-left'} ${activeStage.subExpertise.logoBlend || ''}`
                          : `h-14 sm:h-20 lg:h-24 w-auto max-w-full object-contain ${activeStage.subExpertise.centered ? 'object-center mx-auto' : 'object-left'}`}
                      />
                    )}
                    {activeStage.subExpertise.logos?.length > 0 && (
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        {activeStage.subExpertise.logos.map((logo) => (
                          <img
                            key={logo.name}
                            src={logo.src}
                            alt={logo.name}
                            title={logo.name}
                            className={logo.size === 'large' ? 'h-32 sm:h-48 w-auto max-w-full object-contain object-center' : 'h-24 sm:h-36 w-auto max-w-full object-contain object-center'}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                    {(!activeStage.subExpertise.logo || activeStage.subExpertise.showOrganizationWithLogo) && !activeStage.subExpertise.imageCard && (
                      <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-black text-black dark:text-white leading-tight ${activeStage.subExpertise.centered ? 'w-full text-center' : ''}`}>
                        {activeStage.subExpertise.organization}
                      </h3>
                    )}
                    {activeStage.subExpertise.role && !activeStage.subExpertise.imageCard && (
                      <p className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 tracking-tight leading-snug">
                        {activeStage.subExpertise.role}
                      </p>
                    )}
                    {activeStage.subExpertise.headline && (
                      <p className="text-base sm:text-xl lg:text-2xl font-bold text-black dark:text-white leading-snug">
                        {activeStage.subExpertise.headline}
                      </p>
                    )}
                    {activeStage.subExpertise.socialStats?.length > 0 && (
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        {activeStage.subExpertise.socialStats.map((stat) => (
                          <div key={stat.platform} className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light-sm dark:shadow-neu-dark-sm flex items-baseline gap-2">
                            <span className="text-xl sm:text-3xl font-black text-black dark:text-white">
                              {stat.followers}
                            </span>
                            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                              {stat.platform}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeStage.subExpertise.description && !activeStage.subExpertise.imageCard && (
                      <p className="text-sm sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activeStage.subExpertise.description}
                      </p>
                    )}
                    {activeStage.subExpertise.impact && (
                      <div className="mt-2.5 sm:mt-4 max-w-3xl p-3.5 sm:p-5 rounded-2xl bg-light-bg dark:bg-dark-bg shadow-neu-light-pressed dark:shadow-neu-dark-pressed space-y-1">
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Core Impact
                        </p>
                        <p className="text-xs sm:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-200 leading-normal">
                          {activeStage.subExpertise.impact}
                        </p>
                      </div>
                    )}
                    {activeStage.subExpertise.locations?.length > 0 && (
                      <div className="mt-3 sm:mt-4 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                        {activeStage.subExpertise.locations.map((location, index) => (
                          <div key={location} className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neu-light-sm dark:shadow-neu-dark-sm">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full neu-sphere-light dark:neu-sphere-dark shadow-neu-light-sm dark:shadow-neu-dark-sm flex items-center justify-center text-[10px] sm:text-xs font-bold text-black dark:text-white flex-shrink-0">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="font-semibold text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                              {location}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeStage.subExpertise.link && !activeStage.subExpertise.imageLink && !activeStage.subExpertise.imageCard && (
                      <a
                        href={activeStage.subExpertise.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-light-bg dark:bg-dark-bg text-black dark:text-white shadow-neu-light-sm dark:shadow-neu-dark-sm active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed hover:-translate-y-0.5 font-semibold text-xs sm:text-sm transition-all"
                      >
                        Read the Oracle Academy success story
                      </a>
                    )}
                    {activeStage.subExpertise.imageCard ? (
                      <a
                        href={activeStage.subExpertise.imageLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open Oracle Academy success story"
                        className="mt-3 sm:mt-4 mx-auto block w-full max-w-[520px] rounded-2xl bg-light-bg dark:bg-dark-bg shadow-neu-light dark:shadow-neu-dark p-3.5 sm:p-5 hover:-translate-y-1 transition-all"
                      >
                        <div className="overflow-hidden rounded-xl shadow-neu-light-pressed dark:shadow-neu-dark-pressed">
                          <img
                            src={activeStage.subExpertise.image}
                            alt={activeStage.subExpertise.imageAlt}
                            className="aspect-video w-full object-cover"
                          />
                        </div>
                        <div className="space-y-1 pt-3 sm:pt-4">
                          <h3 className="text-base sm:text-lg font-bold text-black dark:text-white">
                            {activeStage.subExpertise.imageTitle}
                          </h3>
                          <p className="font-semibold text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                            {activeStage.subExpertise.imageDescription}
                          </p>
                          <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                            {activeStage.subExpertise.imageLabel}
                          </span>
                        </div>
                      </a>
                    ) : activeStage.subExpertise.image && (
                      activeStage.subExpertise.imageLink ? (
                        <a
                          href={activeStage.subExpertise.imageLink}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open Oracle Academy success story"
                          className="mt-3 sm:mt-4 inline-block"
                        >
                          <img
                            src={activeStage.subExpertise.image}
                            alt={activeStage.subExpertise.imageAlt || activeStage.subExpertise.organization}
                            className="h-44 sm:h-64 w-auto max-w-full object-contain object-left"
                          />
                        </a>
                      ) : (
                        <img
                          src={activeStage.subExpertise.image}
                          alt={activeStage.subExpertise.imageAlt || `${activeStage.subExpertise.organization} image`}
                          className="mt-3 sm:mt-4 block h-auto w-full max-w-[800px] rounded-xl shadow-neu-light-sm dark:shadow-neu-dark-sm"
                        />
                      )
                    )}
                    {activeStage.subExpertise.partners?.length > 0 && (
                      activeStage.subExpertise.scrollPartners === false ? (
                        <div className="mx-auto mt-4 sm:mt-6 flex w-full max-w-[900px] flex-wrap items-center justify-center gap-4 sm:gap-6">
                          {activeStage.subExpertise.partners.map((partner) => (
                            <img
                              key={partner.name}
                              src={partner.logo}
                              alt={partner.name}
                              title={partner.name}
                              className="h-20 sm:h-32 w-48 sm:w-80 object-contain"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="drive-ready-gallery mx-auto mt-4 sm:mt-6 w-full max-w-[900px]" role="region" aria-label={`${activeStage.subExpertise.organization} partner logos`}>
                          <div className="drive-ready-gallery-track">
                            {[0, 1].map((copy) => (
                              <div
                                key={copy}
                                className="drive-ready-gallery-group"
                                aria-hidden={copy === 1 ? 'true' : undefined}
                              >
                                {activeStage.subExpertise.partners.map((partner) => (
                                  <img
                                    key={`${copy}-${partner.name}`}
                                    src={partner.logo}
                                    alt={copy === 0 ? partner.name : ''}
                                    title={partner.name}
                                    className={`h-20 sm:h-32 w-52 sm:w-80 flex-shrink-0 object-contain ${partner.name === 'MongoDB University' ? 'mix-blend-multiply' : ''}`}
                                    loading="lazy"
                                  />
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                    {activeStage.subExpertise.images?.length > 0 && (
                      activeStage.subExpertise.imagesLayout === 'side-by-side' ? (
                        <div className="mt-4 sm:mt-5 grid w-full max-w-[680px] grid-cols-1 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center gap-3 sm:gap-4">
                          <img
                            src={activeStage.subExpertise.images[0]}
                            alt={`${activeStage.subExpertise.organization} logo`}
                            className="h-20 sm:h-24 w-full object-contain"
                            loading="lazy"
                          />
                          <img
                            src={activeStage.subExpertise.images[1]}
                            alt={`${activeStage.subExpertise.organization} mentoring image`}
                            className="aspect-video w-full rounded-xl object-cover shadow-neu-light-sm dark:shadow-neu-dark-sm"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="drive-ready-gallery mt-3 sm:mt-5 w-full mx-auto" role="region" aria-label={`${activeStage.subExpertise.organization} image gallery`}>
                          <div className="drive-ready-gallery-track">
                            {[0, 1].map((copy) => (
                              <div
                                key={copy}
                                className="drive-ready-gallery-group"
                                aria-hidden={copy === 1 ? 'true' : undefined}
                              >
                                {activeStage.subExpertise.images.map((image, index) => (
                                  <img
                                    key={`${copy}-${image}`}
                                    src={image}
                                    alt={copy === 0 ? `${activeStage.subExpertise.organization} image ${index + 1}` : ''}
                                    className={`aspect-video w-64 sm:w-96 flex-shrink-0 rounded-xl shadow-neu-light-sm dark:shadow-neu-dark-sm ${
                                      activeStage.subExpertise.imagesFit === 'contain'
                                        ? 'object-contain'
                                        : 'object-cover sm:w-[28rem] lg:w-[40rem]'
                                    }`}
                                    loading="lazy"
                                  />
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                    {activeStage.subExpertise.video && (
                      <div className="relative mx-auto mt-3 sm:mt-4 aspect-video w-full max-w-[760px] overflow-hidden rounded-2xl shadow-neu-light dark:shadow-neu-dark group">
                        <iframe
                          src={`${activeStage.subExpertise.video}${isVideoPlaying ? '&autoplay=1' : ''}`}
                          title={`${activeStage.subExpertise.organization} video`}
                          className={`h-full w-full ${!isVideoPlaying ? 'pointer-events-none' : ''}`}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                        {!isVideoPlaying && (
                          <div
                            onClick={() => setIsVideoPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center bg-black/15 hover:bg-black/30 transition-colors cursor-pointer group"
                            title="Click to play video"
                          >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-transform">
                              <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white translate-x-0.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Progress Footer */}
        <div className="w-full max-w-[1600px] mx-auto pt-2 sm:pt-2.5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-[11px] sm:text-xs">Progress:</span>
            <div className="w-24 sm:w-48 md:w-64 h-2.5 sm:h-3 rounded-full bg-light-bg dark:bg-dark-bg shadow-neu-light-pressed dark:shadow-neu-dark-pressed overflow-hidden p-0.5 flex items-center">
              <motion.div
                className="h-full rounded-full bg-black dark:bg-light-bg shadow-neu-light-sm dark:shadow-neu-dark-sm"
                style={{ width: `${((activeStageIndex + 1) / expertiseStages.length) * 100}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
            <span className="font-bold text-black dark:text-white text-[11px] sm:text-xs">
              {Math.round(((activeStageIndex + 1) / expertiseStages.length) * 100)}%
            </span>
          </div>

          <span className="font-bold text-[11px] sm:text-xs text-gray-700 dark:text-gray-300 truncate max-w-[150px] sm:max-w-none">
            {activeStageIndex < expertiseStages.length - 1
              ? `Next: ${expertiseStages[activeStageIndex + 1].subExpertise?.organization || traits[expertiseStages[activeStageIndex + 1].traitIndex].title}`
              : 'Ventures next'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
