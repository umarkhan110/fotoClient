import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./constants";
import messages from "./messages";

const I18nProvider = ({ children, locale }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

I18nProvider.displayName = "I18nProvider";

I18nProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES)),
};

I18nProvider.defaultProps = {
  locale: LOCALES.ENGLISH,
};

export default I18nProvider;
