export interface StatusFilter {
  applied: boolean;
  interview: boolean;
  offer: boolean;
  rejected: boolean;
}

export interface PlatformFilter {
  linkedin: boolean;
  indeed: boolean;
  glassdoor: boolean;
  other: boolean;
}

export interface DateFilter {
  last7Days: boolean;
  last30Days: boolean;
  last90Days: boolean;
  last180Days: boolean;
  last365Days: boolean;
}
export interface LocationFilter {
  remote: boolean;
  onsite: boolean;
  hybrid: boolean;
}

export interface SortFilter {
  newest: boolean;
  oldest: boolean;
  aToZ: boolean;
  zToA: boolean;
}
