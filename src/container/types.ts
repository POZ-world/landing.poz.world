import { Faqs as FAQs } from "@/types";
import { TermsOfService } from "@/types";
import { PrivacyPolicy } from "@/types";
import { ProfileFields } from "@/types";
import { LandingDirectory } from "@/types";
import { Account } from "@/types";
import { Rules } from "@/types";


export interface AppState {
  faqs: FAQs;
  terms: TermsOfService;
  privacy: PrivacyPolicy;
  fields: ProfileFields;
  landing: LandingDirectory;
  currentUser: Account;
  rules: Rules;
  appUpdated: boolean;
}

export type ConnectDecorator = (props: string[] | null, actions?: string[]) => any;

export type GetState = () => AppState;
