import type { Clinic } from "../clinic";
import { alrafie } from "./alrafie";
import { dentoderm } from "./dentoderm";
import { noble } from "./noble";
import { alnarjisDental } from "./alnarjis-dental";
import { drEmanIbrahim } from "./dr-eman-ibrahim";

/**
 * Demo sites for prospects. Each one is served at /demo/<slug>.
 * To add one: copy an existing file in this folder, edit it, and register it below.
 */
export const demos: Record<string, Clinic> = {
  alrafie,
  dentoderm,
  noble,
  "alnarjis-dental": alnarjisDental,
  "dr-eman-ibrahim": drEmanIbrahim,
};
