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
    "image_url": "img/sponsor-logos/capital-medical-center.png"
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
    "name": "Heritage Bank",
    "background_color": "#005298",
    "image_url": "https://www.heritagebanknw.com/home/diFiles/skins/default/images/heritagebank_logo_header_552x130_2x.png"
  },
  {
    "name": "Inspire Physical Therapy: Sean Sipe",
    "image_url": "/img/sponsor-logos/inspire.png"
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
    "image_url": "https://olympiapepsi.com/wp-content/uploads/2020/02/Logo-300x171.png"
  },
  {
    "name": "Acme Fuel",
    "image_url": "https://www.acmefuel.com/wp-content/uploads/2018/04/acme_logo_transparent.png"
  },
  {
    "name": "Austin Smith DDS",
    "background_color": "#606c79",
    "image_url": "https://www.arsmithdds.com/wp-content/uploads/2019/05/logo.png"
  },
  {
    "name": "Cal Ripken Baseball",
    "image_url": "https://siplay-website-content-user.s3.amazonaws.com/Portal/2780/Content/Banners/BHYB_site-banner_01.png"
  },
  {
    "name": "Meconi's",
    "image_url": "https://static1.squarespace.com/static/5e2c90fb863cd80036e5346b/t/5e2c91c0e2129124f01f580f/1581709760858/?format=1500w"
  },
  {
    "name": "Merrill Lynch: Dennis Bloom",
    "image_url": "https://www.local.ml.com/olympia_wa/mediahandler/media/240746/ML_Logo_Blue_170x52.png"
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
    "image_url": "/img/sponsor-logos/all-season-decks.jpg",
    "name": "All Seasons Decks"
  },
  {
    "name": "Wimberly ",
    "background_color": "#000000",
    "image_url": "/img/sponsor-logos/wimberly.png"
  },
  {
    "name": "Subway located on Littlerock Road",
    "image_url": "https://order.subway.com/Assets/RemoteOrder/img/subway-logo.PNG"
  },
  {
    "name": "L&L Hawaiian BBQ",
    "image_url": "img/sponsor-logos/l-and-l.svg"
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
    "image_url": "/img/sponsor-logos/tumwater-collision.jpeg"
  },
  {
    "name": "Washington Tractor",
    "background_color": "#333333",
    "image_url": "/img/sponsor-logos/washington-tractor.png"
  },
  {
    "name": "Olympia Orthopaedic Associates ",
    "image_url": "https://olyortho.com/wp-content/uploads/2018/03/Olympialogo-Horizontal.png"
  },
  {
    "name": "AJB Landscaping ",
    "image_url": "https://ajbservice.com/templates/ajb/images/logo-1311381448.png"
  },
  {
    "name": "Papa John's Pizza - Tumwater",
    "image_url": "https://www.papajohns.com/static-assets/ltc/img/logo-small.svg"
  },
  {
    "name": "Dr. Tom Herrick DDS",
    "image_url": "/img/sponsor-logos/Herrick.png"
  },
  {
    "name": "Vic's Pizza",
    "image_url": "https://static.wixstatic.com/media/3194d8_995df5d2a261448b952ae8c733b8a24a~mv2.png"
  },
  {
    "name": "Bayview Lumber",
    "image_url": "https://86cb8127dc14737f5057-7c0671222953158607ea93d5febd68b4.ssl.cf1.rackcdn.com/799/assets/v1/292000/292849/logo.jpg"
  },
  {
    "name": "Aurora Lasik",
    "image_url": "https://auroralasik.com/wp-content/uploads/2018/12/Aurora-LASIK-rgb-e1545425657477.png"
  },
  {
    "name": "Mortgage One Northwest",
    "image_url": "https://static.wixstatic.com/media/72f518_487f5f4947b64814a05cc3edf932540d.jpg"
  },
  {
    "name": "Greene Commercial Realty - Quint Newell",
    "image_url": "/img/sponsor-logos/Greene-Newell.png"
  },
  {
    "name": "Live Well Home Group",
    "background_color": "#698a7f",
    "image_url": "/img/sponsor-logos/LiveWell.jpg"
  },
  {
    "name": "Eye Love Olympia",
    "image_url": "https://static1.squarespace.com/static/5c3293d6af20963c94e4063d/t/5cdf2986daf0a500013c1a45/1578172660005/?format=1500w"
  },
  {
    "name": "South Sound YMCA",
    "image_url": "/img/sponsor-logos/ymca-3-logo-png-transparent.png"
  },
  {
    "name": "Print NW",
    "image_url": "/img/sponsor-logos/PrintNW_GRN.png"
  },
  {
    "name": "Genie Payroll Plus",
    "image_url": "img/sponsor-logos/genie-payroll-plus.png"
  },
  {
    "name": "Walker and Krause Dental",
    "image_url": "/img/sponsor-logos/smile-olympia.jpg"
  },
  {
    "name": "American Pump and Drilling",
    "image_url": "/img/sponsor-logos/american-pump-and-electric.png"
  },
  {
    "name": "Crossfit Olympia",
    "image_url": "/img/sponsor-logos/crossfit-olympia.jpg"
  },
  {
    "name": "Black Hills Excavating",
    "image_url": "/img/sponsor-logos/black-hills-excavating.png"
  },
  {
    "name": "Sunrise Landscaping and Tree Removal",
    "image_url": "/img/sponsor-logos/sunrise-landscaping.jpg"
  },
  {
    "name": "Humble Cow Ice Cream",
    "image_url": "/img/sponsor-logos/humble-cow.jpg"
  },
  {
    "name": "Caliber Home Loans",
    "image_url": "/img/sponsor-logos/caliber-home-loans.jpg"
  },
  {
    "name": "Olympia Federal Savings",
    "image_url": "/img/sponsor-logos/oly-fed-savings.jpeg"
  },
  {
    "name": "South Sound Driving School",
    "image_url": "/img/sponsor-logos/south-sound-driving-school.png"
  }
]
;
