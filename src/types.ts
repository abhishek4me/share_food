export interface DonationForm {
  foodType: string;
  quantity: number;
  unit: string;
  location: string;
  expiryDate: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export interface Organization {
  id: string;
  name: string;
  description: string;
  needs: string[];
  location: string;
  contact: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Stats {
  donationsCount: number;
  organizationsHelped: number;
  mealsServed: number;
  volunteersActive: number;
}