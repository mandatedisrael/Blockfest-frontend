export interface Menu {
  path: string;
  title?: string;
  icon?: React.ReactNode;
}

export interface Speaker {
  name: string;
  title: string;
  image: string;
  bio?: string;
  company?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Partner {
  name: string;
  logo: string;
  url?: string;
  tier?: "platinum" | "gold" | "silver" | "bronze" | "community";
}

export interface EventDetails {
  name: string;
  date: string;
  location: string;
  venue: string;
  description: string;
  registrationOpen: boolean;
}

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  facebook?: string;
}
