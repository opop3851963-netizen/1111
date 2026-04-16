/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Award, 
  HardHat, 
  Armchair, 
  Building2, 
  Landmark, 
  UserCheck, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "회사소개", href: "#" },
    { name: "사업분야", href: "#" },
    { name: "포트폴리오", href: "#" },
    { name: "면허현황", href: "#" },
    { name: "고객문의", href: "#" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className={`text-2xl font-black tracking-tighter ${isScrolled ? "text-brand-dark" : "text-white"}`}>
          (주)일신아이디
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`text-sm font-bold transition-colors hover:text-brand-accent ${
                isScrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {item.name}
            </a>
          ))}
          <button className="bg-brand-dark text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-95 transition-transform duration-200">
            견적 문의
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-brand-dark" : "text-white"} /> : <Menu className={isScrolled ? "text-brand-dark" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col space-y-4 md:hidden"
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-brand-dark font-bold text-lg border-b border-slate-100 pb-2">
              {item.name}
            </a>
          ))}
          <button className="bg-brand-dark text-white w-full py-4 rounded-xl font-bold">
            견적 문의
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Modern Architecture" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfIakUksBzuq14vlUh3pNc5cXmLSJJAEZuuwaAJ1foj9vJSIK2-j5zt8PLGH4fgGRZeAFizQPEUDYlVxUBY9ZaGhFtN9cmqsNF_yhCthpMKk0eDdTT7cRh7MkUk5A1kgxIx1n50hl6gdiHOgZkatkda5IO4WJKoRrGEeynH5Kc_mJwcQmzI6eN2Rwc5O8DYuJgWI00JN-SHtaWcWsjDRa6xUAiu4qzh4V3qhf7gVdJW6IpUhg78B0_fB3RZcxweiVws5Cz4NpIW9I"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest uppercase">
            Architectural Innovation
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8 text-balance">
            신뢰와 전문성으로 <br />완성하는 공간의 가치, <br />
            <span className="text-brand-accent">(주)일신아이디</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light max-w-xl">
            실내건축 및 건축공사 전문 면허 보유, <br />
            관공서 공사 및 여성기업 수의계약 전문 파트너입니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg shadow-black/20 flex items-center gap-2 group">
              사업 실적 보기
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              문의하기
            </button>
          </div>
        </motion.div>
      </div>

      {/* Trust Badges Desktop */}
      <div className="absolute bottom-12 right-12 hidden xl:flex gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 w-72"
        >
          <Award className="text-brand-gold w-10 h-10 mb-4" />
          <h3 className="text-white font-bold text-lg mb-1">여성기업 인증 업체</h3>
          <p className="text-slate-300 text-sm leading-snug">수의계약이 가능한 여성기업 공식 인증을 보유하고 있습니다.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 w-72"
        >
          <HardHat className="text-brand-gold w-10 h-10 mb-4" />
          <h3 className="text-white font-bold text-lg mb-1">전문건설업 면허</h3>
          <p className="text-slate-300 text-sm leading-snug">국가 공인 건축공사업 및 실내건축공사업 정식 면허를 보유합니다.</p>
        </motion.div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const services = [
    {
      icon: <Armchair className="w-8 h-8" />,
      title: "실내건축공사",
      desc: "감각적인 디자인과 정밀한 시공으로 최상의 실내 공간을 제안합니다. 상업 시설부터 사무 공간까지 최적화된 설계를 약속합니다.",
      items: ["상업 및 사무공간 인테리어", "공간 컨설팅 및 기획"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "건축공사업",
      desc: "탄탄한 기술력을 바탕으로 안전하고 전문적인 건축 시공 서비스를 제공합니다. 구조의 안정성과 미학적 완성도를 동시에 추구합니다.",
      items: ["신축 및 증축 공사", "건축 시설물 유지보수"]
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "관공서 프로젝트",
      desc: "나라장터 입찰 및 수의계약을 통한 공공기관 공사 실적을 다수 보유하고 있습니다. 투명한 공정 관리와 신뢰를 보장합니다.",
      items: ["나라장터 G2B 수의계약 전문", "공공시설물 환경개선공사"]
    }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Our Expertise</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              (주)일신아이디는 다년간의 노하우와 국가 공인 면허를 바탕으로 최적의 공간 솔루션을 제공합니다. 
              우리는 단순한 시공을 넘어 고객의 가치를 공간에 담아냅니다.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-1.5 bg-brand-gold"></div>
            <div className="w-6 h-1.5 bg-slate-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border-b-4 border-transparent hover:border-brand-dark group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-500 text-brand-dark">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoStats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Stat Card */}
          <div className="md:col-span-7 bg-brand-dark rounded-3xl p-12 relative overflow-hidden flex flex-col justify-between min-h-[450px]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Certified Excellence</span>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight text-balance">
                고도의 기술력과 <br />윤리적 가치를 결합한 <br />종합 건축 솔루션
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-12 relative z-10 mt-12">
              <div>
                <span className="text-5xl md:text-6xl font-black text-white block mb-2">25+</span>
                <span className="text-brand-accent font-medium text-sm uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="text-5xl md:text-6xl font-black text-white block mb-2">500+</span>
                <span className="text-brand-accent font-medium text-sm uppercase tracking-wider">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="bg-slate-50 rounded-3xl p-8 flex items-center gap-8 group hover:bg-slate-100 transition-colors">
              <div className="p-5 bg-brand-gold/10 rounded-2xl text-brand-gold group-hover:scale-110 transition-transform">
                <UserCheck className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">여성기업 인증 업체</h4>
                <p className="text-slate-500 text-sm leading-relaxed">수의계약 법령에 근거한 효율적인 공공 조달 파트너십을 제공합니다.</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 flex items-center gap-8 group hover:bg-slate-100 transition-colors">
              <div className="p-5 bg-brand-dark/10 rounded-2xl text-brand-dark group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-2">전문건설업 면허 보유</h4>
                <p className="text-slate-500 text-sm leading-relaxed">법적 기준을 상회하는 기술인력과 자본금을 바탕으로 신뢰를 시공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-slate-50 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-brand-dark mb-10 tracking-tight italic"
        >
          "공간의 새로운 미래를 함께 설계합니다"
        </motion.h2>
        <p className="text-lg md:text-xl text-slate-600 mb-16 leading-relaxed">
          (주)일신아이디는 고객님의 비즈니스 가치를 극대화할 수 있는 <br className="hidden md:block" />
          공간 인프라 구축을 위해 항상 준비되어 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a 
            href="tel:02-123-4567" 
            className="flex items-center gap-4 text-2xl md:text-3xl font-black text-brand-dark hover:text-brand-accent transition-colors"
          >
            <Phone className="w-8 h-8" />
            02-123-4567
          </a>
          <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
          <button className="bg-brand-dark text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark/90 transition-all shadow-xl shadow-brand-dark/20">
            온라인 견적 문의
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-black mb-6">(주)일신아이디</h3>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              국가 공인 건축공사업 및 실내건축공사업 면허를 보유한 전문 건설 기업입니다. 
              관공서 및 대형 상업 시설 프로젝트의 성공적인 파트너가 되어 드립니다.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-white/5 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10 text-white">여성기업 인증</span>
              <span className="px-3 py-1 bg-white/5 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10 text-white">전문건설면허</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>경기도 광명시 범안로 1039 삼호빌딩 B103</li>
              <li>Tel: 02-123-4567</li>
              <li>Fax: 02-123-4568</li>
              <li>Email: info@ilshinid.co.kr</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Business Status</h4>
            <ul className="space-y-4 text-sm">
              <li>여성기업 인증업체</li>
              <li>정부공사 면허보유</li>
              <li>실내건축공사업 면허</li>
              <li>건축공사업 면허</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 (주)일신아이디. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "광명 테크노파크 사무공간", category: "실내건축", img: "https://picsum.photos/seed/office1/800/600" },
    { title: "서울 시청 본관 환경개선", category: "관공서", img: "https://picsum.photos/seed/gov1/800/600" },
    { title: "판교 IT 벤처 타워 인테리어", category: "실내건축", img: "https://picsum.photos/seed/office2/800/600" },
    { title: "경기도 교육청 도서관 리모델링", category: "관공서", img: "https://picsum.photos/seed/library/800/600" },
    { title: "강남 메디컬 센터 로비", category: "상업시설", img: "https://picsum.photos/seed/medical/800/600" },
    { title: "인천 공항 VIP 라운지 공사", category: "관공서", img: "https://picsum.photos/seed/airport/800/600" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">Portfolio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            일신아이디가 완성한 대표적인 프로젝트들입니다. <br />
            각 공간의 특성에 맞는 최적의 시공 결과를 확인해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-2 border-brand-dark text-brand-dark px-10 py-4 rounded-xl font-bold hover:bg-brand-dark hover:text-white transition-all">
            전체 포트폴리오 보기
          </button>
        </div>
      </div>
    </section>
  );
};

const History = () => {
  const milestones = [
    { year: "2024", title: "여성기업 우수 조달 파트너 선정", desc: "공공기관 수의계약 실적 300건 돌파" },
    { year: "2020", title: "건축공사업 면허 취득", desc: "종합 건설 서비스로 사업 영역 확장" },
    { year: "2015", title: "실내건축공사업 면허 취득", desc: "전문 인테리어 시공 전문성 확보" },
    { year: "2010", title: "(주)일신아이디 설립", desc: "공간 디자인 및 시공 전문 기업으로 출범" },
  ];

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Our Journey</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              일신아이디는 지난 10여 년간 한결같은 마음으로 공간의 가치를 창조해 왔습니다. 
              작은 인테리어 공사에서 시작해 이제는 국가 공인 면허를 보유한 중견 건설 기업으로 성장했습니다.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="text-4xl font-black text-brand-gold block mb-1">14+</span>
                <span className="text-slate-500 text-xs uppercase tracking-widest">Years in Business</span>
              </div>
              <div>
                <span className="text-4xl font-black text-brand-gold block mb-1">100%</span>
                <span className="text-slate-500 text-xs uppercase tracking-widest">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 w-px h-full bg-slate-800 ml-4 md:ml-0"></div>
            <div className="space-y-12">
              {milestones.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-2 w-8 h-8 bg-brand-dark border-2 border-brand-gold rounded-full -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  </div>
                  <span className="text-brand-gold font-black text-2xl mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-slate-50 rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-brand-dark p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black mb-6">Contact Us</h3>
              <p className="text-slate-400 leading-relaxed mb-12">
                프로젝트에 대한 궁금한 점이나 견적 문의를 남겨주세요. 
                전문 상담원이 24시간 이내에 답변해 드립니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="font-bold">02-123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="text-sm">경기도 광명시 범안로 1039</span>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10"></div>
                <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10"></div>
                <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-12 md:p-16">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">성함 / 업체명</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-dark outline-none transition-all" placeholder="홍길동" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">연락처</label>
                <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-dark outline-none transition-all" placeholder="010-0000-0000" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">문의 유형</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-dark outline-none transition-all appearance-none">
                  <option>실내건축 / 인테리어</option>
                  <option>신축 / 증축 공사</option>
                  <option>관공서 수의계약 문의</option>
                  <option>기타 문의</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">문의 내용</label>
                <textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-dark outline-none transition-all h-40 resize-none" placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-brand-dark/20 transition-all">
                  문의 보내기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <History />
        <BentoStats />
        <Portfolio />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
