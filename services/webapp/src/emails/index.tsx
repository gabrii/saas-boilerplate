import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import juice from 'juice';
import humps from 'humps';

import { buildEmail } from './email';
import { EmailTemplateType, EmailComponentProps } from './types';

export const renderEmail = (name: EmailTemplateType, rawData: Record<string, unknown>, lang: string) => {
  const data = humps.camelizeKeys(rawData) as EmailComponentProps;
  const email = buildEmail({ name, data, lang });

  const sheet = new ServerStyleSheet();
  const subject = renderToString(email.subject);
  const bodyHtml = renderToString(<StyleSheetManager sheet={sheet.instance}>{email.template}</StyleSheetManager>);
  const styleTags = sheet.getStyleTags();
  sheet.seal();

  const rawHtml = `<html><head><title>${name}</title></head><body>${bodyHtml}${styleTags}</body></html>`;
  const html = juice(rawHtml, { preserveFontFaces: false });
  return { subject, html };
};
