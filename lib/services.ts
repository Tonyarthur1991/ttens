export interface Service {
  slug:      string
  name:      string
  shortDesc: string
  longDesc:  string
  included:  string[]
  whyUs:     string[]
}

export const services: Service[] = [
  {
    slug:      'regular-clean',
    name:      'Regular Clean',
    shortDesc: 'Weekly or fortnightly home maintenance to keep your space consistently fresh, tidy, and welcoming.',
    longDesc:  'Our regular cleaning service keeps your home in top condition week after week. We send the same cleaner every visit so you build trust and they learn exactly how you like things done.',
    included: [
      'Vacuuming all floors and carpets',
      'Mopping hard floors',
      'Dusting surfaces and skirting boards',
      'Cleaning bathrooms and sanitising fixtures',
      'Wiping kitchen surfaces and appliance exteriors',
      'Emptying bins throughout the property',
    ],
    whyUs: [
      'Same cleaner every visit for consistency and familiarity',
      'Flexible frequency — weekly, fortnightly, or monthly',
      'Easy to reschedule with 24-hour notice',
    ],
  },
  {
    slug:      'deep-clean',
    name:      'Deep Clean',
    shortDesc: 'A thorough top-to-bottom clean covering every corner, appliance, surface, and fixture.',
    longDesc:  'Our deep clean goes where regular cleaning cannot. Every surface, cavity, and fixture is addressed — ideal after moving in, before a sale, or when a property needs a proper reset.',
    included: [
      'Inside oven, fridge, and microwave',
      'Behind and underneath all furniture',
      'Deep scrubbing of grout lines and tiles',
      'Window sills, frames, and interior glass',
      'Full bathroom descale and sanitisation',
      'Light switches, door handles, and skirting boards',
    ],
    whyUs: [
      'Ideal before or after a property sale or rental',
      'Takes 4–8 hours depending on property size',
      'All specialist equipment and products provided',
    ],
  },
  {
    slug:      'move-in-move-out',
    name:      'Move In / Move Out',
    shortDesc: 'End of tenancy cleans crafted to secure your full deposit back or welcome you into a spotless new home.',
    longDesc:  'Our end of tenancy clean is built to meet landlord and letting agent standards. We follow ARLA guidelines and offer a deposit-back guarantee — if your landlord raises any issues, we come back and fix them free of charge.',
    included: [
      'Full deep clean of all rooms',
      'Inside all cupboards, drawers, and wardrobes',
      'Inside oven and all kitchen appliances',
      'Limescale removal from all bathroom surfaces',
      'Interior window cleaning throughout',
      'Carpet steam cleaning (optional add-on)',
    ],
    whyUs: [
      'Deposit-back guarantee — we return free if issues are raised',
      'Aligned with ARLA tenancy cleaning standards',
      'Available at short notice for tight move-out deadlines',
    ],
  },
  {
    slug:      'office-commercial',
    name:      'Office & Commercial',
    shortDesc: 'Scheduled, reliable cleaning for offices, retail units, and commercial premises.',
    longDesc:  'A clean workplace boosts productivity and creates the right impression for clients and staff alike. TTens provides flexible commercial cleaning contracts with a dedicated account manager.',
    included: [
      'Desk, screen, and surface sanitisation',
      'Kitchen and breakroom full clean',
      'Restroom deep clean and consumables restocking',
      'Vacuuming and floor mopping throughout',
      'Bin collection and recycling separation',
      'Window and entrance area presentation clean',
    ],
    whyUs: [
      'Flexible contracts — daily, weekly, or ad hoc',
      'Out-of-hours cleaning available to avoid disruption',
      'Dedicated account manager for all commercial clients',
    ],
  },
  {
    slug:      'after-build-renovation',
    name:      'After Build / Renovation',
    shortDesc: 'Post-construction cleanup — all dust, debris, and residue cleared to reveal the true quality of the finish.',
    longDesc:  'Construction and renovation work leaves behind layers of dust, debris, and residue that standard cleaning cannot handle. Our specialist after-build team uses professional equipment to restore the property to a showroom standard.',
    included: [
      'Removal of plaster dust and construction debris',
      'Cleaning of all window frames and glass panes',
      'Paint splatter removal from floors and fixtures',
      'Deep clean of all newly installed surfaces',
      'Final polish of floors and stone worktops',
      'Rubble and waste material removal',
    ],
    whyUs: [
      'Specialist HEPA-filter equipment for fine construction dust',
      'Works directly with builders and project managers',
      'Available same-week for fast project handover',
    ],
  },
  {
    slug:      'carpet-upholstery',
    name:      'Carpet & Upholstery',
    shortDesc: 'Specialist deep-cleaning for carpets, rugs, sofas, and chairs — restoring colour, freshness, and feel.',
    longDesc:  'Carpets and upholstery trap dust, allergens, and odours over time. Our specialist cleaning uses professional-grade hot water extraction to remove deep-set dirt and restore your fabrics to their best condition.',
    included: [
      'Hot water extraction carpet cleaning',
      'Sofa and armchair full deep clean',
      'Targeted stain and odour treatment',
      'Mattress cleaning and sanitisation',
      'Rug cleaning (on-site or collected)',
      'Fast-dry treatment — most carpets dry in 2–4 hours',
    ],
    whyUs: [
      'Professional-grade extraction machines, not rental equipment',
      'Safe for children, pets, and allergy sufferers',
      'Most carpets dry within 2–4 hours of treatment',
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getOtherServices(slug: string): Service[] {
  return services.filter(s => s.slug !== slug)
}
