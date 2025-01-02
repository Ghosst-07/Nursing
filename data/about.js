import {
  ShieldCheck,
  Accessibility,
  UserCheck,
  CalendarCheck,
  Eye,
  BookOpen,
  DollarSign,
  Activity,
  Star,
} from "lucide-react";
const reasons = [
  {
    title: "Quality care you can trust",
    description:
      "Providing dependable healthcare services with the utmost dedication to quality.",
    icon: <ShieldCheck color="orange" className="mx-auto" size={60} />,
  },
  {
    title: "Convenient access",
    description:
      "Easily accessible healthcare solutions tailored to your needs.",
    icon: <Accessibility color="orange" className="mx-auto" size={60} />,
  },
  {
    title: "Experienced & professional nurses along with caretakers",
    description:
      "Qualified staff ensuring exceptional care and support for every patient.",
    icon: <UserCheck color="orange" className="mx-auto" size={60} />,
  },
  {
    title: "Weekly visit of nursing supervisor",
    description:
      "Regular visits by supervisors to maintain and enhance service standards.",
    icon: <CalendarCheck color="orange" className="mx-auto" size={60} />,
  },
  {
    title: "Nursing services being monitored by experts",
    description:
      "Expert oversight to ensure top-notch nursing services are delivered.",
    icon: <Eye color="orange" className="mx-auto" size={60} />,
  },
  {
    title:
      "Training of staff is carried out in a phased manner to maintain quality of service",
    description:
      "Continuous training programs to uphold high-quality standards.",
    icon: <BookOpen color="orange" className="mx-auto" size={60} />,
  },
  {
    title: "Affordable services",
    description:
      "Delivering premium healthcare solutions at budget-friendly prices.",
    icon: <DollarSign color="orange" className="mx-auto" size={60} />,
  },
  {
    title: "Focus on preventive care",
    description:
      "Prioritizing preventive measures to promote overall well-being.",
    icon: <Activity color="orange" className="mx-auto" size={60} />,
  },
  {
    title: "Committed to excellence",
    description:
      "Dedicated to achieving the highest standards in healthcare delivery.",
    icon: <Star color="orange" className="mx-auto" size={60} />,
  },
];

export { reasons };
