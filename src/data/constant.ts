export const initialfilters = {
  status: { applied: true, interview: false, offer: false, rejected: false },
  platform: { linkedin: true, indeed: false, glassdoor: false, other: false },
  date: {
    last7Days: true,
    last30Days: false,
    last90Days: false,
    last180Days: false,
    last365Days: false,
  },
  location: { remote: true, onsite: false, hybrid: false },
  sort: { newest: true, oldest: false, aToZ: false, zToA: false },
};
