'use client';

import { FilterInput } from '@/types/product';
import { SlidersHorizontal, X } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterInput;
  categories: string[];
  brands: string[];
  onFilterChange: (filters: FilterInput) => void;
  onClose?: () => void;
}

export function FilterSidebar({ filters, categories, brands, onFilterChange, onClose }: FilterSidebarProps) {
  const handleChange = (key: keyof FilterInput, value: any) => {
    onFilterChange({ ...filters, [key]: value || undefined });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          <h2 className="text-xl font-bold">Filters</h2>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium mb-2">Search</label>
          <input
            type="text"
            value={filters.search || ''}
            onChange={(e) => handleChange('search', e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>


        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={filters.category || ''}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Brand</label>
          <select
            value={filters.brand || ''}
            onChange={(e) => handleChange('brand', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => handleChange('minPrice', e.target.value ? parseFloat(e.target.value) : undefined)}
              className="w-1/2 px-3 py-2 border rounded-lg"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) => handleChange('maxPrice', e.target.value ? parseFloat(e.target.value) : undefined)}
              className="w-1/2 px-3 py-2 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Min Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleChange('minRating', filters.minRating === rating ? undefined : rating)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  filters.minRating === rating
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {rating}★
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => onFilterChange({})}
          className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}