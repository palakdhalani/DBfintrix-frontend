import dematImg from '../../assets/demat_service.jpg';
import ipoImg from '../../assets/ipo_service.jpg';
import mutualFundsImg from '../../assets/mutual_funds_service.jpg';
import bondsImg from '../../assets/bonds_service.jpg';

export const servicesData = [
  {
    id: 'demat-account',
    title: 'Demat Account',
    badge: 'Zero AMC & 100% Free',
    description: "Open a 100% paperless Demat Account with zero AMC for the first year, instant e-KYC in 5 minutes, and secure CDSL digital depository protection.",
    tag: 'SERVICES / INVESTORS',
    image: dematImg,
    subtitle: "Your Secure Gateway to Indian Capital Markets",
    intro: "A Demat (Dematerialized) account converts physical share certificates into electronic book entries. It acts like a digital bank locker for your shares, mutual funds, sovereign bonds, and exchange-traded securities.",
    whatIs: "A Demat account holds financial securities in electronic form with central depositories (CDSL or NSDL) registered under SEBI. It eliminates the risks of physical loss, forgery, theft, and delays associated with paper certificates.",
    types: [
      {
        name: "Standard Individual Demat",
        desc: "The standard individual trading and investment account for Indian resident retail investors, students, and professionals."
      },
      {
        name: "Joint Demat Account",
        desc: "Operated jointly by up to three individuals (e.g. husband and wife) ensuring seamless inheritance transfer upon survivorship."
      },
      {
        name: "Basic Services Demat Account (BSDA)",
        desc: "SEBI-mandated zero maintenance fee Demat account for small investors with total portfolio holdings under ₹4 Lakhs."
      },
      {
        name: "Non-Resident Indian (NRI) Demat",
        desc: "Specialized NRE (Repatriable) and NRO (Non-Repatriable) Demat accounts enabling global Indian diaspora to invest in Indian equities."
      },
      {
        name: "Corporate & Partnership Demat",
        desc: "Tailored institutional accounts for Private Limited companies, LLPs, and partnership firms managing corporate surplus treasuries."
      }
    ],
    whyNeed: [
      { title: "Zero Paperwork & Digital Security", text: "Holds all stocks, bonds, and ETFs in digital format with CDSL dual-factor authentication and SMS alerts." },
      { title: "Automated Dividend Credits", text: "Corporate dividends and interest payouts are automatically routed directly into your linked bank account." },
      { title: "Seamless Share Transfers", text: "Transfer securities off-market or pledge shares instantly via digital e-DIS without physical delivery instruction slips." },
      { title: "Unified Portfolio Dashboard", text: "Monitor your stocks, mutual funds, sovereign gold bonds, and government papers under one single login." }
    ],
    calculation: "Demat accounts in India hold ISIN-coded securities, each verified and reconciled nightly with Central Depository Services India Limited (CDSL).",
    whyChoose: [
      "Zero Account Opening Charges (100% Free Lifetime Onboarding)",
      "Zero AMC (Annual Maintenance Charge) for the entire first year",
      "Instant 5-minute Aadhaar e-KYC paperless activation",
      "Bank-grade 256-bit encryption with biometric login authentication"
    ]
  },
  {
    id: 'ipo',
    title: 'IPO',
    badge: 'Primary Market',
    description: "Apply seamlessly for the latest Mainboard & SME Initial Public Offerings (IPOs) with instant UPI mandate and in-depth company research.",
    tag: 'SERVICES / INVESTORS',
    image: ipoImg,
    subtitle: "Early-Stage Access to India's Fastest Growing Companies",
    intro: "Initial Public Offerings (IPOs) offer retail and HNI investors the opportunity to subscribe to shares of high-potential private companies before they list on the stock exchanges, capturing first-day listing gains and multi-year compound growth.",
    whatIs: "An IPO is the process through which an unlisted private corporation raises equity capital from institutional and retail public investors, listing its shares on stock exchanges like the NSE and BSE for public trading.",
    types: [
      {
        name: "Mainboard IPOs",
        desc: "Large-cap and mid-cap industry leaders listing on the primary NSE & BSE exchanges with minimum retail application size of ₹14,000 to ₹15,000."
      },
      {
        name: "SME Platform IPOs",
        desc: "High-growth emerging small and medium enterprises listing on NSE Emerge and BSE SME boards with lot sizes starting from ₹1,00,000."
      },
      {
        name: "Offer for Sale (OFS)",
        desc: "Existing promoters and private equity venture funds offloading their equity stakes to public investors at attractive floor discounts."
      },
      {
        name: "Follow-on Public Offers (FPO)",
        desc: "Already-listed companies issuing additional shares to raise fresh expansion capital or meet regulatory minimum public shareholding norms."
      },
      {
        name: "Pre-IPO & Unlisted Opportunities",
        desc: "Exclusive pre-IPO equity allocations for accredited HNI investors in mature unicorns preparing for public listing within 12 to 24 months."
      }
    ],
    whyNeed: [
      { title: "Listing Day Capital Gains", text: "Participate in heavily oversubscribed quality issuances with historical listing gains averaging 20% to 80%." },
      { title: "Ground-Floor Valuation Entry", text: "Buy equity stakes in sector leaders at pre-listing valuations before institution-driven rallies begin." },
      { title: "Instant Zero-Paperwork UPI Bidding", text: "Block funds safely in your bank account via UPI ASBA mandate; money is only debited upon allotment." },
      { title: "Dedicated Retail & HNI Bidding Quotas", text: "Statutory 35% retail and 15% non-institutional investor quotas maximize your allotment chances." }
    ],
    calculation: "Allotment probabilities in oversubscribed IPOs are governed by automated lottery draws audited by SEBI and exchange registrars.",
    whyChoose: [
      "Instant 1-minute UPI bidding via mobile app and web platform",
      "Unbiased analyst research notes with clear 'Subscribe' or 'Avoid' ratings",
      "Live GMP (Grey Market Premium) and real-time subscription tracking dashboard",
      "Instant SMS and email notifications on allotment status and refund releases"
    ]
  },
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    badge: 'Wealth Compounding',
    description: "Zero-commission Direct Mutual Funds and disciplined SIP investing across equity, debt, hybrid, and index funds curated by expert advisors.",
    tag: 'SERVICES / INVESTORS',
    image: mutualFundsImg,
    subtitle: "Disciplined SIPs & Direct Mutual Fund Growth",
    intro: "Mutual funds pool capital from thousands of investors to invest in a professionally managed portfolio of equities, government securities, and corporate bonds, delivering optimal diversification with minimal initial capital.",
    whatIs: "A mutual fund is an investment vehicle managed by an Asset Management Company (AMC) registered with SEBI. Professional fund managers allocate the pooled capital into diversified securities based on stated fund objectives.",
    types: [
      {
        name: "Large & Multi-Cap Equity Funds",
        desc: "Invest in market leaders and diversified cross-sector enterprises to generate inflation-beating capital appreciation over a 5+ year horizon."
      },
      {
        name: "Systematic Investment Plans (SIP)",
        desc: "Disciplined automated investing starting at just ₹500/month, leveraging rupee cost averaging to smooth out short-term market corrections."
      },
      {
        name: "ELSS Tax Saving Funds",
        desc: "Equity Linked Savings Schemes offering Section 80C tax deductions up to ₹1.5 Lakhs with the shortest lock-in period of only 3 years."
      },
      {
        name: "Debt & Liquid Funds",
        desc: "Low-risk funds investing in short-term commercial papers and treasury bills, serving as a superior alternative to savings bank accounts."
      },
      {
        name: "Hybrid & Balanced Advantage Funds",
        desc: "Dynamically shift capital between equity and debt based on market valuation metrics, mitigating drawdowns during market corrections."
      }
    ],
    whyNeed: [
      { title: "Rupee Cost Averaging", text: "SIPs automatically purchase more fund units when prices are down and fewer when prices are high, eliminating market timing." },
      { title: "Professional Fund Management", text: "Experienced portfolio managers backed by institutional research teams manage asset allocation full-time." },
      { title: "Instant Cross-Asset Diversification", text: "A single mutual fund unit gives you exposure to 50+ blue-chip companies, reducing single-stock risk." },
      { title: "High Liquidity & Digital Redeeming", text: "Redeem your mutual fund units with zero exit penalties after statutory tenures; funds reach your bank in T+1/T+2 days." }
    ],
    calculation: "The compounding formula A = P * (1 + r/n)^(nt) demonstrates how a ₹10,000 monthly SIP compounding at 14% CAGR grows to ₹1.39 Crores in 20 years.",
    whyChoose: [
      "100% Direct Mutual Fund schemes with zero distributor commission fees",
      "Algorithmic portfolio health checkup and automated annual rebalancing alerts",
      "Single-click SIP creation, pause, step-up, and instant digital redemption",
      "Goal-based investing trackers for retirement, child education, and wealth creation"
    ]
  },
  {
    id: 'bonds',
    title: 'Bonds',
    badge: 'Fixed Income & Safety',
    description: "Invest in secure government and corporate bonds with guaranteed regular coupon yields, sovereign safety, and capital preservation.",
    tag: 'SERVICES / INVESTORS',
    image: bondsImg,
    subtitle: "Assured Regular Income & Capital Preservation",
    intro: "Bonds represent an essential pillar of a balanced investment portfolio. By lending capital to government entities or top-rated corporations, you secure predictable coupon payouts while insulating your capital from equity market volatility.",
    whatIs: "A bond is a fixed-income debt instrument under which an investor loans funds to an entity (corporate or governmental) that borrows the funds for a defined period at a fixed or floating interest rate (coupon).",
    types: [
      {
        name: "Government Securities (G-Secs)",
        desc: "Sovereign-backed debt papers issued by the Reserve Bank of India with zero credit default risk and maturities ranging from 1 to 40 years."
      },
      {
        name: "AAA Rated Corporate Bonds",
        desc: "High-yield debt debentures issued by top Indian corporates offering 1.5% to 3% higher annual yields than conventional bank fixed deposits."
      },
      {
        name: "Sovereign Gold Bonds (SGBs)",
        desc: "RBI-backed papers linked to gold prices paying 2.5% annual interest along with 100% tax-free capital appreciation upon maturity."
      },
      {
        name: "54EC Capital Gain Bonds",
        desc: "Section 54EC bonds (REC, PFC, IRFC) enabling individuals to claim full capital gains tax exemption on long-term real estate sale proceeds."
      },
      {
        name: "Tax-Free Public Sector Bonds",
        desc: "Issued by public sector undertakings (NHAI, HUDCO, NTPC) where annual coupon interest is completely exempt from income tax."
      }
    ],
    whyNeed: [
      { title: "Guaranteed Periodic Cash Flow", text: "Receive predictable semi-annual or annual interest credits directly into your verified bank account." },
      { title: "Zero Volatility Safety Cushion", text: "Insulate your overall net worth against sharp cyclical downturns in equity and real estate markets." },
      { title: "Superior Yields Over Bank FDs", text: "Lock in attractive 8% to 11% fixed yields during favorable interest rate cycles for tenure up to 10 years." },
      { title: "High Liquidity on Stock Exchanges", text: "Freely trade listed debt debentures on NSE & BSE secondary markets whenever liquidity is required." }
    ],
    calculation: "Yield to Maturity (YTM) measures the total annualized return expected on a bond if held until it matures, factoring in coupon rate, purchase price, and face value.",
    whyChoose: [
      "Access to primary sovereign debt issuances and private placement corporate debentures",
      "Curated research screening only CRISIL / ICRA 'AAA' and 'AA+' rated instruments",
      "Seamless paperless execution through your DB Fintrix Demat account",
      "Dedicated fixed income advisory desk for high-volume portfolio allocation"
    ]
  }
];
