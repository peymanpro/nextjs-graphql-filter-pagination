import { ArrowUpDown } from 'lucide-react';
import { SortInput } from '@/types/product';

interface SortBarProps {
  total: number;
  loading: boolean;
  sort: SortInput;
  onSortChange: (field: string, order: 'ASC' | 'DESC') => void;
}

const SORT_OPTIONS = [
  { field: 'createdAt', label: 'Newest' },
  { field: 'price', label: 'Price' },
  { field: 'rating', label: 'Rating' },
  { field: 'name', label: 'Name' },
];

export function SortBar({
  total,
  loading,
  sort,
  onSortChange,
}: SortBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap gap-3 items-center justify-between">

      <div className="flex items-center gap-2">
        <ArrowUpDown className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium">
          Sort by
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {SORT_OPTIONS.map((option) => (
          <button
            key={option.field}
            onClick={() =>
              onSortChange(
                option.field,
                sort.field === option.field &&
                  sort.order === 'ASC'
                  ? 'DESC'
                  : 'ASC'
              )
            }
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              sort.field === option.field
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {option.label}

            {sort.field === option.field && (
              <span className="ml-1">
                {sort.order === 'ASC'
                  ? '↑'
                  : '↓'}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="text-sm text-gray-500">
        {!loading && (
          <span>{total} products found</span>
        )}
      </div>

    </div>
  );
}