// File: src/Components/choosedata.tsx

import { FaShieldAlt, FaGlobe, FaBookReader } from "react-icons/fa";


// TypeScript interface for the data shape
interface ChooseDataItem {
  icon: React.ComponentType;
  title: string;
  subtitle: string;
  bg: string;
}

const ChooseData: ChooseDataItem[] = [
  {
    icon: FaShieldAlt,
    title: "Safe and Secure",
    subtitle: "Your child's safety is our top priority with trained staff and secure trips.",
    bg: "#d6eaf8",
  },
  {
    icon: FaGlobe,
    title: "Fun Activities",
    subtitle: "Engaging and fun experiences that kids will enjoy and remember.",
    bg: "#fef5e7",
  },
  {
    icon: FaBookReader,
    title: "Educational Value",
    subtitle: "A mix of learning and adventure to expand your child's horizons.",
    bg: "#f9e79f",
  }
];

export default ChooseData;
