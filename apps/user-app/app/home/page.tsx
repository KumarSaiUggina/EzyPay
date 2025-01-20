import { HeroSection } from "../../components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | EzyPay",
  description: "Welcome to the EzyPay digital wallet application",
};

export default function Home() {

  return <HeroSection />;
}