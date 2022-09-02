import ReactGA from "react-ga4"

export default function ga4Config(pageAction, pageCategory, pageLabel, pageValue) {
    return ReactGA.event({
      action: pageAction,
      category: pageCategory,
      label: pageLabel,
      value: pageValue,
    });
}

