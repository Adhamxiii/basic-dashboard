import BarChart from "@/components/BarChart";
import Card, { CardProps } from "@/components/Card";
import CardContent from "@/components/CardContent";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesCardProps } from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$123,456.89",
    description: "+20% vs. last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+120% vs. last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+13,678",
    description: "+12% vs. last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+50",
    description: "+27% vs. last hour",
    icon: Activity,
  },
];

const userSalesData: SalesCardProps[] = [
  {
    name: "Adham Nasser",
    email: "adham@me.com",
    salesAmount: "+$123,456.89",
  },
  {
    name: "Salem Eldosary",
    email: "salem@eldosary.com",
    salesAmount: "+$13,999.89",
  },
  {
    name: "Mai Nakamura",
    email: "mai@friend.com",
    salesAmount: "+$999.89",
  },
  {
    name: "William Kid",
    email: "kid.willy@gmail.com",
    salesAmount: "+$456.89",
  },
  {
    name: "Monkey D. Luffy",
    email: "luffy@pirate.com",
    salesAmount: "+$23,2.89",
  },
  {
    name: "Max Goodwin",
    email: "goodwin@gmail.com",
    salesAmount: "+$2300,2.00",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="flex justify-between gap-4">
          <section>
            <p className="">Recent Sales</p>
            <p className="text-sm to-gray-400">You made 200 sales this week.</p>
          </section>
          {userSalesData.map((user, index) => (
            <SalesCard key={index} {...user} />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
