export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Prayer time", href: "#prayer" },
  { label: "Events", href: "#events" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },  
];

import { BookHeadphones } from "lucide-react";
import { Navigation } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { MonitorPause } from "lucide-react";
import { Users } from "lucide-react";
import { ChartColumn } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const reviews = [
  {
    user: "Palmer Luckey",
    company: "American entrepreneur",
    image: user1,
    text: "In the past, before phones and the Internet, all communication was face-to-face. Now, most of it is digital, via emails and messaging services. If people were to start using virtual reality, it would almost come full circle.",
  },
  {
    user: "Curtis Hickman",
    company: "Co-founder and chief creative officer of The VOID",
    image: user2,
    text: "Virtual reality is all about democratizing storytelling. It gives people more control over the experience. Instead of trying to force a story upon you, we try and give you this huge playground through which you will create stories that you will then share through this medium.",
  },
  {
    user: "Gabe Newell",
    company: "President of Valve Corporation",
    image: user3,
    text: "There's nobody who works in VR saying, 'Oh, I'm bored with this' Everybody comes back.",
  },
  {
    user: "Chris Milk",
    company: "American entrepreneur and filmmaker",
    image: user4,
    text: "Virtual reality is the 'ultimate empathy machine.' These experiences are more than documentaries. They're opportunities to walk a mile in someone else's shoes.",
  },
  {
    user: "Demi Moore",
    company: "American actress",
    image: user5,
    text: "I like to connect to people in the virtual world, exchanging thoughts and ideas, when in the physical world we might never have the opportunity to cross paths.",
  },
  {
    user: "Bill Gates",
    company: "Former CEO of Microsoft",
    image: user6,
    text: "We are all created equal in the virtual world and we can use this equality to help address some of the sociological problems that society has yet to solve in the physical world.",
  },
];

export const explores = [
  {
    icon: <BookHeadphones />,
    text: "Immersive Learning",
    description:
      "Experience education like never before with 360-degree views and interactive simulations",
  },
  {
    icon: <Navigation />,
    text: "Virtual Field Trips",
    description:
      "Explore historical sites, scientific labs, and global landmarks from the comfort of your home",
  },
  {
    icon: <Gamepad2 />,
    text: "Gamified Learning",
    description:
      "Engage with educational content through fun and challenging games and quizzes",
  },
  {
    icon: <MonitorPause />,
    text: "Expert Tutoring",
    description:
      "Access one-on-one tutoring from experienced educators and subject matter experts",
  },
  {
    icon: <Users />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <ChartColumn />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const stepItems = [
  {
    title: "Engage and Interact",
    description:
      "Participate in interactive activities, discussions, and virtual workshops. Engage with peers and instructors in real-time.",
  },
  {
    title: "Experiment and Innovate",
    description:
      "Explore creative tools and technologies. Experiment with virtual reality and augmented reality to enhance your learning experience.",
  },
  {
    title: "Reflect and Self-Assess",
    description:
      "Monitor your progress and reflect on your learning journey. Use self-assessment tools to identify areas for improvement.",
  },
  {
    title: "Network and Connect",
    description:
      "Build relationships with peers and industry professionals. Collaborate on projects and share knowledge with a global community of learners.",
  },
  {
    title: "Certify and Advance",
    description:
      "Earn certifications and credentials to validate your skills and advance your career. Achieve your learning goals and unlock new opportunities.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Customizable Learning Paths",
      "Real-time Collaboration",
      "Priority User Support",
      "Ad-Supported",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Enterprise-Grade VR Solutions",
      "Private Virtual Environments",
      "Advanced Analytics",
      "Data Privacy and Security",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];