export const openWebTrader = (url: string): boolean => {
  try {
    const newWindow = window.open(url, "_blank");

    if (newWindow && !newWindow.closed) {
      return true;
    }

    window.location.href = url;
    return true;
  } catch (error) {
    console.warn("Failed to open Web Trader:", error);

    try {
      window.location.assign(url);
      return true;
    } catch (assignError) {
      console.error("All methods to open Web Trader failed:", assignError);
      return false;
    }
  }
};

export const isMobileDevice = (): boolean => {
  const userAgent =
    navigator.userAgent || navigator.vendor || (window as any).opera;

  const mobilePatterns = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
    /Mobile/i,
    /Tablet/i,
  ];

  return mobilePatterns.some((pattern) => pattern.test(userAgent));
};
