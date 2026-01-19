import { client } from "..";

client
  .getAdsCopies({
    domain: "apple.com",
    displayLimit: 4, // Optional, default is 1000
  })
  .then((data) => {
    console.log(data);
  });

//   Title;Description;Visible Url;Url;Number of Keywords
//   Authentic Designer Goods - Clothing Shoes and Accessories;Prada Gucci Burberry Lanvin Chanel ;www.ebay.com/usr/luxeloveshop;http://www.ebay.com/usr/luxeloveshop&ved=0CHYQ0Qw;633
//   Boat For Sale on eBay;Huge selection of Boat For Sale.Free Shipping available. Buy Now!;www.ebay.com/;http://rover.ebay.com/rover/1/711-42618-2056-0/2%3Fmpre%3Dhttp%253A%252F%252Fwww.ebay.com%252Fsch%252Fi.html%253F_nkw%253Dboat%252520for%252520sale%26keyword%3Dboat%2Bfor%2Bsale%26crlp%3D35687221484_2416792%26MT_ID%3D69%26geo_id%3D10232%26adpos%3D1s4%26device%3Dc&ved=0CIABENEM;361
//   Personalize Phone Cases - ebay.com;iPhone, iPod, HTC, Samsung, Sony, LG. Prices as low as $9.98.;www.stores.ebay.com/FSC25;http://www.stores.ebay.com/FSC25&ved=0CBMQ0Qw;273
