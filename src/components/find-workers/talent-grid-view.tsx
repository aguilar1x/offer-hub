"use client"

import { motion } from "framer-motion"
import TalentCard from "@/components/find-workers/talent-card"

// Sample freelancer data
const freelancers = [
  {
    id: "f1",
    name: "Alex Johnson",
    title: "Full Stack Developer",
    avatar: "",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 65,
    totalEarned: 25000,
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    location: "San Francisco, USA",
    availability: "Full-time",
    experience: "5 years",
    isOnline: true,
    isVerified: true,
    isTopRated: true,
  },
  {
    id: "f2",
    name: "Sarah Williams",
    title: "UI/UX Designer",
    avatar: "",
    rating: 4.8,
    reviewCount: 93,
    hourlyRate: 55,
    totalEarned: 18000,
    skills: ["Figma", "Adobe XD", "UI Design", "Wireframing", "Prototyping"],
    location: "London, UK",
    availability: "Part-time",
    experience: "4 years",
    isOnline: false,
    isVerified: true,
    isTopRated: false,
  },
  {
    id: "f3",
    name: "Michael Chen",
    title: "Mobile App Developer",
    avatar: "",
    rating: 4.7,
    reviewCount: 78,
    hourlyRate: 60,
    totalEarned: 22000,
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "App Store"],
    location: "Toronto, Canada",
    availability: "Full-time",
    experience: "3 years",
    isOnline: true,
    isVerified: true,
    isTopRated: false,
  },
  {
    id: "f4",
    name: "Emily Rodriguez",
    title: "Content Writer & SEO Specialist",
    avatar: "",
    rating: 4.9,
    reviewCount: 112,
    hourlyRate: 45,
    totalEarned: 15000,
    skills: ["Content Writing", "SEO", "Copywriting", "Blog Posts", "Technical Writing"],
    location: "Madrid, Spain",
    availability: "Part-time",
    experience: "6 years",
    isOnline: false,
    isVerified: true,
    isTopRated: true,
  },
  {
    id: "f5",
    name: "David Kim",
    title: "DevOps Engineer",
    avatar: "",
    rating: 4.6,
    reviewCount: 64,
    hourlyRate: 70,
    totalEarned: 28000,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    location: "Seoul, South Korea",
    availability: "Full-time",
    experience: "4 years",
    isOnline: true,
    isVerified: false,
    isTopRated: false,
  },
  {
    id: "f6",
    name: "Olivia Patel",
    title: "Graphic Designer",
    avatar: "",
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 50,
    totalEarned: 16000,
    skills: ["Photoshop", "Illustrator", "Branding", "Logo Design", "Print Design"],
    location: "Mumbai, India",
    availability: "Full-time",
    experience: "5 years",
    isOnline: false,
    isVerified: true,
    isTopRated: true,
  },
  {
    id: "f7",
    name: "James Wilson",
    title: "Data Scientist",
    avatar: "",
    rating: 4.7,
    reviewCount: 72,
    hourlyRate: 75,
    totalEarned: 30000,
    skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "SQL"],
    location: "Berlin, Germany",
    availability: "Part-time",
    experience: "7 years",
    isOnline: true,
    isVerified: true,
    isTopRated: false,
  },
  {
    id: "f8",
    name: "Sophia Martinez",
    title: "Digital Marketing Specialist",
    avatar: "",
    rating: 4.9,
    reviewCount: 103,
    hourlyRate: 55,
    totalEarned: 20000,
    skills: ["Social Media", "Google Ads", "SEO", "Content Strategy", "Analytics"],
    location: "Mexico City, Mexico",
    availability: "Full-time",
    experience: "4 years",
    isOnline: false,
    isVerified: true,
    isTopRated: true,
  },
]

interface TalentGridViewProps {
  selectedFreelancers: string[]
  toggleFreelancerSelection: (id: string) => void
  openFreelancerDetail: (freelancer: any) => void
}

export default function TalentGridView({
  selectedFreelancers,
  toggleFreelancerSelection,
  openFreelancerDetail,
}: TalentGridViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {freelancers.map((freelancer) => (
        <motion.div
          key={freelancer.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TalentCard
            freelancer={freelancer}
            isSelected={selectedFreelancers.includes(freelancer.id)}
            onToggleSelect={() => toggleFreelancerSelection(freelancer.id)}
            onViewProfile={() => openFreelancerDetail(freelancer)}
          />
        </motion.div>
      ))}
    </div>
  )
}

