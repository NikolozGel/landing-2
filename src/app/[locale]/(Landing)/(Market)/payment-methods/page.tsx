import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function PaymentsTable() {
  const t = useTranslations("payments");
  const locale = useLocale();

  const rows = [
    { id: 1, methodKey: "wire" },
    { id: 2, methodKey: "ewallet" },
    { id: 3, methodKey: "visaMaster" },
    { id: 4, methodKey: "visa" },
    { id: 5, methodKey: "maestro" },
    { id: 6, methodKey: "bankTransfer" },
  ];

  return (
    <div className=" bg-black py-12 px-4 sm:px-6 lg:px-20">
      <div className="w-full mt-14">
        {/* ================= DESKTOP TABLE ================= */}
        <div className="w-full overflow-hidden">
          <table className="w-full text-sm hidden md:table">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-4 px-6 text-left">{t("table.method")}</th>
                <th className="py-4 px-6 text-center">
                  {t("table.processingTime")}
                </th>
                <th className="py-4 px-6 text-right">{t("table.fees")}</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, idx) => {
                const isGreen = idx % 2 === 1;
                return (
                  <tr
                    key={r.id}
                    className={`${
                      isGreen
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-100 text-gray-900"
                    } h-14`}
                  >
                    <td className="px-6 font-semibold">
                      {t(`methods.${r.methodKey}`)}
                    </td>
                    <td className="text-center font-medium">
                      {t("processing.instantly")}
                    </td>
                    <td className="px-6 text-right">{t("fees.depends")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* 📱 MOBILE VERSION */}
          <div className="md:hidden divide-y divide-gray-200">
            {rows.map((r, idx) => {
              const isGreen = idx % 2 === 1;

              return (
                <div
                  key={r.id}
                  className={`p-4 ${
                    isGreen
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs opacity-70">
                      {t("table.method")}
                    </span>
                    <span className="font-semibold">
                      {t(`methods.${r.methodKey}`)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs opacity-70">
                      {t("table.processingTime")}
                    </span>
                    <span className="font-medium">
                      {t("processing.instantly")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs opacity-70">
                      {t("table.fees")}
                    </span>
                    <span className="font-medium">{t("fees.depends")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden">
          {rows.map((r, idx) => {
            const isGreen = idx % 2 === 1;

            return (
              <div
                key={r.id}
                className={` p-4 ${
                  isGreen
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium opacity-70">
                      {t("table.method")}
                    </span>
                    <span className="font-semibold">
                      {t(`methods.${r.methodKey}`)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium opacity-70">
                      {t("table.processingTime")}
                    </span>
                    <span className="font-semibold">
                      {t("processing.instantly")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium opacity-70">
                      {t("table.fees")}
                    </span>
                    <span className="font-semibold">{t("fees.depends")}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link href={`/${locale}/register`} className="w-full sm:w-auto">
            <Button className="w-full border border-white sm:w-auto cursor-pointer px-8 py-4 text-white font-semibold tracking-wider hover:opacity-55 transition">
              {t("buttons.withdrawals")}
            </Button>
          </Link>

          <Link href={`/${locale}/register`} className="w-full sm:w-auto">
            <Button className="w-full border border-white sm:w-auto cursor-pointer px-8 py-4 text-white font-semibold tracking-wider hover:opacity-55 transition">
              {t("buttons.deposits")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
