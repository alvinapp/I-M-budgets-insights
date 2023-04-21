export class Font {
  static applyFontSize({
    fontSize,
    defaultFontSize,
  }: {
    fontSize?: string;
    defaultFontSize?: string;
  }) {
    return fontSize != null ? fontSize : defaultFontSize;
  }
}
