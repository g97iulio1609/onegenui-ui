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
      <div
        role="status"
        className="py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-zinc-900/20 text-muted-foreground motion-reduce:animate-none"
      >
        <CloudSun className="w-10 h-10 opacity-20 mb-3" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-widest opacity-50">
          No weather data
        </p>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      data-selectable-item
      data-element-key={element.key}
      className="flex flex-col gap-6 p-6 rounded-3xl border border-white/10 text-foreground relative overflow-hidden card-glass shadow-lg motion-reduce:animate-none"
      aria-label={`Weather for ${location}`}
      style={
        {
          background: `linear-gradient(135deg, color-mix(in srgb, ${accent || "var(--primary)"}, transparent 92%) 0%, var(--card) 100%)`,
        } as React.CSSProperties
      }
    >
      {/* Header & Current */}
      <header className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-1">{location}</h2>
          <p className="text-sm text-muted-foreground capitalize">
            {current.condition}
          </p>
          <p className="text-6xl font-bold leading-none mt-3" aria-label={`Temperature ${Math.round(current.temp)} degrees`}>
            {Math.round(current.temp)}°
          </p>
        </div>
        <div className="text-5xl" aria-hidden="true">{getIcon(current.condition)}</div>
      </header>

      {/* Current Details */}
      <div className="grid grid-cols-3 gap-3" role="list" aria-label="Current conditions">
        {current.windSpeed != null && (
          <div role="listitem" className="bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
            <span className="text-xl" aria-hidden="true">💨</span>
            <span className="text-sm font-medium">
              {current.windSpeed} km/h
            </span>
            <span className="text-[10px] text-muted-foreground">Wind</span>
          </div>
        )}
        {current.humidity != null && (
          <div role="listitem" className="bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
            <span className="text-xl" aria-hidden="true">💧</span>
            <span className="text-sm font-medium">{current.humidity}%</span>
            <span className="text-[10px] text-muted-foreground">Humidity</span>
          </div>
        )}
        {current.feelsLike != null && (
          <div role="listitem" className="bg-white/5 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-1">
            <span className="text-xl" aria-hidden="true">🌡️</span>
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
        <section aria-labelledby="hourly-forecast-title">
          <h3 id="hourly-forecast-title" className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
            Hourly Forecast
          </h3>
          <ul className="flex gap-4 overflow-x-auto pb-4 -mb-4 scrollbar-hide list-none p-0" role="list">
            {forecastHourly.map((hour, i) => (
              <li
                key={i}
                className="flex flex-col items-center gap-2 min-w-[50px] p-2 rounded-lg hover:bg-white/5 transition-colors motion-reduce:transition-none"
              >
                <time className="text-xs text-muted-foreground whitespace-nowrap">
                  {new Date(hour.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
                <span className="text-2xl" aria-hidden="true">
                  {getIcon(hour.condition, hour.icon)}
                </span>
                <span className="text-sm font-semibold" aria-label={`${Math.round(hour.temp)} degrees`}>
                  {Math.round(hour.temp)}°
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Daily Forecast */}
      {forecastDaily && forecastDaily.length > 0 && (
        <section aria-labelledby="daily-forecast-title">
          <h3 id="daily-forecast-title" className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
            5-Day Forecast
          </h3>
          <ul className="flex flex-col gap-2 list-none p-0" role="list">
            {forecastDaily.map((day, i) => (
              <li
                key={i}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors motion-reduce:transition-none"
              >
                <time className="w-16 font-medium">
                  {new Date(day.date).toLocaleDateString([], {
                    weekday: "short",
                  })}
                </time>
                <div className="flex items-center gap-3 flex-1 justify-center">
                  <span className="text-xl" aria-hidden="true">
                    {getIcon(day.condition, day.icon)}
                  </span>
                  <span className="text-xs text-muted-foreground capitalize hidden sm:block">
                    {day.condition}
                  </span>
                </div>
                <div className="flex gap-4 w-24 justify-end">
                  <span className="font-semibold" aria-label={`High ${Math.round(day.tempMax)} degrees`}>
                    {Math.round(day.tempMax)}°
                  </span>
                  <span className="text-muted-foreground" aria-label={`Low ${Math.round(day.tempMin)} degrees`}>
                    {Math.round(day.tempMin)}°
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {children}
    </motion.article>
  );
});
