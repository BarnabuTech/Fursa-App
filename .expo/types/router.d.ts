/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/opportunity-wheel` | `/(tabs)/profile` | `/(tabs)/settings` | `/_sitemap` | `/auth/login` | `/auth/register` | `/context/ThemeContext` | `/opportunity-wheel` | `/profile` | `/settings` | `/types`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
