import { AdultCauses46 }
from "./AdultCauses46";

import type {
  CauseLookupResult
} from "./CauseLookupResult";

export function resolveAdultCause(
  causeId: number
): CauseLookupResult {

  const cause =
    AdultCauses46.find(
      item =>
        item.id === causeId
    );

  return {

    id: causeId,

    name:
      cause?.name ??
      "Unknown Cause"
  };
}
 
