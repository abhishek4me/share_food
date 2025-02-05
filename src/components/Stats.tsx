import React from 'react';
import { Heart, Users, Utensils, Building } from 'lucide-react';
import type { Stats } from '../types';

const stats: Stats = {
  donationsCount: 15420,
  organizationsHelped: 234,
  mealsServed: 45750,
  volunteersActive: 1200
};

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: number, label: string }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
    <Icon className="h-8 w-8 text-rose-500 mb-3" />
    <span className="text-3xl font-bold text-gray-900 mb-1">
      {value.toLocaleString()}
    </span>
    <span className="text-gray-600">{label}</span>
  </div>
);

const Stats = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Making a Real Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={Heart} 
            value={stats.donationsCount} 
            label="Total Donations"
          />
          <StatCard 
            icon={Building} 
            value={stats.organizationsHelped} 
            label="Organizations Helped"
          />
          <StatCard 
            icon={Utensils} 
            value={stats.mealsServed} 
            label="Meals Served"
          />
          <StatCard 
            icon={Users} 
            value={stats.volunteersActive} 
            label="Active Volunteers"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;