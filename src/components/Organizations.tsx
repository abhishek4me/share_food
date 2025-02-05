import React from 'react';
import type { Organization } from '../types';

const organizations: Organization[] = [
  {
    id: '1',
    name: 'Food Bank Alliance',
    description: 'Distributing food to those in need across the city.',
    needs: ['Fresh Produce', 'Canned Goods', 'Dairy Products'],
    location: 'Downtown Metro Area',
    contact: 'contact@foodbankalliance.org'
  },
  {
    id: '2',
    name: 'Community Kitchen',
    description: 'Preparing meals for homeless shelters and community centers.',
    needs: ['Vegetables', 'Grains', 'Proteins'],
    location: 'Westside District',
    contact: 'help@communitykitchen.org'
  },
  {
    id: '3',
    name: 'Hope Shelter',
    description: 'Emergency food assistance and shelter services.',
    needs: ['Ready-to-eat Meals', 'Snacks', 'Beverages'],
    location: 'Eastside Community',
    contact: 'info@hopeshelter.org'
  }
];

const Organizations = () => {
  return (
    <section id="organizations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Partner Organizations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org) => (
            <div key={org.id} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {org.name}
              </h3>
              <p className="text-gray-600 mb-4">{org.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Current Needs:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {org.needs.map((need, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm"
                    >
                      {need}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-1">📍 {org.location}</p>
                <p>✉️ {org.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;