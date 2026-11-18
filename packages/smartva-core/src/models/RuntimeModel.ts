import type { TariffMatrix } from "./TariffMatrix";
import type { RuleDefinition } from "./RuleDefinition";

export interface RuntimeModel {
  name: string;

  tariffs: TariffMatrix;

  rules?: RuleDefinition[];
}
