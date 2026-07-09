"use client";

import { ReactNode, useState } from "react";

import { FilterInput } from "@/types/product";

import { Header } from "./Header";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileSidebar } from "./MobileSidebar";
import { PageContainer } from "./PageContainer";
import { SectionContainer } from "./SectionContainer";

interface AppLayoutProps {
  children: ReactNode;

  filters: FilterInput;
  categories: string[];
  brands: string[];

  onFilterChange: (filters: FilterInput) => void;
}

export function AppLayout({
  children,
  filters,
  categories,
  brands,
  onFilterChange,
}: AppLayoutProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <PageContainer>
      <Header
        onOpenFilters={() => setMobileFiltersOpen(true)}
      />

      <SectionContainer>
        <div className="flex gap-8">

          <DesktopSidebar
            filters={filters}
            categories={categories}
            brands={brands}
            onFilterChange={onFilterChange}
          />

          <MobileSidebar
            open={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
            filters={filters}
            categories={categories}
            brands={brands}
            onFilterChange={onFilterChange}
          />

          <main className="flex-1">
            {children}
          </main>

        </div>
      </SectionContainer>

    </PageContainer>
  );
}