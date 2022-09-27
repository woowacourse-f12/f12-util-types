import { expectAssignable, expectNotAssignable } from "tsd";
import type { DataFetchStatus } from "../dist";

expectAssignable<DataFetchStatus>({
  isLoading: false,
  isReady: true,
  isError: false,
});

expectNotAssignable<DataFetchStatus>({
  isLoading: "false",
  isReady: true,
  isError: false,
});
