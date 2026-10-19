/* Campaign-owned settings. preview false is the public build (no preview labels; app.js still hides any .preview-only
   element and marks html.is-live). contactForm false turns the contact form in Get Involved off: the card is hidden
   and the call and Facebook cards take its place (the three "ways to help" tiles jump to them). To turn the form on,
   set it to true and give formEndpoint a campaign-owned intake (see launch/launch-checklist.md). */
window.CAMPAIGN_CONFIG = Object.freeze({
  preview: false,
  contactForm: false,
  formEndpoint: "",
  officialDomain: "https://scottforclemson.com",
  campaignName: "Scott Allison for Clemson City Council",
  consentVersion: "draft-2026-10-10",
  phone: "+19087216664",
  facebook: "https://www.facebook.com/people/Scott-Allison-for-Clemson-City-Council/61594212573972/",
  donationUrl: ""
});
