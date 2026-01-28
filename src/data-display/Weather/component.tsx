"use client";

import { memo } from "react";
import { type ComponentRenderProps } from "@onegenui/react";
import { motion } from "framer-motion";
import type { WeatherProps } from "./schema";
import { getAccentColor } from "../../utils/media-utils";
import { CloudSun } from "lucide-react";

// Helper to map conditions to emojis (simple fallback)
const getIcon = (condition: string, icon?: string | null) => {
  if (icon && (icon.startsWith("http") || icon.startsWith("data:"))) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={icon} alt={condition} className="w-8 h-8 object-contain" />
    );
  }

  const lower = condition.toLowerCase();
  if (lower.includes("sun") || lower.includes("clear")) return "☀️";
  if (lower.includes("partly") || lower.includes("cloud")) return "⛅";
  if (lower.includes("overcast") || lower.includes("cloud")) return "☁️";
  if (lower.includes("rain") || lower.includes("drizzle")) return "🌧️";
  if (lower.includes("storm") || lower.includes("thunder")) return "⚡";
  if (lower.includes("snow")) return "❄️";
  if (lower.includes("fog") || lower.includes("mist")) return "🌫️";
  return "🌡️";
};

export const Weather = memo(function Weather({
  element,
  children,
}: ComponentRenderProps) {
  const {
    location,
    current,
    forecastDaily = [],
    forecastHourly = [],
    accentColor,
  } = element.props as WeatherProps;

  const accent = getAccentColor(accentColor ?? undefined);

  if (!current) {
    return (
      <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground">
        <CloudSun className="w-10 h-10 opacity-20 mb-3" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          No weather data
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      data-selectable-item
      data-element-key={element.key}
      className="flex flex-col gap-6 p-6 rounded-3xl border border-white/10 text-foreground relative overflow-hidden card-glass shadow-lg"
      style={
        {
          background: `linear-gradient(135deg, color-mix(in srgb, ${accent || "var(--primary)"}, transparent 92%) 0%, var(--card) 100%)`,
        } as React.CSSProperties
      }
    >
      {/* Header & Current */}
      <div className="flex justify-between items-start">
        <div>
          <div className="text-2xl font-semibold mb-1">{location}</div>
          <div className="text-sm text-muted-foreground capitalize">
            {current.condition}
          </div>
          <div className="text-6xl font-bold leading-none mt-3">
            {Math.round(current.temp)}°
          </div>
        </div>
        <div className="text-5xl">{getIcon(current.condition)}</div>
      </div>

      {/* Current Details */}
      <div className="grid grid-cols-3 gap-3">
        {current.windSpeed != null && (
          <div className="bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
            <span className="text-xl">💨</span>
            <span className="text-sm font-medium">
              {current.windSpeed} km/h
            </span>
            <span className="text-[10px] text-muted-foreground">Wind</span>
          </div>
        )}
        {current.humidity != null && (
          <div className="bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
            <span className="text-xl">💧</span>
            <span className="text-sm font-medium">{current.humidity}%</span>
            <span className="text-[10px] text-muted-foreground">Humidity</span>
          </div>
        )}
        {current.feelsLike != null && (
          <div className="bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
            <span className="text-xl">🌡️</span>
            <span className="text-sm font-medium">
              {Math.round(current.feelsLike)}°
            </span>
            <span className="text-[10px] text-muted-foreground">
              Feels Like
            </span>
          </div>
        )}
      </div>

      {/* Hourly Forecast */}
      {forecastHourly && forecastHourly.length > 0 && (
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
            Hourly Forecast
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mb-4 scrollbar-hide">
            {forecastHourly.map((hour, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 min-w-[50px] p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {new Date(hour.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-2xl">
                  {getIcon(hour.condition, hour.icon)}
                </span>
                <span className="text-sm font-semibold">
                  {Math.round(hour.temp)}°
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily Forecast */}
      {forecastDaily && forecastDaily.length > 0 && (
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
            5-Day Forecast
          </div>
          <div className="flex flex-col gap-2">
            {forecastDaily.map((day, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-16 font-medium">
                  {new Date(day.date).toLocaleDateString([], {
                    weekday: "short",
                  })}
                </div>
                <div className="flex items-center gap-3 flex-1 justify-center">
                  <span className="text-xl">
                    {getIcon(day.condition, day.icon)}
                  </span>
                  <span className="text-xs text-muted-foreground capitalize hidden sm:block">
                    {day.condition}
                  </span>
                </div>
                <div className="flex gap-4 w-24 justify-end">
                  <span className="font-semibold">
                    {Math.round(day.tempMax)}°
                  </span>
                  <span className="text-muted-foreground">
                    {Math.round(day.tempMin)}°
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {children}
    </motion.div>
  );
});
