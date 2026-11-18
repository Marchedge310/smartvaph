import type { RuntimeModel } from "./RuntimeModel";
import type { CauseReductionMap } from "./CauseReductionMap";

export interface AdultModel extends RuntimeModel {
  causeReduction: CauseReductionMap;
}
