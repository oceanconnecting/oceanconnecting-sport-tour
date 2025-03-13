declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { type CSSRuleObject } from 'tailwindcss/types/config';
  
    const flattenColorPalette: (colors: Record<string, string>) => Record<string, string>;
    export default flattenColorPalette;
  }