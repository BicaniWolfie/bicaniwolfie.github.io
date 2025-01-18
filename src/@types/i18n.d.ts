import { resources } from "@/i18n";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: 'en';
        resources: typeof resources;
    }
}
