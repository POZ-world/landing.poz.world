import './App.css';
import FAQs from './routes/faqs';
import Privacy from './routes/privacy';
import Layout from './components/layout';
import Rules from './routes/rules';
import About from './routes/about';
import Terms from './routes/terms';
import EditProfileFields from './routes/edit-profile-fields';
import { Route, Routes } from 'react-router-dom';
import { AppUpdateBanner } from './components/appUpdateBanner';
import { resetAppUpdate } from './app/reducers/appUpdates';
import { forceUpdate } from './utils/helpers/sw';
import { NotFound } from './components/notFound';

export declare interface AppProps {
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