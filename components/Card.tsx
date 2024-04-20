import { LucideIcon } from "lucide-react";
import CardContent from "./CardContent";
import { createElement } from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

const Card = ({ label, icon: Icon, amount, description }: CardProps) => {
  return (
    <CardContent>
      <section className="flex items-center justify-between gap-2">
        <p className="text-sm">{label}</p>
        <Icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{amount}</h2>
        <p className="text-xs text-gray-500">{description}</p>
      </section>
    </CardContent>
  );
};

export default Card;
