import { v4 as uuidv4 } from "uuid";
import { ResumeData } from "../types/resumeData";

const getBlankData: () => ResumeData = () => {
  const jsonData = `{
    "personal": {
      "fullName": "",
      "phoneNumber": "",
      "address": "",
      "email": "",
      "website": "",
      "linkedin": "",
      "github": "",
    },
    "education": [
      {
        "id": ${uuidv4()},
        "school": "",
        "degree": "",
        "startDate": "",
        "endDate": "",
        "location": ""
      }
    ],
    "experience": [
      {
        "id": ${uuidv4()},
        "company": "",
        "position": "",
        "startDate": "",
        "endDate": "",
        "location": "",
        "description": "",
      }
    ],
  }`;

  const blankData: ResumeData = JSON.parse(jsonData);
  return blankData;
};

//TODO fill w/ example data
const getExampleData: () => ResumeData = () => {
  return getBlankData();
};
