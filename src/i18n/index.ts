import ruRaw from "./dictionaries/ru";
import type { Messages, DeepPartial } from "./types";
import { defaultLocale, isLocale, type Locale } from "./locales";

const base: Messages = ruRaw as Messages;

const isObj = (v: unknown): v is Record<string, unknown> =>
  v !== null && typeof v === "object" && !Array.isArray(v);

function mergeDeep<TTarget extends Record<string, unknown>>(
  target: TTarget,
  source?: DeepPartial<TTarget>
): TTarget {
  const out = (Array.isArray(target) ? [...target] : { ...target }) as TTarget;
  if (!source) return out;

  for (const k in source) {
    const sv = (source as Record<string, unknown>)[k];
    if (sv === undefined) continue;

    const tv = (target as Record<string, unknown>)[k];
    if (isObj(tv) && isObj(sv)) {
      (out as Record<string, unknown>)[k] = mergeDeep(tv, sv as DeepPartial<typeof tv>);
    } else {
      (out as Record<string, unknown>)[k] = sv;
    }
  }
  return out;
}

export async function getMessages(locale: string): Promise<Messages> {
  const code: Locale = isLocale(locale) ? locale : defaultLocale;

  if (code === defaultLocale) return base;

  try {
    const mod = await import(`./dictionaries/${code}.ts`);
    const partial = (mod.default ?? {}) as DeepPartial<Messages>;

    // глубокая копия базового словаря (поддержка без structuredClone)
    const cloned: Messages =
      typeof structuredClone === "function"
        ? structuredClone(base)
        : JSON.parse(JSON.stringify(base));

    return mergeDeep<Messages>(cloned, partial); 
  } catch {
    // нет файла/экспорт битый — молча падаем на RU
    return base;
  }
}
