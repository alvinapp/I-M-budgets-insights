import { Macro } from "./Macro";

export interface Category {
  id: number;
  name: string;
  macro_type: Macro;
  icon_name: string;
  extern_id: number;
  emoji: string;
}
