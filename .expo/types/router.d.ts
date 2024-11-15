/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/application-tracker` | `/(tabs)/job-feed` | `/(tabs)/profile` | `/(tabs)/settings` | `/_sitemap` | `/application-tracker` | `/auth/login` | `/auth/register` | `/context/ThemeContext` | `/job-feed` | `/profile` | `/settings` | `/types`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
