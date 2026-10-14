import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Globe2, 
  Rocket, 
  Megaphone, 
  Lightbulb, 
  ChevronRight, 
  ChevronLeft, 
  Activity,
  BrainCircuit
} from 'lucide-react';

// The 6 High-Level Traits exactly as specified by user
const traits = [
  { 
    id: 'teaching', 
    number: '01',
    title: 'Teaching', 
    shortTitle: 'Teaching', 
    icon: GraduationCap, 
    score: 96,
    periodLabel: 'Teaching & Academic Leadership',
    periods: ['August 1997 – December 2004', 'February 2016 – Present'],
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
          '/assets/babji%20sir%20speeck/3.jpg'
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
        logoBlend: 'mix-blend-multiply',
        description: 'Technical Hub is one of only two companies in India partnered with Pega.'
      },
      {
        organization: 'ServiceNow Authorized Training Partner',
        showOrganizationWithLogo: true,
        logo: '/assets/ServiceNOW_BIG-ada03f01.png'
      },
      {
        organization: 'Cadence Training Partner',
        showOrganizationWithLogo: true,
        logo: '/assets/CadenceUPM.png'
      },
      {
        organization: 'Open AR Show',
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
        role: 'Founder & CEO',
        logo: '/assets/th_logo.png',
        logoSize: 'large',
        description: 'Technical Hub, established in 2016 by Mr. Babji Neelam, is a dedicated skill development and incubation center that operates as an in-house technical training team. It is designed to bridge the gap between academic learning and modern industry requirements by equipping students with essential coding practices, problem-solving abilities, and hands-on experience. Through robust collaborations with industry-leading vendors, Technical Hub offers comprehensive, certification-aligned programs that ensure trainees are job-ready and highly competitive in the technology sector, serving as a critical launchpad for aspiring engineers to transition seamlessly into the professional workforce.',
        socialStats: [
          { platform: 'LinkedIn', followers: '24K+' },
          { platform: 'Facebook', followers: '8K+' }
        ]
      },
      {
        organization: 'Torii Minds',
        logos: [
          { name: 'Torii Minds', src: '/assets/tori-black.svg' },
          { name: 'Nagarjuna Group of Institutions (NGI)', src: '/assets/NGI.png' }
        ],
        role: 'Backed by NGI',
        description: 'Torii Minds, inspired by the Japanese Torii gate, is a comprehensive tech education platform designed to transform engineering students into industry-ready professionals. Serving as a gateway to tech excellence, the platform bridges the gap between academic learning and modern industry demands through structured coding curriculums, AI integration, and hands-on career-readiness training.',
        socialStats: [
          { platform: 'LinkedIn', followers: '4K+' }
        ],
      },
      {
        organization: 'QQ Media',
        role: 'Mentoring',
        description: 'Mentoring on digital media strategy, creative workflows, technology adoption, and brand campaigns.',
        imagesLayout: 'side-by-side',
        images: ['/assets/qq-media-logo.png', '/assets/QQ%20MEDIA%202.jpeg']
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
        description: 'Digital branding for Nagarjuna Group of Institutions.',
        logo: '/assets/NGI.png',
        logoSize: 'large',
        logoBlend: 'mix-blend-multiply'
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
        description: 'A voice-enabled campus communication app for announcements, updates, and keeping students and staff connected.'
      },
      {
        organization: 'Owl Coder',
        showOrganizationWithLogo: true,
        logo: '/assets/Owl%20Coder%20Gradient%20Mascot%20Logo.png',
        logoSize: 'large',
        description: 'A coding platform that helps trainers improve their coding performance through hands-on programming practice, challenges, and assessment.'
      },
      {
        organization: 'Maya',
        showOrganizationWithLogo: true,
        logo: '/assets/maya_logo.png',
        logoSize: 'large',
        logoBlend: 'mix-blend-multiply',
        description: 'An interactive AI learning companion that helps trainers improve coding performance through guided learning and visual explanations.'
      },
      {
        organization: 'T@G',
        showOrganizationWithLogo: true,
        logo: '/assets/tag.png',
        logoSize: 'large',
        description: 'A digital marketing management app designed to help teams organize and manage their online marketing work.'
      },
      {
        organization: 'HiBi',
        showOrganizationWithLogo: true,
        logo: '/assets/hibi-logo.png',
        logoSize: 'large',
        description: 'An HRMS platform for employee attendance, leave and permission requests, team information, and workplace documents.'
      },
      {
        organization: 'mPod',
        showOrganizationWithLogo: true,
        logo: '/assets/mpod_dark_text.png',
        logoSize: 'large',
        description: 'An AI interview platform where candidates can practice interview conversations and build career readiness.'
      },
      {
        organization: 'AptLogic',
        icon: BrainCircuit,
        description: 'An aptitude and logic practice platform designed to strengthen quantitative reasoning and problem-solving skills.'
      }
    ]
  }
];

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

// Large, Commanding Hexagonal Radar Chart Component - Shifted Firmly to the Left
const LargeRadarChart = ({ activeTraitIndex, onSelectTrait }) => {
  const size = 440;
  const center = size / 2;
  const radius = 138;
  const total = traits.length;

  const levels = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index, value = 1.0) => {
    const angle = (Math.PI * 2 / total) * index - Math.PI / 2;
    const r = radius * value;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y, angle };
  };

  const dataPoints = traits.map((t, i) => {
    let multiplier = t.score / 100;
    if (i === activeTraitIndex) multiplier = Math.min(1.08, multiplier * 1.08);
    else multiplier = multiplier * 0.9;
    const { x, y } = getCoordinates(i, multiplier);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative w-full max-w-[460px] mr-auto ml-0 select-none p-0">
      {/* Outer ambient glow */}
      <div className="absolute inset-2 rounded-full border border-blue-500/10 dark:border-blue-400/10 pointer-events-none"></div>
      
      <svg 
        viewBox={`0 0 ${size} ${size}`} 
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="largeRadarFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="largeRadarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <radialGradient id="largeBeamGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sweeping Radar Beam */}
        <g className="origin-center" style={{ transformOrigin: `${center}px ${center}px` }}>
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="url(#largeBeamGrad)"
            className="pointer-events-none opacity-40"
            animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        </g>

        {/* Concentric Hexagons */}
        {levels.map((lvl, lIdx) => {
          const points = traits.map((_, i) => {
            const { x, y } = getCoordinates(i, lvl);
            return `${x},${y}`;
          }).join(' ');
          return (
            <polygon
              key={lIdx}
              points={points}
              className="fill-transparent stroke-gray-300/60 dark:stroke-gray-700/60 stroke-[1.5]"
              strokeDasharray={lIdx === levels.length - 1 ? "none" : "3 3"}
            />
          );
        })}

        {/* Radial Spokes */}
        {traits.map((_, i) => {
          const { x, y } = getCoordinates(i, 1.0);
          const isSelected = i === activeTraitIndex;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              className={`transition-colors duration-150 ${
                isSelected 
                  ? 'stroke-blue-500 stroke-2' 
                  : 'stroke-gray-300/50 dark:stroke-gray-700/50 stroke-1'
              }`}
            />
          );
        })}

        {/* Data Polygon */}
        <polygon
          points={dataPoints}
          fill="url(#largeRadarFill)"
          stroke="url(#largeRadarStroke)"
          strokeWidth="3.5"
          className="transition-all duration-200 ease-out"
        />

        {/* Interactive Vertex Nodes & Outer Labels */}
        {traits.map((t, i) => {
          const val = t.score / 100;
          const { x, y } = getCoordinates(i, i === activeTraitIndex ? Math.min(1.08, val * 1.08) : val * 0.9);
          const outerCoord = getCoordinates(i, 1.34);
          const isSelected = i === activeTraitIndex;
          const labelDx = Math.max(Math.abs(x - outerCoord.x) - 74, 0);
          const labelDy = Math.max(Math.abs(y - outerCoord.y) - 14, 0);
          const labelOverlapsNode = isSelected && Math.hypot(labelDx, labelDy) < 16;
          const labelY = labelOverlapsNode
            ? outerCoord.y + (outerCoord.y < center ? -24 : 24)
            : outerCoord.y;

          return (
            <g 
              key={t.id} 
              className="cursor-pointer group"
              onClick={() => onSelectTrait(i)}
            >
              {/* Outer Pill with EXACT Category Title */}
              <g transform={`translate(${outerCoord.x}, ${labelY})`}>
                <rect
                  x="-74"
                  y="-14"
                  width="148"
                  height="28"
                  rx="14"
                   className={`transition-all duration-150 ${
                    isSelected 
                      ? 'fill-blue-600 dark:fill-blue-500' 
                      : 'fill-transparent group-hover:fill-gray-200 dark:group-hover:fill-gray-700'
                  }`}
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  className={`text-[11px] font-black tracking-tight transition-all duration-150 ${
                    isSelected 
                      ? 'fill-white text-[11.5px]' 
                      : 'fill-gray-700 dark:fill-gray-300 group-hover:fill-blue-600 dark:group-hover:fill-blue-400'
                  }`}
                >
                  {t.shortTitle}
                </text>
              </g>

              {/* Pulsing Ring on active node */}
              {isSelected && (
                <circle
                  cx={x}
                  cy={y}
                  r="16"
                  className="fill-blue-500/25 stroke-blue-500 stroke-2 animate-ping"
                />
              )}

              {/* Vertex Circle */}
              <circle
                cx={x}
                cy={y}
                r={isSelected ? "9" : "6"}
                className={`transition-all duration-150 ${
                  isSelected
                    ? 'fill-blue-600 stroke-white dark:stroke-black stroke-2'
                    : 'fill-gray-800 dark:fill-white group-hover:fill-blue-500'
                }`}
              />

            </g>
          );
        })}

        {/* Center Point */}
        <circle cx={center} cy={center} r="5" className="fill-blue-600 stroke-white dark:stroke-black stroke-2" />
      </svg>
    </div>
  );
};

const Expertise = () => {
  const containerRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const clamped = Math.max(0, Math.min(0.9999, latest));
    setActiveStageIndex(Math.floor(clamped * expertiseStages.length));
  });

  const scrollToStage = (targetStageIndex) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerAbsoluteTop = rect.top + (window.scrollY || document.documentElement.scrollTop);
    const maxScroll = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerAbsoluteTop + (targetStageIndex / (expertiseStages.length - 1)) * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const scrollToTrait = (targetTraitIndex) => {
    const stageIndex = expertiseStages.findIndex((stage) => stage.traitIndex === targetTraitIndex);
    if (stageIndex !== -1) scrollToStage(stageIndex);
  };

  const activeStage = expertiseStages[activeStageIndex];
  const activeTraitIndex = activeStage.traitIndex;
  const activeTrait = traits[activeTraitIndex];
  const MainTraitIcon = activeTrait.icon;
  const ActiveSubExpertiseIcon = activeStage.subExpertise?.icon;

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full scroll-mt-20"
      style={{ height: `${(expertiseStages.length + 1) * 100}vh` }}
    >
      <div className="sticky top-20 h-[calc(100svh-5rem)] w-full flex flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-8 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-4 pb-2.5">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
              {String(activeStageIndex + 1).padStart(2, '0')} / {expertiseStages.length}
            </span>
            <span className="text-sm font-extrabold uppercase text-gray-600 dark:text-gray-300">
              {activeTrait.title}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {traits.map((trait, index) => (
              <button
                key={trait.id}
                onClick={() => scrollToTrait(index)}
                className={`text-xs font-bold px-3 py-1.5 rounded-md transition-colors ${
                  index === activeTraitIndex
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300'
                }`}
              >
                {trait.shortTitle}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToStage(Math.max(0, activeStageIndex - 1))}
              disabled={activeStageIndex === 0}
              className="p-2 rounded-md bg-transparent text-gray-700 dark:text-gray-200 disabled:opacity-30 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-700 dark:hover:text-blue-300 active:scale-95 transition-all"
              title="Previous expertise"
              aria-label="Previous expertise"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollToStage(Math.min(expertiseStages.length - 1, activeStageIndex + 1))}
              disabled={activeStageIndex === expertiseStages.length - 1}
              className="p-2 rounded-md bg-transparent text-blue-700 dark:text-blue-300 disabled:opacity-30 hover:bg-blue-50 dark:hover:bg-blue-950/40 active:scale-95 transition-all"
              title="Next expertise"
              aria-label="Next expertise"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto grid flex-1 min-h-0 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch py-3">
          <div className="lg:col-span-5 h-full flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between max-w-[440px] mb-2 px-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                <Activity size={14} className="text-blue-500" /> Executive Competency Radar
              </div>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40">
                {activeTrait.score}% Mastery
              </span>
            </div>
            <div className="w-full flex justify-start">
              <LargeRadarChart activeTraitIndex={activeTraitIndex} onSelectTrait={scrollToTrait} />
            </div>
          </div>

          <motion.div
            key={activeStageIndex}
            initial={prefersReducedMotion ? false : { opacity: 0, filter: 'blur(12px)', y: 24, scale: 0.97 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: 'easeInOut' }}
            className="w-full lg:col-span-7 h-full min-h-0 flex flex-col justify-center"
          >
            <div className="relative -top-2 w-full mb-2.5 p-3.5 sm:p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 sm:p-3 rounded-lg">
                  <MainTraitIcon size={22} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
                    MAIN EXPERTISE · PILLAR {activeTrait.number} OF {String(traits.length).padStart(2, '0')}
                    {activeStage.subExpertise && ` · ${activeTrait.title.toUpperCase()} SUB-EXPERTISE ${String(activeStage.subIndex + 1).padStart(2, '0')} OF ${String(activeStage.subTotal).padStart(2, '0')}`}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white leading-tight">
                    {activeTrait.title}
                  </h2>
                  {activeTrait.subExpertiseHeading && (
                    <p className="mt-2 max-w-2xl text-sm sm:text-base font-semibold text-gray-600 dark:text-gray-300">
                      {activeTrait.subExpertiseHeading}
                    </p>
                  )}
                </div>
              </div>
              {activeTrait.periods?.length > 0 && (
                <div className="text-right hidden sm:block">
                  <span className="text-xs font-bold text-gray-500 block uppercase tracking-wider">
                    {activeTrait.periodLabel}
                  </span>
                  {activeTrait.periods.map((period) => (
                    <span key={period} className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300 block">
                      {period}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1 min-h-0 flex flex-col justify-start pt-8 pl-3 sm:pl-5 md:pl-8">
              {activeStage.subExpertise && (
                <div className="space-y-3">
                    {ActiveSubExpertiseIcon && (
                      <ActiveSubExpertiseIcon size={64} strokeWidth={1.5} className="mb-2 text-blue-700 dark:text-blue-300" />
                    )}
                    {activeStage.subExpertise.logo && (
                      <img
                        src={activeStage.subExpertise.logo}
                        alt={`${activeStage.subExpertise.organization} logo`}
                        className={activeStage.subExpertise.logoSize === 'large'
                          ? `h-64 w-auto max-w-full object-contain object-left ${activeStage.subExpertise.logoBlend || ''}`
                          : 'h-20 w-72 max-w-full object-contain object-left sm:h-24 sm:w-96'}
                      />
                    )}
                    {activeStage.subExpertise.logos?.length > 0 && (
                      <div className="flex flex-wrap items-center gap-6">
                        {activeStage.subExpertise.logos.map((logo) => (
                          <img
                            key={logo.name}
                            src={logo.src}
                            alt={logo.name}
                            title={logo.name}
                            className="h-32 w-64 object-contain"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                    {(!activeStage.subExpertise.logo || activeStage.subExpertise.showOrganizationWithLogo) && !activeStage.subExpertise.imageCard && (
                      <h3 className={`text-4xl sm:text-5xl font-black text-gray-900 dark:text-white ${activeStage.subExpertise.centered ? 'w-full text-center' : ''}`}>
                        {activeStage.subExpertise.organization}
                      </h3>
                    )}
                    {activeStage.subExpertise.role && !activeStage.subExpertise.imageCard && (
                      <p className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-300">
                        {activeStage.subExpertise.role}
                      </p>
                    )}
                    {activeStage.subExpertise.headline && (
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {activeStage.subExpertise.headline}
                      </p>
                    )}
                    {activeStage.subExpertise.socialStats?.length > 0 && (
                      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                        {activeStage.subExpertise.socialStats.map((stat) => (
                          <div key={stat.platform} className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl font-black text-blue-700 dark:text-blue-300">
                              {stat.followers}
                            </span>
                            <span className="text-base font-semibold text-gray-600 dark:text-gray-300">
                              {stat.platform} followers
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeStage.subExpertise.description && !activeStage.subExpertise.imageCard && (
                      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">
                        {activeStage.subExpertise.description}
                      </p>
                    )}
                    {activeStage.subExpertise.impact && (
                      <div className="mt-4 max-w-3xl space-y-1">
                        <p className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                          Core Impact
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200">
                          {activeStage.subExpertise.impact}
                        </p>
                      </div>
                    )}
                    {activeStage.subExpertise.locations?.length > 0 && (
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {activeStage.subExpertise.locations.map((location, index) => (
                          <div key={location} className="flex items-start gap-3">
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
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
                        className="inline-flex font-semibold text-blue-700 underline decoration-blue-400 underline-offset-4 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
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
                        className="mt-4 block w-full max-w-[520px] rounded-2xl bg-white/55 p-4 sm:p-5 dark:bg-gray-900/40"
                      >
                        <div className="overflow-hidden rounded-xl bg-white/80 dark:bg-gray-800/70">
                          <img
                            src={activeStage.subExpertise.image}
                            alt={activeStage.subExpertise.imageAlt}
                            className="aspect-video w-full object-cover"
                          />
                        </div>
                        <div className="space-y-1 pt-4">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {activeStage.subExpertise.imageTitle}
                          </h3>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">
                            {activeStage.subExpertise.imageDescription}
                          </p>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
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
                          className="mt-4 inline-block"
                        >
                          <img
                            src={activeStage.subExpertise.image}
                            alt={activeStage.subExpertise.imageAlt || activeStage.subExpertise.organization}
                            className="h-64 w-auto max-w-full object-contain object-left sm:h-72"
                          />
                        </a>
                      ) : (
                        <img
                          src={activeStage.subExpertise.image}
                          alt={activeStage.subExpertise.imageAlt || `${activeStage.subExpertise.organization} image`}
                          className="mt-4 block h-auto w-full max-w-[560px] rounded-lg"
                        />
                      )
                    )}
                    {activeStage.subExpertise.partners?.length > 0 && (
                      activeStage.subExpertise.scrollPartners === false ? (
                        <div className="mx-auto mt-6 flex w-full max-w-[900px] flex-wrap items-center justify-center gap-6">
                          {activeStage.subExpertise.partners.map((partner) => (
                            <img
                              key={partner.name}
                              src={partner.logo}
                              alt={partner.name}
                              title={partner.name}
                              className="h-24 w-72 object-contain"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="drive-ready-gallery mx-auto mt-6 w-full max-w-[900px]" role="region" aria-label={`${activeStage.subExpertise.organization} partner logos`}>
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
                                    className={`h-24 w-72 flex-shrink-0 object-contain ${partner.name === 'MongoDB University' ? 'mix-blend-multiply' : ''}`}
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
                        <div className="mt-5 grid w-full max-w-[680px] grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center gap-4">
                          <img
                            src={activeStage.subExpertise.images[0]}
                            alt={`${activeStage.subExpertise.organization} logo`}
                            className="h-24 w-full object-contain"
                            loading="lazy"
                          />
                          <img
                            src={activeStage.subExpertise.images[1]}
                            alt={`${activeStage.subExpertise.organization} mentoring image`}
                            className="aspect-video w-full rounded-lg object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="drive-ready-gallery mt-5 w-full" role="region" aria-label={`${activeStage.subExpertise.organization} image gallery`}>
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
                                    className="aspect-video w-80 flex-shrink-0 rounded-lg object-cover sm:w-96 lg:w-[28rem]"
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
                      <div className="mx-auto mt-5 aspect-video w-full max-w-[800px] overflow-hidden rounded-lg">
                        <iframe
                          src={activeStage.subExpertise.video}
                          title={`${activeStage.subExpertise.organization} video`}
                          className="h-full w-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto pt-2.5 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Expertise Progress:</span>
            <div className="w-36 sm:w-60 h-2 rounded-full bg-gray-300/60 dark:bg-gray-700/60 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                style={{ width: `${((activeStageIndex + 1) / expertiseStages.length) * 100}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
            <span className="font-extrabold text-blue-600 dark:text-blue-400">
              {Math.round(((activeStageIndex + 1) / expertiseStages.length) * 100)}%
            </span>
          </div>

          <span className="font-bold hidden sm:inline">
            {activeStageIndex < expertiseStages.length - 1
              ? `Next: ${expertiseStages[activeStageIndex + 1].subExpertise?.organization || traits[expertiseStages[activeStageIndex + 1].traitIndex].title}`
              : 'All main expertise stages complete · Ventures next'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
