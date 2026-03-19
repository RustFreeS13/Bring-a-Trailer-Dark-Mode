const style = document.createElement("style");
style.textContent = `

/* ===== GLOBAL ===== */
html, body {
  background-color: #0f1115 !important;
  color: #e6e6e6 !important;
}

/* ===== HEADER (fix your white bar issue) ===== */
.site-header,
.site-header * {
  background-color: #0f1115 !important;
  color: #e6e6e6 !important;
  border-color: #222 !important;
}

/* top nav bar */
.navbar,
.top-bar {
  background-color: #0f1115 !important;
}

/* ===== MAIN CONTENT ===== */
body,
.content-main,
#site-header-bar-secondary,
.page-content,
.site-footer-top,
.listing-card.featured-listing-card,
.listing-sticky,
.listings-container,
.container {
  background-color: #0f1115 !important;
}

/* === MODELS SCROLL THINGY === */
.post-type-model-bat-models .filer-wrap.listing-sticky-fixed {
  background-color: #0f1115 !important;
}	

/* ===HEADER ANNOUNCEMENT=== */
.header-announcement {
  background-color: #1d2129 !important;
}

/* ===HEADER DROP DOWN=== */
#site-header-menu-secondary>li:focus-within>.sub-menu,
#site-header-menu-secondary>li:hover>.sub-menu,
.listings-upcoming-button,
  .search-bar ul.search-bar-results  {
    background: #151920 !important;
}

/* === FEATURED LISTING CONTENT ===*/
.featured-listing-content {
    background: #653a3a5c;
}

/* === AUCTIONS HEADERS === */
.auctions-header {
    background: #ad4e4e;
}

/* === MY ACCOUNT NOTIFICATIONS === */
.gfield_description,
.validation_message,
label {
  color: #ffffff;
}

.control-group-instructions {
  color: #cccccc;
}

/* === CALENDAR === */
.tribe-common--breakpoint-medium.tribe-common .tribe-common-h4,
.bids-container h2 {
    background-color: #ad4747;
}
.tribe-common .tribe-common-c-btn-border-small,
.tribe-common a.tribe-common-c-btn-border-small {
    background-color: #f96e6e;
}

/* ===== POST TITLES ===== */
.post-title-link, 
h1, h2, h3, h4, 
.listing-title, .listing-card, .post-title, 
.post-header__title, .title, .title a, 
.card-title, .section-title {
  color: #ffffff !important;
  text-shadow: none !important;
  opacity: 1 !important;
}


/* ===LISTING STATS STRONG - USD/EXHANGE RATES=== */
.listing-stats strong {
  color: #ffffff !important;
}

/* ===LISTING STATS VALUE - STUFF AFTER ABOVE=== */
td.listing-stats-value {
  color: #f9f9f9 !important;
}

/* ===Stuff Under Bid - CURRENT BID, TIME LEFT, ENDS IN=== */
td.listing-stats-label {
  color: #c22b25 !important;
}

/* ===BID COLOR BACKGROUND=== */
.comment-data.bat-bid-canceled .comment-text,
.comment-data.bat-bid-reserve .comment-text,
.comment-data.bat-bid .comment-text,
.comment-data.bat-rnm-accepted .comment-text {
    background-color: #518d6d !important;
    color: #000000 !important;
    font-weight: 700 !important;
    border: 1px solid #000000 !important;
}

/*=== Highly Rated Commenters Background lol ===*/
.comment-data.ckrating_highly_rated .comment-actions,
.comment-data.ckrating_highly_rated .comment-text,
.comment-data.ckrating_highly_rated .comment-user {
    background-color: rgba(26, 30, 38, 0.4) !important;
}

/*=== SELLER COMMENT ===*/
.comment-data.bat_seller_comment .comment-actions,
.comment-data.bat_seller_comment .comment-text,
.comment-data.bat_seller_comment .comment-user {
    background: #2e2e3d;
}

/*===Verify Email to comment AND Bid On This Listing Background And All The Other Blobs That Are Light Dark Blue lol===*/
.header-announcement-desktop,
.item-tag-currency,
.shipping-calculator,
.listing-action,
#listing-bid-container,
.essentials,
.featured-listings-home,
.widget.bat-theme-widget-constant-contact,
.constant-contact-form,
.watchlist .auction-links,
.listing-shipping-disabled-container {
    background-color: #151920 !important;
}

/* === BUTTONS SUBMIT VEHICLE === */
.submit-prompt-callout,
.submit-prompt-callout.partners-callout a.button,
.bat-card-background {
   background-color: #5aabff2e !important;
}

/*=== NO RESERVE ===*/
.item-tags .item-tag,
.alert.alert-info,
.dashboard .submit-faq {
    background: #5aabff;
    border: 1px solid #bccadb;
}

/*=== UNDER PIC BUTTONS ===*/
.column-groups .group-item-wrap>.group-item button,
.listing-card .item-bidding {
  background: #151920 !important;  
    color: #ffffff !important;      
    border: 1px solid #ffffff !important; 
    background-image: none !important;    
    box-shadow: none !important;        
}

/* ===The White Buttons=== */
.button-white {
    color: #FFFFFF !important;  
    background-color: #C22B25 !important;
    border: 1px solid #FFFFFF !important;
}

/* === Shipping Quote === */
.listing-shipping-container label {
  color: #ffffff;
}

/* ===Listing Toolbar Graph=== */
.listings-toolbar, .toolbar-dropdown, .toolbar-filters-desktop { 
   background-color: #384254 !important;
}	

/* === HEADER DROPDOWN SELECT === */
  #site-header-menu-main .sub-menu li:focus-within a,
  #site-header-menu-main .sub-menu li:hover a {
    background: #151920;
  }
    #site-header-menu-main .sub-menu,
  .search-bar li.search-bar-result a.active-result .search-bar-result-inner	{
    background: #29303e;
  }

/* ===Listings Toolbar Dropdown=== */
    .dropdown-option:hover,
    .list-option.checked,
    .list-option:hover,
  #site-header-menu-secondary .sub-menu li:focus-within > a,
  #site-header-menu-secondary .sub-menu li > a:hover	{
   background-color: #29303e !important;
}	
.listings-toolbar .scroll-box .overflow-arrow-right, 
.listings-toolbar .scroll-box .overflow-arrow-left {
    background: linear-gradient(270deg, #384254 70%, hsla(0, 0%, 100%, 0));
}
.listings-toolbar .toolbar-dropdown .dropdown-title:after {
    background: linear-gradient(270deg, #384254 75%, hsla(0, 0%, 100%, 0));
}


/* ===When Hovering Over Other Cars=== */
.widget .current-auction-data-holder {
    background-color: hsl(0, 0%, 37.95%) !important; /* solid color fallback */
    background-color: hsla(0, 0%, 37.95%, 0.82) !important; /* color with opacity */
    bottom: 0;
    color: #ffffff;
    display: none;
}

/* ===BAT History=== */
.history .content .items .item.current {
    background: #151920 !important;
}

/* ===Listing Gradient=== */
.widget .current-auction.current-auction-featured.current-auction-break .current-auction-load-all {
    background: linear-gradient(hsla(0, 0%, 26%, 0), #0f1115) !important;
}



/* ===== TEXT ===== */
h1, h2, h3, h4, h5, p, span {
  color: #e6e6e6 !important;
}

/* ===== LINKS ===== */
a {
  color: #f9f9f9 !important;
}


`;
document.head.appendChild(style);