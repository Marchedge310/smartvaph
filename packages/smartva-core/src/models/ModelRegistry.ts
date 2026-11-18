import {
  AdultModelInstance
} from "./AdultModelInstance";

import {
  ChildModelInstance
} from "./ChildModelInstance";

import {
  NeonateModelInstance
} from "./NeonateModelInstance";

export const ModelRegistry = {

  adult:
    AdultModelInstance,

  child:
    ChildModelInstance,

  neonate:
    NeonateModelInstance
};
