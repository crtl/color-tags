/**
 * colorTag v0.1
 * by Ryan Quinn, Marvin Petker
 * https://github.com/mazondo/colorTag
 * https://github.com/crtl/colorTag
 *
 * colorTag is used to generate a random color from a given string.
 * The goal is to create deterministic, usable colors for the purpose 
 * of adding color coding to tags.
 */

declare module "color-tags" {
  /**
   * Represents a color in RGB format.
   */
  export type RGB = {
    r: number;
    g: number;
    b: number;
  };

  /**
   * Represents a color object that provides methods for working with colors.
   * 
   * This interface defines methods to get the color in hex or RGB format, 
   * and to find the most readable color from a list of hex color codes.
   */
  export interface Color {
    /**
     * Returns the color as a hex string (e.g., "#FFFFFF").
     * @returns {string} The hex representation of the color.
     */
    hex(): string;

    /**
     * Returns the color in RGB format.
     * @returns {RGB} The RGB representation of the color.
     */
    rgb(): RGB;

    /**
     * Determines the most readable color from a list of provided hex color codes.
     * The readability is calculated based on the luminosity equation:
     * http://www.splitbrain.org/blog/2008-09/18-calculating_color_contrast_with_php
     * 
     * @param comparators {string[]} - A list of hex color codes to compare against.
     * @returns {Color} The most readable color from the provided list.
     */
    readable(...comparators: string[]): Color;
  }

  /**
   * Generates a color object from a given tag string. This function produces a 
   * deterministic color output based on the input string, allowing for consistent 
   * color coding of tags.
   * 
   * @param tagString {string} - The input string for which a color will be generated.
   * @returns {Color | false} The generated Color object or false if the input is invalid.
   */
  export function colorTag(tagString: string): Color | false;
}
