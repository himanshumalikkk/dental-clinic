/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Treatment {
  id: string;
  title: string;
  category: "Cosmetic" | "Reconstructive" | "Preventive";
  description: string;
  duration: string;
  image: string;
  meta: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Space" | "Experience" | "Artistry";
  image: string;
  aspectRatio: "aspect-[3/4]" | "aspect-[4/3]" | "aspect-[16/9]" | "aspect-square";
  size: "small" | "medium" | "large";
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface Testimony {
  id: string;
  quote: string;
  patientName: string;
  location: string;
  treatment: string;
  image: string;
}

export interface TechFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  benefit: string;
}
