import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Overview } from "../components/overview";
import { MapPin, DollarSign } from "lucide-react";

const products = [
  {
    name: "CodeFast",
    icon: "⚡️",
    description: "Learn to code in weeks, not years",
    revenue: "82.4k",
    data: [
      { month: "Apr", revenue: 55000 },
      { month: "Jun", revenue: 85000 },
      { month: "Aug", revenue: 125000 },
      { month: "Oct", revenue: 220000 },
      { month: "Dec", revenue: 165000 },
      { month: "Feb", revenue: 145000 },
    ],
  },
  {
    name: "ShipFast",
    icon: "🚀",
    description: "Ship your startup in days, not months",
    revenue: "36.6k",
    data: [
      { month: "Apr", revenue: 35000 },
      { month: "Jun", revenue: 45000 },
      { month: "Aug", revenue: 40000 },
      { month: "Oct", revenue: 38000 },
      { month: "Dec", revenue: 35000 },
      { month: "Feb", revenue: 36600 },
    ],
  },
  {
    name: "DataFast",
    icon: "📊",
    description: "Grow your startup with data, not guesses",
    revenue: "1.4k",
    data: [
      { month: "Apr", revenue: 400 },
      { month: "Jun", revenue: 600 },
      { month: "Aug", revenue: 800 },
      { month: "Oct", revenue: 1200 },
      { month: "Dec", revenue: 1600 },
      { month: "Feb", revenue: 1400 },
    ],
  },
  {
    name: "Zenvoice",
    icon: "🧘",
    description: "Focus on your startup, not the invoices",
    revenue: "699",
    data: [
      { month: "Apr", revenue: 1800 },
      { month: "Jun", revenue: 1500 },
      { month: "Aug", revenue: 1600 },
      { month: "Oct", revenue: 1200 },
      { month: "Dec", revenue: 800 },
      { month: "Feb", revenue: 699 },
    ],
  },
  {
    name: "IndiePage",
    icon: "📱",
    description: "All your startups in a page, like this one",
    revenue: "1.6k",
    data: [
      { month: "Apr", revenue: 2000 },
      { month: "Jun", revenue: 4000 },
      { month: "Aug", revenue: 8000 },
      { month: "Oct", revenue: 6000 },
      { month: "Dec", revenue: 4000 },
      { month: "Feb", revenue: 1600 },
    ],
  },
  {
    name: "PoopUp",
    icon: "💩",
    description: "Turn your visitors into customers with wake-up call",
    revenue: "94",
    data: [
      { month: "Apr", revenue: 3000 },
      { month: "Jun", revenue: 2000 },
      { month: "Aug", revenue: 1500 },
      { month: "Oct", revenue: 1000 },
      { month: "Dec", revenue: 500 },
      { month: "Feb", revenue: 94 },
    ],
  },
];

export default function SaasPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0f0f3e] text-white relative">
      <div className="w-full lg:w-1/4 p-8 border-r border-gray-800">
        <div className="space-y-8 ">
          <div className="text-center">
            <Avatar className="w-24 h-24 mx-auto">
              <AvatarImage src="/placeholder.svg" alt="ALDAS" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <h1 className="mt-4 text-2xl font-bold">Jonathan Aldas</h1>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <MapPin size={16} />
            <span>Barcelona</span>
            <DollarSign size={16} />
            <span>12.7k/month</span>
          </div>
          <p className="text-center text-sm text-gray-400">I just build stuff for fun and profit.</p>
          <p className="text-center text-sm">I share how to find startup ideas, launch fast, and get profitable ⚡️</p>
          <div className="space-y-2">
            <Input placeholder="Your email..." className="bg-white/10 border-gray-700" />
            <Button className="w-full bg-[#FFA500] hover:bg-[#FFA500]/90 text-black">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/4 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <Card key={product.name} className="bg-[#0E0E52] border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{product.icon}</span>
                  <CardTitle className="text-white text-xl font-medium">{product.name}</CardTitle>
                </div>
                <div className="flex items-center space-x-1 rounded-full bg-white/10 px-2 py-1 text-xs">
                  <span className="text-white">$</span>
                  <span className="text-white">{product.revenue}</span>
                  <span className="text-gray-400">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 mb-4">{product.description}</div>
                <div className="h-[200px] w-full">
                  <Overview data={product.data} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
