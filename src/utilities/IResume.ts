export default interface IResume {
  resume: {
    basics: IBasics;
    work: Array<IWork>;
    volunteer: Array<IVolunteer>;
    education: Array<IEducation>;
    awards: Array<IAward>;
    certificates: Array<ICertificate>;
    publications: Array<IPublication>;
    skills: Array<ISkill>;
    languages: Array<ILanguage>;
    interests: Array<IInterest>;
    references: Array<IReference>;
    projects: Array<IProject>;
  };
}

interface IBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: ILocation;
  profiles: Array<IProfile>;
}

interface ILocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface IProfile {
  network: string;
  username: string;
  url: string;
}

interface IWork {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: Array<string>;
}

interface IVolunteer {
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: Array<string>;
}

interface IEducation {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: Array<string>;
}

interface IAward {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface ICertificate {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

interface IPublication {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
}

interface ISkill {
  name: string;
  level: string;
  keywords: Array<string>;
}

interface ILanguage {
  language: string;
  fluency: string;
}

interface IInterest {
  name: string;
  keywords: Array<string>;
}

interface IReference {
  name: string;
  reference: string;
}

interface IProject {
  name: string;
  description: string;
  highlights: Array<string>;
  keywords: Array<string>;
  startDate: string;
  endDate: string;
  url: string;
  roles: Array<string>;
  entity: string;
  type: string;
}
