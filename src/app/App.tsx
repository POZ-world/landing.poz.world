// import React, { FC, useEffect, useRef } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useDependencies, type FCWithDeps } from '../container/utils';
// import { Rules as RulesDto } from '../types/rule';
// import { Faqs as FaqsDto } from '../types/faq';
// import { PrivacyPolicy as PrivacyPolicyDto, TermsOfService as TermsOfServiceDto } from '../types/settings';
// import FAQs from '../routes/faqs';
// import Privacy from '../routes/privacy';
// import Layout from '../components/layout';
// import Rules from '../routes/rules';
// import About from '../routes/about';
// import Terms from '../routes/terms';
// import { Header, Footer } from 'src/components/navigation';
// import EditProfileFields from '../routes/edit-profile-fields';
// import { Account } from '@poz-world/poz.world/mastodon/models/account';
// import { ProfileFields } from 'src/types/profile-fields';

// type AppProps = {
//   fetchCurrentUser: () => void;
//   fetchFaqs: () => void;
//   fetchRules: () => void;
//   fetchTermsOfService: () => void;
//   fetchPrivacyPolicy: () => void;
//   resetAppUpdate: () => void;
//   currentUser: Account;
//   appUpdated: boolean;
//   rules: RulesDto
//   faqs: FaqsDto
//   termsOfService: TermsOfServiceDto;
//   privacyPolicy: PrivacyPolicyDto;
//   profileFields: ProfileFields
// }

// type AppDeps = {
//   FAQs: FC;
//   Rules: FC;
//   Terms: FC;
//   Privacy: FC;
//   ProfileFields: FC;
// }

// const App: FCWithDeps<AppProps, AppDeps> = (
//   { fetchCurrentUser, fetchFaqs, fetchRules, fetchTermsOfService, fetchPrivacyPolicy, fetchProfileFields, resetAppUpdate, currentUser, appUpdated, rules, faqs, termsOfService, privacyPolicy, profileFields }
// ) => {
//   const {
//     FAQs,
//     Rules,
//     Terms,
//     Privacy,
//     ProfileFields 
// } = useDependencies(App);

//   const _currentUser = useRef(currentUser);
//   const _faqs = useRef(faqs);
//   const _rules = useRef(rules);
//   const _terms = useRef(termsOfService);
//   const _privacy = useRef(privacyPolicy);
//   const _profileFields = useRef()

//   useEffect(() => {
//     if(Object.keys())
//   })
// }