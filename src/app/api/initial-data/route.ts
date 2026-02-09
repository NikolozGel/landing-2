import { getCountries } from "@/app/api/countries/getCountries";
import { getLanguages } from "@/app/api/languages/getLanguages";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [countriesResponse, languagesData] = await Promise.all([
      getCountries(),
      getLanguages(),
    ]);

    let detectedCountryCode = null;

    try {
      const res = await fetch("https://ipapi.co/json/");
      const locationData = await res.json();
      detectedCountryCode = locationData?.country_code || null;
    } catch (err) {
      console.warn("Geo detection failed:", err);
    }

    return NextResponse.json({
      countries: countriesResponse || [],
      languages: languagesData || [],
      detectedCountryCode,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load initial data" },
      { status: 500 }
    );
  }
}
