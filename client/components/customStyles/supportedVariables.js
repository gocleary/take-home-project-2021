import keyMirror from 'keymirror'

// Creates an object with values equal to its keys.
// colors: keyMirror({
//      navColor: null,
//      navTextColor: null })
// colors {navColor: 'navColor', navTextColor: 'navTextColor' } ->
const supportedVariables = {
  variables: {
    colors: keyMirror({
      navColor: null,
      navTextColor: null,
      navTextActiveColor: null,
      subnavColor: null,
      subnavTextColor: null,
      subnavTextActiveColor: null,
      highlightColor: null,
      linkColor: null,
      backgroundColor: null,
      borderColor: null,
      orgchartNodeStrokeColor: null,
      orgchartLeafColor: null,
      orgchartLeafStrokeColor: null,
      dangerColor: null,
      successColor: null,
      calendarLinkColor: null,
      cardBackgroundColor: null,
      awardedBadgeCardHeroColor: null,
      shoutoutCardBackgroundColor: null,
      birthdayCardBackgroundColor: null,
      upcomingBirthdayColor: null,
      workAnniversaryBackgroundColor: null,
      upcomingWorkAnniversaryColor: null,
      bannerBackgroundColor: null,
      bannerTextColor: null,
      tagBackgroundColor: null,
      likeHighlightColor: null,
      textColorPrimary: null,
      textColorSecondary: null,
      textColorMuted: null,
      btnPrimaryColor: null,
      btnMutedColor: null,
      searchBgColor: null,
    }),

    fonts: keyMirror({
      h1FontSize: null,
      h2FontSize: null,
      h3FontSize: null,
      h4FontSize: null,
      h5FontSize: null,
      h6FontSize: null,
    }),
    border: keyMirror({
      squareBorderRadius: null,
      profileImageBorderRadius: null,
      buttonBorderRadius: null,
      profileAwardedBadgeBorderWidth: null,
    }),
    fontWeight: keyMirror({
      linkFontWeight: null,
    }),
    textTransform: keyMirror({
      navTextTransform: null,
    }),
    boxShadow: keyMirror({
      navBoxShadow: null,
      cardBoxShadow: null,
    }),
    dimensions: keyMirror({
      logoHeight: null,
      logoWidth: null,
    }),
  },
}

export default supportedVariables
