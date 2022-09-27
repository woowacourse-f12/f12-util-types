import { expectAssignable, expectNotAssignable } from "tsd";
import type { Rating } from "../dist";

export const a: Rating = "4.20";

expectAssignable<Rating>("4.99");
expectAssignable<Rating>("5.00");
expectAssignable<Rating>("0.00");
expectNotAssignable<Rating>("5.20");
expectNotAssignable<Rating>("6.99");
expectNotAssignable<Rating>("5.01");
expectNotAssignable<Rating>(5.01);
