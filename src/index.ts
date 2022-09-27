type IntRange = "0" | "1" | "2" | "3" | "4";
type FloatRange = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type MaxRating = "5.00";

export declare type Rating =
  | `${IntRange}.${FloatRange}${FloatRange}`
  | MaxRating;
