import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";

type Setting = {
  category: string;
  value: string | number | boolean;
};

export const SettingsData: Setting[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Light",
  },
];

export const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={SettingsData} />
    </div>
  );
}
