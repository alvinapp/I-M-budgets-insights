export const cardBackground = (accountName: string) => {
  switch (accountName) {
    case "Co-Operative Bank":
      return "bg-coop";
    case "Absa Bank":
      return "bg-absa";
    case "Kcb":
      return "bg-kcb";
    case "Ncba Bank":
      return "bg-ncba";
    case "Stanbic Bank":
      return "bg-stanbic";
    case "M-Pesa":
      return "bg-mpesa";
    case "Equity Bank":
      return "bg-equity";
    default:
      return "bg-alvin";
  }
};
