import { Handshake, Stethoscope, UserCheck } from "lucide-react";

const ICON_SIZE = 45;

const homedata = {
  title: "homeTitle",
  description:
    "Our In-Home Patient Care services in Dehradun offer personalized medical care at your doorstep. From post-surgery support to chronic disease management, our trained professionals ensure comfort, safety, and quality care in the familiar surroundings of your home.",
};

const HomeCardData = [
  {
    icon: <Stethoscope size={ICON_SIZE} color="black" />,
    heading: "Tailored Patient Care Experience ",
    description:
      "We create customized care plans to meet the unique needs of every patient, ensuring optimal health and comfort",
    color: "#fdf7e5",
  },
  {
    icon: <UserCheck size={ICON_SIZE} color="#e88459" />,
    heading: "Skilled Healthcare Experts",
    description:
      "Our experienced team delivers exceptional medical support, combining expertise and compassion seamlessly.",
    color: "#fdefea",
  },
  {
    icon: <Handshake size={ICON_SIZE} color="#335c5e" />,
    heading: "Compassionate Assistance",
    description:
      "We offer reliable, empathetic care that builds trust and provides peace of mind for families.",
    color: "#e5ebeb",
  },
];

const thirdsectionData = [
  {
    title: "Donations Empowering Change through Giving",
    description:
      "Empowering Change: The Impact of Donations in Driving Positive Transformation",
  },
  {
    title: "Engaging Events for Everyone",
    description:
      "Creating Memorable Experiences: Engaging Events Designed to Delight and Unite a Diverse Community",
  },
  {
    title: "Local Volunteers Making a Difference",
    description:
      "Local Heroes: Volunteers Empowering Change and Making a Difference in the Community",
  },
  {
    title: "Monthly Events Community Gatherings for All",
    description:
      "Community Unity: Monthly Events Fostering Connections and Celebrating Diversity",
  },
];

const gridItems = [
  {
    heading: "Unmatched Professionalism",
    description:
      "Our team upholds the highest standards of integrity, respect, and dedication in every interaction.",
  },
  {
    heading: "24/7 Availability",
    description:
      "We’re here for you whenever you need us, providing round-the-clock assistance and care.",
  },
  {
    heading: "Holistic Care Approach",
    description:
      "We focus on physical, emotional, and mental well-being, ensuring comprehensive care for every patient.",
  },
  {
    heading: "Affordable Care Plans",
    description:
      "Our services are designed to provide exceptional care at a cost that fits your budget.",
  },
];

export { thirdsectionData };
export { HomeCardData };
export { gridItems };
export default homedata;
