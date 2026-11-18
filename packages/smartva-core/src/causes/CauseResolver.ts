import { AdultCauses46 }
from "./AdultCauses46";

export function resolveAdultCause(
  causeId: number
): string {

  const cause =
    AdultCauses46.find(
      item =>
        item.id === causeId
    );

  return cause?.name ??
    "Unknown Cause";
}
