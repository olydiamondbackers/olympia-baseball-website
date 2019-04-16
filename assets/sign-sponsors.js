function populateSignSponsors() {

  $("#sign-sponsors").empty();

  let sponsors = sponsor_info.length;
  let wholeRows = Math.floor(sponsors/6);

  let shuffledSponsorInfo = sponsor_info;
  shuffleArray(shuffledSponsorInfo);

  for (let row=0;row < wholeRows;row++) {
    writeSponsorRows(shuffledSponsorInfo, row, 6);
  }

  writeSponsorRows(shuffledSponsorInfo, wholeRows, sponsors % 6);

}

function writeSponsorRows(shuffledSponsorInfo, row, ncols) {

  let imageRow = $("<div class='row d-flex align-items-center image-row'></row>");
  $("#sign-sponsors").append(imageRow);
  let textRow = $("<div class='row'>");
  $("#sign-sponsors").append(textRow);

  for (let col=0;col < ncols;col++) {

    let colDiv = $("<div class='col-lg-2 text-center'></div>");
    imageRow.append(colDiv);
    let sponsor = shuffledSponsorInfo[6*row + col];
    let bgcolorStyle = "";
    if (sponsor.background_color !== null) {
      bgcolorStyle = " style='padding: 5px; background-color:" + sponsor.background_color + ";'";
    }
    if (sponsor.image_url) {
      colDiv.append("<img src='" + sponsor.image_url + "' class='sign-sponsor'" + bgcolorStyle + "></img>");
    }

    colDiv = $("<div class='col-lg-2 text-center'></div>");
    textRow.append(colDiv);
    colDiv.append("<p class='sign-sponsor'>" + shuffledSponsorInfo[6*row + col].name + "</p>");

  }

}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var sponsor_info = [
  {
    "name": "Capital Medical Center",
    "image_url": "https://capitalmedical.com/wp-content/uploads/2018/05/CapitalMedicalCenter_with-tag_RGB_WEB.png"
  },
  {
    "name": "Coldwell Banker",
    "image_url": "https://www.cbolympia.com/coldwellbanker_evergreen/img/19957/logo.png"
  },
  {
    "name": "FirstLight Home Care",
    "image_url": "https://www.firstlighthomecare.com/home-healthcare-olympia/wp-content/uploads/2017/05/FirstLight_logo_retina.png"
  },
  {
    "name": "Fisher Jones Family Dentistry",
    "background_color": "#124768",
    "image_url": "https://www.fisherjonesfamilydentistry.com/files/2015/01/FisherJonesLogo-Web-Banner-21.png"
  },
  {
    "name": "Fit Life",
    "background_color": "#1f1e1e",
    "image_url": "https://static.wixstatic.com/media/6a11a9_228b5d3d5caf4a22b09a427c7c7072fa~mv2.png"
  },
  {
    "name": "Greene Realty: Rhyan Smith",
    "image_url": "https://b386363e680359b5cc19-97ec1140354919029c7985d2568f0e82.ssl.cf1.rackcdn.com/assets/uploads/setting/company_header_logo/1658/401f274dbbdcd19537afc2f62b2e8052.png"
  },
  {
    "name": "Heritage Bank",
    "background_color": "#005298",
    "image_url": "https://www.heritagebanknw.com/home/diFiles/skins/default/images/heritagebank_logo_header_552x130_2x.png"
  },
  {
    "name": "Inspire Physical Therapy: Sean Sipe",
    "image_url": "https://blogsdir.imgix.net/876/files/photos/Inspire_PHT_NEW.jpg"
  },
  {
    "name": "Kapust Orthodontics",
    "image_url": "https://getyoursmileon.com/wp-content/uploads/2017/06/kapust-website-logo-final-1.png"
  },
  {
    "name": "Kiley Juergens Wealth Management LLC",
    "image_url": "http://kj-wm.com/images/logo.png"
  },
  {
    "name": "L&E Bottling",
    "image_url": "http://olympiapepsi.com/wp-content/uploads/pepsi-website-logo.png"
  },
  {
    "name": "Acme Fuel",
    "image_url": "https://www.acmefuel.com/wp-content/uploads/2018/04/acme_logo_transparent.png"
  },
  {
    "name": "Austin Smith DDS",
    "image_url": "https://www.arsmithdds.com/wp-content/uploads/sites/65/2017/03/Header-New-03-08-17.jpg"
  },
  {
    "name": "Cal Ripken Baseball",
    "image_url": "https://siplay-website-content-user.s3.amazonaws.com/Portal/2780/Content/Banners/BHYB_site-banner_01.png"
  },
  {
    "name": "Meconi's",
    "image_url": "http://www.meconissubs.com/wp-content/uploads/2013/01/meconissubslogo1-e1358799045784.png"
  },
  {
    "name": "Merrill Lynch: Dennis Bloom",
    "image_url": "https://www.local.ml.com/olympia_wa/mediahandler/media/240746/ML_Logo_Blue_170x52.png"
  },
  {
    "name": "Olympia Federal Savings",
    "image_url": "https://www.olyfed.com/images/logo.png"
  },
  {
    "name": "Reliable Electric",
    "image_url": "https://www.reliableelectric.biz/i/logo.jpg"
  },
  {
    "name": "State Farm Insurance: Bill Brown",
    "background_color": "#e71828",
    "image_url": "https://static1.st8fm.com/en_US/dxl-1x/prod/css/images/header/state-farm-logo.svg"
  },
  {
    "name": "State Farm Insurance: Kevin Hayward",
    "background_color": "#e71828",
    "image_url": "https://static1.st8fm.com/en_US/dxl-1x/prod/css/images/header/state-farm-logo.svg"
  },
  {
    "name": "State Farm Insurance: Reggie Johnson",
    "background_color": "#e71828",
    "image_url": "https://static1.st8fm.com/en_US/dxl-1x/prod/css/images/header/state-farm-logo.svg"
  },
  {
    "name": "Abbey Realty: Jami Downing",
    "background_color": "#000000",
    "image_url": "https://abbeyrealty.com/wp-content/uploads/sites/59/2019/03/abbeylogo_white2.png"
  },
  {
    "name": "All Seasons Decks"
  },
  {
    "name": "Wimberly ",
    "image_url": "https://scontent-sea1-1.cdninstagram.com/vp/c86b0589cda8e0bdcc60ee49b5b037f0/5D448EC9/t51.2885-19/s320x320/17818805_1017519751713270_8621954865976836096_a.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com"
  },
  {
    "name": "American Pump",
    "image_url": "https://static.wixstatic.com/media/f472e0_38e12bae7c3a49b8a2f5e19dc80faef6~mv2.png"
  },
  {
    "name": "Subway located on Littlerock Road",
    "image_url": "https://order.subway.com/Images/Subway/logo_small.png"
  },
  {
    "name": "L&L Hawaiian BBQ",
    "image_url": "https://www.hawaiianbarbecue.com/wp-content/themes/hawaiianbbq/assets/images/logo-ll-square-hawaii.png"
  },
  {
    "name": "Stewart Painting",
    "image_url": "http://olympiapainter.com/wp-content/uploads/2015/09/cropped-StewartPainting.png"
  },
  {
    "name": "Moss/Wall Orthodontics",
    "image_url": "https://mosswallortho.com/wp-content/uploads/2017/09/Moss-Wall-Web-Logo-2.png"
  },
  {
    "name": "J&I Power Equipment",
    "image_url": "https://published-assets.ari-build.com/Content/Published/Site/21172/images/dealer-logo.png"
  },
  {
    "name": "Town and Country Roof",
    "image_url": "http://townandcountryroofingwa.com/wp-content/themes/tc_roofing/images/logo-tcr.png"
  },
  {
    "name": "Tumwater Collision",
    "image_url": "http://tumwatercollision.com/images/tumwater_collision_logo2_x4pu.jpg"
  },
  {
    "name": "Washington Tractor",
    "background_color": "#333333",
    "image_url": "https://www.washingtontractor.com/images/Washington-Tractor-2c-WG.png"
  },
  {
    "name": "Olympia Orthopaedic Associates ",
    "image_url": "https://www.olyortho.com/sites/all/themes/olyortho/images/logo.svg"
  },
  {
    "name": "AJB Landscaping ",
    "image_url": "https://ajbservice.com/templates/ajb/images/logo-1311381448.png"
  },
  {
    "name": "Papa John's Pizza - Tumwater",
    "image_url": "https://www.papajohns.com/static-assets/ltc/img/logo-small.svg"
  }
]
;
