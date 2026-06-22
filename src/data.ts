/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Treatment, BeforeAfterCase, TeamMember, Testimony, TechFeature } from "./types";

import heroSmile from "./assets/images/luxury_ireland_hero_smile_1782015338714.jpg";
import clinicSpace from "./assets/images/luxury_clinic_space_1782015353601.jpg";
import dentistTreatment from "./assets/images/dentist_treatment_patient_1782019147498.jpg";
import technology from "./assets/images/luxury_dental_technology_1782015368413.jpg";
import perfectSmileDetail from "./assets/images/perfect_natural_smile_detail_1782015384510.jpg";
import irelandCoastal from "./assets/images/ireland_calm_coastal_1782015398611.jpg";
import beforeSmileMacro from "./assets/images/before_smile_macro_1782016382776.jpg";
import afterSmileMacro from "./assets/images/after_smile_macro_1782016398340.jpg";
import orthoAlignerTray from "./assets/images/ortho_aligner_tray_1782016413641.jpg";
import whiteningPatient from "./assets/images/whitening_patient_1782016427534.jpg";
import drSinead from "./assets/images/dr_sinead_portrait_1782016441789.jpg";
import drLiam from "./assets/images/dr_liam_portrait_1782016456512.jpg";
import precisionVeneer from "./assets/images/precision_veneer_sculpting_1782016470759.jpg";
import consultSuite from "./assets/images/consult_suite_interior_1782016486736.jpg";
import patientSaoirse from "./assets/images/patient_saoirse_smile_1782016512397.jpg";
import patientCillian from "./assets/images/patient_cillian_smile_1782016525595.jpg";
import silverPatient from "./assets/images/silver_patient_smile_1782018371914.jpg";
import dentistTools from "./assets/images/dentist_tools_tray_1782018387763.jpg";
import veneersOnModel from "./assets/images/veneers_on_model_1782018405037.jpg";

// Bespoke images generated for the app
export const CustomImages = {
  heroSmile,
  clinicSpace,
  dentistTreatment,
  technology,
  perfectSmileDetail,
  irelandCoastal,
  beforeSmileMacro,
  afterSmileMacro,
  orthoAlignerTray,
  whiteningPatient,
  drSinead,
  drLiam,
  precisionVeneer,
  consultSuite,
  patientSaoirse,
  patientCillian,
  silverPatient,
  dentistTools,
  veneersOnModel
};

export const TREATMENTS: Treatment[] = [
  {
    id: "atelier-veneers",
    title: "Atelier Porcelain Veneers",
    category: "Cosmetic",
    description: "Bespoke, hand-layered ceramic restorations designed to complement your natural facial architecture. Individually crafted in our signature labs to match the translucency and fine character of natural Irish light.",
    duration: "2-3 Sessions",
    image: CustomImages.perfectSmileDetail,
    meta: "Crafted by master ceramists"
  },
  {
    id: "invisible-ortho",
    title: "Orthodontics by Design",
    category: "Cosmetic",
    description: "Sleek, transparent alignment systems custom-tailored to guide teeth into pristine mathematical harmony. Ideal for adults seeking absolute discretion and minimal lifestyle disruption.",
    duration: "6-12 Months",
    image: CustomImages.orthoAlignerTray,
    meta: "Custom 3D aligned"
  },
  {
    id: "smile-renewal",
    title: "Chroma Smile Whitening Plan",
    category: "Cosmetic",
    description: "Multi-layered oxygenation treatment tailored with natural mineral compounds to carefully lift discoloration while reinforcing healthy enamel crystalline structure.",
    duration: "90 Minute Session",
    image: CustomImages.whiteningPatient,
    meta: "Enamel-safe mineral composite"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Full Arch Aesthetic Integration",
    description: "Transformative correction of irregular wear, enamel thinning, and spacing issues using hand-sculpted bespoke porcelain veneers.",
    beforeImage: CustomImages.beforeSmileMacro,
    afterImage: CustomImages.afterSmileMacro
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-sinead-o-connor",
    name: "Dr. Sinéad O'Connor",
    role: "Clinical Director & Principal Dentofacial Sculptor",
    specialty: "Aesthetic Dentistry, Trinity College Dublin",
    image: CustomImages.drSinead
  },
  {
    id: "dr-liam-barrett",
    name: "Dr. Liam Barrett",
    role: "Restorative Expert & Lead Implantologist",
    specialty: "Microscopic Reconstruction, Royal College of Surgeons",
    image: CustomImages.drLiam
  }
];

export const TECH_FEATURES: TechFeature[] = [
  {
    id: "tech-1",
    title: "Trios 5D Intraoral Imaging",
    description: "Instead of uncomfortable traditional impressions, we leverage spectral intraoral light scanners. Your new alignment scheme and veneer configuration are simulated on a hyper-realistic 3D profile in real-time.",
    image: CustomImages.technology,
    benefit: "Zero discomfort, micrometric design control."
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    id: "test-1",
    quote: "Celtic Smile Clinic feels like an Aman resort. There is no scent of sterile medical fluids—only white tea, fresh oak, and calm coastal atmosphere. The veneers feel like they grew with me.",
    patientName: "Saoirse Ní Mhaoláin",
    location: "Kildare",
    treatment: "Atelier Porcelain Veneers",
    image: CustomImages.patientSaoirse
  },
  {
    id: "test-2",
    quote: "They understand aesthetic symmetry at a level most architects would envy. Dr. Sinéad designed a smile that aligns perfectly with the contours of my eyes and lower lip frame.",
    patientName: "Cillian Fitzgerald",
    location: "Dublin 4",
    treatment: "Orthodontics by Design",
    image: CustomImages.patientCillian
  }
];
