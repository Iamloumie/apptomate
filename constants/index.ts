export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Adedamola Lawal",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Oyelakin Omodasola",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Michael Opeyemi",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Bello Yetunde",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Okikiola Temiloluwa",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Edward Gadus",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Manny Quansah",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Naa Ayikailey",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Arije Guerolee",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};