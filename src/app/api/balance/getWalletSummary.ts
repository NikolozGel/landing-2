import type { WalletSummaryResponse } from "@/app/api/types/wallet-summary";
import { apiFetcher } from "@/app/api/utils/api-fetcher";

export async function getWalletSummary(): Promise<{
  success: boolean;
  data?: WalletSummaryResponse;
  message?: string;
}> {
  const response = await apiFetcher<WalletSummaryResponse>(
    `traiding/api/Wallets/client-wallets-summary`,
    {
      method: "GET",
    }
  );

  return response;
}
