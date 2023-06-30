export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const getAssetsFile = (url: string) => {
  return new URL(`../../assets/img/${url}`, import.meta.url).href
} 