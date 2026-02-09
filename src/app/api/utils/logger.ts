import { FetcherOptions } from "@/app/api/utils/api-fetcher";

export interface ApiErrorContext {
  endpoint: string;
  options: FetcherOptions;
  response?: Response;
  rawErrorData: unknown | null;
  fallbackMessage: string;
}

export const logApiError = async (ctx: ApiErrorContext) => {
  const { endpoint, options, response, rawErrorData, fallbackMessage } = ctx;
  const status = response?.status;

  const RESET = "\x1b[0m";
  const BOLD = "\x1b[1m";
  const RED = "\x1b[31m";
  const GREEN = "\x1b[32m";
  const YELLOW = "\x1b[33m";
  const BLUE = "\x1b[34m";
  const MAGENTA = "\x1b[35m";
  const CYAN = "\x1b[36m";
  const BR_RED = "\x1b[91m";

  console.log(
    `${BOLD}${BR_RED}––––––––––––––––––––––––––––––––––––––––––${RESET}`,
  );
  console.log(
    `${BOLD}${BR_RED}🚨 [API ERROR]${RESET} ${BOLD}${RED}${endpoint}${RESET} → ${BOLD}${YELLOW}${status}${RESET}`,
  );
  console.log(
    `${BOLD}${BR_RED}––––––––––––––––––––––––––––––––––––––––––${RESET}`,
  );

  console.log(`${GREEN}🔗 URL:    ${RESET}`, response?.url);
  console.log(`${CYAN}▶️ Method: ${RESET}`, options.method);
  console.log(`${MAGENTA}📤 Headers:${RESET}`, options.headers);

  if (options.body) {
    const parsed =
      typeof options.body === "string"
        ? JSON.parse(options.body)
        : options.body instanceof FormData
          ? Object.fromEntries(options.body)
          : options.body;

    console.log(
      `${YELLOW}📦 Body:\n${RESET}${JSON.stringify(parsed, null, 2)}`,
    );
    console.log(`${YELLOW}📦 Body (raw):      ${RESET}`, options.body);
  } else {
    console.log(`${YELLOW}📦 Body:            ${RESET}<empty>`);
  }

  console.log(
    `${BOLD}${YELLOW}– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –${RESET}`,
  );

  if (rawErrorData && typeof rawErrorData === "object") {
    const { detail, ...rest } = rawErrorData as any;
    console.log(`${BLUE}📥 Payload:${RESET}`, rest);

    if (detail) {
      try {
        const parsedDetail = JSON.parse(detail);
        console.log(
          `${BLUE}📥 Detail:\n${RESET}${JSON.stringify(parsedDetail, null, 2)}`,
        );
      } catch {
        console.log(`${BLUE}📥 Detail (raw):${RESET}`, detail);
      }
    }
  } else {
    console.log(`${BLUE}📥 Payload:${RESET} ${fallbackMessage}`);
  }

  console.log(`${BLUE}📥 Payload: ${RESET}`, rawErrorData ?? fallbackMessage);

  console.log(
    `${BOLD}${YELLOW}– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –${RESET}`,
  );
};
