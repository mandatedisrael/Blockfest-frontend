"use client";

import { useEffect } from "react";

// Extend PerformanceEntry to include optional value property for web vitals
interface PerformanceEntryWithValue extends PerformanceEntry {
  value?: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          if (typeof window !== "undefined" && window.gtag) {
            const entryWithValue = entry as PerformanceEntryWithValue;
            window.gtag("event", "web_vital", {
              event_category: "Web Vitals",
              event_label: entry.name,
              value: Math.round(entryWithValue.value || entry.duration || 0),
              non_interaction: true,
            });
          }
        }
      });

      try {
        observer.observe({ type: "measure", buffered: true });
        observer.observe({ type: "navigation", buffered: true });
        observer.observe({ type: "paint", buffered: true });
      } catch (error) {
        console.warn("Performance monitoring not supported:", error);
      }
    }

    // Monitor page load times
    window.addEventListener("load", () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;

        if (navigation && typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "page_load_time", {
            event_category: "Performance",
            value: Math.round(
              navigation.loadEventEnd - navigation.loadEventStart
            ),
          });
        }
      }, 0);
    });
  }, []);

  return null;
}
