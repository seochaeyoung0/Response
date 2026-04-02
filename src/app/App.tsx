import React, { useRef } from 'react';
import svgPaths from "../imports/데스크탑/svg-dlgm8392jn";

// ── Product hero images ───────────────────────────────────────────────────────
import imgWufJacket from "../imports/데스크탑/c740818e3568b5247543b981a672c51330f162dc.png";
import imgWufNeo    from "../imports/데스크탑/92ab08bd442385965b70bafdc339b132b3c61fcf.png";
import imgWufAir    from "../imports/데스크탑/e26cafcb03b5f20e0f9311dc8b585b46576b4954.png";

// ── Section images ────────────────────────────────────────────────────────────
import imgTailoring  from "../imports/데스크탑/a8fe3c881ab0de65b79bd8ac6f4e50ef4d99f094.png";
import imgPawFest26  from "../imports/데스크탑/7152cdadb9b836bdfb9c02f759cd0c28c41ac886.png";
import imgWufPro     from "../imports/데스크탑/289ba6a038159805c60f2b904b0c116ff7dee033.png";
import imgWufCollar2 from "../imports/데스크탑/a3f37d73447d05455693367e96c01e709d746a0f.png";
import imgWufTracker from "../imports/데스크탑/5e40c6260480379b4b5c45f1e183f38b605f7b88.png";
import imgWufTradeIn from "../imports/데스크탑/76a2d456e26214e169897896985003448d527708.png";

// ── Carousel images ───────────────────────────────────────────────────────────
import carousel1 from "../imports/데스크탑/58980e18fb14122001a379f704eb330dba2f819b.png";
import carousel2 from "../imports/데스크탑/fbad52f5ecbd1850562fd49e558b7af5a7ccf5a3.png";
import carousel3 from "../imports/데스크탑/5e3fd6d4eebd3e7f5a9fc0762ef4c0806b5b4660.png";
import carousel4 from "../imports/데스크탑/3c0cb9ffa7addab1149e542ba302ee33b8e97c0f.png";
import carousel5 from "../imports/데스크탑/42f28502d1e1d771f1bdaaa0c68b622fb9ea5ff3.png";
import carousel6 from "../imports/데스크탑/2b1fc9cb386f63f8620456ba86e3a844936c2a18.png";
import carousel7 from "../imports/데스크탑/c30a9702e57ad8bce9312562dfc918ae3e48bb71.png";
import carousel8 from "../imports/데스크탑/f00c7020fdd080605ce0160c082a8c9c7e62a395.png";
import carousel9 from "../imports/데스크탑/2bfad16724c9f05b444862f7f165a7a4cdac5997.png";

// ═══════════════════════════════════════════════════════════════════════════════
// Header
// ═══════════════════════════════════════════════════════════════════════════════
function Header() {
  return (
    <header className="relative w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center justify-between px-[14px] py-[14px] max-w-screen-xl mx-auto">
        {/* Paw logo */}
        <div className="w-[18px] h-[18px] flex-shrink-0 cursor-pointer">
          <svg viewBox="0 0 18 18" fill="none" className="w-full h-full">
            <path d={svgPaths.pca5b000} fill="#5B5B5B" />
          </svg>
        </div>
        {/* Icon group */}
        <div className="flex items-center gap-[17px]">
          <button aria-label="검색" className="w-4 h-4 flex items-center justify-center">
            <svg viewBox="0 0 11.6121 11.6114" fill="none" className="w-full h-full">
              <path d={svgPaths.p10a85a70} fill="#5B5B5B" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </button>
          <button aria-label="장바구니" className="w-4 h-4 flex items-center justify-center">
            <svg viewBox="0 0 10.5753 12.7703" fill="none" className="w-full h-full">
              <path d={svgPaths.p5dc7800} fill="#5B5B5B" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </button>
          <button aria-label="메뉴" className="w-4 h-4 flex items-center justify-center">
            <svg viewBox="0 0 9.33333 5.33333" fill="none" className="w-[12px] h-[6px]">
              <path d={svgPaths.p225876b0} fill="#5B5B5B" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Shared Button
// ═══════════════════════════════════════════════════════════════════════════════
interface BtnProps {
  label: string;
  variant?: 'primary' | 'outline';
  className?: string;
}
function Btn({ label, variant = 'primary', className = '' }: BtnProps) {
  return (
    <button
      className={[
        'text-[14px] font-semibold px-5 py-[10px] rounded-[50px] whitespace-nowrap min-w-[100px] transition-opacity hover:opacity-80',
        variant === 'primary'
          ? 'bg-[#0071e3] text-white'
          : 'border border-[#0071e3] text-[#0071e3] bg-transparent',
        className,
      ].join(' ')}
    >
      {label}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Hero Product Cards — WUF Jacket / Neo / Air
// (text+buttons top → image fills remaining space)
// ═══════════════════════════════════════════════════════════════════════════════
interface HeroCardProps {
  title: string;
  subtitle: string;
  btn1: string;
  btn2: string;
  image: string;
  dark?: boolean;
}
function HeroCard({ title, subtitle, btn1, btn2, image, dark = false }: HeroCardProps) {
  return (
    <div className={`relative w-full h-[337px] overflow-hidden flex-shrink-0 ${dark ? 'bg-black' : 'bg-white'}`}>
      <div className="flex flex-col h-full">
        {/* Text + buttons block */}
        <div className={`flex-shrink-0 flex flex-col gap-[38px] items-center text-center px-8 py-3 ${dark ? 'text-white' : 'text-black'}`}>
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-[24px] md:text-[38px] font-semibold leading-tight">{title}</h2>
            <p className="text-[14px] md:text-[20px] font-medium">{subtitle}</p>
          </div>
          <div className="flex gap-[14px] items-center justify-center w-full">
            <Btn label={btn1} variant="primary" />
            <Btn label={btn2} variant="outline" />
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 relative min-h-0">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 10 Years of Tailoring  (image top → text + button bottom)
// ═══════════════════════════════════════════════════════════════════════════════
function TailoringCard() {
  return (
    <div className="relative w-full h-[337px] overflow-hidden bg-white flex-shrink-0">
      <div className="flex flex-col h-full">
        <div className="flex-1 relative min-h-0">
          <img src={imgTailoring} alt="10 Years of Tailoring" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex-shrink-0 flex flex-col gap-[38px] items-center text-center px-8 py-3 text-black">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold">10 Years of Tailoring</h3>
            <p className="text-[14px]">강아지만을 생각한 10년의 철학.</p>
          </div>
          <Btn label="CEO의 편지 읽어보기" variant="primary" />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAW FEST 26  (black bg, image top → text + button bottom)
// ═══════════════════════════════════════════════════════════════════════════════
function PawFestCard() {
  return (
    <div className="relative w-full h-[337px] overflow-hidden bg-black flex-shrink-0">
      <div className="flex flex-col h-full">
        <div className="flex-1 relative min-h-0">
          <img src={imgPawFest26} alt="PAW FEST 26" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
        <div className="flex-shrink-0 flex flex-col gap-[38px] items-center text-center px-8 py-3 text-white">
          <div className="flex flex-col gap-1">
            <p className="text-[14px]">WUF 세계개발자회의.</p>
            <p className="text-[14px]">한국 시간 6월 9일-13일, 온라인에서 만나요.</p>
          </div>
          <Btn label="더 알아보기" variant="primary" />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WUF Pro  (black bg, text+buttons top → image bottom)
// narrow on tablet/desktop
// ═══════════════════════════════════════════════════════════════════════════════
function WufProCard() {
  return (
    <div className="relative w-full md:w-[337px] md:flex-none h-[337px] overflow-hidden bg-black">
      <div className="flex flex-col h-full">
        <div className="flex-shrink-0 flex flex-col gap-[38px] items-center text-center px-6 py-3 text-white">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold">WUF Pro</h3>
            <p className="text-[14px]">이제 M5 High-Tech 원단 탑재.</p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Btn label="더 알아보기" variant="primary" className="min-w-0 px-4" />
            <Btn label="구입하기" variant="outline" className="min-w-0 px-4" />
          </div>
        </div>
        <div className="flex-1 relative min-h-0">
          <img src={imgWufPro} alt="WUF Pro" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WUF Collar 2  (white, image top → text+buttons bottom, flex-1 on tablet+)
// ═══════════════════════════════════════════════════════════════════════════════
function WufCollar2Card() {
  return (
    <div className="relative w-full md:flex-1 h-[337px] overflow-hidden bg-white">
      <div className="flex flex-col h-full">
        <div className="flex-1 relative min-h-0">
          <img src={imgWufCollar2} alt="WUF Collar 2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex-shrink-0 flex flex-col gap-[28px] items-center text-center px-8 py-3 text-black">
          <div className="flex flex-col gap-1">
            <h3 className="text-[24px] font-semibold">WUF Collar 2</h3>
            <p className="text-[14px]">청휘월장(淸輝越裝) - 급이 다른 우아함.</p>
            <p className="text-[14px]">다음 달 초 출시</p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Btn label="더 알아보기" variant="primary" className="min-w-0 px-4" />
            <Btn label="주문하기" variant="outline" className="min-w-0 px-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WUF Tracker  (white, text+buttons top → image bottom, narrow on desktop)
// ═══════════════════════════════════════════════════════════════════════════════
function WufTrackerCard() {
  return (
    <div className="relative w-full md:w-[337px] md:flex-none h-[337px] overflow-hidden bg-white">
      <div className="flex flex-col h-full">
        <div className="flex-shrink-0 flex flex-col gap-[38px] items-center text-center px-6 py-3 text-black">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold">WUF Tracker</h3>
            <p className="text-[14px]">당신의 반려견을 살피는 궁극의 방법.</p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Btn label="더 알아보기" variant="primary" className="min-w-0 px-4" />
            <Btn label="구입하기" variant="outline" className="min-w-0 px-4" />
          </div>
        </div>
        <div className="flex-1 relative min-h-0">
          <img src={imgWufTracker} alt="WUF Tracker" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WUF Trade In  (white, text+button top → image bottom, flex-1 on desktop)
// ═══════════════════════════════════════════════════════════════════════════════
function WufTradeInCard() {
  return (
    <div className="relative w-full md:flex-1 h-[337px] overflow-hidden bg-white">
      <div className="flex flex-col h-full">
        <div className="flex-shrink-0 flex flex-col gap-[38px] items-center text-center px-8 py-3 text-black">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold">WUF Trade In</h3>
            <p className="text-[14px]">기존 WUF 의류를 보상 판매하면</p>
            <p className="text-[14px]">상당의 크레딧이.</p>
          </div>
          <Btn label="견적 확인하기" variant="primary" />
        </div>
        <div className="flex-1 relative min-h-0">
          <img src={imgWufTradeIn} alt="WUF Trade In" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Product Grid
// mobile: all stacked  |  tablet+: WUF Pro/Tracker narrow + Collar2/TradeIn wide
// ═══════════════════════════════════════════════════════════════════════════════
function ProductGrid() {
  return (
    <div className="w-full flex flex-col gap-7">
      <TailoringCard />
      <PawFestCard />
      {/* Row: WUF Pro + WUF Collar 2 */}
      <div className="flex flex-col md:flex-row gap-7">
        <WufProCard />
        <WufCollar2Card />
      </div>
      {/* Row: WUF Tracker + WUF Trade In */}
      <div className="flex flex-col md:flex-row gap-7">
        <WufTrackerCard />
        <WufTradeInCard />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Content Carousel
// ═══════════════════════════════════════════════════════════════════════════════
const carouselItems = [
  { src: carousel1, dimmed: true  },
  { src: carousel2, dimmed: false },
  { src: carousel3, dimmed: true  },
  { src: carousel4, dimmed: false },
  { src: carousel5, dimmed: true  },
  { src: carousel6, dimmed: false },
  { src: carousel7, dimmed: true  },
  { src: carousel8, dimmed: false },
  { src: carousel9, dimmed: true  },
];

function ContentCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const first = scrollRef.current.querySelector<HTMLElement>('[data-card]');
    const step = first ? first.offsetWidth + 12 : 200;
    scrollRef.current.scrollBy({ left: dir === 'right' ? step : -step, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrollable strip — items aligned to bottom (peek effect) */}
      <div
        ref={scrollRef}
        className="flex items-end gap-3 overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
      >
        {/* leading peek space */}
        <div className="flex-shrink-0 w-[10vw] min-w-[20px]" />

        {carouselItems.map(({ src, dimmed }, i) => (
          <div
            key={i}
            data-card
            className="flex-shrink-0 w-[185px] md:w-[280px] lg:w-[420px] h-[340px] md:h-[440px] lg:h-[537px] relative"
          >
            <img
              src={src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${dimmed ? 'opacity-50' : 'opacity-100'}`}
            />
          </div>
        ))}

        {/* trailing peek space */}
        <div className="flex-shrink-0 w-[10vw] min-w-[20px]" />
      </div>

      {/* Left arrow */}
      <button
        onClick={() => scroll('left')}
        aria-label="이전"
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-14 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow transition-colors"
      >
        <svg viewBox="0 0 14.0001 28.0003" fill="none" className="w-3 h-6">
          <path d={svgPaths.p3cb3a500} stroke="#363636" strokeWidth="1" />
          <path d={svgPaths.p10af580} stroke="#363636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll('right')}
        aria-label="다음"
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-14 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow transition-colors"
      >
        <svg viewBox="0 0 14.0001 28.0003" fill="none" className="w-3 h-6">
          <path d={svgPaths.p3cb3a500} stroke="#363636" strokeWidth="1" />
          <path d={svgPaths.p3a5b1700} stroke="#363636" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </svg>
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Legal footnotes
// ═══════════════════════════════════════════════════════════════════════════════
function LegalSection() {
  return (
    <div className="w-full px-5 text-[#808080] text-[11px] leading-[1.6]">
      <ol className="list-decimal mb-3" start={1}>
        <li className="ml-4">
          은 대상 의류의 오염도, 훼손 상태, 출시 시즌, 그리고 해당 제품이 최초 구매된 국가에 따라 차등 적용됩니다. 일부 심하게 훼손된 제품은 보상 판매 대상에서 제외될 수 있습니다.
        </li>
      </ol>
      <p className="mb-3">
        보상 판매 신청을 위해서는 민법상 성년이어야 하며, 보상 금액은 새로운 컬렉션 구입 시 즉시 할인받거나 WUF 공식 스토어 기프트 카드로 수령할 수 있습니다. 최종 확정 금액은 수거된 제품의 실제 상태가 신청 시 기재한 내용과 일치하는지 전문 검수팀의 확인을 거친 후 결정됩니다. 부가세는 보상 판매 할인 전, 새로 구입하는 제품의 총액을 기준으로 부과됩니다. 일부 오프라인 플래그십 스토어에서는 보상 판매 서비스를 제공하지 않을 수 있으며, 매장과 온라인 프로그램의 운영 방침이 다를 수 있습니다. WUF와 그 파트너사는 특정 사유에 따라 보상 판매 거래를 거절, 취소하거나 수량을 제한할 권리를 보유합니다. 의류 재활용 및 지속 가능한 패션 캠페인에 대한 자세한 내용은 파트너사 페이지에서 확인하십시오.
      </p>
      <ul className="list-disc">
        <li className="ml-4 mb-1">WUF Play 이용을 위해서는 별도의 멤버십 구독이 필요합니다.</li>
        <li className="ml-4">
          제품의 세부 사양 및 디자인은 기능 개선을 위해 예고 없이 변경될 수 있습니다. 일부 스마트 웨어 기능 및 전용 애플리케이션 서비스는 지역이나 언어, 네트워크 환경에 따라 제한될 수 있습니다.
        </li>
      </ul>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Footer navigation (accordion-style rows)
// ═══════════════════════════════════════════════════════════════════════════════
const footerNavItems = [
  '쇼핑 및 알아보기',
  'WUF 지갑',
  '계정',
  '엔터테인먼트',
  'WUF Store',
  '비즈니스',
  '교육',
  'WUF의 가치관',
  'WUF의 정보',
];

function FooterNav() {
  return (
    <nav className="w-full">
      {footerNavItems.map((item) => (
        <button
          key={item}
          className="flex items-center justify-between w-full py-3 px-5 border-b border-[#999]/30 hover:bg-gray-50 transition-colors"
        >
          <span className="text-[#363636] text-[12px]">{item}</span>
          <div className="w-3 h-3 -rotate-90 flex items-center justify-center opacity-60">
            <svg viewBox="0 0 4.35233 7.61658" fill="none" className="w-[6px] h-[10px]">
              <path
                d={svgPaths.p4d47b80}
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.09"
              />
            </svg>
          </div>
        </button>
      ))}
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Footer info
// ═══════════════════════════════════════════════════════════════════════════════
const legalLinks = ['개인정보 처리방침', '웹 사이트 이용 약관', '판매 및 환불', '법적 고지', '사이트 맵'];

function FooterInfo() {
  return (
    <footer className="w-full px-5 pb-10 flex flex-col gap-2">
      <p className="text-[#747474] text-[11px] leading-[1.5]">
        다양한 쇼핑 방법: WUF Flagship Store를 방문하거나, 공식 파트너사를 찾아보거나,{' '}
        <strong>080-333-WUF(983)</strong>번으로 전화하세요.
      </p>
      <p className="text-[#464646] text-[11px]">대한민국</p>
      <p className="text-[#747474] text-[11px]">Copyright © 2026 WUF Korea Inc. 모든 권리 보유.</p>

      {/* Legal links row */}
      <div className="flex flex-wrap gap-y-1 text-[11px] text-[#464646]">
        {legalLinks.map((link, i) => (
          <span key={link} className="flex items-center">
            <button className="hover:underline">{link}</button>
            {i < legalLinks.length - 1 && (
              <span className="mx-2 border-r border-[#464646]/40 h-3 inline-block" />
            )}
          </span>
        ))}
      </div>

      <p className="text-[#747474] text-[11px] leading-[1.5]">
        우프코리아 유한회사 | 대표이사: 우석진(Woo Seok-jin) | 주소: 서울특별시 강남구 테헤란로 123 WUF 타워 | 전화: 080-333-1234 |{' '}
        <a
          href="https://wuf.com/ko-kr/support"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[9px]"
        >
          https://wuf.com/ko-kr/support
        </a>{' '}
        | 사업자등록번호: 555-81-00000 | 통신판매업신고번호: 제2026-서울강남-01234호 | 호스팅 서비스 제공: WUF Inc. | [사업자정보 확인]
      </p>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// App root
// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  return (
    <div
      className="bg-white min-h-screen w-full overflow-x-hidden"
      style={{ fontFamily: "'Inter', 'Noto Sans KR', sans-serif" }}
    >
      <Header />

      <main className="flex flex-col gap-7 py-2">
        {/* ── WUF Jacket Hero ─────────────────────────────────────────────── */}
        <HeroCard
          title="WUF"
          subtitle="최신 세대 WUF Jacket을 만나보세요."
          btn1="더 알아보기"
          btn2="WUF 쇼핑하기"
          image={imgWufJacket}
        />

        {/* ── WUF Neo ─────────────────────────────────────────────────────── */}
        <HeroCard
          title="WUF Neo"
          subtitle="놀라운 가벼움. 놀라운 활동성."
          btn1="더 알아보기"
          btn2="구입하기"
          image={imgWufNeo}
        />

        {/* ── WUF Air ─────────────────────────────────────────────────────── */}
        <HeroCard
          title="WUF Air"
          subtitle="이제 막강한 통기성의 M4 Mesh 탑재."
          btn1="더 알아보기"
          btn2="구입하기"
          image={imgWufAir}
        />

        {/* ── Product grid ────────────────────────────────────────────────── */}
        <ProductGrid />

        {/* ── Content carousel ────────────────────────────────────────────── */}
        <ContentCarousel />

        {/* ── Legal footnotes ─────────────────────────────────────────────── */}
        <LegalSection />

        {/* ── Footer navigation ───────────────────────────────────────────── */}
        <FooterNav />

        {/* ── Footer info ─────────────────────────────────────────────────── */}
        <FooterInfo />
      </main>
    </div>
  );
}