// src/i18n/routing.ts
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uz', 'ru'], // Qo'llab-quvvatlanadigan tillar
  defaultLocale: 'uz' // Standart til
});
