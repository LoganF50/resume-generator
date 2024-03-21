import { EducationData } from "./educationData";
import { ExperienceData } from "./experienceData";
import { PersonalData } from "./personalData";

export interface ResumeData {
  personal: PersonalData;
  education: EducationData[];
  experience: ExperienceData[];
}
