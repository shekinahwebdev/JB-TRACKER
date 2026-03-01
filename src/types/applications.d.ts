export type ApplicationStatus =
  | "Applied"
  | "Interview"
  | "Accepted"
  | "Rejected";

export type SortOptions =
  | "Default"
  | "Last Added"
  | "Recent Added"
  | "Newest Action"
  | "Oldest Action";

export type IndustryFilters =
  | "Agriculture"
  | "Technology"
  | "Healthcare"
  | "Finance"
  | "Education"
  | "Manufacturing"
  | "Retail"
  | "Energy"
  | "Transportation"
  | "Entertainment"
  | "Other";

export interface Application {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  dateApplied: string; // ISO date string
  //   lastActionDate: string; // ISO date string
  industry: IndustryFilters;
  source: string;
  notes?: string;
  contactInfo?: {
    email?: string;
    number?: string;
  };
}

export interface ApplicationFilters {
  status?: ApplicationStatus;
  industry?: IndustryFilters;
  sortBy?: SortOptions;
  source?: string;
}
