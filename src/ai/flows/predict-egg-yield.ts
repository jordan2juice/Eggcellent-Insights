"use server";

/**
 * @fileOverview Predicts future egg-laying trends based on historical data.
 *
 * - predictEggLayingTrends - A function that predicts egg-laying trends.
 * - PredictEggLayingTrendsInput - The input type for the predictEggLayingTrends function.
 * - PredictEggLayingTrendsOutput - The return type for the predictEggLayingTrends function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const PredictEggLayingTrendsInputSchema = z.object({
  chickenType: z.string().describe("The type of chicken."),
  feedConsumption: z
    .string()
    .describe("The daily feed consumption for the chicken type."),
  eggCounts: z.string().describe("The daily egg counts for the chicken type."),
  daysToPredict: z
    .number()
    .describe("The number of days into the future to predict."),
});
export type PredictEggLayingTrendsInput = z.infer<
  typeof PredictEggLayingTrendsInputSchema
>;

const PredictEggLayingTrendsOutputSchema = z.object({
  predictedLayingTrends: z
    .string()
    .describe(
      "The predicted egg-laying trends for the specified number of days."
    ),
});
export type PredictEggLayingTrendsOutput = z.infer<
  typeof PredictEggLayingTrendsOutputSchema
>;

export async function predictEggLayingTrends(
  input: PredictEggLayingTrendsInput
): Promise<PredictEggLayingTrendsOutput> {
  return predictEggLayingTrendsFlow(input);
}

const prompt = ai.definePrompt({
  name: "predictEggLayingTrendsPrompt",
  input: { schema: PredictEggLayingTrendsInputSchema },
  output: { schema: PredictEggLayingTrendsOutputSchema },
  prompt: `You are an expert in predicting egg-laying trends for chickens.

  Analyze the historical data provided to predict future laying trends.  Consider the chicken type, feed consumption, and egg counts to make your prediction.

  Chicken Type: {{{chickenType}}}
  Feed Consumption: {{{feedConsumption}}}
  Egg Counts: {{{eggCounts}}}
  Days to Predict: {{{daysToPredict}}}

  Provide a detailed prediction of egg-laying trends for the next {{{daysToPredict}}} days.
  `,
});

const predictEggLayingTrendsFlow = ai.defineFlow(
  {
    name: "predictEggLayingTrendsFlow",
    inputSchema: PredictEggLayingTrendsInputSchema,
    outputSchema: PredictEggLayingTrendsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export default predictEggLayingTrendsFlow;