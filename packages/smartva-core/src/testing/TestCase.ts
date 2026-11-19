export interface TestCase {

  name: string;

  symptoms:
    Record<string, boolean>;

  expectedCauseId?:
    number;
}
