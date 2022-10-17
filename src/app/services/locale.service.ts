import { I18n } from "i18n"
import { DEFAULT_LOCALE, LOCALES, LOCALES_DIR } from "../consts"
import { log } from "../helpers/log";

export class LocaleService {
  private i18n: I18n;

  constructor() {
    this.i18n = new I18n({
      locales: LOCALES,
      directory: LOCALES_DIR,
      defaultLocale: DEFAULT_LOCALE
    });
  }

  public setLocale(locale: string): void {
    this.i18n.setLocale(locale);
    log(`Locale changed to ${locale}`);
  }
  
  public getCurrentLocale(): string {
    return this.i18n.getLocale();
  }

  public translate(key: string): string {
    return this.i18n.__(key);
  }

  public translatePlurals(key: string, count: number): string {
    return this.i18n.__n(key, count);
  }
}