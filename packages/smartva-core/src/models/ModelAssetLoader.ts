import {
  ModelAssetRegistry
} from "./ModelAssetRegistry";

import type {
  RuntimeModel
} from "./RuntimeModel";

export function loadModel(
  modelName:
    "adult" |
    "child" |
    "neonate"
): RuntimeModel {

  return ModelAssetRegistry[
    modelName
  ];
}
