const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

//this is THE test
async function test() {

  const whatISearchFor = "jope";

  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //open the webpage
  await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
  console.log('\x1b[33m%s\x1b[0m',"Avasin veebilehe!");

  //get the page title and log it
  const pageTitle = await driver.getTitle();
  console.log('\x1b[33m%s\x1b[0m',"Lehekülje nimi on:", pageTitle);

  //set timeout for 10 seconds
  //await driver.manage().setTimeouts({ implicit: 10000 });

  //add item to wishlist
  await driver.manage().setTimeouts({ implicit: 10000 });
  const addToWishlist = await driver
    .findElement(
      By.xpath(
        '//*[@id="amasty-shopby-product-list"]/div[3]/ol/li[14]/div/div[3]/div/div/a'
      )
    );
    driver.executeScript('arguments[0].click();',addToWishlist);
  console.log('\x1b[33m%s\x1b[0m',"Lisasin ägedad saapad lemmikute nimekirja!");

  // open wishlist menu
  await driver.manage().setTimeouts({ implicit: 10000 });
  const openWishlistMenu = await driver.findElement(By.xpath(`//*[@id="wishlist-link"]`));
  driver.executeScript('arguments[0].click();',openWishlistMenu);
  console.log('\x1b[33m%s\x1b[0m',"Leidsin südame ja klikin sellele");

  //open my wishlist
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.findElement(By.className(`action primary go-to-wishlist`)).click();
  console.log('\x1b[33m%s\x1b[0m',"Lähen vaatan oma lemmikute nimekirja");

  //open item page
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver
    .findElement(By.className(`page hover-image hover-image-product-id-471445`))
    .click();
  console.log('\x1b[33m%s\x1b[0m',"Avan selle toote, mida osta soovin");

  //open dropdown menu to choose size
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver
    .findElement(
      By.className(
        `selectric-wrapper selectric-super-attribute-select selectric-hover selectric-open selectric-below`
      )
    )
    .click();
  console.log('\x1b[33m%s\x1b[0m',"Hakkan suurust valima");

  //choose the shoe size
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver
    .findElement(
      By.xpath(
        '//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[4]/div[1]'
      )
    )
    .click();
  console.log('\x1b[33m%s\x1b[0m',"Valisin nr 38 saapad");

  //add product to cart
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.findElement(By.id(`product-addtocart-button`)).click();
  console.log('\x1b[33m%s\x1b[0m',"Lisan need imelised saapad ostukorvi");

  //navigate to cart
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.findElement(By.className(`action showcart active`)).click();
  await driver
    .findElement(
      By.xpath('//*[@id="minicart-content-wrapper"]/div[2]/div[4]/div/a/span')
    )
    .click();
  console.log('\x1b[33m%s\x1b[0m',"Lähen oma ostukorvi vaatama");

  //increase the quantity by 1
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.findElement(By.id(`increase-cart-qty-btn-5611753`)).click();
  console.log('\x1b[33m%s\x1b[0m',"Lisan ühed saapad veel juurde");

  //remove item from cart
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver
    .findElement(
      By.xpath(`//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a/span`)
    )
    .click();
  console.log('\x1b[33m%s\x1b[0m',"Mõtlesin ümber, eemaldan need saapad ostukorvist");

  //search for "jope"
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver
    .findElement(By.id(`search`))
    .sendKeys(whatISearchFor, Key.RETURN);
  console.log('\x1b[33m%s\x1b[0m',"Otsisin parem jopesid");

  //sort search result by popularity
  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.findElement(By.css(`#sorter [value="bestsellers"]`)).click();
  console.log('\x1b[33m%s\x1b[0m',"Reastasin joped populaarsuse järgi");

}

test();
