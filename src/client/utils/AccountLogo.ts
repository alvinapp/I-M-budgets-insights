export const accountLogo = (accountName: string) => {
  switch (accountName) {
    case "Co-Operative Bank":
      return "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/coop-bank-logo.jpg";
    case "Absa Bank":
      return "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/absa-bank-icon.png";
    case "Kcb Bank":
      return "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/kcb-icon.png";
    case "Ncba Bank":
      return "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/ncba-icon.jpeg";
    case "Stanbic Bank":
      return "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/stanbic-bank-icon.png";
    case "M-Pesa":
      return "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/mpesa-icon.png";
    case "Equity Bank":
      return "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/equity-bank-icon.png";
    default:
      return "";
  }
};
