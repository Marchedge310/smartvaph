export interface RedistributionWeights {
  iso3: string;

  age: number;

  sex: number;

  questionnaireType: string;

  hce: boolean;

  weights: Record<number, number>;
}
