import React, { FC, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDependencies, type FCWithDeps } from './container/utils';
import { Rules as RulesDto } from './types/rule';
import { Faqs as FaqsDto } from './types/faq';
import { PrivacyPolicy as PrivacyPolicyDto, TermsOfService as TermsOfServiceDto } from './types/settings';
import FAQs from './routes/faqs';
import Privacy from './routes/privacy';
import Layout from './components/layout';
import Rules from './routes/rules';
import About from './routes/about';
import Terms from './routes/terms';
import { Header, Footer } from 'src/components/navigation';
import EditProfileFields from './routes/edit-profile-fields';
import { Account } from '@poz-world/poz.world/mastodon/models/account';
import { ProfileFields } from 'src/types/profile-fields';
import * as ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorHandler from './components/errorHandler';
import ScrollToTop from './components/scrollToTop';
import { AppUpdateBanner } from './components/appUpdateBanner';
import { resetAppUpdate } from './app/reducers/appUpdates';
import { forceUpdate } from './utils/helpers/sw';
import { NotFound } from './components/notFound';

type AppProps = {
  //   fetchCurrentUser: () => void;
  //   fetchFaqs: () => void;
  //   fetchRules: () => void;
  //   fetchTermsOfService: () => void;
  //   fetchPrivacyPolicy: () => void;
  resetAppUpdate: () => void;
  //   currentUser: Account;
  appUpdated: boolean;
  //   rules: RulesDto
  //   faqs: FaqsDto
  //   termsOfService: TermsOfServiceDto;
  //   privacyPolicy: PrivacyPolicyDto;
  //   profileFields: ProfileFields
}

const appProps: AppProps = { appUpdated: false, resetAppUpdate }

function App({ appUpdated, resetAppUpdate }: AppProps) {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<About />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/profile' element={<EditProfileFields />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <AppUpdateBanner isOpen={appUpdated} toggle={resetAppUpdate} forceUpdate={forceUpdate} />
    </>
  )
}

export default function AppWithDeps() {
  return <App {...appProps} />
}