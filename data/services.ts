import type React from "react"
import {
  FiSmile,
  FiActivity,
  FiAperture,
  FiFeather,
  FiGrid,
  FiShield,
  FiStar,
  FiSun,
  FiTarget,
  FiTool,
  FiZap,
  FiHeart,
} from "react-icons/fi"

export type Service = {
  slug: string
  title: string
  excerpt: string
  icon: React.ComponentType<any>
  details: {
    description: string
    advantages: string[]
    aftercare: string[]
    faqs: { q: string; a: string }[]
  }
}

export const services: Service[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    excerpt: "Relieve pain and save your natural tooth with gentle, precise endodontic care.",
    icon: FiTool,
    details: {
      description:
        "Root canal therapy removes infected pulp, cleans the canals, and seals the tooth to relieve pain and prevent reinfection.",
      advantages: ["Pain relief", "Preserve natural tooth", "Prevents spread of infection"],
      aftercare: [
        "Avoid chewing on the treated side for 24 hours",
        "Take prescribed medications",
        "Schedule a crown if advised",
      ],
      faqs: [
        { q: "Is it painful?", a: "With modern anesthesia, most patients report minimal discomfort." },
        { q: "Will I need a crown?", a: "Often recommended to protect the tooth after treatment." },
      ],
    },
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    excerpt: "Brighten your smile safely with professional-grade whitening solutions.",
    icon: FiSun,
    details: {
      description:
        "In-office or take-home whitening treatments remove stains and lift shades effectively under professional supervision.",
      advantages: ["Quick results", "Safe and controlled", "Customized to your needs"],
      aftercare: ["Avoid staining foods for 24–48 hours", "Use a sensitivity toothpaste if needed"],
      faqs: [
        { q: "How long do results last?", a: "With good habits, several months to over a year." },
        { q: "Is sensitivity normal?", a: "Temporary sensitivity can occur and typically resolves quickly." },
      ],
    },
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    excerpt: "Permanent, natural-looking replacement for missing teeth.",
    icon: FiTarget,
    details: {
      description:
        "Implants replace tooth roots with titanium posts topped by crowns for a stable, long-term solution.",
      advantages: ["Long-lasting", "Preserves bone", "Looks and feels natural"],
      aftercare: ["Maintain excellent hygiene", "Attend follow-ups", "Avoid smoking for best outcomes"],
      faqs: [
        { q: "Am I a candidate?", a: "Adequate bone and healthy gums are key; evaluation is required." },
        { q: "How long is the process?", a: "Several months from placement to final crown, depending on healing." },
      ],
    },
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    excerpt: "Discreet orthodontic treatment to straighten teeth comfortably.",
    icon: FiFeather,
    details: {
      description: "A series of custom trays gently shift teeth into alignment.",
      advantages: ["Nearly invisible", "Removable", "Comfortable"],
      aftercare: ["Wear as prescribed", "Clean trays daily", "Attend progress checks"],
      faqs: [
        { q: "How long does it take?", a: "Typically 6–18 months depending on complexity." },
        { q: "Can I eat normally?", a: "Yes—remove aligners while eating and brush before reinserting." },
      ],
    },
  },
  {
    slug: "veneers",
    title: "Veneers",
    excerpt: "Transform shape, color, and symmetry with ultra-thin porcelain shells.",
    icon: FiAperture,
    details: {
      description: "Custom veneers bond to the front of teeth for cosmetic enhancement.",
      advantages: ["Immediate transformation", "Stain-resistant", "Durable"],
      aftercare: ["Avoid using teeth as tools", "Wear a nightguard if recommended"],
      faqs: [
        { q: "Are they permanent?", a: "They are a long-term solution and may need replacement over time." },
        { q: "Do they damage teeth?", a: "Minimal enamel reduction is required; planned conservatively." },
      ],
    },
  },
  {
    slug: "dental-crowns",
    title: "Dental Crowns",
    excerpt: "Restore strength and appearance to damaged teeth.",
    icon: FiShield,
    details: {
      description: "Crowns cover and protect compromised teeth, restoring function and aesthetics.",
      advantages: ["Strengthens tooth", "Improves appearance", "Custom shade-matched"],
      aftercare: ["Avoid sticky foods initially", "Maintain routine hygiene"],
      faqs: [
        { q: "How many visits?", a: "Usually two visits—prep and placement." },
        { q: "Which materials?", a: "Porcelain, zirconia, or metal-ceramic depending on case." },
      ],
    },
  },
  {
    slug: "bridges",
    title: "Bridges",
    excerpt: "Replace missing teeth using adjacent supports for a seamless smile.",
    icon: FiGrid,
    details: {
      description: "Fixed bridges fill gaps by anchoring to neighboring teeth or implants.",
      advantages: ["Restores function", "Aesthetic solution", "Relatively quick"],
      aftercare: ["Clean under the pontic", "Use superfloss or water flosser"],
      faqs: [
        { q: "Implant vs bridge?", a: "Implants preserve bone; bridges can be quicker—assessment needed." },
        { q: "Lifespan?", a: "With care, 7–15 years or more." },
      ],
    },
  },
  {
    slug: "gum-disease-therapy",
    title: "Gum Disease Therapy",
    excerpt: "Treat gingivitis and periodontitis to protect your smile and health.",
    icon: FiActivity,
    details: {
      description: "Scaling, root planing, and maintenance to control infection and inflammation.",
      advantages: ["Reduces bleeding", "Protects bone", "Improves breath"],
      aftercare: ["Frequent cleanings", "Excellent home care", "Quit smoking if applicable"],
      faqs: [
        { q: "Is it painful?", a: "Local anesthesia ensures comfort during deep cleaning." },
        { q: "Will gums regrow?", a: "Inflammation reduces; advanced damage may require grafting." },
      ],
    },
  },
  {
    slug: "fillings",
    title: "Tooth-Colored Fillings",
    excerpt: "Repair cavities with natural-looking composite restorations.",
    icon: FiStar,
    details: {
      description: "Composite fillings bond to tooth structure for conservative, aesthetic repairs.",
      advantages: ["Tooth-colored", "Conservative", "Quick appointment"],
      aftercare: ["Avoid hard biting until numbness wears off"],
      faqs: [
        { q: "How long do they last?", a: "Typically 5–10 years with good care." },
        { q: "Is BPA-free available?", a: "Yes, materials can be selected accordingly." },
      ],
    },
  },
  {
    slug: "extractions",
    title: "Extractions",
    excerpt: "Comfort-focused tooth removal when necessary for oral health.",
    icon: FiZap,
    details: {
      description: "Simple or surgical removal with emphasis on comfort and healing.",
      advantages: ["Relieves pain", "Prepares for future restoration"],
      aftercare: ["Bite on gauze", "Avoid straws and smoking", "Soft diet initially"],
      faqs: [
        { q: "Dry socket risk?", a: "Following aftercare greatly reduces the risk." },
        { q: "What about replacement?", a: "Discuss implants, bridges, or partials during planning." },
      ],
    },
  },
  {
    slug: "paediatric-dentistry",
    title: "Pediatric Dentistry",
    excerpt: "Gentle, friendly care tailored for children at every stage.",
    icon: FiHeart,
    details: {
      description: "Prevention-focused care including sealants, fluoride, and education.",
      advantages: ["Positive experiences", "Early prevention", "Growth monitoring"],
      aftercare: ["Reinforce daily brushing", "Limit sugary snacks"],
      faqs: [
        { q: "When first visit?", a: "By the first birthday or first tooth eruption." },
        { q: "Sealants?", a: "Yes—effective at preventing molar cavities." },
      ],
    },
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    excerpt: "Comprehensive aesthetic plan to achieve your ideal smile.",
    icon: FiSmile,
    details: {
      description: "Combines whitening, aligners, veneers, and more based on goals.",
      advantages: ["Customized plan", "Predictable outcomes", "Confidence boost"],
      aftercare: ["Maintain checkups", "Nightguard if recommended"],
      faqs: [
        { q: "How is it planned?", a: "Digital mockups and consultation ensure alignment with goals." },
        { q: "Is it reversible?", a: "Depends on procedures—discuss minimally invasive options." },
      ],
    },
  },
]
