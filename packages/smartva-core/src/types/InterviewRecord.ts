import type { ModuleType } from "./ModuleType";

export interface InterviewRecord {
  id: string;

  module: ModuleType;

  answers: Record<string, unknown>;
}
