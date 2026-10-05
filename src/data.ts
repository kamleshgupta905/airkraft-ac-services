export const SITE = {
  name: "Airkraft",
  legal: "Airkraft Cooling",
  tagline: "Engineered comfort. Honest repair.",
  phone: "+919315515700",
  phoneDisplay: "+91 93155 15700",
  whatsapp: "919315515700",
  email: "hello@airkraft.in",
  hours: "7:00 AM – 10:00 PM, all 7 days",
  emergency: "24×7 emergency call-out",
  city: "New Delhi",
  region: "Delhi NCR",
  founded: 2014,
  rating: "4.9",
  reviewCount: 1284,
  jobs: "18,400+",
  eta: "45–90 min",
  warranty: "90-day",
} as const;

export const WHATSAPP_BASE = `https://wa.me/${SITE.whatsapp}`;

export function waLink(text: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WA = waLink(
  "Hi Airkraft, I need AC repair service in Delhi NCR. Please share the next available slot."
);

export type PageId = "home" | "services" | "about" | "areas" | "contact";

export const NAV: { id: PageId; label: string; path: string }[] = [
  { id: "home", label: "Home", path: "#/" },
  { id: "services", label: "Services", path: "#/services" },
  { id: "about", label: "About", path: "#/about" },
  { id: "areas", label: "Service Areas", path: "#/areas" },
  { id: "contact", label: "Contact", path: "#/contact" },
];

export const SEO: Record<
  PageId,
  { title: string; description: string; keywords: string }
> = {
  home: {
    title: "AC Repair in Delhi NCR | Same-Day Split & Window AC Service | Airkraft",
    description:
      "Same-day AC repair in Delhi, Noida, Gurugram, Ghaziabad & Faridabad. Split, window, cassette & VRF. Gas filling, installation, AMC. WhatsApp +91 93155 15700. 90-day warranty.",
    keywords:
      "AC repair Delhi, AC repair near me, split AC repair, window AC service, AC gas filling Noida, AC repair Gurugram, same day AC repair Delhi NCR, Airkraft",
  },
  services: {
    title: "AC Repair, Gas Filling, Installation & AMC in Delhi NCR | Airkraft",
    description:
      "Split AC repair, window AC service, cassette AC, gas filling (R32/R410A/R22), new installation, uninstallation, PCB repair and annual AMC across Delhi NCR. Transparent pricing.",
    keywords:
      "split AC repair Delhi, AC gas filling, AC installation Delhi, AC AMC Noida, cassette AC service, PCB repair, window AC gas filling Gurugram",
  },
  about: {
    title: "About Airkraft | Certified AC Technicians in Delhi NCR Since 2014",
    description:
      "Airkraft is a Delhi NCR AC repair company built by working technicians. 18,400+ jobs, 90-day parts & labour warranty, GST invoices, no scare-selling. Meet the team.",
    keywords:
      "AC technicians Delhi, HVAC company Delhi NCR, Airkraft cooling, certified AC mechanic Noida Gurgaon",
  },
  areas: {
    title: "AC Repair Near Me | Delhi, Noida, Gurugram, Ghaziabad, Faridabad",
    description:
      "Airkraft covers all of Delhi NCR: South Delhi, Dwarka, Rohini, Noida, Greater Noida, Gurugram, Ghaziabad, Faridabad and 40+ neighbourhoods. Same-day slots.",
    keywords:
      "AC repair South Delhi, AC repair Dwarka, AC repair Noida Sector 62, AC repair Gurgaon, AC repair Vaishali, AC repair Faridabad, AC repair Rohini",
  },
  contact: {
    title: "Book AC Repair on WhatsApp | Airkraft Delhi NCR | +91 93155 15700",
    description:
      "Book a same-day AC technician on WhatsApp. Call +91 93155 15700. Service 7 AM–10 PM, emergency night call-outs. Delhi, Noida, Gurugram, Ghaziabad, Faridabad.",
    keywords:
      "book AC repair WhatsApp, AC service contact Delhi, emergency AC repair number, 9315515700",
  },
};

export const SERVICES = [
  {
    slug: "split-ac-repair",
    title: "Split AC Repair",
    price: "From ₹499",
    blurb:
      "Cooling drop, water leak, noise, remote faults, sensor errors — diagnosed on site, not guessed from the gate.",
    details:
      "We open the indoor unit, test the PCB, check the blower, measure suction/discharge pressures and only then quote. Most split AC jobs in Delhi NCR finish the same visit.",
    items: [
      "Not cooling / less cooling",
      "Water dripping indoors",
      "PCB & sensor faults",
      "Blower motor & noise",
      "Swing flap & remote",
    ],
  },
  {
    slug: "window-ac-repair",
    title: "Window AC Repair",
    price: "From ₹449",
    blurb:
      "The unloved workhorse of older Delhi flats. We still stock parts, still fix them, still stand behind the job.",
    details:
      "Capacitor, fan motor, thermostat, gas top-up and full wet service for window units of every vintage — Voltas, LG, Carrier, Videocon and the rest.",
    items: [
      "Capacitor & relay",
      "Fan / blower motor",
      "Thermostat",
      "Gas leak & top-up",
      "Full wet service",
    ],
  },
  {
    slug: "gas-filling",
    title: "AC Gas Filling",
    price: "From ₹1,799",
    blurb:
      "We find the leak first. Filling gas into a leaking coil is how you get called again in three weeks.",
    details:
      "Nitrogen pressure test, soap/electronic leak detection, vacuum, then weighed charge of R32, R410A or R22. Invoice lists gas type and grams charged.",
    items: [
      "R32 / R410A / R22",
      "Leak detection",
      "Vacuum & weigh-in",
      "Coil repair if needed",
      "Written gas record",
    ],
  },
  {
    slug: "installation",
    title: "Install & Uninstall",
    price: "From ₹1,499",
    blurb:
      "Core cutting, copper running, vacuuming, drainage fall — done like a fit-out, not a jugaad on the balcony.",
    details:
      "Standard 1–2 ton split installs, high-wall, heavy outdoor stands, copper extension and shifting between rooms or houses. Civil patching quoted separately.",
    items: [
      "New split install",
      "Shifting / reinstall",
      "Copper pipe extra run",
      "Outdoor stand & core cut",
      "Vacuum before gas",
    ],
  },
  {
    slug: "amc",
    title: "Annual AMC",
    price: "From ₹2,499",
    blurb:
      "Two wet services, priority call-outs, discounted parts. Built for people who are done chasing a new number every May.",
    details:
      "Residential and small-office AMC. We log every machine — brand, tonnage, gas, last service — so the next technician is never starting from zero.",
    items: [
      "2 wet + 1 dry service",
      "Priority summer slots",
      "Parts at AMC rate",
      "Multi-AC home plans",
      "WhatsApp service log",
    ],
  },
  {
    slug: "commercial",
    title: "Cassette & VRF",
    price: "On site quote",
    blurb:
      "Cassette, ductable and small VRF for shops, clinics, restaurants and offices. Night work if you cannot shut the floor.",
    details:
      "Drain pump failures, indoor PCB, outdoor inverter boards, communication errors and gas circuits. We coordinate with facility managers and keep a paper trail.",
    items: [
      "Cassette AC service",
      "Ductable units",
      "VRF / VRV faults",
      "Restaurant & clinic night jobs",
      "AMC for 5+ machines",
    ],
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "WhatsApp the fault",
    text: "Brand, tonnage, what it is doing, and your area. Photos of the indoor unit help. You get a slot, not a hold tune.",
  },
  {
    step: "02",
    title: "Technician at the door",
    text: "ID card, shoe covers, a manifold set that actually holds vacuum. Diagnosis before any spare is named.",
  },
  {
    step: "03",
    title: "Plain-language quote",
    text: "What failed, why, parts vs labour, and what we will not do. You approve on WhatsApp. Then we open tools.",
  },
  {
    step: "04",
    title: "Fix, test, warranty",
    text: "Run test on cooling, current draw and drain. GST invoice. 90 days on the work we touched.",
  },
] as const;

export const REASONS = [
  {
    title: "Diagnosis before the spare",
    text: "No ‘gas khatam hai’ from the gate. Pressures, current, and error codes first. If it only needs a wash, you only pay for a wash.",
  },
  {
    title: "Parts we can stand behind",
    text: "OEM-grade capacitors, coils and PCBs. Cheap Chinese boards are how a ₹1,200 save becomes a ₹8,000 second visit.",
  },
  {
    title: "Written 90-day warranty",
    text: "Labour and the part we fitted. The warranty lives on your invoice and in our WhatsApp log — not in someone’s memory.",
  },
  {
    title: "GST bill, every time",
    text: "For landlords, offices and anyone who is tired of handwritten pads. UPI, card, cash.",
  },
] as const;

export const PRICING = [
  { job: "Split AC wet service", from: "₹499", note: "Foam + jet, indoor + outdoor" },
  { job: "Window AC wet service", from: "₹449", note: "Pull-out clean" },
  { job: "Gas filling (R32 / R410A)", from: "₹1,799", note: "After leak test" },
  { job: "Gas filling (R22)", from: "₹2,499", note: "Subject to stock" },
  { job: "Split AC installation", from: "₹1,499", note: "Standard 1–1.5 ton" },
  { job: "PCB inspection & repair", from: "₹799", note: "Board repair extra" },
  { job: "Water leak repair", from: "₹499", note: "Drain / insulation" },
  { job: "Residential AMC (1 AC)", from: "₹2,499", note: "2 wet services" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ritika Malhotra",
    area: "Greater Kailash II",
    text: "Two other ‘technicians’ told me the coil was dead. Airkraft found a pinched drain and a dying capacitor. AC is quieter than it was in 2019.",
    rating: 5,
    machine: "Daikin 1.5T inverter",
  },
  {
    name: "Imran Qureshi",
    area: "Noida Sec 137",
    text: "Booked on WhatsApp at 9:12. Engineer at 10:40. Gas was not the issue — outdoor fan capacitor. Billed ₹650. That almost never happens in this city.",
    rating: 5,
    machine: "Voltas 2T",
  },
  {
    name: "Sneha Iyer",
    area: "Dlf Phase 3, Gurugram",
    text: "Three cassette units in the clinic. They came after 8pm, no drama with the RWA, invoices the next morning. Renewed AMC the same week.",
    rating: 5,
    machine: "Blue Star cassette ×3",
  },
  {
    name: "Pankaj Bansal",
    area: "Vaishali, Ghaziabad",
    text: "Window AC from 2012. Everyone said scrap it. They rebuilt the fan motor and did a proper wet service. Still running through this summer.",
    rating: 5,
    machine: "Carrier window 1.5T",
  },
] as const;

export const FAQS = [
  {
    q: "Do you charge a visiting fee?",
    a: "₹199 inspection in most of Delhi NCR, waived if you approve the repair the same visit. Outlying Greater Noida West / Sohna / Ballabhgarh may attract a small travel add-on — we tell you on WhatsApp before we roll.",
  },
  {
    q: "How fast can a technician reach me?",
    a: "Typical window is 45–90 minutes in South, Central, East Delhi, Noida and Gurugram during the day. Peak May–June afternoons run longer; we will not invent an ETA. Night emergency is available at a published surcharge.",
  },
  {
    q: "Which AC brands do you service?",
    a: "Daikin, Voltas, Lloyd, LG, Samsung, Blue Star, Hitachi, Carrier, Mitsubishi, O General, Panasonic, Godrej, Haier, Whirlpool, Onida and most white-label machines sold in India. VRF/VRV by quote.",
  },
  {
    q: "Do you fill R22 gas?",
    a: "Yes, while stock lasts, and only after a leak test. We will also tell you honestly when a 12-year-old R22 machine is cheaper to replace than to keep charging.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: "90 days on the spare we fitted and the labour for that spare. Compressors and coils follow the part maker’s cover. Warranty is on the GST invoice.",
  },
  {
    q: "Can I book on WhatsApp instead of calling?",
    a: "That is the preferred way. Send the brand, tonnage, the fault, a photo, and your landmark. +91 93155 15700. You will get a slot and the technician’s name before he starts.",
  },
] as const;

export const AREAS = [
  {
    city: "New Delhi",
    pin: "1100xx",
    places: [
      "South Extension",
      "Greater Kailash",
      "Kalkaji",
      "Nehru Place",
      "Hauz Khas",
      "Saket",
      "Vasant Kunj",
      "Dwarka",
      "Rohini",
      "Pitampura",
      "Janakpuri",
      "Lajpat Nagar",
      "Defence Colony",
      "Karol Bagh",
      "Patel Nagar",
      "Mayur Vihar",
      "Laxmi Nagar",
      "Preet Vihar",
      "Shahdara",
      "Civil Lines",
    ],
  },
  {
    city: "Noida & Greater Noida",
    pin: "2013xx",
    places: [
      "Sector 18",
      "Sector 37",
      "Sector 50",
      "Sector 62",
      "Sector 76",
      "Sector 137",
      "Sector 150",
      "Noida Extension",
      "Greater Noida West",
      "Alpha / Beta / Gamma",
      "Knowledge Park",
      "Pari Chowk",
    ],
  },
  {
    city: "Gurugram",
    pin: "1220xx",
    places: [
      "DLF Phase 1–5",
      "Sushant Lok",
      "South City",
      "Golf Course Road",
      "Sohna Road",
      "Sector 49–57",
      "New Gurgaon",
      "MG Road",
      "Palam Vihar",
      "Dwarka Expressway",
    ],
  },
  {
    city: "Ghaziabad & Faridabad",
    pin: "201 / 121",
    places: [
      "Vaishali",
      "Indirapuram",
      "Raj Nagar Extension",
      "Kaushambi",
      "Crossings Republik",
      "Vasundhara",
      "NIT Faridabad",
      "Greater Faridabad",
      "Sector 15–21 Faridabad",
      "Ballabhgarh",
    ],
  },
] as const;

export const BRANDS = [
  "Daikin",
  "Voltas",
  "Lloyd",
  "LG",
  "Samsung",
  "Blue Star",
  "Hitachi",
  "Carrier",
  "Mitsubishi",
  "O General",
  "Panasonic",
  "Godrej",
  "Haier",
  "Whirlpool",
] as const;

export const TEAM = [
  {
    name: "Arjun Mehta",
    role: "Lead diagnostic engineer",
    years: "14 yrs",
    focus: "Inverter PCB & VRF",
  },
  {
    name: "Farhan Siddiqui",
    role: "Field supervisor, South & Central",
    years: "11 yrs",
    focus: "Split & cassette",
  },
  {
    name: "Kavita Rao",
    role: "AMC & dispatch",
    years: "8 yrs",
    focus: "Slots, parts, follow-ups",
  },
  {
    name: "Rakesh Yadav",
    role: "Installation crew lead",
    years: "12 yrs",
    focus: "Copper, vacuum, civil",
  },
] as const;

export const IMAGES = {
  hero: "/images/og.jpg",
  workshop:
    "https://images.pexels.com/photos/33671149/pexels-photo-33671149.jpeg?auto=compress&cs=tinysrgb&w=1600",
  techWork:
    "https://images.pexels.com/photos/33755641/pexels-photo-33755641.jpeg?auto=compress&cs=tinysrgb&w=1600",
  training:
    "https://images.pexels.com/photos/33925031/pexels-photo-33925031.jpeg?auto=compress&cs=tinysrgb&w=1600",
  pcb: "https://images.pexels.com/photos/34099331/pexels-photo-34099331.jpeg?auto=compress&cs=tinysrgb&w=1600",
  outdoor:
    "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1600",
  gauges:
    "https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg?auto=compress&cs=tinysrgb&w=800",
  outdoorClose:
    "https://images.pexels.com/photos/5463582/pexels-photo-5463582.jpeg?auto=compress&cs=tinysrgb&w=800",
  tools:
    "https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?auto=compress&cs=tinysrgb&w=1200",
  acUnit:
    "https://images.pexels.com/photos/27134985/pexels-photo-27134985.jpeg?auto=compress&cs=tinysrgb&w=1200",
  panel:
    "https://images.pexels.com/photos/32737485/pexels-photo-32737485.jpeg?auto=compress&cs=tinysrgb&w=1200",
  delhi:
    "https://images.pexels.com/photos/15210314/pexels-photo-15210314.jpeg?auto=compress&cs=tinysrgb&w=1600",
  delhiStreet:
    "https://images.pexels.com/photos/37266423/pexels-photo-37266423.jpeg?auto=compress&cs=tinysrgb&w=1600",
  family:
    "https://images.pexels.com/photos/8054853/pexels-photo-8054853.jpeg?auto=compress&cs=tinysrgb&w=1600",
  living:
    "https://images.pexels.com/photos/6316067/pexels-photo-6316067.jpeg?auto=compress&cs=tinysrgb&w=1600",
  apartments:
    "https://images.pexels.com/photos/34687846/pexels-photo-34687846.jpeg?auto=compress&cs=tinysrgb&w=1600",
  circuit:
    "https://images.pexels.com/photos/35157346/pexels-photo-35157346.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;
