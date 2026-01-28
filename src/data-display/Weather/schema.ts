import { z } from "zod";

/**
 * Daily forecast item
 */
export const DailyForecastSchema = z.object({
  date: z.string().describe("Date (e.g. 'Mon', '2024-01-01')"),
  tempMin: z.number().describe("Minimum temperature"),
  tempMax: z.number().describe("Maximum temperature"),
  condition: z.string().describe("Weather condition (Sunny, Cloudy, etc.)"),
  icon: z.string().optional().nullable().describe("Icon name or URL"),
  precipChance: z
    .number()
    .optional()
    .nullable()
    .describe("Precipitation chance %"),
});

export type DailyForecast = z.infer<typeof DailyForecastSchema>;

/**
 * Hourly forecast item
 */
export const HourlyForecastSchema = z.object({
  time: z.string().describe("Time (e.g. '10:00', '10 AM')"),
  temp: z.number().describe("Temperature"),
  condition: z.string().describe("Weather condition"),
  icon: z.string().optional().nullable().describe("Icon name or URL"),
});

export type HourlyForecast = z.infer<typeof HourlyForecastSchema>;

/**
 * Current weather conditions
 */
export const CurrentWeatherSchema = z.object({
  temp: z.number().describe("Current temperature"),
  condition: z.string().describe("Current condition"),
  humidity: z.number().optional().nullable().describe("Humidity %"),
  windSpeed: z.number().optional().nullable().describe("Wind speed"),
  windUnit: z
    .string()
    .optional()
    .nullable()
    .describe("Wind speed unit (km/h, mph)"),
  feelsLike: z
    .number()
    .optional()
    .nullable()
    .describe("Feels like temperature"),
  uvIndex: z.number().optional().nullable().describe("UV Index"),
  visibility: z.number().optional().nullable().describe("Visibility distance"),
  pressure: z.number().optional().nullable().describe("Pressure (hPa)"),
});

export type CurrentWeather = z.infer<typeof CurrentWeatherSchema>;

/**
 * Weather component props
 */
export const WeatherPropsSchema = z.object({
  location: z.string().describe("Location name (City, Region)"),
  current: CurrentWeatherSchema.describe("Current weather data"),
  forecastDaily: z
    .array(DailyForecastSchema)
    .optional()
    .nullable()
    .describe("Daily forecast"),
  forecastHourly: z
    .array(HourlyForecastSchema)
    .optional()
    .nullable()
    .describe("Hourly forecast"),
  unit: z
    .enum(["C", "F"])
    .optional()
    .nullable()
    .describe("Temperature unit (C/F)"),
  accentColor: z.string().optional().nullable().describe("Accent color"),
});

export type WeatherProps = z.infer<typeof WeatherPropsSchema>;

/**
 * Weather component definition
 */
export const WeatherDefinition = {
  name: "Weather" as const,
  props: WeatherPropsSchema,
  description: "Weather dashboard with current conditions and forecast",
  hasChildren: false,
};
