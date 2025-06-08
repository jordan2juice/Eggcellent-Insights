"use server";

/**
 * @fileOverview Predict egg yield based on various factors.
 *
 * predictEggYield - A functon to predict egg yield based on factors like feed type, age, and environment.
 * predictEggYieldInput - An input object for the predictEggYield function.
 * predictEggYieldOutput - An output object for the predictEggYield function.
 *
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const PreddictEggYieldInputSchema = z.object({
  historicalData: z.string().describe("Historical egg production data"),
  breed: z.string().describe("Breed of the poultry"),
  feed: z.string().describe("Type of feed used"),
  date: z.string().describe("Date for the prediction"),
});

export type PredictEggYieldInput = z.infer<typeof PreddictEggYieldInputSchema>;

const predictEggYieldOutputSchema = z.object({
  predictYield: z.number().describe("Predicted egg yield"),
  explanation: z.string().describe("Explanation of the prediction"),
});

export type PredictEggYieldOutput = z.infer<typeof predictEggYieldOutputSchema>;

async function PredictEggYield(
  input: PredictEggYieldInput
): Promise<PredictEggYieldOutput> {
  return predictEggYieldFlow(input);
}

const prompt = ai.definePrompt({
  name: "predictEggYieldPrompt",
  input: { schema: PreddictEggYieldInputSchema },
  output: { schema: predictEggYieldOutputSchema },
  prompt: `You are an expert in poultry farming. Given the historical egg production data, breed of the poultry, type of feed used, and the date for the prediction, provide an accurate prediction of egg yield along with a brief explanation.

  Using the following information, predict the egg yield for the given date:

    Historical Data: {{{historicalData}}}
    Breed: {{{breed}}}
    Feed: {{{feed}}}
    Date: {{{date}}}

    Provide a predicted egg yield and explain the factors influencing your prediction.
    Ensure that the predictedYield is a number.
    `,
});

const predictEggYieldFlow = ai.defineFlow(
  {
    name: "predictEggYieldFlow",
    inputSchema: PreddictEggYieldInputSchema,
    outputSchema: predictEggYieldOutputSchema,
  },
  async (input) => {
    const response = await prompt(input);
    return response;
  }
);
