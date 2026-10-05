import { AREAS, FAQS, SERVICES, SITE } from "../data";

export function JsonLd() {
  const areaNames = AREAS.flatMap((a) => [a.city, ...a.places]);

  const business = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://airkraft.in/#business",
    name: SITE.legal,
    alternateName: SITE.name,
    url: "https://airkraft.in/",
    telephone: SITE.phone,
    email: SITE.email,
    image: "https://airkraft.in/images/og.jpg",
    logo: "https://airkraft.in/favicon.png",
    description:
      "Same-day AC repair, gas filling, installation and AMC across Delhi NCR. Split, window, cassette and VRF.",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Cash, Card",
    foundingDate: String(SITE.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110019",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5355,
      longitude: 77.259,
    },
    areaServed: areaNames.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
    sameAs: [`https://wa.me/${SITE.whatsapp}`],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC repair services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.blurb,
          areaServed: "Delhi NCR",
        },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://airkraft.in/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://airkraft.in/#/services" },
      { "@type": "ListItem", position: 3, name: "About", item: "https://airkraft.in/#/about" },
      { "@type": "ListItem", position: 4, name: "Service Areas", item: "https://airkraft.in/#/areas" },
      { "@type": "ListItem", position: 5, name: "Contact", item: "https://airkraft.in/#/contact" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}
