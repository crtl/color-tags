declare module "color-tags" {
  /**
   * colorTag v 0.1
   * by Ryan Quinn, Marvin Petker
   * https://github.com/mazondo/colorTag
   * https://github.com/crtl/colorTag
   *
   * colorTag is used to generate a random color from a given string.
   * The goal is to create deterministic, usable colors for the purpose 
   * of adding color coding to tags.
   */

  // RGB type representing a color in RGB format
  export type RGB = {
    r: number;
    g: number;
    b: number;
  };

  // Interface for Color object
  export interface Color {
    hex(): string;
    rgb(): RGB;
    readable(...comparators: string[]): Color;
  }

  // Main function to generate a color from a tag string
  export function colorTag(tagString: string): Color | false;
}
