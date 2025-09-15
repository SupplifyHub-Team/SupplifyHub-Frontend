import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color = "from-indigo-500 to-purple-500",
}: StatsCardProps) {
  return (
    <div
      className="group p-5 rounded-2xl bg-white border border-gray-100 shadow-md 
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
      flex items-center gap-5 cursor-pointer"
    >
      {/* Icon container */}
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-xl 
        bg-gradient-to-br ${color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>

      {/* Text content */}
      <div>
        <div className="text-3xl font-extrabold text-gray-900 leading-tight">
          {value}
        </div>
        <div className="text-sm font-medium text-gray-500 mt-1">{title}</div>
      </div>
    </div>
  );
}
